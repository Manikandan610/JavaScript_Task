//Fill Empty Box
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//     let y = document.forms["myForm"]["email"].value;
//     if (y == "") {
//       alert("Email must be filled out");
//       return false;
//     }
//     let z = document.forms["myForm"]["fnum"].value;
//     if (z == "") {
//       alert("Number must be filled out");
//       return false;
//     }
//     let w = document.forms["myForm"]["psw"].value;
//     if (w == "") {
//       alert("password must be filled out");
//       return false;
//     }
//     let v = document.forms["myForm"]["cpwd"].value;
//     if (v == "") {
//       alert("confirm Password must be filled out");
//       return false;
//     }
//   } 


//type only alphbets
function isAlphabet(evt) {
  var iKeyCode = (evt.which) ? evt.which : evt.keyCode
  if (iKeyCode != 46 && iKeyCode > 32 && (iKeyCode < 65 || iKeyCode > 90) && (iKeyCode < 97 || iKeyCode > 122))
      return false;

  return true;
} 

  //type only numbers
  function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}    

//max 10 digits
function check()
{
    var pass1 = document.getElementById('fnum');
    var goodColor = "#0C6";
    var badColor = "red";

if(pass1.value.length<10)
{
    pass1.style.backgroundColor = badColor;
}
else{
     pass1.style.backgroundColor = goodColor;
    }
}


 //Password Character check 
 function checkChar(){
         var myInput = document.getElementById("psw");
         var newPassword = myInput.value;
         var minNumberofChars = 6;
         var maxNumberofChars = 16;
         var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                  
         if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
             return true;
         }
         if(!regularExpression.test(newPassword)) {
             alert("password should contain atleast one number and one special character");
             return false;
         }
    }
  

//Check password and confirm password
function checkPass(){
    var pass1=document.getElementById('psw').value;
    var pass2=document.getElementById('cpsw').value;
    
    if(pass1!=pass2){
        alert("Incorrect Password");
    }
    else{
      alert("Successfully Submited");
      document.getElementById("myForm").reset();
    }
}


//Email id Validation
  function validateemail()  
  {  
      var emailInput = document.getElementById('email');
      var atPos = emailInput.value.indexOf("@");
      var dotPos = emailInput.value.indexOf(".");
      var emailLength = emailInput.value.length;
      if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 > emailLength) {
        alert("Invalid Email format");
        return false;
      }
      //return true;
      // var x=document.myForm.email.value;  
      // var atposition=x.indexOf("@");  
      // var dotposition=x.lastIndexOf(".");  
      // if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      //   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      //   return false;  
      //   }  
  }  
    // function validateemail()
    // {
    //     var emailid = document.getElementById('email');
    //     var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    //     if(emailid.value.match(mail_format))
    //     {
    //         alert("Valid email Id");
    //         document.myForm.fnum.focus();
    //         return true;
    //     }
    //     Else
    //     {
    //         alert("Invalid email Id");
    //         document.myForm.email.focus();
    //         return false;
    //     }
    // }


function clear(){
  document.getElementById("myForm").reset();
}