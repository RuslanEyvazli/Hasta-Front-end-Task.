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


var acc = document.getElementsByClassName("graphicTop");

var panelacc = document.querySelector(".graphicMainFirst div:last-child")



for ( let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
   
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        this.querySelector("i").classList.remove("fa-minus-circle");
        this.querySelector("i").classList.add("fa-plus-circle");
        this.style.background = "white"
      } else {
        panel.style.display = "block";
        for(let j=0; j<acc.length; j++){
          if(i!=j){
            acc[j].nextElementSibling.style.display = "none"
            acc[j].style.background = "white"
          }
        }
        this.querySelector("i").classList.remove("fa-plus-circle");
        this.querySelector("i").classList.add("fa-minus-circle");
        this.style.background = "#ddd"
        
      }
    });
  }



  let navIcon = document.querySelector(".navIcon");
let nav = document.querySelector(".header-bottom ul");



navIcon.addEventListener("click", function(){
  this.style.display = "none";
  nav.style.display = "block"
} )

