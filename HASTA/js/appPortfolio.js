"use strict";


let leftSquare = document.querySelector(".leftSquare");
let rightSquare = document.querySelector(".rightSquare");
let sliderRow = document.querySelector(".sliderRow");
let counter = 0;


let width = document.getElementsByClassName("sliderImg")[0].clientWidth;
leftSquare.addEventListener("click",function(){
    if(counter<=0){
        return false;
    }
    counter--;
    sliderRow.style.transform = "translateX("+(-counter*width)+"px)"

})
rightSquare.addEventListener("click",function(){
    if(counter>=4){
        return false;
    }
    counter++;
    sliderRow.style.transform = "translateX("+(-counter*width)+"px)"

})

let navIcon = document.querySelector(".navIcon");
let nav = document.querySelector(".header-bottom ul");



navIcon.addEventListener("click", function(){
  this.style.display = "none";
  nav.style.display = "block"
} )

