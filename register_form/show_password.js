var buttonpassword = document.getElementById('eye-password');
var inputpassword = document.getElementById('password');

buttonpassword.addEventListener('click', seePassword);

function seePassword(){
    if(inputpassword.type == 'password'){
        inputpassword.type = "text";
        buttonpassword.src = "../img_eye_svg/hidden_eye.svg";
    }else{
        inputpassword.type = "password";
        buttonpassword.src = "../img_eye_svg/appear_eye.svg"
    }
}