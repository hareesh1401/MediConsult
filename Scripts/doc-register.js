let nameRegex  ="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
let passwordRegex =  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

let nameError   = document.querySelector("#nameError")
let phoneError   = document.querySelector("#phoneError")
let passwordError = document.querySelector("#passwordError")
let dName       = document.querySelector("#dname")
let dPhone      = document.querySelector("#pnumber")
let drpassword  = document.querySelector("#drpassword")

function validateName(){
  let name = dName.value;
   if(name.length==0 ||!name.match(nameRegex)){
      nameError.innerHTML = "Your Full Name is Required"
      dName.classList.remove("success");
      dName.classList.add("error");
    }else{
      nameError.innerHTML = ""
      dName.classList.remove("error");
      dName.classList.add("success");
      return true;
    }
 
}

function validatePhone(){
    let phone = dPhone.value;
     if(phone.length<10 || isNaN(phone) || phone.length>=11 ){
        phoneError.innerHTML = "Your Full phone is Required"
        dPhone.classList.remove("success");
        dPhone.classList.add("error");
      }else{
        phoneError.innerHTML = ""
        dPhone.classList.remove("error");
        dPhone.classList.add("success");
        return true;
      }
   
  }

  function validatePassword(){
    let password = drpassword.value;
     if(password.length==0 || password.length<8){
        passwordError.innerHTML = "Your Password contain atleast 8 Characters"
        drpassword.classList.remove("success");
        drpassword.classList.add("error");
      }else{
        passwordError.innerHTML = ""
        drpassword.classList.remove("error");
        drpassword.classList.add("success");
        return true;
      }
   
  }

  function  validateRegister(){
    if(!validateName()||!validatePhone()||!validatePassword()){
      return false;
    }
    
  }