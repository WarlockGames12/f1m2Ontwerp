'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    let aftrekken = document.getElementById('aftrekken')
    let delen = document.getElementById('delen');
    
mijnButton.addEventListener('click', function(){
    let getal1 = document.getElementById('getal1').value;
    let getal2 = document.getElementById('getal2').value;
    
    getal1 = parseFloat(getal1);
    getal2 = parseFloat(getal2);
    
    telOp(getal1,getal2);
    vermenigvuldig(getal1, getal2);
    aftrekkene(getal1, getal2);
    delene(getal1,getal2);
})

function telOp(getal1,getal2){
    let antwoord = getal1 + getal2;
    console.log("optellen " + antwoord);
    optellen.innerHTML = antwoord;
}

function vermenigvuldig(getal1, getal2){
    let antwoord = getal1 * getal2;
    console.log("vermenigvuldig " + antwoord);
    vermenigvuldig.innerHTML = antwoord;
}

function aftrekkene(getal1, getal2){
    let antwoord = getal1 - getal2;
    console.log("aftrekken " + antwoord);
    aftrekkene.innerHTML = antwoord;
}

function delene(getal1, getal2){
    let antwoord = getal1 / getal2;
    console.log("delen " + antwoord);
    delene.innerHTML = antwoord;
}
