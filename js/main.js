// See also:
// - chars.js for character objects
// - controls.js for show/hide controls, reset button
// - audio.js for audio-related code


// Gets random character from chars.js for each player.
let guessMe = charArr[Math.floor(Math.random() * charArr.length)];
let guessMe2 = charArr[Math.floor(Math.random() * charArr.length)]; 

// Populate char cards with (hidden) character image based on guessMe's above:
$('#left-card').prepend('<img class="hidden cardImg" src="' + guessMe2.image + '">')
$('#right-card').prepend('<img class="hidden cardImg" src="' + guessMe.image + '">')

// ---

// User question button functions below:

// I've painted myself into a corner and require parallel functions for L & R
// Fixing this would need pretty much a rebuild, no thank you.

// for :values that are strings (rather than bools) - works as long as attribute string is unique to one key!
function answerString(attribute){
    let response = (Object.values(guessMe).includes(attribute));
    if (response) {
        popUp('Yes!');
    } else {
        popUp('Nope!');
    }
    showLeftMenu();
}
function answerStringR(attribute){
    let response = (Object.values(guessMe2).includes(attribute));
    if (response) {
        popUp('Yes!');
    } else {
        popUp('Nope!');
    }
    showRightMenu();
}

// for :values that are true bools, left and right side
const trueBoolButtons = $('.true-bool');
for (let i=0; i < trueBoolButtons.length; i++){
    let buttonId = trueBoolButtons[i].id;
    $(`#${buttonId}`).click(function(event){
        response = guessMe[event.target.id];
        if (response){
            popUp('Yes!')
        } else {
            popUp('Nope!');
        }
        showLeftMenu();
    });
}
const trueBoolButtonsR = $('.true-boolR');
for (let i=0; i < trueBoolButtonsR.length; i++){
    let buttonId2 = trueBoolButtonsR[i].id;
    $(`#${buttonId2}`).click(function(event){
        response2 = guessMe2[event.target.id.substring(1)];
        if (response2){
            popUp('Yes!');
        } else {
            popUp('Nope!');
        }
        showRightMenu();
    });
}

// for :values that are false bools (e.g. male: false), left and right side
const falseBoolButtons = $('.false-bool');
for (let i=0; i < falseBoolButtons.length; i++){
    let buttonId = (falseBoolButtons[i].id);
    $(`#${buttonId}`).click(function(event){
        response = !(guessMe[(event.target.id).substring(4)]);
        if (response) {
            popUp('Yes!');
        } else {
            popUp('Nope!');
        }
        showLeftMenu();
    });
}
const falseBoolButtonsR = $('.false-boolR');
for (let i=0; i < falseBoolButtonsR.length; i++){
    let buttonId2 = (falseBoolButtonsR[i].id);
    $(`#${buttonId2}`).click(function(event){
        response2 = !(guessMe2[(event.target.id).substring(5)]);
        if (response2) {
            popUp('Yes!');
        } else {
            popUp('Nope!');
        }
        showRightMenu();
    });
}

// Popup function to show 'response' to user questions
function popUp(words, size){
    $('body').append('<div class="dropdown-menu popup" id="pop-up"><p>' + words + '</div>');
    if (size === 'large'){
        $('#pop-up').addClass('popupLarge');
    };
    if (words === 'Nope!'){
        document.getElementById('wrong').play();
    } else if (words === 'Yes!'){
        document.getElementById('ding').play();
    }
    setTimeout(() => {
        $(closePopUp());
    }, 2000);
}
// closes above popup
function closePopUp(){
    $('#pop-up').remove();
}

// ---

// Solving for a winner!

// Function to run when either submit button is clicked, see below for nested functions:

function guessMade(inputSide){ // Input side differentiates between L (Player 1) and R (Player 2)
    event.preventDefault(); // deprecated but still works
    // gets user input from correct input element, convert to lower case, saves in variable:
    let guess = document.getElementById(inputSide).value.toLowerCase();
    // sets character to guess based on inputSide 
    // (had to do this as I can only pass a string argument into a function within an onclick html attribute...):
    let characterToGuess = guessMe;
    if (inputSide === 'makeGuessR'){
        characterToGuess = guessMe2;
    }
    // checks if guess is correct character name, wrong character name, error character name:
    let checkedGuess = checkGuess(guess, characterToGuess);
    // Executes code based on output of checker function:
    guessResult(checkedGuess, inputSide)
    // // Hides menu (unless game ends with winner and page refreshed)
    hideMenu(inputSide);
}

// Checker function:
// 'guess' argument is Player's typed input.
// 'characterToGuess' is 'guessMe' or 'guessMe2' depending on side of the board input comes from.
function checkGuess(guess, characterToGuess){
    let output = '';
    let filterAll = charArr.filter(char => char.altName.includes(guess)); // used later in 'else if' to check all chars
    if (characterToGuess.altName.includes(guess)){ // checks for a winning guess
        output = 'winner';
    } else if (filterAll.length == 1){ // checks for incorrect guess
        output = 'wrong';
    } else { // else guess isn't a character name, returns error message
        output = '';
    }
    return output;
}
// Takes the result of checkGuess and executes code based on result.
function guessResult(checkedGuess, inputSide){
    if (checkedGuess === 'wrong'){
        document.getElementById('wrong').play(); // sound effect
        popUp("D'oh! Try again", 'large');
    } else if (checkedGuess === 'winner'){
        // Below if/else is messy and a symptom of poor planning...but still works
        // -> flips the mystery card around when correct guess is made
        if (inputSide === 'makeGuess'){ $('#right-card').children('img').toggleClass('hidden');
        } else { $('#left-card').children('img').toggleClass('hidden'); }
        // and then this ends the game
        document.getElementById('winner').play();
        popUp("Woohoo! You guessed correctly!", 'large');
        setTimeout(() => {
            location.reload();
        }, 3000);
    // No need to check for error - an else statement will do the job instead!
    } else { 
        document.getElementById('sad').play(); // sad sound effect
        popUp('Not a character: trying is the first step towards failure.', 'large'); // A Homer quote!
    }
}
// Hide Menu function, retracts relevant dropdown menu:
function hideMenu(inputSide){
    if (inputSide === 'makeGuess'){
        showLeftMenu();
    } else {
        showRightMenu();
    }
}

// ---
// Character card width variable - purely visual! 
$('#right-card').width(($('#right-card').height() * 0.8));
$('#left-card').width($('#right-card').width());
