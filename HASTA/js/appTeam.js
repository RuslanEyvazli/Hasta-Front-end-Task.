"use strict"


var acc = document.getElementsByClassName("accordion");





for ( let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
   
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        this.querySelector("i").classList.remove("fa-minus");
        this.querySelector("i").classList.add("fa-plus");
        this.querySelector("p").style.color = "#8d8c8c;"
      } else {
        panel.style.display = "block";
        this.querySelector("i").classList.remove("fa-plus");
        this.querySelector("i").classList.add("fa-minus");
        this.querySelector("p").style.color = "#fd602c"
        
      }
    });
  }



  const click1 = document.querySelector('.click1');
const click2 = document.querySelector('.click2');
const div1 = document.querySelector('.clientSlide1');
const div2 = document.querySelector('.clientSlide2');



click1.addEventListener('click', function(){
  click1.style.background = "#333"
  click2.style.background = "#727272"
  if(!div1.classList.contains('active1')){
    div1.classList.add("active1");
  }
  if(div2.classList.contains('active2')){
    div2.classList.remove("active2")
  }
});

click2.addEventListener('click', function(){
  click2.style.background = "#333"
  click1.style.background = "#727272"
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

