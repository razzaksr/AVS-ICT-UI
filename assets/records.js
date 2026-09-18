// temp memory
let companies = [
    // {
    //     "name":"Amazon",
    //     "role":"Junior Developer",
    //     "visit":"2025-12-01",
    //     "basic":25.8,
    //     "count":2,
    //     "prerequisite":"Java/Python/Java Script"
    // },
    // {
    //     "name":"Deloite",
    //     "role":"Software Developer Intern",
    //     "visit":"2026-11-11",
    //     "basic":15.8,
    //     "count":0,
    //     "prerequisite":"Java"
    // }
]
window.onload = function(){
    // localStorage.setItem("avsconnect",JSON.stringify(companies))
    populate()
    document.querySelector("#modify").addEventListener("click",modifying)
    document.querySelector("#datewise").addEventListener("change",filterByDate)
    document.querySelector("#delete").addEventListener("click",deletion)
}
function deletion(){
    companies = JSON.parse(localStorage.getItem("avsconnect"))
    var currentCompany = document.querySelector("#company").value
    companies = companies.filter(function(each){
        return each.name!=currentCompany
    })
    localStorage.setItem("avsconnect",JSON.stringify(companies))
    populate()
}
function populate(){
    // copy perm avsconnect to temp companies
    companies = JSON.parse(localStorage.getItem("avsconnect"))
    var viewPort = document.querySelector(".grid")
    viewPort.innerHTML=""
    companies.forEach(function(company){
        var item = document.createElement("div")
        item.id = "techie"
        item.addEventListener("click",function(){
            document.querySelector("#company").value=company.name
            document.querySelector("#company").setAttribute("readonly","true")
            document.querySelector("#count").value = company.count
            document.querySelector("#role").value = company.role
            document.querySelector("#salary").value = company.basic
            document.querySelector("#skill").value = company.prerequisite
            document.querySelector("#visit").value = company.visit
        })
        item.innerHTML = `<h1>${company.name}</h1><h2>${company.visit}</h2><h2>${company.basic}</h2>`
        viewPort.appendChild(item)
    })
}
function modifying(){
    // read 
    companies = JSON.parse(localStorage.getItem("avsconnect"))
    var name = document.querySelector("#company")
    var count = document.querySelector("#count")
    var role = document.querySelector("#role")
    var salary = document.querySelector("#salary")
    var skill = document.querySelector("#skill")
    var visit = document.querySelector("#visit")
    var current = {
        "name":name.value,
        "role":role.value,
        "visit":new Date(visit.value).toISOString().split("T")[0],
        "basic":salary.value,
        "count":count.value,
        "prerequisite":skill.value
    }
    if(name.hasAttribute("readonly")){
        // edit
        var index = companies.findIndex(function(each){
            return each.name==name.value
        })
        companies[index] = current
    }else{
        // new One
        companies.push(current)
    }
    // store
    localStorage.setItem("avsconnect",JSON.stringify(companies))
    populate()
}
function filterByDate(){
    if(this.checked){
        companies = JSON.parse(localStorage.getItem("avsconnect"))
        var viewPort = document.querySelector(".grid")
        viewPort.innerHTML=""
        companies.forEach(function(company){
            console.log(company.visit+" "+new Date().toISOString().split("T")[0])
            if(company.visit>=new Date().toISOString().split("T")[0]){
                var item = document.createElement("div")
                item.id = "techie"
                item.addEventListener("click",function(){
                    document.querySelector("#company").value=company.name
                    document.querySelector("#company").setAttribute("readonly","true")
                    document.querySelector("#count").value = company.count
                    document.querySelector("#role").value = company.role
                    document.querySelector("#salary").value = company.basic
                    document.querySelector("#skill").value = company.prerequisite
                    document.querySelector("#visit").value = company.visit
                })
                item.innerHTML = `<h1>${company.name}</h1><h2>${company.visit}</h2><h2>${company.basic}</h2>`
                viewPort.appendChild(item)
            }
        })
    }
    else populate()
}