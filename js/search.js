document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('.searchBar');
  const searchButton = document.querySelector('.search-button');
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section');
  const middlesection = document.querySelector('.middle-section');
  const header=document.querySelector('.header');
  const arrowBtn=document.createElement("button");
  const mic=document.getElementById("mic-button");
  arrowBtn.className="arrow-button";
  arrowBtn.innerHTML=`<img src="icons/arrow-for-black.png" class="arrow">`;
  arrowBtn.style.display="none";
  header.prepend(arrowBtn)
searchButton.addEventListener('click',()=>{
  if(window.innerWidth<=600){
    leftSection.style.display="none";
    rightSection.style.display="none";
    searchBar.style.display="block";
    middlesection.style.marginLeft="50px";
    searchButton.style.display="none";
    arrowBtn.style.display="flex";
    mic.style.marginLeft="500px";                                                   
  }
})
arrowBtn.addEventListener("click",()=>{
  if(window.innerWidth<=600){
    if(window.history.length>1){
            history.back();
        }
        else
        {
            window.location.href="index.html";
        }
  }
})
});
  