let menuBtn = document.getElementById("menuBtn");
let injectHere = document.getElementById("injectHere");


menuBtn.addEventListener("click", function(){
    loadData("../pages/menu.html","menuPage");
});

function loadData(url,dataType){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            injectHere.innerHTML = this.responseText;
          
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}