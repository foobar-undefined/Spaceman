/*----- constants -----*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = ['NY C', 'SFO', 'TOKYO', 'MOSCOW'];

/*----- state variables -----*/
let countDown;      // Keep track how many turns left before end game
let alphabetJail;   // a list storing used and non-reuseable characters
let iceBoxCategory; // a category selector
let airLock;        // door that will open when the spacemans give up or loses
let spaceMan;       // our player character
let puzzle;         // puzzle
let answer = [];    //answer
let hint;           // hint for our player


/*----- cached elements  -----*/
const alphabetButtons = document.getElementById('alpha-buttons');
const ejectButton = document.getElementById('restart');
const hintButton = document.getElementById('hint');
const puzzleContainer = document.getElementById('puzzleContainer');
const countDisplay = document.getElementById('count-number');

/*----- event listeners -----*/
alphabetButtons.addEventListener('click', handleEvent);
ejectButton.addEventListener('click', initialize);

/*----- functions -----*/

function alphaButtons(){
    let buttonsHTML = document.getElementById("alpha-buttons")
    for(let i = 0; i< alphabet.length; i++){
        buttonsHTML.innerHTML += `<button class = "alphabet " id = "${alphabet[i]}"> ${alphabet[i]}</button>`
    }
}

function handleEvent(e){
     const isButton = e.target.nodeName === 'BUTTON';
    if(isButton){
        const buttonId = document.getElementById(e.target.id);
        buttonId.classList.add('selected');
        //buttonId.setAttribute('disabled', true);
        answer.push(buttonId.id);
        countDown -= 1;
        console.log(answer);
    }
    return;
}

function categorySelect(){
    const randomCategory = Math.floor(Math.random() * categories.length)
    const selectedCategory = categories[randomCategory];
    return selectedCategory;
}

function generatePuzzleDisplay(word){
    let len = puzzle.length;
    for(let i = 0; i < len; i++){
        const letterHolder = document.createElement('div');
        letterHolder.setAttribute('id', 'puzzleLetter');
        puzzleContainer.appendChild(letterHolder);
    }
    console.log(len);
    console.log(word);
    return word
}

function initialize(){

    countDown = 10;
    puzzle = categorySelect();
}

function render(){
    alphaButtons()
    generatePuzzleDisplay(puzzle)
    countDisplay.innerText = countDown;
}
//handle guess
function guess(e){
    let selectedLetter = e.target.textContent
    for(let i = 0; i < puzzle.length; i++){
        if(puzzle[i] === selectedLetter){
            //display in board
        }
    }
}

initialize();
render()
