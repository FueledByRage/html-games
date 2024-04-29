import * as letterModule from './letter-module.js';

function setupFirstCurrentWord(box){
    const firstWord = getFirstWord(box);
    const firstLetter = letterModule.getFirstLetter(firstWord);

    letterModule.setupLettersAsCurrent(firstWord);
    setNewCurrentWord(firstWord);
    letterModule.setNewCurrentLetter(firstLetter);
}


function getFirstWord(box){
    const words = box.getElementsByClassName('word');
    const firstWord = words[0];
    
    return firstWord;    
}

function getCurrentWord(){
    return document.querySelector('.current-word');
}


function goToNextWord(){
    const currentWord = getCurrentWord();
    
    setNextWordAsCurrent(currentWord);
}

function setNextWordAsCurrent(currentWord){
    const nextWord = currentWord.nextElementSibling;

    setNewCurrentWord(nextWord);
    currentWord.classList.replace('current-word', 'word');
}

function setNewCurrentWord(word){
    word.classList.replace('word', 'current-word');
}

export {
    setupFirstCurrentWord,
    getCurrentWord,
    goToNextWord
}