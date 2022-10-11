/*----- constants -----*/
const maxWrong =  6; 

const WORDS = [
    'Software Engineer',
    'Funeral Director',
    'Interior Decorator',
    'President',
    'Photographer',
];

// const letterBank = [
//     'A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I',
//     'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
//     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// ]

// const wrongSe = WORDS[0];


let IMAGES = [
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
const letterButton = [...document.querySelectorAll('section > button')]

// const imgPath = `imgs/spaceman-0${wrongGuesses.length}`;

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
    imageEl.src = `${IMAGES[wrongGuesses.length]}`;
    wordEl.textContent = guess.join('');
}


function handleChoice(evt) {
    if (evt.target.tagName !== 'BUTTON') return;
    guesses += 1; 
    render();
}



// const MAX_LETTER = parseInt();
// const MAX_Wrong = 6; 
// const secretLetter = Math.floor(Math.random() * MAX_LETTER) + 1;

// let guessLetter;
// let letterWrong = 0; 

// // while (guessLetter !== secretLetter) {
//     guessLetter = prompt('One leg has been removed - Keep trying!');
    // guessLetter = parseInt(guessLetter);
    // if (guessLetter < secretLetter) {
    //     console.log('')
    // }
// }