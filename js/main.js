/*----- constants -----*/
const maxWrong =  6; 

const WORDS = [
    'software engineer',
    'funeral director',
    'interior decorator',
    'president',
    'photographer',
    'chief',
    'judge',
    'fireman',
];


const IMAGES = [
    "img/spaceman-filmstrip.png/spaceman-0.jpg",
    "img/spaceman-filmstrip.png/spaceman-1.jpg",
    "img/spaceman-filmstrip.png/spaceman-2.jpg", 
    "img/spaceman-filmstrip.png/spaceman-3.jpg", 
    "img/spaceman-filmstrip.png/spaceman-4.jpg", 
    "img/spaceman-filmstrip.png/spaceman-5.jpg", 
    "img/spaceman-filmstrip.png/spaceman-6.jpg",
];

/*----- app's state (variables) -----*/
let randomWord; // array of 3 (horizontal) row 
// let turn,
let gameStatus; // null = no winner; W = win; L = lose
let guess;
let wrongGuesses;


/*----- cached element references -----*/
// const playAgainBtn = document.querySelector('button');
// const boardLetters = [...document.querySelctorAll('#board > button')];
const imageEl = document.querySelector('img');
const wordEl = document.getElementById('wordGuess');
const messageEl = document.getElementById('message');
const plyBtn = document.getElementById('playAgain');
const letterButton = [...document.querySelectorAll('section > button')];


/*----- event listeners -----*/
document.querySelector('section').addEventListener('click', handleChoice);
plyBtn.addEventListener('click', init);


/*----- functions -----*/
init ();


function init() {
    wrongGuesses = [];
    let rndIdx = Math.floor(Math.random() * WORDS.length)
    randomWord = WORDS[rndIdx].toUpperCase().split('');
    // console.log(randomWord);
    guess = randomWord.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
    render(); //invoke render 
}

function render() {
    renderMessage()
    imageEl.src = `${IMAGES[wrongGuesses.length]}`;
    wordEl.textContent = guess.join('');
    renderButton();
}

function renderMessage() {
    if (gameStatus === 'W') {
        messageEl.textContent = `Spaceman is off to Explore!`;
    } else if (gameStatus === 'L') {
        messageEl.textContent = `Out of Space, back to Earth! The word is ${randomWord.join('')}`;
    } else {
        messageEl.textContent = `${maxWrong - wrongGuesses.length} Wrong guesses remain, keep trying!`
    }
}

function renderButton() {
    letterButton.forEach(function(btn) {
        const ltr = btn.textContent;
        // if wrongGuesses includes our letter add class name of wrong
        if (wrongGuesses.includes(ltr)) {
          btn.className = 'wrong';
        } else if (guess.includes(ltr)) {
          btn.className = 'correct';
        } else {
          btn.className = '';
        }
    });
    plyBtn.style.visibility = gameStatus ?  'visible' : 'hidden';
}

function handleChoice(evt) {
    const ltr = evt.target.textContent;
    console.log(ltr);
    if (
        gameStatus ||
        //guard to make button  not clickable
        !letterButton.includes(evt.target) ||
        wrongGuesses.includes(ltr) ||
        guess.includes(ltr) ||
        wrongGuesses.length === 6
      )  return;

    if (randomWord.includes(ltr)) {
        // correct guess
        randomWord.forEach(function(char, idx) {
            if (char === ltr) guess[idx] = ltr;
        });
    } else {
        wrongGuesses.push(ltr);
    }
    gameStatus = getGameStatus();
    render();
}

function getGameStatus() {
    if (!guess.includes('_')) return 'W';
    // if wrongGuesses.length is > maxWrong return 'L'
    if (wrongGuesses.length === maxWrong) return 'L';
    return null;
}



