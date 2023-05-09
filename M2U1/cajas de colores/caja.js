let cajas =
           document.getElementsByClassName("caja");
for(let i = 0; i < cajas.length; i++) {
    cajas[i].addEventListener("click",function(){
    let buttonstyle = getComputedStyle(this);
    let buttonBgColor = 
              buttonstyle["backgroundColor"];
    document.body.style.backgroundColor
                            = buttonBgColor;
});  }           