"use strict";



let MySlider = document.querySelector('.slider-container');
let MySliderImg = document.querySelectorAll('.slider-img');
console.log(MySliderImg)

let prvBtn = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let counter = 1;
let size = MySliderImg[0].clientWidth;
let animation1 = document.getElementsByClassName('image1')[0];
let animation2 = document.getElementsByClassName('image2')[0];
let Hanm = document.getElementsByClassName('myH1')[0];
let Hanm1 = document.getElementsByClassName('myH2')[0];
let a1 =  document.getElementsByClassName('read')[0];
let p3 = document.getElementsByClassName('dicital')[0];
let p4 = document.getElementsByClassName('agency')[0];
let p5 = document.getElementsByClassName('cretive')[0];
let p6 =  document.getElementsByClassName('modern')[0];
console.log(p6)
MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextButton.addEventListener("click", function(){
    animation1.classList.toggle('fadeInRightBig');
    animation2.classList.toggle('fadeInRight');
    Hanm.classList.toggle('fadeInLeftBig');
    Hanm1.classList.toggle('fadeInLeft');
    a1.classList.toggle('rotateInDownLeft');
    p3.classList.toggle('bounceInDown');
    p4.classList.toggle('bounceInUp');
    p5.classList.toggle('fadeInLeftBig');
    p6.classList.toggle('fadeInLeftBig');

    if(counter>=MySliderImg.length-1)
     return;
   
    MySlider.style.transition = "transform 0.2s ease-in-out";
    counter++;
  console.log("salam")
    MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  
})

prvBtn.addEventListener("click", function(){
    animation1.classList.toggle('fadeInRightBig');
    animation2.classList.toggle('fadeInRight');
    Hanm.classList.toggle('fadeInLeftBig');
    Hanm1.classList.toggle('fadeInLeft');
    a1.classList.toggle('fadeInLeftBig');
    p5.classList.toggle('fadeInLeftBig');
    p3.classList.toggle('bounceInDown');
    p4.classList.toggle('bounceInUp');
    p6.classList.toggle('bounceInUp');
    if(counter<=0)
     return;
    MySlider.style.transition = "transform 0.2s ease-in-out";
    counter--;
    MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
   
  
})

MySlider.addEventListener("transitionend", function(){
  
   
    if(MySliderImg[counter].id==="lastImg"){
        MySlider.style.transition = "none";
        counter = MySliderImg.length - 2;
        MySlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(MySliderImg[counter].id==="firstImg"){
        MySlider.style.transition = "none";
        counter = MySliderImg.length - counter;
        MySlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
})

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


const click1 = document.querySelector('.click1');
const click2 = document.querySelector('.click2');
const div1 = document.querySelector('.clientSlide1');
const div2 = document.querySelector('.clientSlide2');



click1.addEventListener('click', function(){
  click1.style.background = "#727272"
  click2.style.background = "#333"
  if(!div1.classList.contains('active1')){
    div1.classList.add("active1");
  }
  if(div2.classList.contains('active2')){
    div2.classList.remove("active2")
  }
});

click2.addEventListener('click', function(){
  click2.style.background = "#727272"
  click1.style.background = "#333"
  if(!div2.classList.contains('active2')){
    div2.classList.add("active2");
  }
  if(div1.classList.contains("active1")){
    div1.classList.remove("active1")
  }
});


let navIcon = document.querySelector(".navIcon");
let nav = document.querySelector(".header-bottom ul");



navIcon.addEventListener("click", function(){
  this.style.display = "none";
  nav.style.display = "block"
} )







