
const textoprompt = prompt(`ingresar el recorrido en metros:`, ``);

var transporte = ``;

if (textoprompt >= 0 && textoprompt <= 1000){
    transporte= `a pie`;
}else if (textoprompt>1000 && textoprompt<=10000){
    transporte= `a bicicleta`;
}else if (textoprompt>10000 && textoprompt<=30000){
    transporte= `en colectivo`;
}else if (textoprompt>30000 && textoprompt<=100000){
    transporte= `en auto`;
}else if (textoprompt>100000){
    transporte= `en avion`;
}

document.write(`Si la distancia por recorrer es ${textoprompt} metros. Se debe viajar ${transporte}.`);