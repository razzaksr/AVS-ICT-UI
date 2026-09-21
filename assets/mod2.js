let modify = ()=>{
    var view = document.querySelector("div")
    loans.forEach((each,ind)=>{
        var curr = document.createElement("ol")
        curr.innerHTML=`<li>${each.loanNo}</li><li>${each.loanRoi-=(0.100)}</li><li>${each.loanEnds}</li>`
        view.appendChild(curr)
    })
}