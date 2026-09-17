window.onload = myload
function myload(){
    var rows = document.querySelector(".history")
    rows.addEventListener("mouseenter",function(){
        this.style.backgroundColor = "blue"
        this.style.color = "white"
        this.style.fontSize = "30px"
        this.style.border="20px solid green"
        this.style.boxShadow = "10px 10px 10px grey"
        console.log("mouse enter event occured")
    })
    rows.addEventListener("mouseleave",function(){
        this.style.backgroundColor = "black"
        this.style.color = "white"
        this.style.fontSize = "15px"
        console.log("mouse exit event occured")
    })
}