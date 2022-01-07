var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#textthing");
var outputText = document.querySelector("#output_display");



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
            outputText.innerHTML = "<div style=\"display:block;\" ><br>"+"<p style=\"text-align: center; font-weight:bold; font-size:larger;\">"+json.contents.translated+"</p><br>"+"</div>"        })
        .catch(errorman)

}


btnTranslate.addEventListener("click", clicker);