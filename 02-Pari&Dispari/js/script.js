// Chiedere all'utente di digitare un num pari o dispari
let choice = prompt("Scegli 'pari' o 'dispari':");

//Chiedere all'utente di digitare un num da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

//Generare un num casuale per il computer con utilizzo di funzione
function generateRandomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}
 // Chiamata della funzione e stampa
let numeroComputer = generateRandomNumber();
console.log("Il computer ha scelto:" + numeroComputer);

//Somma dei due numeri
let sum = numeroUtente + numeroComputer;
console.log("La somma è " + sum);

//Stabilire se la somma dei due numeri è pari o dispari
function isEven(num){
    return num % 2 === 0
}
let result;
if (isEven(sum)){
    result = 'pari';
}
    else{
        result = 'dispari';
    }

console.log ("La somma è" + result);

//Dichiarare il vincitore
    //Confrontare result con choice
if (result === choice){
    console.log("Hai vinto");
} 
   else{
        console.log("Ha vinto il computer");
    }