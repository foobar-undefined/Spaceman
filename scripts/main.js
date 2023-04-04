/*----- constants -----*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = ['NYC', 'SFO', 'TOKYO', 'MOSCOW'];

/*----- state variables -----*/
let countDown;      // Keep track how many turns left before end game
let alphabetJail;   // a list storing used and non-reuseable characters
let iceBoxCategory; // a category selector
let airLock;        // door that will open when the spacemans give up or loses
let spaceMan;       // our player character
let puzzle;         // puzzle
let hint;            // hint for our player


/*----- cached elements  -----*/
const alphabetButtons = document.getElementById('alpha-buttons');
const ejectButton = document.getElementById('restart');
const hintButton = document.getElementById('hint');
const messageEl = document.querySelector('h2');
const countDisplay = document.getElementById('count');

/*----- event listeners -----*/
alphabetButtons.addEventListener('click', handleEvent);
ejectButton.addEventListener('click', initialize);

/*----- functions -----*/

function alphaButtons(){
    let buttonsHTML = document.getElementById("alpha-buttons")
    for(let i = 0; i< alphabet.length; i++){
        buttonsHTML.innerHTML += `<button class = "${alphabet[i]}" id = "${alphabet[i]}"> ${alphabet[i]}</button>`
    }
}

function handleEvent(e){
     const isButton = e.target.nodeName === 'BUTTON';
    if(isButton){
        const buttonId = document.getElementById(e.target.id);
        buttonId.classList.add('selected');
        console.log(isButton);
    }
    return;
}




function initialize(){
    countDown = 10;
    puzzle = "";
}

initialize();
alphaButtons();