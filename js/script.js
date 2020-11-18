let headerMenuBtn = document.getElementById("headerMenuBtn");
let headerLocationBtn = document.getElementById("headerLocationBtn");
let menuBtn = document.getElementById("menuBtn");
let injectHere = document.getElementById("injectHere");
let footer = document.getElementById("footer");

menuBtn.addEventListener("click", function(){
    loadData("../pages/menu.html","menuPage");
});

headerMenuBtn.addEventListener("click", function(){
    loadData("../pages/menu.html","menuPage");
    scrollToMenu();
});

headerLocationBtn.addEventListener("click", function(){
    scrollToFooter();
});

function loadData(url,dataType){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            
            injectHere.innerHTML = this.responseText;
          
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function scrollToMenu(){
    injectHere.scrollIntoView(true);
}

function scrollToFooter(){
    footer.scrollIntoView(false);
}