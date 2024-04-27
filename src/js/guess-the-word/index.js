

function setupFirstCurrentWord(box){
    const firstWord = getFirstWord(box);
    const firstLetter = getFirstLetter(firstWord);

    console.log(firstLetter);

    setupLettersAsCurrent(firstWord);
    setNewCurrentWord(firstWord);
    setNewCurrentLetter(firstLetter);
}

function getFirstLetter(word){
    const letters = word.getElementsByClassName('letter');
    const firstLetter = letters[0];

    return firstLetter;
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

function getNextLetterAfterCurrent(){
    const currentLetter = getCurrentLetter();
    const nextLetter = currentLetter.nextElementSibling;

    return nextLetter;
}

function getCurrentLetter(){
    return document.querySelector('.current-letter');
}

function setContentOnCurrentLetter(content){
    const currentLetter = getCurrentLetter();
    currentLetter.textContent = content;
}

function handleKeyPress(event){
    const content = event.key;
    setContentOnCurrentLetter(content);
}


function setNewCurrentWord(word){
    word.classList.replace('word', 'current-word');
}

function setNewCurrentLetter(letter){
    letter.classList.replace('letter', 'current-letter');
}

function setup(){
    const box = document.querySelector('.box');
    
    setupFirstCurrentWord(box);
    

    window.addEventListener('keydown', function(event){
        const currentLetter = getCurrentLetter();
        setNewCurrentLetter(currentLetter);
        const nextLetter = getNextLetterAfterCurrent();
        setNewCurrentLetter(nextLetter);
        setContentOnCurrentLetter(event.key);
        console.log("okay dokay");
    });
}

setup();