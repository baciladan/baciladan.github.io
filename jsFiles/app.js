// Typing Animation

const keyWords = ['Coding...', 'Design...', 'Imrpovement...', 'Passion...'];

let wordCount = 0;
let letterCount = 0;

let currentText = '';


(function type(){

    
    if(wordCount === keyWords.length ){
        wordCount = 0;
    }
    currentText = keyWords[wordCount];
    let letter = currentText.slice(0, ++letterCount);

    document.getElementById('typing').innerText = letter;

    if(letter.length === currentText.length){
        wordCount++;
        letterCount = 0;
    }
    setTimeout(type, 300);

}());

