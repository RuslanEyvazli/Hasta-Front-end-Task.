"use strict"


let input = document.querySelector('input');
let name = document.forms["myForm"]["name"];
let number = document.forms['myForm']['number'];

let onlyLatter = /^[a-zA-Z]*$/;
let onlyNumber = /([0-9])/;

function myValidation(){
    if(input.value == ""){
        alert('Any input is empty');
        return false;
    }
    if(!name.value.match(onlyLatter)){
        alert('Name input must consist of only latter');
        return false;
    }
    if(!number.value.match(onlyNumber)){
        alert("Telephone input must consist of only number");
        return false;
    }
    return false;
}

  
let navIcon = document.querySelector(".navIcon");
let nav = document.querySelector(".header-bottom ul");



navIcon.addEventListener("click", function(){
  this.style.display = "none";
  nav.style.display = "block"
} )