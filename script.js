// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// --- FUNZIONI ---

//ritorna un array di numeri random tra min e mex per size volte
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---MAIN ---
//generazione 5 numeri casuali da 1-20 univoci
let numbers = [];
while (numbers.length < 5){
    const randomNumer = getRndInteger(1,20);
    if(!numbers.includes(numbers)){
        numbers.push(randomNumer)
    }
}
// inseriemnto numeri sul dom
const boxes = document.querySelectorAll('.box');
for(let i=0; i< boxes.length; i++){
    boxes[i].append(numbers[i])
}