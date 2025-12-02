window.addEventListener('DOMContentLoaded',()=>{
    const logout=document.getElementById('logout');
    logout.addEventListener('click',()=>{
        localStorage.removeItem("user-information");
        window.location.href="login.html";
    })
})