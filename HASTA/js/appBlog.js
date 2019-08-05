"use strict"



let navIcon = document.querySelector(".navIcon");
let nav = document.querySelector(".header-bottom ul");



navIcon.addEventListener("click", function(){
  this.style.display = "none";
  nav.style.display = "block"
} )

