"use strict";

function addToDisplay(message, displayScreen) {
    displayScreen.textContent = message;
}

//main

let helloBtn = document.querySelector(".hello-btn");
let submitBtn = document.querySelector(".submit-btn");
let displayScreen = document.querySelector(".display-screen");
let inpt

helloBtn.addEventListener("click", e => { 
    addToDisplay("Hello World!", displayScreen);
});

submitBtn.addEventListener("click", e => { 
    let inputName = document.querySelector(".input-name").value;
    addToDisplay(inputName, displayScreen);
});



