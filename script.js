

// --- FUNZIONI ---

//ritorna un array di numeri random tra min e mex per size volte
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---MAIN ---
//generazione 5 numeri casuali da 1-20 univoci
let numbers = [];
while (numbers.length < 5) {
    const randomNumer = getRndInteger(1, 20);
    if (!numbers.includes(randomNumer)) {
        numbers.push(randomNumer)
    }
}
// inseriemnto numeri sul dom
const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].append(numbers[i])
}

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
let userPickedNumbers = [];
let entry;
setTimeout(function () {
    do {
        entry = Number(prompt('Inserisci numero da 1 a 20;'));
        userPickedNumbers.push(entry)
    } while (isNaN(entry) || entry < 1 || entry > 20 || userPickedNumbers.length < 5);
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    const score = [];
    for (let i = 0; i < userPickedNumbers.length; i++) {
        if (userPickedNumbers.includes(numbers[i])) {
            score.push(numbers[i]);
        }
    }
    console.log(score, `punteggio = ${score.length}`);
}, 3000);


