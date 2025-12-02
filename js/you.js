window.addEventListener('DOMContentLoaded',()=>{
    const pic=document.getElementById('profile-pic');
    const uname=document.getElementById('user-name');
    let storedData=localStorage.getItem("user-information");
    if(!storedData)
    {
        pic.style.display="none";
        uname.style.display="none";
    }
    let u_profile=JSON.parse(storedData);
    let name=u_profile.UserName;
    let initial=name.charAt(0).toUpperCase();
    pic.innerText=initial;
    uname.innerText=name;
    let colors=["#FF5722","#03A9F4","#4CAF50","#9C27B0","#E91E63","#FFC107","#009688"];
    const col=Math.floor(Math.random()*colors.length);
    const color=colors[col];
    pic.style.backgroundColor=color;
})