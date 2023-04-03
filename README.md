# Spaceman
## Intro to game 
A Spaceman's incommodity:

    You're an unlucky spaceman out in the far reaches of space locked out of his space station. 

    In order to get back inside, you have to correctly guess the entry password.

    But don't take too long remember there's a countdown!

    You can select the category for the entry word and pray you get it right the first time!  or get EJECTED!

Rules:

- It's a one player game
- The player selects a category  and guesses the word
- Player chooses one character at a time to guess the puzzle
- After each character selected,  if the character is found in the puzzle it will be displayed
- if a character is selected it cannot be reused
- if the player cannot guess the word after a certain amount of tries, the player loses
- the 'eject' button  will reset the game and losing will also reset the game. 


### PsuedoCode
Page will load and the game will start automatically

When the game starts game state will be initialized

The game will have an alphabet board, a puzzle a countdown display and an ice box. 

The game starts when the player selects a category from the ice box.

player selects category:

Alphabet board will be rendered:
- Puzzle will be displayed for the length of character needed to solve(space and special characters included)
- alphabet jail is rendered (empty)
- Turns left to guess are displayed(Countdown)
else: 
- message prompt "You have to pick a category"

Player will take turns to guess puzzle

Alphabet board will be displayed any of the 26 character can be selected.
Player cannot reselect category.
- if a character is clicked
    The puzzle will check if the character is within the array 
    - if not innerHTML = 'Not found, try again'
    Countdown decreases 
    - else found
        - Puzzle will display letter on page 
    - Character can no longer be selected 

A win condition will be evaluated did the player win or lose

A win message will display if the current player wins or lose

the player wins if they guess the puzzle before the count-down ends

if countdown finishes before the player guesses the puzzle, spaceman gets ejected.

