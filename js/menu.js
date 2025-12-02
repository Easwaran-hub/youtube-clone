document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-button");
  const menu = document.getElementById("menuItems");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = document.getElementById("closeMenuBtn");
  const chartbtn=document.getElementById('chart');
  // Open menu
  hamburger.addEventListener("click", () => {
    menu.classList.add("show");
    overlay.style.display = "block";
  });

  // Close when clicking X
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.style.display = "none";
  });

  // Close when clicking outside (overlay)
  overlay.addEventListener("click", () => {
    menu.classList.remove("show");
    overlay.style.display = "none";
  });
  document.querySelectorAll('.menu-item').forEach(item=>{
    item.addEventListener('click',()=>{
        const page=item.getAttribute("data-link");
        if(page){
            window.location.href=page;
        }  
    })
  })
  
});