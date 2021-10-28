let skills=document.querySelector(".our-skills");
let span =document.querySelectorAll(".the-progress span");

window.onscroll = function (){
    if(window.scrollY >= skills.offsetTop + 100){
       
        span.forEach((span) => {
            span.style.width=span.dataset.width;
        });
       
    }
};


let up=document.getElementById("up");
up.style.display="none"
window.onscroll=function(){
    if(window.scrollY >= 500){
        up.style.display="block";
    }else{
        up.style.display="none"
        
    };
};