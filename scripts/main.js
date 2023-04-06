/*----- constants -----*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const data = [{
    categories: "VideoGame",
    question: "Who is the titular princess of The Legend of Zelda?",
    answer: "princess zelda",
    hint: ""
},
{
    categories: "VideoGame",
    question: "What was the first home console released by Nintendo?",
    answer: "nes",
    hint: ""
}, 
{
    categories: "VideoGame",
    question: "What is the name of the first game released for the Nintendo Game Boy?",
    answer: "tetris",
    hint: ""
},
{
    categories: "VideoGame",
    question: "What is the name of the fictional land in which The Legend of Zelda is set?",
    answer: "hyrule",
    hint: ""
},
{
    categories: "VideoGame",
    question: "Which Nintendo game series features a yellow creature named Pikachu who can shoot lightning bolts?",
    answer: "pokemon",
    hint: ""
}
];

//const categories = ['ny c', 'oso o', 'tos dsdk', 'mcu'];

/*----- state variables -----*/
let countDown;      // Keep track how many turns left before end game
//let alphabetJail;   // a list storing used and non-reuseable characters
let iceBoxCategory; // a category selector
let airLock;        // door that will open when the spacemans give up or loses
let spaceMan;       // our player character
let puzzle = "";     // puzzle
let answer = [];    //answer
let hint;           // hint for our player
let tries;          // amount of tires left
let question;
let count;

const alphabetButtons = document.getElementById('alpha-buttons');
const ejectButton = document.getElementById('restart');
const hintButton = document.getElementById('hint');
const puzzleContainer = document.getElementById('puzzleContainer');
const countMessage = document.getElementById('count');
const countDisplay = document.getElementById('countNumber');
const categoryMessage = document.getElementById('categoryName')
const questionHere = document.querySelector('h4');
let puzzleLetter = document.querySelectorAll('puzzleLetter');
let specialCharacter = document.getElementById('special');

/*----- event listeners -----*/
alphabetButtons.addEventListener('click', handleEvent);
ejectButton.addEventListener('click', initialize);
alphabetButtons.addEventListener('click', guess);
hintButton.addEventListener('click', guessHint);


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
        document.querySelector(".selected").disabled = true;
        answer.push(buttonId.id);
        for(let i = 0; i < puzzle.length; i++){
            if(buttonId.id === puzzle[i]){
                puzzleLetter[i].innerText = puzzle[i];
            }
        }
    }
    console.log(answer+ ': answer array');
}

//guess() handles each letter
function guess(e){
    let puzzleArray = puzzle.split("");
    const guessWord = e.target.id;
    if(isTrue()){
        countMessage.innerText = "Access Granted";
        
    }else{
        if(puzzleArray !== puzzleArray.includes(guessWord)){
            //countDisplay.innerText = countDown;
            countDown -=1 ;
            countDisplay.innerText = countDown;
            if(countDown === 0){
                countMessage.innerText = "GAME OVER";

            }
        }
    }
}

// function isClicked(){
//     if(button.classList.contains("selected")) return true;
// }

// function accessGranted(){
//     count++
//     if(count === 3){
//         countMessage.innerText = "Access Granted";
//     }
// }

function guessHint(e){
    const buttonId = document.getElementById(e.target.id);
    buttonId.classList.add('selected');
    document.querySelector(".selected").disabled = true;
    countDown += 1;
    countDisplay.innerText = countDown;
    //let hintAnswer = data[iceBoxCategory].hint
}

//categorySelect() randomly selects a number from the categories array
// returns the randomn number index from the categories array.
function categorySelect(){
    const randomCategory = Math.floor(Math.random() * data.length)
    return randomCategory;
}

//isTrue() checks if all alphabet selected contains the puzzle word
//returns true
function isTrue(){
    let puzzleArray = puzzle.split("");
    let filteredPuzzle = puzzleArray.filter(function(specialChar){
        return /\S/.test(specialChar);
    });

    const containsAll = (answerArray, puzzArr) => 
        puzzArr.every(puzzLetter => answerArray.includes(puzzLetter));

    console.log(containsAll(answer, filteredPuzzle));
    if(containsAll(answer,filteredPuzzle)) return true;
}


// Passing the puzzle word and creating a div for each character
//adding a class to each element 'puzzleLetter' and appending to the page; 
function generatePuzzleDisplay(word){
    let wordArray = word.split("");
    for(let i = 0; i < wordArray.length; i++){
        const letterHolder = document.createElement('div');
        if(wordArray[i] === " " || wordArray[i]=== "-" ){
             letterHolder.setAttribute('class', 'puzzleLetter');
             letterHolder.setAttribute('id', 'special');
             puzzleContainer.appendChild(letterHolder);
         }else{        
            letterHolder.setAttribute('class', 'puzzleLetter');
            puzzleContainer.appendChild(letterHolder);
        }
        puzzleLetter = document.querySelectorAll('.puzzleLetter');
    }
    console.log(wordArray);
    return wordArray
}

function initialize(){
    iceBoxCategory = categorySelect();
    puzzle = data[iceBoxCategory].answer;
    console.log(puzzle);
    questionHere.innerHTML = data[iceBoxCategory].question;
    categoryMessage.innerHTML = data[iceBoxCategory].categories;
    hint = data[iceBoxCategory].hint;
    countDown = puzzle.length + 1;
    count = 0
    answer = [];
    render()
}

function render(){
    alphabetButtons.innerHTML = "";
    alphaButtons()
    puzzleContainer.innerHTML = ""
    generatePuzzleDisplay(puzzle);
    countMessage.innerText = "COUNT DOWN";
    countDisplay.innerText = countDown;
}

initialize();
