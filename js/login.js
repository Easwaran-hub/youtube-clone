window.addEventListener('DOMContentLoaded',()=>{
    let user=document.getElementById('TB');
    let pass=document.getElementById('pass');
    let cpass=document.getElementById('cpass');
    let form=document.getElementById('loginForm');
    let error=document.getElementById('error');
    let login=false;
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let password=pass.value.trim();
        let confirmpassword=cpass.value.trim();
        if(password!==confirmpassword){     
            error.style.display="block";
            setTimeout(()=>{
                error.style.display="none";
            },3000)
            return;
        }
        else{
            const username=user.value.trim();
            const profile={
                UserName: username,
                Password: password
            }
            localStorage.setItem("user-information",JSON.stringify(profile));
            login=true;
            window.location.href="you.html";
        }
        
    })  
})