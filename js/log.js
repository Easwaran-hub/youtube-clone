
window.addEventListener('DOMContentLoaded',()=>{
    const login_button=document.getElementById("login-button");
login_button.addEventListener('click',()=>{
    const data=localStorage.getItem("user-information");
    if(data){
        window.location.href="you.html";
    }
    else{
        window.location.href="login.html";
        return;
    }
})
})
