let ids=['1234567890@upi','razak@okicici','mohamed@cnrb']
window.onload=function(){
    bundle()
}
function bundle(){
    var area = document.querySelector(".upis")
    var field = document.querySelector("#specific")
    ids.forEach(function(each){
        var item = document.createElement("input")
        var label = document.createElement("p")
        label.textContent = each
        item.type="radio"
        item.name="beneficiary"
        item.value=each

        item.addEventListener("click",function(){
            field.value = this.value
        })

        // hierarchy
        label.prepend(item)
        area.appendChild(label)
    })

}