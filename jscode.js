//type only alphbets
function isAlphabet(evt) {
  var iKeyCode = (evt.which) ? evt.which : evt.keyCode
  if (iKeyCode != 46 && iKeyCode > 32 && (iKeyCode < 65 || iKeyCode > 90) && (iKeyCode < 97 || iKeyCode > 122))
      return false;

  return true;
} 

  //type only numbers
  function isNumber(evt) {
    
        document.getElementById("correct").style.display = "none";
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
        
    return true;
}    
  function charCheck(){
    var name=document.getElementById('fname').value;
       if(name.length<8){
        document.getElementById("weak").style.display = "flex";
        document.getElementById("strong").style.display = "none";   
        }
        else if(name.length==8){
          document.getElementById("weak").style.display = "none";
          document.getElementById("strong").style.display = "flex";
              
          }
  }


//max 10 digits
function check()
{
    var pass1 = document.getElementById('fnum');
    var goodColor = "green";
    var badColor = "red";

    if(pass1.value.length<10)
    {
        pass1.style.color = badColor; 
    }
    else{
        pass1.style.color = goodColor;
        }
}


 //Password Character check 
 function checkChar(){
         var myInput = document.getElementById("psw");
         var newPassword = myInput.value;
         var minNumberofChars = 2;
         var maxNumberofChars = 10;
         var regularExpression  = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/;
        // var regularExpression = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_+=]).{4,})+$/;  
         
         if(newPassword.length < minNumberofChars && newPassword.length > maxNumberofChars){
          document.getElementById("weak1").style.display = "none";
          document.getElementById("strong1").style.display = "none";

             return true;
         }
         if(!regularExpression.test(newPassword)) {
               document.getElementById("weak1").style.display = "flex";
               document.getElementById("strong1").style.display = "none";
         }
         else{
          document.getElementById("strong1").style.display = "flex";
          document.getElementById("weak1").style.display = "none";
         }
         
      }

    

//Check password and confirm password
function checkPass(){
    var name1=document.getElementById('fname').value;
    var email1=document.getElementById('email').value;
    var num1=document.getElementById('fnum').value;
    var pass1=document.getElementById('psw').value;
    var pass2=document.getElementById('cpsw').value;
    var regularExpression  = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/;

    //password checking
    // if(name1==""){
    //   alert("Fill UserName");
    //   document.getElementById("fname").focus();
    // }
    // else if(email1==""){
    //   alert("Fill EmailID");
    //   document.getElementById("email").focus();
    // }
    // else if(num1==""){
    //   alert("Fill Mobile Number");
    //   document.getElementById("fnum").focus();
    // }
    // else if(pass1==""){
    //   alert("Fill Password");
    //   document.getElementById("psw").focus();     
    // }
    // else if(pass1.length<8){
    //   alert("Maximum 8 characters Required");
    //   document.getElementById("psw").focus();     
    // }
    // else if(!regularExpression.test(pass1)){
    //   alert("Given 1 Special Char, Number and Upper Case Letter")
    //   document.getElementById("psw").focus();
    // }
    // else if(pass2==""){
    //   alert("Fill Confirm Password");
    //   document.getElementById("cpsw").focus();
    // }
    // else if(pass1!==pass2){
    //   alert("Wrong Password");
    //   document.getElementById("cpsw").focus();
    // }
    // else{
    //   alert("Successfully Submited");
    //   document.getElementById("myForm").reset();
    //   document.getElementById("strong").style.display = "none";
    //   document.getElementById("weak").style.display = "none";
    //   document.getElementById("correct").style.display = "none";
    //   document.getElementById("error").style.display = "none";
    //   document.getElementById("fnum").style.background = "white";
    // }
    switch(true){
      case (name1==""):
        alert("Fill UserName");
        document.getElementById("fname").focus();
        break;
      case (email1==""):
        alert("Fill EmailID");
        document.getElementById("email").focus();
        break;
      case (num1==""):
        alert("Fill Mobile Number");
        document.getElementById("fnum").focus();
        break;
      case (pass1==""):
        alert("Fill Password");
        document.getElementById("psw").focus();     
        break;
      case (pass1.length<8):
        alert("Maximum 8 characters Required");
        document.getElementById("psw").focus();     
        break;
      case (!regularExpression.test(pass1)):
        alert("Given 1 Special Char, Number and Upper Case Letter")
        document.getElementById("psw").focus();
        break;
      case (pass2==""):
        alert("Fill Confirm Password");
        document.getElementById("cpsw").focus();
        break;
      case (pass1!==pass2):
        alert("Wrong Password");
        document.getElementById("cpsw").focus();
        break;
      default:
        alert("Successfully Submited");
        document.getElementById("myForm").reset();
        document.getElementById("strong").style.display = "none";
        document.getElementById("weak").style.display = "none";
        document.getElementById("strong1").style.display = "none";
        document.getElementById("weak1").style.display = "none";
        document.getElementById("correct").style.display = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("fnum").style.background = "white";
    }
 }

function hide(){
      document.getElementById("strong").style.display = "none";
      document.getElementById("weak").style.display = "none";
      document.getElementById("correct").style.display = "none";
      document.getElementById("error").style.display = "none";
      document.getElementById("strong1").style.display = "none";
      document.getElementById("weak1").style.display = "none";
}

function emailCheck(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(email.value.match(mailformat))
  {
   document.getElementById("correct").style.display = "flex";
   document.getElementById("error").style.display = "none";
  }
  else
  {
    document.getElementById("error").style.display = "flex";
    document.getElementById("correct").style.display = "none";
  }
}


function clear(){
  document.getElementById("myForm").reset();
}