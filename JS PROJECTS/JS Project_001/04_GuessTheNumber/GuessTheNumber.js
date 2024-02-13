var randomNumber =parseInt(( Math.random()*100+ 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =document.createElement('p');


let pervGuess = []
let numGuess = 1

let palyGame =true;

if(palyGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        //console.log(guess);
        validateGuess(guess);
    });
}

// user input validation
function validateGuess(guess) {
     if(isNaN(guess)) {
        alert('Please enter a valid number NAN');
     }
     else if(guess < 1) {
        alert('Please enter a valid number more than 1');
     }
     else if(guess > 100) {
        alert('Please enter a valid number less than 100');
     }
     else {
        pervGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            dispayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        dispayMessage('Tou guessed it right ');
        endGame();
    }
    else if (guess < randomNumber){
        dispayMessage(`Number is too low`)
    }
    else {
        dispayMessage(`number is  too high`)
    }
}

function dispayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt( Math.random()*100+ 1);
        pervGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        palyGame = true;
        
    });
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">Start New Game<h2>`;
    startOver.appendChild(p);
    palyGame=false;
    newGame();
}

