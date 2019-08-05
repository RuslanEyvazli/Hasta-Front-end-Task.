"use strict"

let input = document.querySelector("input");
let select = document.querySelector("select");
let name = document.querySelector("#nameInput");
let surname = document.querySelector("#surnameInput");
let day = document.querySelector("#day")
let year = document.querySelector("#year")
let number = document.querySelector("#number");

let dayReg = /([0-9]{2})/;
let onlyLatter = /^[a-zA-Z]*$/;
let yearReg = /([0-9]{4})/;
let onlyNumber = /([0-9])/;

function myValidation(){
    if(input.value == "" || select.value == ""){
        alert("input empty");
        return false;
    }
    if(!name.value.match(onlyLatter)){
        alert("name and surname must be only latter");
     return false;
 }
    if(!surname.value.match(onlyLatter)){
       alert("name and surname must cosist of only latter");
         return false;
  }
  if(!day.value.match(dayReg)){
      alert("day input must consist of only 2 number");
      return false;
  }
  if(!year.value.match(yearReg)){
    alert("year input must consist of only 4 number");
    return false;
}
if(!number.value.match(onlyNumber)){
    alert("number must consist of only number");
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