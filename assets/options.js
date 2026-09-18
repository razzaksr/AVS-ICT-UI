let mySkills = ["DSA","Python"]
window.onload = function(){
    collect()
}
function collect(){
    var dropDown = document.querySelector("select")
    // forEach function used to iterate from arry/list object 
    // forEach(function(each value in array))
    mySkills.forEach(function(avs){
        var item = document.createElement("option")
        item.textContent = avs
        dropDown.appendChild(item)
    })
    dropDown.addEventListener("change",function(){
        document.querySelector("input").value = this.value
    })
}