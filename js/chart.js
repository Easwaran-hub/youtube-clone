// document.addEventListener("DOMContentLoaded",()=>{
//     const cbtn=document.getElementById('create-button')
//     cbtn.addEventListener("click",()=>{
//         cbtn.style.display="flex";
//         renderTodayChart();
//     })
// function renderTodayChart(){
//     const todaySeconds=Number(localStorage.getItem("todayTime"))||0;
//     const minutes=Math.floor(todaySeconds/60);
//     const ctx=document.getElementById('todayChart').getContext('2d');
//     new CharacterData(ctx,{
//         type:'bar',
//         data:{
//             labels:['Today'],
//             datasets:[{
//                 label:'Screen Time(minutes)',
//                 data:[minutes],
//                 backgroundColor:'rgba(0,150,250,0.7)',
//                 bordercolor:'rgba(0,150,250,1)',
//                 borderWidth:2,
//             }]
//         },
//         options:{
//             scales:{
//                 y:{
//                     beginatZero:true,
//                     ticks:{
//                         color:'white'
//                     }
//                 },
//                 x:{
//                     ticks:{
//                         color:'white'
//                     }
//                 }
//             },
//             plugins:{
//                 legend:{
//                     labels:{
//                         color:'white'
//                     }
//                 }
//             }
//         }
//     });
// }

// })
document.addEventListener("DOMContentLoaded", () => {
    
    const createBtn = document.querySelector(".create-button");
    const chartPopup = document.getElementById("chartPopup");
    const closeChart = document.getElementById("closeChart");
    
    // Open popup when clicking CREATE button
    createBtn.addEventListener("click", () => {
        chartPopup.style.display = "flex";
        renderChart();
    });

    // Close popup
    closeChart.addEventListener("click", () => {
        chartPopup.style.display = "none";
    });

});

// Chart.js
function renderChart() {
    const todaySeconds = Number(localStorage.getItem("todayTime")) || 0;
    const todayMinutes = Math.floor(todaySeconds / 60);

    const ctx = document.getElementById("screenChart");

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Today"],
            datasets: [{
                label: "Minutes",
                data: [todayMinutes],
            }]
        },
        options: {
            scales: {
                x: { ticks: { color: 'white' } },
                y: { ticks: { color: 'white' } }
            },
            plugins: {
                legend: { labels: { color: 'white' } }
            }
        }
    });
}