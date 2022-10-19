// creo un innerhtml con il prompt della parola
let outputWord = document.querySelector('.output_word');
let outputReverse = document.querySelector('.output_word_reverse');

let outputNumberResult = document.querySelector('.output_number');


// prendo i due bottoni pari e dispari
const pari = document.querySelector('.pari');
const dispari = document.querySelector('.dispari');

document.querySelector('.pari-dispari').addEventListener('click', function(){
    // mostro al click la scelta tra pari e dispari
    pari.classList.remove('hide');
    dispari.classList.remove('hide');
}); 


// aprire un prompt al click del bottone per il pari
function  numberPari(){
    const numberGame = parseInt(prompt('Inserisci un numero per giocare'));
    let randomNumberPc = Math.floor(Math.random() * 5 );
    
    let somma = randomNumberPc + numberGame;

    if(somma % 2 == 0){
        outputNumberResult.innerHTML = 'HAI VINTO';
    }else{
        outputNumberResult.innerHTML = 'HAI PERSO';
    }
    console.log(randomNumberPc);
    
    console.log(numberGame);
}

function  numberDispari(){
    const numberGame = parseInt(prompt('Inserisci un numero per giocare'));
    let randomNumberPc = Math.floor(Math.random() * 5 );
    
    let somma = randomNumberPc + numberGame;

    if(somma % 2 == 0){
        outputNumberResult.innerHTML = 'HAI PERSO';
    }else{
        outputNumberResult.innerHTML = 'HAI VINTO';
    }
    console.log(randomNumberPc);
    
    console.log(numberGame);
}



// aprire un prompt al click del bottone
function word(){
    const wordInsert = prompt('inserisci una parola per scoprire se /è palindroma');
    // reverse della parola inserita dall'utente
    let arrValue = wordInsert.split ('');
    let reveArrVal = arrValue.reverse(''); 
    let revString = reveArrVal.join('');
    // scrivo la parola inserita dall'utente nell'html 
    outputWord.innerHTML =  wordInsert;

    // do la condizione per cui se è uguale al contrario è palindroma
    // e quindi scrivo il risultato
    if(wordInsert == revString){
        outputReverse.innerHTML = 'La parola è palindroma';
    }else{
        outputReverse.innerHTML = 'La parola non è palindroma';
    }

}