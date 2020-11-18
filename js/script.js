
// Kenneth Martinez
// Trevor Womack
// Dylan McFarlin
// 11-17-2020
// Project #4
// Business Redevelopment Site 

let headerBtn = document.getElementById("headerBtn");
let menuBtn = document.getElementById("menuBtn");
let injectHere = document.getElementById("injectHere");
let menuBool = false;

menuBtn.addEventListener("click", function(){
    loadData("../pages/menu.html","menuPage");
});

headerBtn.addEventListener("click",function(){
    loadData("../pages/menu.html","menuPage");
})

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