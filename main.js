var img = document.querySelector('img');

var counter = 1;


 var loop = setInterval(function () {
   counter++; // 2
   if (counter === 4) {
     counter = 1;
   } else {
     counter = counter;
   }
   img.setAttribute('src','img/bg'+counter+'.jpg');


 },4000);
