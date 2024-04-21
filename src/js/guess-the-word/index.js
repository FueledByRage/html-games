
function setup(){
    const box = document.querySelector('.box');
    
    setupFirstCurrentWord(box);

    window.addEventListener('keydown', function(event){
        console.log(event);
    });
}


function setupFirstCurrentWord(box){
    const firstWord = getFirstWord(box);

    setupLettersAsCurrent(firstWord);

    setNewCurrentWord(firstWord);
}


function getFirstWord(box){
    const words = box.getElementsByClassName('word');
    const firstWord = words[0];
    
    return firstWord;    
}

function setupLettersAsCurrent(word){
    const letters = word.getElementsByClassName('letter');

    Array.from(letters).forEach(letter => {
        letter.classList.replace('letter', 'current-letters');
    });
}

function getCurrentWord(){
    return document.querySelector('.current-word');
}

function getCurrentCell(){}

function setNewCurrentWord(word){
    word.classList.replace('word', 'current-word');
}

function setNewCurrentCell(){}

setup();