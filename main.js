// Script body
/* ----- function set light or dark background ------*/

const LightDark = document.querySelector('.lightDark');

   let bodyBg = '#21242B';

LightDark.addEventListener('click',(e)=>{
   e.preventDefault();
   
   bodyBg = bodyBg === '#21242B'? '#eee' : '#21242B';
   console.log();
   document.body.style.backgroundColor = bodyBg;
   
   document.querySelectorAll('section').forEach((item)=> 
   item.classList.toggle('light'))
   
   
   //
})



