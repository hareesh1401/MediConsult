// VALIDATION
let nameRegex  ="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
let emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

let nameError   = document.querySelector("#nameError")
let emailError  = document.querySelector("#emailError")
let messegeError= document.querySelector("#messegeError")
let cName       = document.querySelector("#Cname")
let cMail       = document.querySelector("#Cmail")
let cMessege    = document.querySelector("#Cmessege")

function validateName(){
  let name = cName.value;
   if(name.length==0 ||!name.match(nameRegex)){
      nameError.innerHTML = "Your Full Name is Required"
      cName.classList.remove("success");
      cName.classList.add("error");
    }else{
      nameError.innerHTML = ""
      cName.classList.remove("error");
      cName.classList.add("success");
      return true;
    }
 
}

function validateEmail(){
  let email = cMail.value;
  
  if(email.length==0){
    emailError.innerHTML = "Your Full Email is Required"
    cMail.classList.remove("success");
    cMail.classList.add("error");
    return false
  }if(!email.match(emailRegex)){
    emailError.innerHTML = "Your Full Email is Required"
    cMail.classList.remove("success");
    cMail.classList.add("error");
    return false
  }
  else{
    emailError.innerHTML = ""
    cMail.classList.remove("error");
    cMail.classList.add("success");
    return true;
  }
}

function validateMessege(){
  let messege = cMessege.value;  
  if(messege.length==0){
    messegeError.innerHTML = "Your Full Name is Required"
    cMessege.classList.remove("success");
    cMessege.classList.add("error");
    return false
  }
  else{
      messegeError.innerHTML = ""
     cMessege.classList.remove("error");
     cMessege.classList.add("success");
     return true;
  }
}

function validateContact(){
  if(!validateName()||!validateEmail()||!validateMessege()){
    return false;
  }
  
}