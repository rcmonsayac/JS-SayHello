"use strict";

function addToDisplay(message, displayScreen) {
    displayScreen.textContent = message;
}

//main

let keys = document.querySelectorAll("._key");
let displayScreen = document.querySelector(".display-screen");

keys.forEach((key) => {
    key.addEventListener("click", e => {
        let action = key.dataset.action;
        if(action === "hello"){
            if(displayScreen.dataset.currentName){
                addToDisplay(`Hello, ${displayScreen.dataset.currentName}!`, displayScreen);
            }
            else{
                addToDisplay("Hello World!", displayScreen);
            }
            
        }
        if(action === "submit"){
            let inputName = document.querySelector(".input-name");
            displayScreen.dataset.currentName = inputName.value;
            addToDisplay(inputName.value, displayScreen);
            inputName.value = "";

        }
    })
});



