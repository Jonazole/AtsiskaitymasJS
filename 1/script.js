/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertToPound(event) {
   
    const kgInputValue = event.target.value;
    const outputElement = document.getElementById('output') ;
    if (kgInputValue) {
        const kilo = Number(kgInputValue);
        const pound = (kilo * 2.2046);
        outputElement.innerText = pound, "lb";
    
    } else {
        outputElement.innerText = '';
    }
}
document.getElementById('search').addEventListener('insert', convertToPound);

function convertToGrams(e) {
    console.log('convert');
    const kgInputValue = e.target.value;
    const outputElement = document.getElementById('grams') ;
    if (kgInputValue) {
        const kilo = Number(kgInputValue);
        const grams = (kilo * 1000);
        outputElement.#grams.innerText = grams;
    
    } else {
        outputElement.innerText = '';
    }
}
document.getElementById('search').addEventListener('input', convertToPound);

