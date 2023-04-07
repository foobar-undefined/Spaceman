/*----- constants -----*/

const alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
'z', 'x', 'c', 'v', 'b', 'n', 'm'];



const data = [{
    categories: "Video Game",
    question: "Who is the protagonist in Legenda of Zelda?",
    answer: "link",
    hint: "imgs/loz.gif"
},
{
    categories: "Video Game",
    question: "What was the first home console released by Nintendo?",
    answer: "nes",
    hint: "imgs/nes-nintendo-entertainment-system.gif"
}, 
{
    categories: "Video Game",
    question: "What is the name of the first game released for the Nintendo Game Boy?",
    answer: "tetris",
    hint: "imgs/tetris-game-boy.gif"
},
{
    categories: "Video Game",
    question: "Who is Sonic’s sidekick?",
    answer: "tails",
    hint: "imgs/tails.gif"
},
{
    categories: "VideoGame",
    question: "What is the name of a yellow mascot of the nintendo game, 'Pokemon'?",
    answer: "pikachu",
    hint: "imgs/94f.gif"
}
,{
    categories: "History",
    question: "In which country were cuckoo clocks invented?",
    answer: "germany",
    hint: "imgs/giphy.gif"
}
,{
    categories: "History",
    question: "The famous St. Peter’s Basilica is located in which city?",
    answer: "vatican",
    hint: "imgs/vatican.gif"
}
,{
    categories: "History",
    question: "Louis XIV was known as the ‘what’ King?",
    answer: "sun",
    hint: "imgs/sun.gif"
}
,{
    categories: "History",
    question: "The Samurai were warriors in which Asian country?",
    answer: "japan",
    hint: "imgs/japan.gif"
},{
    categories: "History",
    question: "Leonardo da Vinci painted what in c.1503-1506?",
    answer: "mona lisa",
    hint: "imgs/monalisa.gif"
},{
    categories: "Movies",
    question: "After the success of which film did sales of a particular pet animal increase?",
    answer: "ratatouille",
    hint: "imgs/ratatouille.gif"
},{
    categories: "Movies",
    question: "In which film was the fake snow used actually asbestos-based?",
    answer: "wizard of oz",
    hint: "imgs/wizardofOz.gif"
},{
    categories: "Movies",
    question: "In The Matrix, does Neo take the blue pill or the red pill?",
    answer: "red",
    hint: "imgs/red.gif"
},{
    categories: "Movies",
    question: "Michael Jordan starred alongside Bugs Bunny in which film?",
    answer: "space jam",
    hint: "imgs/spacejam.gif"
},{
    categories: "Coding trivia",
    question: "JavaScript wasn’t always called that. What other names has it been released under?",
    answer: "mocha",
    hint: "imgs/mocha.jpeg"
},{
    categories: "Coding trivia",
    question: "Who created JavaScript?",
    answer: "netscape",
    hint: "imgs/netscape.png"
},
{
    categories: "Coding trivia",
    question: "What word is not a reserved word in JavaScript?",
    answer: "undefined",
    hint: "imgs/undefinedmeme.webp"
}
,{
    categories: "Coding trivia",
    question: "JavaScript gets confused with what other langauge?",
    answer: "java",
    hint: "imgs/java.gif"
}
];

/*----- state variables -----*/
let countDown;      // Keep track how many turns left before end game
let iceBoxCategory; // a category selector
let puzzle = "";     // puzzle
let answer = [];    //answer
let hint;           // hint for our player
let question;       //the security question          

const alphabetButtons = document.getElementById('alpha-buttons');
const ejectButton = document.getElementById('restart');
const hintButton = document.getElementById('hint');
const puzzleContainer = document.getElementById('puzzleContainer');
const countMessage = document.getElementById('count');
const countDisplay = document.getElementById('countNumber');
const categoryMessage = document.getElementById('categoryName')
const questionHere = document.getElementById('question');

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
        if(alphabet[i] === 'a'|| alphabet[i] === 'z'){
            //buttonsHTML.innerHTML += `<button class = "alphabet " id = "${alphabet[i]}"> ${alphabet[i]}</button>`
            buttonsHTML.innerHTML += '<br></br>';
        }
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
}

//guess() handles each letter
function guess(e){
    let puzzleArray = puzzle.split("");
    const guessWord = e.target.id;
    if(isTrue()){
        countMessage.innerText = "Access Granted";
        
    }else{
        if(puzzleArray !== puzzleArray.includes(guessWord)){
            countDown -=1 ;
            countDisplay.innerText = countDown;
            if(countDown === 0){
                countMessage.innerText = "Access Denied";
                ejectedAnimation();
            }
        }
    }
}


function guessHint(e){
    const buttonId = document.getElementById(e.target.id);
    const hintImage = document.getElementById('hintImage');
    buttonId.classList.add('selected');
    document.querySelector(".selected").disabled = true;
    countDown += 1;
    countDisplay.innerText = countDown;
    hintImage.src = data[iceBoxCategory].hint
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

function ejectedAnimation(){
    const hintImage = document.getElementById('hintImage');
    hintImage.src = 'imgs/You-were-ejected!.gif';
}

function initialize(){
    iceBoxCategory = categorySelect();
    puzzle = data[iceBoxCategory].answer;
    console.log(puzzle);
    questionHere.innerHTML = data[iceBoxCategory].question;
    categoryMessage.innerHTML = data[iceBoxCategory].categories;
    hintImage.src = "";
    hint = data[iceBoxCategory].hint;
    countDown = puzzle.length + 1;
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
    document.querySelector(".selected").disabled = false;
    
}

initialize();
