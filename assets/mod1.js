let loans = [
    {"loanNo":7654567844,"loanRoi":25.6,"loanEnds":"2026-12-10"},
    {"loanNo":98765456784,"loanRoi":12.4,"loanEnds":"2026-10-11"},
    {"loanNo":345676546734,"loanRoi":7.9,"loanEnds":"2025-07-20"},
    {"loanNo":56789876567,"loanRoi":16.3,"loanEnds":"2026-11-10"}
]

// CRUD
const highRates = () => {
    var view = document.querySelector("div")
    loans.forEach((each,ind)=>{
        if(each.loanRoi>=15){
            var curr = document.createElement("ol")
            curr.innerHTML=`<li>${each.loanNo}</li><li>${each.loanRoi}</li><li>${each.loanEnds}</li>`
            view.appendChild(curr)
        }
    })
}