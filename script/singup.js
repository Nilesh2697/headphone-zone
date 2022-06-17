import navbar from "../component/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.getElementById("form").addEventListener("submit",signUp);

var userData=JSON.parse(localStorage.getItem("userdetail"))||[];

function signUp(){

    event.preventDefault();
    var username = document.getElementById("username").value;
    var phonenum = document.getElementById("phone").value;
    var emailid = document.getElementById("email").value;
    var password = document.getElementById("password").value;

var userobj={

username:username,
phonenum:phonenum,
emailid:emailid,
password:password,
}



userData.push(userobj);

localStorage.setItem("userdetail",JSON.stringify(userData));
window.location.href="login.html"



}