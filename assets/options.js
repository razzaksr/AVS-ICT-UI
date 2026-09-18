// temp memory, will be flushed every refresh, keep values as per initialization below
let mySkills = ["DSA","Python","Angular","React","Next","Vite","Vue","Spring","Entity","Laravel","Flutter","ActiveMQ"]
let position = -1
window.onload = function(){
    collect()
    document.querySelector("#save").addEventListener("click",insert)
    document.querySelector("#update").addEventListener("click",update)
    document.querySelector("#remove").addEventListener("click",erase)
    document.querySelector("#short").addEventListener("click",browse)
    document.querySelector("#short").addEventListener("dblclick",function(){
        window.location.reload()
    })
}
function collect(){
    var dropDown = document.querySelector("select")
    dropDown.innerHTML=""// reset
    // forEach function used to iterate from arry/list object 
    // forEach(function(each value in array))
    mySkills.forEach(function(avs){
        var item = document.createElement("option")
        item.textContent = avs
        dropDown.appendChild(item)
    })
    dropDown.addEventListener("change",function(){
        var box = document.querySelector("input")
        box.value = this.value
        position = mySkills.findIndex(function(val){
            return val==box.value
        })
    })
}
function insert(){
    // add new element into list
    mySkills.push(document.querySelector("input").value)
    collect()
}
function update(){
    mySkills[position] = document.querySelector("input").value
    collect()
}
function erase(){
    mySkills.splice(position,1)
    collect()
}
function browse(){
    var pre = document.querySelector("input").value
    mySkills = mySkills.filter(function(avs,ind){
        return avs.startsWith(pre)
    })
    collect()
}