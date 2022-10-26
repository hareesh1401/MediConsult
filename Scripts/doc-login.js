let pNumber      = document.querySelector("#pnumber")
let pPassword  = document.querySelector("#drpassword")
let passwordError = document.querySelector("#passwordError")


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
  function  validateLogin(){
    if(!validatePhone()||!validatePassword()){
      return false;
    }
    
  }