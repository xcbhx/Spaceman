/*----- constants -----*/
// max wrong guesses
const WORDS = [
    'Software Engineer',
    'Funeral Director',
    'Interior Decorator',
    'President',
    'Photographer',
];

let IMAGES = [
    "img/spaceman-filmstrip.png/spaceman-0.jpg",
    "img/spaceman-filmstrip.png/spaceman-1.jpg",
    "img/spaceman-filmstrip.png/spaceman-2.jpg", 
    "img/spaceman-filmstrip.png/spaceman-3.jpg", 
    "img/spaceman-filmstrip.png/spaceman-4.jpg", 
    "img/spaceman-filmstrip.png/spaceman-5.jpg", 
    "img/spaceman-filmstrip.png/spaceman-6.jpg",
]

/*----- app's state (variables) -----*/
let randomWord; // array of 3 (horizontal) row 
// let turn,
let winner; // null = no winner; 
let guesses;
/*----- cached element references -----*/
// const playAgainBtn = document.querySelector('button');
// const boardLetters = [...document.querySelctorAll('#board > button')];
const imageEl = document.getElementById('spaceman');
const wordEl = document.getElementById('wordGuess');

// const imgPath = `imgs/spaceman-0${wrongGuesses.length}`;

/*----- event listeners -----*/
document.getElementById('letters').addEventListener('click', handleChoice);
// playAgainBtn.addEventListener('click', initialize);

/*----- functions -----*/
init ();


function init() {
    let rndIdx = Math.floor(Math.random() * WORDS.length)
    randomWord = WORDS[rndIdx].split('');
    // console.log(randomWord);
    guesses = 0;
    winner = null;
    randomWord.forEach(function () {
        wordEl.appendChild(document.createElement('div'))
    })
    render(); //invoke render 
}

function render() {
    imageEl.src = IMAGES[guesses];
    let chars = [...document.querySelectorAll('#wordGuess > div')];
    console.log(wordEl, chars);
    randomWord.forEach(function (letter, idx) {
        chars[idx].innerHTML = ' '; 
        // chars[idx].innerHTML = letter; 
    })
    console.log([...document.querySelectorAll('#wordGuess > div')]);
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