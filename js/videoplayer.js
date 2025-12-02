
window.addEventListener('DOMContentLoaded',()=>
{

    let a=document.querySelectorAll('.video-button');
    a.forEach(btn=>{ 
        btn.addEventListener('click',()=>
        {
            const parent=btn.closest('.video-preview');
            let videoData={
                data: btn.dataset.video,
                title: parent.querySelector('.video-title').innerText,
                stats: parent.querySelector('.video-stats').innerText,
                author: parent.querySelector('.video-author').innerText,
                logo: parent.querySelector('.logo').src
            }
            localStorage.removeItem("video-data")
            localStorage.setItem("video-data",JSON.stringify(videoData));
            window.location.href="video-player.html";
        })
    })
    
});
window.addEventListener('DOMContentLoaded',()=>
{
    let data=localStorage.getItem("video-data");
    // if(!data) return;
            let v_data=JSON.parse(data);
            let main_video=document.getElementById('mainVideo');
            let video_title=document.querySelector('.video-title1');
            let video_stats=document.querySelector('.video-stats1');
            let channel_logo=document.querySelector('.channel-logo');
            let video_author=document.querySelector('.channel-name');
            let subscribers=document.querySelector('.subscribers');
            let video_description=document.querySelector('.video-description');
            let user_initial=document.querySelector('.user-initial');
            let user_name=document.querySelector('.user-name');
            let comment_timing=document.querySelector('.comment-timing');
            let user_comment=document.querySelector('.user-comment');

            main_video.src=`videos/${v_data.data}.mp4`;
            video_title.innerText=v_data.title;
            video_stats.innerText=v_data.stats;
            video_author.innerText=v_data.author;
            channel_logo.src=v_data.logo;
            localStorage.removeItem("selectedVideo");
            let suggestions=document.querySelectorAll('.suggestions');
            suggestions.forEach(sugg=>{
                if(sugg.dataset.video===v_data.data){
                    sugg.remove();
                }
            })
            switch(v_data.data)
            {
                case "thuglife":subscribers.innerText="21M Subscribers";
                                video_description.innerText=`Banner: Raaj Kamal Films International, Madras Talkies & Red Giant Movies
                                                             Cast: Kamal Haasan, Silambarasan TR, Trisha, Aishwarya Lekshmi,  Ashok Selvan, Abhirami, Joju George, Nasser, Mahesh Manjrekar and Ali Fazal
                                                             Director of Photography: Ravi K. Chandran
                                                             Editor: Sreekar Prasad
                                                             Action: Anbariv`;
                               user_initial.innerText="R";
                               user_name.innerText="Superstar Rajinikanth";
                               comment_timing.innerText="5 months Ago";
                               user_comment.innerText="Vaazhthukal vaazhthukal🤝🤝";
                               break;
                case "indian2":subscribers.innerText="4.5M Subscribers";
                                video_description.innerText=`Banner: Raaj Kamal Films International, Madras Talkies & Red Giant Movies
                                                             Cast: Kamal Haasan, Silambarasan TR, Trisha, Aishwarya Lekshmi,  Ashok Selvan, Abhirami, Joju George, Nasser, Mahesh Manjrekar and Ali Fazal
                                                             Director of Photography: Ravi K. Chandran
                                                             Editor: Sreekar Prasad
                                                             Action: Anbariv`;
                               user_initial.innerText="S";
                               user_name.innerText="Siddharth";
                               comment_timing.innerText="1 Year Ago";
                               user_comment.innerText="Aravinth from social media சார்பாக படம் வெற்றி பெற வாழ்த்துக்கள்❤"; 
                               break;         
                case "uttamavillain":subscribers.innerText="68.5M Subscribers";
                                video_description.innerText=`Kamal Haasan's official new first trailer in 2015!  Watch the extremely colorful & awe inspiring trailer of 'Uttama Villain',a story that is the brainchild of Ulaganayagan Kamal Haasan. Directed by Ramesh Aravind, the movie is about art & cinema across eras. With music composed by Ghibran,  the film also stars Nasser, Parvathy Menon, Pooja Kumar, Andrea Jeremiah & others.`;
                               user_initial.innerText="E";
                               user_name.innerText="Easwaran";
                               comment_timing.innerText="10 Years Ago";
                               user_comment.innerText=" people who didn't saw this movie, surely they will regret after 10 years"; 
                               break;        
                 case "vishwaroopam":subscribers.innerText="12.7M Subscribers";
                                video_description.innerText=`The story is about a middle-class girl marrying an NRI with hopes of completing her education in the US. But after her studies, she is not interested in him anymore and looks ways to divorce him. She employs a detective to find fault with her husband only to be shocked by some revealing facts. What happens from there is the thrilling narration.`;
                               user_initial.innerText="G";
                               user_name.innerText="GovtOfTamilnadu";
                               comment_timing.innerText="12 Years Ago";
                               user_comment.innerText="Kurukka Intha Kowsik Vantha😉"; 
                               break;   
                 case "vishwaroopam2":subscribers.innerText= "1.09M Subscribers";
                                video_description.innerText=`Directed by : Kamal Haasan
                                                            Produced by : Kamal Hassan, S Chandrahasan For Aascar films (P) Ltd 
                                                            Written by : Kamal Haasan
                                                            Music by :  Ghibran
                                                            Cinematography : Sanu Varghese, Shamdat Sainudeen
                                                            Edited by : Mahesh Narayanan, Vijay Shankar
                                                            Production Company : Aascar Films PVT Limited
                                                            Distributed by : Raaj Kamal Films International, Rohit Shetty Pictures(Hindi), Reliance Entertainment`;
                               user_initial.innerText="M";
                               user_name.innerText="MadanGowri";
                               comment_timing.innerText="7 Years Ago";
                               user_comment.innerText="Class!"; 
                               break; 
                case "heyram":subscribers.innerText="1.09M Subscribers";
                                video_description.innerText=`Presenting the Official Trailer Recuts of the epic National Award Winning bilingual film 'Hey Ram'; Performed, Produced & Directed by Ulaganayagan Kamal Haasan.`;
                               user_initial.innerText="A";
                               user_name.innerText="Ajith";
                               comment_timing.innerText="8 Years Ago";
                               user_comment.innerText="இது ஒரு திரைப்படம் இல்ல pure art!.இப்படி ஒரு movie இப்போ எவனாலும் எடுக்க முடியாது😍🔥"; 
                               break;            
                case "aalavandhan":subscribers.innerText="1.39M Subscribers";
                                video_description.innerText=`Aalavandhan Official Release Trailer is here! Aalavandhan' is a cinematic masterpiece that blends high-octane action with deep emotional drama. Watch as 'Ulaga Nayagan'' Kamal Haasan delivers a breathtaking dual performance, portraying two brothers caught in a web of action and psychological challenges. Every scene mixes thrilling action and intense drama, making 'Aalavandhan' a must-see for cinema lovers.`;
                               user_initial.innerText="R";
                               user_name.innerText="Rajinikanth";
                               comment_timing.innerText="1 Years Ago";
                               user_comment.innerText="இன்னும் எத்தனை வருடங்கள் ஆனாலும் இந்த பிலிம் technicals இன்னும் fresh ஆஹ் இருக்கு. mind blowing🥵🤯.. ஐந்த generation கு shock தரும் movie ithu"; 
                               break;    
                case "indian":subscribers.innerText="4.5M Subscribers";
                                video_description.innerText=`Indian is a 1996 Indian Tamil-language vigilante action film written and directed by Shankar and produced by A. M. Rathnam. The film stars #Kamal Haasan in dual roles opposite Manisha Koirala, Urmila Matondkar and Sukanya. Nedumudi Venu appears in a pivotal role. The film's score and soundtrack are composed by A. R. Rahman, while cinematography was handled by Jeeva.The film focuses on an ex-freedom fighter turned vigilante bent on rooting out corruption, and his son, who is at the other end of the spectrum by facilitating corrupt practices leading to some unfortunate events. He is well trained in Varma kalai, an ancient lethal martial art used for close quarters combat
One of the finest film from shankar sir!`;

                               user_initial.innerText="V";
                               user_name.innerText="Vijay Sethupathi";
                               comment_timing.innerText="1 Years Ago";
                               user_comment.innerText="senapathy oda style um dialogue um innum 2025 ku mass ah irukku !! masterpiece🔥❤"; 
                               break;   
                case "marudhanayagam":subscribers.innerText="2.75M Subscribers";
                                video_description.innerText=`Watch and listen to the exclusive song from the movie Marudhanayagam, composed by Ilaiyaraaja. Watch, Share and Subscribe for more!`;
                               user_initial.innerText="L";
                               user_name.innerText="Lokesh Kanagaraj";
                               comment_timing.innerText="2 Years Ago";
                               user_comment.innerText="marudhanayagam is not just a film...its a dream that gives chill..The scale teh vision....Ulaganayagan🔥🙌"; 
                               break;    
                case "Once upon a time":subscribers.innerText="2.75M Subscribers";
                                video_description.innerText=`Listen to the Vikram album on Spotify - https://spoti.fi/3Gf4Sv3
                                                           Movie : VIKRAM
                                                           Song Title : Once Upon a Time
                                                           Album / Movie : Vikram
                                                           Composed by Anirudh Ravichander
                                                           Lyrics - Heisenberg
                                                           Vocals - Anirudh Ravichander`;
                               user_initial.innerText="A";
                               user_name.innerText="Aniruth Ravichander ";
                               comment_timing.innerText="3 Years Ago";
                               user_comment.innerText="I still remember kamal sir look during the scene...Goosebumbs guaranteed!!🔥...Enjoy Guys❤🔥 "; 
                               break;    
                case "unnai kaanadhu naan":subscribers.innerText="2.75M Subscribers";
                                video_description.innerText=`Watch Unnai Kaanadhu Naan Official Full Song Video from the Movie Vishwaroopam`;
                               user_initial.innerText="S";
                               user_name.innerText="Suriya";
                               comment_timing.innerText="5 Years Ago";
                               user_comment.innerText="Soulfull!!😇😇...Pure magic!!✨✨..1000 times kettalum bore adikathu❤❤"; 
                               break;                                                                                                                                           
            } 
            // localStorage.removeItem("video-data")

});


window.addEventListener('DOMContentLoaded',()=>{
    let suggestionButtons=document.querySelectorAll('.suggestion-button');
    suggestionButtons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const parent=btn.closest('.suggestions');
            let videoData={
                data: btn.dataset.video,
                title: parent.querySelector('.title').innerText,
                stats: parent.querySelector('.stats').innerText,
                author: parent.querySelector('.video-author').innerText,
                logo: parent.querySelector('.logo').src
            }
            localStorage.removeItem("video-data");
            localStorage.setItem("video-data",JSON.stringify(videoData));
            window.location.reload();
        })
    })
    
})