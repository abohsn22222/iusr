function login(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;


if (email == 'admin@gmail.com' && password == 'admin'){
    window.location.assign('../index.html');
     alert('Login Successfully');
   
    
    return false;
}
else {
   
    alert ('Error in Email or Password');
    return true;
}}
