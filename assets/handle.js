function verify(){
    var custName = document.forms["loan"]["customer"].value
    var aadhaar = document.forms["loan"]["aadhaar"].value
    var pan = document.forms["loan"]["pan"].value
    var email = document.forms["loan"]["email"].value
    var errName = document.querySelector("#customerErr")
    var errAadhaar = document.querySelector("#aadhaarErr")
    var errPan = document.querySelector("#panErr")
    var errEmail = document.querySelector("#emailErr")

    var flag=true

    try{
        if(!isNaN(custName)){
            flag=false
            throw "Invalid Customer Name"
        }
    }catch(err){
        errName.innerHTML = err
    }
    try{
        if(isNaN(aadhaar)||aadhaar.length==0){
            flag=false
            throw "Invalid Aadhaar Number"
        }
    }catch(err){
        errAadhaar.innerHTML = err
    }
    try{
        if(!isNaN(pan.slice(0,5))||isNaN(pan.slice(5,9))||!isNaN(pan.slice(9,10))){
            flag=false
            throw "Invalid Pan Number"
        }
    }catch(err){
        errPan.innerHTML = err
    }
    try{
        if(!email.includes("@")){
            flag=false
            throw "Invalid Email ID"
        }
    }catch(err){
        errEmail.innerHTML = err
    }
    return flag;
}