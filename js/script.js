


// creo un innerhtml con il prompt della parola
let outputWord = document.querySelector('.output_word');
let outputReverse = document.querySelector('.output_word_reverse');


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

// const parolaInversa = wordInsert.reverse();
// if(parolaInversa === wordInsert){
//     console.log('pari');
// }else{
//     console.log('dispari');
// }




// aprire un prompt al click del bottone
function  number(){
    const numberGame = parseInt(prompt('Inserisci un numero per giocare'));

    
    console.log(numberGame);
}

