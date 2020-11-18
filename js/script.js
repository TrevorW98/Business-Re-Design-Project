let menuBtn = document.getElementById("menuBtn");
let injectHere = document.getElementById("injectHere");
let menuBool =false;

menuBtn.addEventListener("click", function(){
    loadData("../pages/menu.html","menuPage");
});

function loadData(url,dataType){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if(menuBool ==false){
                injectHere.innerHTML = this.responseText;
                menuBool=true;
            }else{
                injectHere.innerHTML ="";
                menuBool=false;
            }
          
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}