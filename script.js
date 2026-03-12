const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

if(hamburger){
hamburger.addEventListener('click', ()=>{
sidebar.style.right =
sidebar.style.right==='0px' ? '-250px':'0px';
});
}

/* Hero Slider */

let heroImages=document.querySelectorAll('.hero img');
let current=0;

setInterval(()=>{

heroImages.forEach(img=>img.classList.remove('active'));

current=(current+1)%heroImages.length;

heroImages[current].classList.add('active');

},4000);