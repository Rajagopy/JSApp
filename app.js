var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#textthing");
var outputText = document.querySelector("#outie");

//outputText.innerText = "THIS ACTUALLY WORKS MATE"
function clicker(){

    outputText.innerText = "Hi " + inputText.value;
}

btnTranslate.addEventListener("click", clicker);