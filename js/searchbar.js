document.addEventListener("DOMContentLoaded",()=>{
    const searchBar=document.getElementById("searchBar");
    const searchBtn=document.getElementById("searchButton");
    function filterVideos(){
        const input=searchBar.value.toLowerCase().trim().replace(/\s+/g,"");
        document.querySelectorAll(".video-preview").forEach(card=>{
            const title=card.querySelector('.video-title')?.innerText.toLowerCase()||"";
            const dataTitle=card.querySelector(".video-button")?.dataset.title?.toLowerCase()||"";
            if(input===""|| title.includes(input)||dataTitle.includes(input)){
                card.style.display="";

            }
            else{
                card.style.display="none"
            }
        })
    }
    searchBtn.addEventListener("click",filterVideos);
    searchBar.addEventListener("input",filterVideos);
    searchBar.addEventListener("keydown",(e)=>{
        if(e.key==="Enter")filterVideos();
    })
    function isChromeMobile(){
        return /Android/i.test(navigator.userAgent)&& /Chrome/i.test(navigator.userAgent);
    }
   
    const SpeechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition;
    const recognition=new SpeechRecognition();
    recognition.interimResults=true;
    recognition.lang="en-IN";
    recognition.continuous=true;
    const mic=document.getElementById("mic-button");
    let isListening=false;
    mic.addEventListener("click",()=>{
         if(isChromeMobile())
        if(!isListening){
            recognition.start();
            isListening=true;
            
            console.log("Trying To Start Mic...");    
        }
        else
        {
            recognition.stop();
            isListening=false;
            
            console.log("Trying To Stop Mic...");
        }
    })
    // recognition.onstart=()=>{
    //     isListening=true;
    //     console.log("Mic Ready..Listening Now..");      
    // }
    recognition.onresult=(event)=>{
        const voiceText=event.results[event.results.length-1][0].transcript;
        console.log("heard:",voiceText);       
        searchBar.value=voiceText.trim();
        filterVideos();
    }
    recognition.onerror=(event)=>{
        console.log("speech error:",event.error);
        
    }
    recognition.onend=()=>{
        isListening=false;
        console.log("Mic Stopped..Ready again");
    }
})
