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
         var minNumberofChars = 4;
         var maxNumberofChars = 10;
         var regularExpression  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                  
         if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
          document.getElementById("weak").style.display = "none";
          document.getElementById("strong").style.display = "none";

             return true;
         }
         if(!regularExpression.test(newPassword)) {
               document.getElementById("weak").style.display = "flex";
               document.getElementById("strong").style.display = "none";
         }
         else{
          document.getElementById("strong").style.display = "flex";
          document.getElementById("weak").style.display = "none";
         }
    }
  

//Check password and confirm password
function check(){
//     var pass1=document.getElementById('psw').value;
//     var pass2=document.getElementById('cpsw').value;
    
//     if(pass1!="" && pass2!="")
// {
//     pass1.style.backgroundColor = badColor;
// }
// else{
//      pass1.style.backgroundColor = goodColor;
//     }
    //password checking
    if(pass1!=pass2){
        alert("Incorrect Password");
    }
    else{
      alert("Successfully Submited");
     // document.getElementById("myForm").reset();
    }
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