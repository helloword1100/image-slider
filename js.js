const back=document.querySelector('#bck_btn');
const forw=document.querySelector('#nxt_btn');
const gall=document.querySelector('.gallery')

back.addEventListener('click',function(){
    gall.style.scrollBehavior="smooth";
    gall.scrollLeft-=900;
    
})


forw.addEventListener('click',function()
{
    gall.style.scrollBehavior="smooth";
    gall.scrollLeft+=900;
})