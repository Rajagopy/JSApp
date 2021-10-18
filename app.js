var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#textthing");
var outputText = document.querySelector("#output_display");

//outputText.innerText = "THIS ACTUALLY WORKS MATE"

// var api_url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var api_url = "https://api.funtranslations.com/translate/shakespeare.json";
function getUrl(text){
    return api_url+ "?" + "text=" + text
}
function errorman(error){
    console.log("error occured:", error);
}

function clicker(){

    var inp = inputText.value;
    console.log(getUrl(inp));
    fetch(getUrl(inp))
        .then(response => response.json())
        .then(json => {
            outputText.innerText = json.contents.translated
        })
        .catch(errorman)

}


btnTranslate.addEventListener("click", clicker);