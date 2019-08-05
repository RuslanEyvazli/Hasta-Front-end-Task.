"use strict"


let buttons = document.querySelectorAll(".responsive button");

let tabs = document.querySelectorAll(".tab-content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        
        let elementId = this.getAttribute("data-tab-target");
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].style.display = "none";
        }
        
        document.querySelector("#" + elementId).style.display = "block";
        document.querySelector("#" + elementId).style.display = "flex";
    });
}

let navIcon = document.querySelector(".navIcon");
let nav = document.querySelector(".header-bottom ul");



navIcon.addEventListener("click", function(){
  this.style.display = "none";
  nav.style.display = "block"
} )
