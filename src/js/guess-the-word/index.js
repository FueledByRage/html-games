import * as letterModule from './modules/letter-module.js';
import * as wordModule from './modules/word-module.js';

function setup(){
    const box = document.querySelector('.box');
    
    wordModule.setupFirstCurrentWord(box);

    window.addEventListener('keydown', async function(event){
        const currentLetter = letterModule.getCurrentLetter();
        await letterModule.setContentOnCurrentLetter(event.key);
        const nextLetter = letterModule.getNextLetterAfterCurrent();
        letterModule.setNewCurrentLetter(nextLetter);
        currentLetter.classList.replace('current-letter', 'letter');
    });
}

setup();