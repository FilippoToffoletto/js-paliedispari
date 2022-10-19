// creo un innerhtml con il prompt della parola
let outputWord = document.querySelector('.output_word');
let outputReverse = document.querySelector('.output_word_reverse');


// prendo i due bottoni pari e dispari
const pari = document.querySelector('.gioco');
const dispari = document.querySelector('.gioco2');

document.querySelector('.pari-dispari').addEventListener('click', function(){
    // mostro al click la scelta tra pari e dispari
    pari.classList.remove('hide');
    dispari.classList.remove('hide');
}); 




// aprire un prompt al click del bottone
function  number(){
    const numberGame = parseInt(prompt('Inserisci un numero per giocare'));
    let randomNumberPc = Math.floor(Math.random() * 5);
    if(numberGame % 2 == 0){
        console.log('pari');
    }else{
        console.log('dispari');
    }

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