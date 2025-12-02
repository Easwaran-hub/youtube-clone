 let sessionStart;
 window.addEventListener('load',()=>{
     sessionStart=Date.now();
 })
 const todaySeconds=Number(localStorage.getItem("todaytime"))||0;
const minutes=Math.floor(todaySeconds/60);
const hours=Math.floor(minutes/60);
const minsLeft=minutes%60; 
const timeBox=document.getElementById("today-time");
if(timeBox){
    timeBox.innerText=`${hours}h ${minsLeft}m`
}
window.addEventListener("beforeunload",()=>{
    const sessionEnd=Date.now();
    const sessionTime=sessionEnd-sessionStart;
    const seconds=Math.floor(sessionTime/1000);
    let totalToday=Number(localStorage.getItem("todayTime"))|| 0;
    totalToday+=seconds;
    localStorage.setItem("todayTime",totalToday);
})