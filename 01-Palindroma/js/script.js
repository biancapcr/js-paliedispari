// Chiedere all'utente l'inserimento della parola
let word = prompt("Inserisci una parola");
 
// Creare funzione per verificare se la parola è palindroma o meno
     // Dichiarazione funzione con parametro 'text'
function isPalindrome(text){
    // Inizializzazione stringa vuota inversa
    let reversed = "";
    //Ciclo for per cui 'i' parte dall'ultimo indice di text e ad ogni iterazione decrementa fino a 0
    for(let i=text.lenght - 1; i>= 0; i--){
        // Costruzione parola invertita
        reversed +=text[i];
    }
    // Confronto stringa inversa con quella "originale"
    return reversed === text;
}