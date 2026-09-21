function verify(){
    var custName = document.forms["loan"]["customer"].value
    var aadhaar = document.forms["loan"]["aadhaar"].value
    var pan = document.forms["loan"]["pan"].value
    var email = document.forms["loan"]["email"].value
    var pass = document.forms["loan"]["pass"].value
    var errName = document.querySelector("#customerErr")
    var errAadhaar = document.querySelector("#aadhaarErr")
    var errPan = document.querySelector("#panErr")
    var errEmail = document.querySelector("#emailErr")
    var errPass = document.querySelector("#passErr")

    // reset
    errName.innerHTML=""
    errAadhaar.innerHTML=""
    errPan.innerHTML=""
    errEmail.innerHTML=""
    errPass.innerHTML=""

    var flag=true

    try{
        // if(!isNaN(custName)){
        if(!(/^[A-Za-z ]{3,50}$/).test(custName)){
            flag=false
            throw "Invalid Customer Name"
        }
    }catch(err){
        errName.innerHTML = err
    }
    try{
        if(!(/^[0-9]{12}$/).test(aadhaar)){
            flag=false
            throw "Invalid Aadhaar Number"
        }
    }catch(err){
        errAadhaar.innerHTML = err
    }
    try{
        if(!(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/).test(pan)){
            flag=false
            throw "Invalid Pan Number"
        }
    }catch(err){
        errPan.innerHTML = err
    }
    try{
        // userid@dns.domain
        // razaksrmd@gmail.com
        if(!(/^[a-z][a-z0-9._]{2,12}@[a-z]{3,15}\.[a-z]{2,5}$/).test(email)){
            flag=false
            throw "Invalid Email ID"
        }
    }catch(err){
        errEmail.innerHTML = err
    }
    try{
        if(!(/^(?=.*[@#$!&%])[A-Z][A-Za-z0-9@#$!&%]{8,}$/).test(pass)){
            flag=false
            throw "Invalid Password"
        }
    }catch(err){
        errPass.innerHTML = err
    }

    return flag;
}