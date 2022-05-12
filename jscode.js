//Fill Empty Box
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }
    let z = document.forms["myForm"]["fnum"].value;
    if (z == "") {
      alert("Number must be filled out");
      return false;
    }
    let w = document.forms["myForm"]["psw"].value;
    if (w == "") {
      alert("password must be filled out");
      return false;
    }
    let v = document.forms["myForm"]["cpwd"].value;
    if (v == "") {
      alert("confirm Password must be filled out");
      return false;
    }
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


//Check password and confirm password
function checkPass(){
    var pass1=document.getElementById('psw');
    var pass2=document.getElementById('cpsw');
    if(pass1!=pass2){
        alert("Incorrect Password");
    }
    else{
        alert("Password matched");
    }
}


//Email id Validation
function validateEmail(enteredEmail)
{
var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(enteredEmail.value.match(mail_format))
{
    alert("Valid email Id");
    document.myForm.fnum.focus();
    return true;
}
Else
{
    alert("Invalid email Id");
    document.myForm.email.focus();
    return false;
}
}


