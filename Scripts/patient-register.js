let nameRegex  ="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
let passwordRegex =  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

let nameError   = document.querySelector("#nameError")
let phoneError   = document.querySelector("#phoneError")
let passwordError = document.querySelector("#passwordError")
let pName       = document.querySelector("#pname")
let pNumber      = document.querySelector("#pnumber")
let pPassword  = document.querySelector("#ppassword")

function validateName(){
  let name = pName.value;
   if(name.length==0 ||!name.match(nameRegex)){
      nameError.innerHTML = "Your Full Name is Required"
      pName.classList.remove("success");
      pName.classList.add("error");
    }else{
      nameError.innerHTML = ""
      pName.classList.remove("error");
      pName.classList.add("success");
      return true;
    }
 
}

function validatePhone(){
    let phone = pNumber.value;
     if(phone.length<10 || isNaN(phone) || phone.length>=11 ){
        phoneError.innerHTML = "Your Full phone is Required"
        pNumber.classList.remove("success");
        pNumber.classList.add("error");
      }else{
        phoneError.innerHTML = ""
        pNumber.classList.remove("error");
        pNumber.classList.add("success");
        return true;
      }
   
  }

  function validatePassword(){
    let password = pPassword.value;
     if(password.length==0 || password.length<8){
        passwordError.innerHTML = "Your Password contain atleast 8 Characters"
        pPassword.classList.remove("success");
        pPassword.classList.add("error");
      }else{
        passwordError.innerHTML = ""
        pPassword.classList.remove("error");
        pPassword.classList.add("success");
        return true;
      }
   
  }

  function  validateRegister(){
    if(!validateName()||!validatePhone()||!validatePassword()){
      return false;
    }
    
  }
  