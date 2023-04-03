/*----- constants -----*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = [];

/*----- state variables -----*/
let countDown;      // Keep track how many turns left before end game
let alphabetJail;   // a list storing used and non-reuseable characters
let iceBoxCategory; // a category selector
let alphabetBoard;  // an array of the alphabet
let airLock;        // door that will open when the spacemans give up or loses
let spaceMan;       // our player character
let puzzle;         // puzzle
let hint            // hint for our player


/*----- cached elements  -----*/
const alphabetButtons = document.getElementById('alpha-button');
//letters = document.createElement('ul');
const ejectButton = document.getElementById('restart');
const messageEl = document.querySelector('h2');

/*----- event listeners -----*/


/*----- functions -----*/

function initialize(){
    countDown = 10;
    puzzle = ""; 
    alphaButtons.innerHTML = alphaButtons();
}

initialize();

function alphaButtons(){
    let buttonsHTML = document.getElementById("alpha-buttons")
    for(let i = 0; i< alphabet.length; i++){
        buttonsHTML.innerHTML += `<button> ${alphabet[i]} </button>`
    }
        return buttonsHTML;
}