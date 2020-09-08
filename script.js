"use strict";

function addToDisplay(message, displayScreen) {
    displayScreen.textContent = message;
}

//main

let helloBtn = document.querySelector(".hello-btn");
let displayScreen = document.querySelector(".display-screen");

helloBtn.addEventListener("click", e => {
    addToDisplay("Hello World!", displayScreen);
});



