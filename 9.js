const btn = document.getElementById('btn');
// console.log(btn);

btn.addEventListener("click", function(){
  let input = document.getElementById('input').value;
  
  
  let head = document.getElementById('head');
// let change = head.innerText;
     
head.innerText = input;
   
} );


let box = document.getElementById('box');

box.addEventListener("keydown", function(){
  let head = document.getElementById('head');
  
  head.innerText = box.value;
  
  
} )