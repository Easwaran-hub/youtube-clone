window.addEventListener('DOMContentLoaded',()=>{
    const bell=document.getElementById('bell-button');
  const n_bar=document.getElementById('notification-bar');
  const close=document.getElementById('closemenuBtn')
  bell.addEventListener('click',()=>{
   n_bar.classList.add("active")  
  })
  close.addEventListener('click',()=>{
    n_bar.classList.remove("active") ;  
  })
})