function descOpenHandle(){
    let para=document.querySelector(".description p");
    let arrow=document.querySelector(".down-arrow");
    let height=para.offsetHeight;
    let lineHeight=parseInt(window.getComputedStyle(para,null).lineHeight);
    console.log(lineHeight);
    if(height>lineHeight*3){
        para.style.height=lineHeight*3+"px";
        para.classList.add("para-overflow");
        arrow.style.display="block";
    }
    let isdown=true;
    document.querySelector(".down-arrow").onclick=function(event){
        if(isdown){
            para.style.height=height+"px";
            para.classList.remove("para-overflow");
            event.target.classList.add("up-arrow");
            isdown=false;
        }       
        else{
            para.style.height=lineHeight*3+"px";
            para.classList.add("para-overflow");
            event.target.classList.remove("up-arrow");
            isdown=true;
        }
            
    }
}
function inforOpenHandle(){
    let inforMain=document.querySelector(".information-main");
    let fullHeight=inforMain.offsetHeight;
    let inforItems=document.querySelectorAll(".information-item");
    if(inforItems.length>3){
        for(let i=3;i<inforItems.length;i++){
            inforItems[i].style.display="none";
        }
        document.querySelector(".information-more").style.display="flex";
        inforMain.style.height="2.82rem";
    }
    let isdown=true;
    document.querySelector(".information-more").onclick=function(event){
        //console.log(event.target.tagName);
        if(event.target.tagName=="SPAN"||event.target.tagName=="IMG"){
            if(isdown){
                for(let i=3;i<inforItems.length;i++){
                    inforItems[i].style.display="flex";
                }
                inforMain.style.height=fullHeight+"px";
                document.querySelector(".information-more img").classList.add("img-rotate");
                document.querySelector(".information-more span").innerHTML="收起";
                isdown=false;
            }
            else{
                for(let i=3;i<inforItems.length;i++){
                    inforItems[i].style.display="none";
                }
                inforMain.style.height="2.82rem";
                document.querySelector(".information-more img").classList.remove("img-rotate");
                document.querySelector(".information-more span").innerHTML="展开";
                isdown=true;
            }
        }
        else
            return false;
    }
}
document.addEventListener("DOMContentLoaded",function(){
    descOpenHandle();
    inforOpenHandle();
})