// Solving for a winner...rewritten!
// Function to run when either submit button is clicked
function guessMade(inputSide){
    // gets user input from correct input element, convert to lower case, saves in variable:
    let guess = document.getElementById(inputSide).value.toLowerCase();
    // sets character to guess based on inputSide (had to do this as I can only pass a string argument into a function within an onclick html attribute...):
    let characterToGuess = guessMe;
    if (inputSide = 'makeGuessR'){
        characterToGuess = guessMe2;
    }
    // checks if guess is correct character name, wrong character name, error character name:
    let checkedGuess = checkGuess(guess, characterToGuess);
    // Executes code based on output of checker function:
    guessResult(checkedGuess, inputSide)
    // Hides menu (unless game ends with winner and page refreshed)
    hideMenu(inputSide);
}
// Single checker function:
function checkGuess(guess, characterToGuess){
    let output = ''
    if (characterToGuess.name.toLowerCase() === guess){
        output = 'winner';
    } else if (charArr.filter(obj => obj.name.toLowerCase() == guess).length == 1){
        output = 'wrong';
    } else {
        output = '';
    }
    return output;
}
// I've decided on 'if, else if, else', in one function:
function guessResult(checkedGuess, inputSide){
    if (checkedGuess === 'wrong'){
        document.getElementById('wrong').play();
        popUp("D'oh! Try again", 'large');
    } else if (checkedGuess === 'winner'){
        // Below if/else is messy and a symptom of poor planning...but still works
        if (inputSide === 'makeGuess'){ $('#right-card').children('img').toggleClass('hidden');
        } else { $('#left-card').children('img').toggleClass('hidden'); }
        // and then this ends the game
        popUp("Woohoo! You guessed correctly!", 'large');
        setTimeout(() => {
            location.reload();
        }, 3000);
    // No need to check for error - an else statement will do the job instead!
    } else { 
        document.getElementById('sad').play();
        popUp('Not a character. "I dunno, Marge. Trying is the first step towards failure."', 'large');
    }
}
// Hide Menu function:
function hideMenu(inputSide){
    if (inputSide === 'makeGuess'){
        showLeftMenu();
    } else {
        showRightMenu();
    }
}