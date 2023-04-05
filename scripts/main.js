/*----- constants -----*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = ['nyc', 'sfo', 'tok', 'mosc'];

/*----- state variables -----*/
let countDown;      // Keep track how many turns left before end game
let alphabetJail;   // a list storing used and non-reuseable characters
let iceBoxCategory; // a category selector
let airLock;        // door that will open when the spacemans give up or loses
let spaceMan;       // our player character
let puzzle = "";         // puzzle
let answer = [];    //answer
let hint;           // hint for our player


/*----- cached elements  -----*/
const alphabetButtons = document.getElementById('alpha-buttons');
const ejectButton = document.getElementById('restart');
const hintButton = document.getElementById('hint');
const puzzleContainer = document.getElementById('puzzleContainer');
const countDisplay = document.getElementById('count');
//const puzzleLetter = document.getElementById('puzzleLetter');

/*----- event listeners -----*/
alphabetButtons.addEventListener('click', handleEvent);
ejectButton.addEventListener('click', initialize);
alphabetButtons.addEventListener('click', guess);


/*----- functions -----*/

function alphaButtons(){
    let buttonsHTML = document.getElementById("alpha-buttons")
    for(let i = 0; i< alphabet.length; i++){
        buttonsHTML.innerHTML += `<button class = "alphabet " id = "${alphabet[i]}"> ${alphabet[i]}</button>`
    }
}

//handelEvent() checks if the event target meets specific conditions
// if event is a button, it will add a class to the button
// if the innertext of the seleceted matches the puzzle word, the character will appear
//
function handleEvent(e){
    const isButton = e.target.nodeName === 'BUTTON';
    if(isButton){
        const buttonId = document.getElementById(e.target.id);
        buttonId.classList.add('selected');
        answer.push(buttonId.id);
        countDown -= 1;
    }
    console.log(answer+ ': answer array');
}

function guess(e){
    let puzzleArray = puzzle.split("");
    console.log(puzzleArray + ": array for puzzle");
    const guessWord = e.target.id;
    console.log(guessWord + ": guess word");

    const containsAll = (answerArray, puzzArr) => 
        puzzArr.every(puzzLetter => answerArray.includes(puzzLetter));

    if(containsAll(answer, puzzleArray)){
    //if(answer.sort().join(',') === puzzleArray.sort().join(',')){
        console.log('Access Granted');
        countDisplay.innerText = "Access Granted";
    }else{
        if(puzzleArray !== puzzleArray.includes(guessWord)){
            const lowerCount = document.getElementById('countNumber');
            lowerCount.innerText = countDown;
        }
    }
}

//categorySelect() randomly selects a number from the categories array
// returns the randomn number index from the categories array.
function categorySelect(){
    const randomCategory = Math.floor(Math.random() * categories.length)
    const selectedCategory = categories[randomCategory];
    return selectedCategory;
}

// Passing the puzzle word and creating a div for each character
//adding a class to each element 'puzzleLetter' and appending to the page; 
function generatePuzzleDisplay(word){
    let wordArray = word.split("");
    for(let i = 0; i < wordArray.length; i++){
        const letterHolder = document.createElement('div');
        letterHolder.setAttribute('id', 'puzzleLetter');
        letterHolder.innerText = wordArray[i]; 
        puzzleContainer.appendChild(letterHolder);
    }
    //console.log(wordArray.indexOf(' '));
    console.log(wordArray);
    return wordArray
}

function initialize(){
    puzzle = categorySelect();
    countDown = puzzle.length + 5;
}

function render(){
    alphaButtons()
    generatePuzzleDisplay(puzzle)
}


initialize();
render();
