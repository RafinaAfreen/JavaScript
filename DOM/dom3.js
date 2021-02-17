var headOne = document.querySelector('#one')
var headtwo = document.querySelector('#two')
var headthree = document.querySelector('#three')

//console.log("Connected!");

headOne.addEventListener('mouseover',function(){
  headOne.textContent = "Mouse Currently Over";
  headOne.style.color = 'red';
})

headOne.addEventListener("mouseout",function(){
  headOne.textContent = "HOVER OVER ME!";
  headOne.style.color = 'black';
})

headtwo.addEventListener("click",function(){
  headtwo.textContent = 'CLICKED ON!';
  headtwo.style.color = 'blue';
})

headthree.addEventListener("dblclick",function(){
  headthree.textContent = 'I WAS DOUBLE CLICKED! ';
  headthree.style.color = 'red';
})
