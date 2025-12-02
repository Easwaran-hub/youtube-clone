window.addEventListener('DOMContentLoaded',()=>{
    const arrow=document.getElementById("arrow-button");
    arrow.addEventListener("click",()=>{
        if(window.history.length>1){
            history.back();
        }
        else
        {
            window.location.href="index.html";
        }
    })
})