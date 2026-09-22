const userIn = require('prompt-sync');
const inObj = userIn()// create instance for userIn>> prompt-sync
console.log("WARM WELCOME TO STANDLONE JS Execution ")
let items = [
    "Puma Casual Shoe","Nike Sports Shoe",9800,
    false,"Transcend 256GB Pendrive"
]
const viewAll = () => {
    items.forEach((each)=>{
        console.log(each)
    })
}
const viewOne = (pos) => {
    console.log(items[pos])
}
viewOne(inObj("enter the position to fetch "))