import * as wordModule from './word-module.js';

function getFirstLetter(word){
    const letters = word.getElementsByClassName('letter');
    const firstLetter = letters[0];

    return firstLetter;
}

function setupLettersAsCurrent(word){
    const letters = word.getElementsByClassName('letter');

    Array.from(letters).forEach(letter => {
        letter.classList.replace('letter', 'current-letters');
    });
}

function getNextLetterAfterCurrent(){
    const currentLetter = getCurrentLetter();
    const nextLetterOnWord = currentLetter.nextElementSibling;

    if(!nextLetterOnWord){
        wordModule.goToNextWord();

        const currentLetter = getCurrentLetter();
        currentLetter.classList.replace('current-letter', 'letter');

        const currentWord = wordModule.getCurrentWord();
    
        const firstLetter = getFirstLetter(currentWord);
        setNewCurrentLetter(firstLetter);
        return getCurrentLetter();
    }
    const nextLetter = currentLetter.nextElementSibling;

    return nextLetter;
}

function getCurrentLetter(){
    return document.querySelector('.current-letter');
}

function setNewCurrentLetter(letter){
    letter.className = 'current-letter';
}

function setContentOnCurrentLetter(content){
    return new Promise((resolve) => {
        const currentLetter = getCurrentLetter();
        currentLetter.textContent = content;
        resolve();
    });
}

export {
    getFirstLetter,
    setupLettersAsCurrent,
    getNextLetterAfterCurrent,
    getCurrentLetter,
    setNewCurrentLetter,
    setContentOnCurrentLetter
}