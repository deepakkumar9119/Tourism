function msg() {
var a = document.myForm.name.value;
var b = document.myForm.password.value;
var c = document.myForm.email.value;
var d = document.myForm.address.value;
if (a == "") {

return false;
}
else if (b == "") {

return false;
}
else if (c == "") {

return false;
}
else if (d == "") {

return false;
}
else{
alert("Thank You for your feedback");
return true;
}
}