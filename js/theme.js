window.addEventListener('DOMContentLoaded',()=>{
    let dark=localStorage.getItem('dark')==='true';
    let theme=document.querySelector('.theme-button');
    let header=document.getElementById("header-black-style");
    let side=document.getElementById("sidebar-black-style");
    let hamburger=document.querySelector('.hamburger-icon');
    let search=document.querySelector('.search-icon');
    let mic=document.querySelector('.mic-icon');
    let create=document.querySelector('.create-icon');
    let themeIcon=document.querySelector('.theme-icon');
    let bell=document.querySelector('.bell-icon');
    let loginIcon=document.querySelector('.login-icon');
    let general=document.getElementById("general-black-style");
    let video=document.getElementById("video-black-style");
    applyTheme(dark);
       theme.addEventListener('click',()=>{
        dark=!dark
        localStorage.setItem('dark',dark);
        applyTheme(dark)
        })   
    function applyTheme(isdark){
        if(isdark){
            general.setAttribute('href','styles/general-white.css');
            video.setAttribute('href','styles/video-white.css');
            header.setAttribute('href','styles/header-white.css');
            hamburger.setAttribute('src','icons/hamburger-for-white.png');
            search.setAttribute('src','icons/search-for-white.png');
            mic.setAttribute('src','icons/mic-for-white.png');
            create.setAttribute('src','icons/screen.png');
            themeIcon.setAttribute('src','icons/moon-for-white.png');
            bell.setAttribute('src','icons/bell-for-white.png');
            loginIcon.setAttribute('src','icons/login-for-white.png');
            side.setAttribute('href','styles/sidebar-white.css');
            let home=document.querySelector('.home-icon');
            home.setAttribute('src','icons/home-for-white.png');
            let shorts=document.querySelector('.shorts-icon');
            shorts.setAttribute('src','icons/shorts-for-white.png');
            let subscription=document.querySelector('.subscription-icon');
            subscription.setAttribute('src','icons/subscription-for-white.png');
            let you=document.querySelector('.you-icon');
            you.setAttribute('src','icons/you-for-white.png');
            let download=document.querySelector('.download-icon');
            download.setAttribute('src','icons/download-for-white.png');

        }
        else{
            general.setAttribute('href','styles/general-black.css');
            video.setAttribute('href','styles/video-black.css');
            header.setAttribute('href','styles/header-black.css');
            hamburger.setAttribute('src','icons/hamburger-for-black.png');
            search.setAttribute('src','icons/search-for-black.png');
            mic.setAttribute('src','icons/mic-for-black.png');
            create.setAttribute('src','icons/screen.png');
            themeIcon.setAttribute('src','icons/sun-for-black.png');
            bell.setAttribute('src','icons/bell-for-black.png');
            loginIcon.setAttribute('src','icons/login-for-black.png');
            side.setAttribute('href','styles/sidebar-black.css');
            let home=document.querySelector('.home-icon');
            home.setAttribute('src','icons/home-for-black.png');
            let shorts=document.querySelector('.shorts-icon');
            shorts.setAttribute('src','icons/shorts-for-black.png');
            let subscription=document.querySelector('.subscription-icon');
            subscription.setAttribute('src','icons/subscription-for-black.png');
            let you=document.querySelector('.you-icon');
            you.setAttribute('src','icons/you-for-black.png');
            let download=document.querySelector('.download-icon');
            download.setAttribute('src','icons/download-for-black.png');
        }
    }
    if(theme){
     
    }    
})