//Reset all!
$('#new-game').click(function(){
    location.reload();
})

// Restructured character data:     

const charArr = [];

function char(name, male, child, hairColour, facialHair, glasses, tie, suspect = true){
    this.name = name;
    this.male = male;
    this.child = child;
    this.hairColour = hairColour;
    this.facialHair = facialHair;
    this.glasses = glasses;
    this.tie = tie;
    this.suspect = suspect;
    charArr.push(this);
}

let homer = new char("Homer", true, false, "bald", true, false, false);
let marge = new char("Marge", false, false, "blue", false, false, false);
let bart = new char("Bart", true, true, "yellow", false, false, false);
let lisa = new char("Lisa", false, true, "yellow", false, false, false);
let milhouse = new char("Milhouse", true, true, "blue", false, true, false);
let maggie = new char("Maggie", false, true, "yellow", false, false, false);
let ralph = new char("Ralph", true, true, "black", false, false, false);
let nelson = new char('Nelson', true, true, 'brown', false, false, false);
let seymour = new char('Seymour', true, false, 'grey', false, false, true);
let edna = new char('Edna', false, false, 'brown', false, false, false);
let moe = new char('Moe', true, false, 'grey', false, false, true);
let barney = new char('Barney', true, false, 'brown', false, false, false);
let krusty = new char('Krusty', true, false, 'green', true, false, true);
let maude = new char('Maude', false, false, 'brown', false, false, false);
let ned = new char('Ned', true, false, 'brown', true, true, false);
let abe = new char('Abe', true, false, 'yellow', true, true, true);
let monty = new char('Monty', true, false, 'blue', false, false, true);
let lenny = new char('Lenny', true, false, 'brown', false, false, false);
let carl = new char('Carl', true, false, 'black', false, false, false);
let martin = new char('Martin', true, true, 'brown', false, false, false)


// get random character - ***add second for PvP later***
let guessMe = charArr[Math.floor(Math.random() * charArr.length)];
let guessMe2 = charArr[Math.floor(Math.random() * charArr.length)]; 

// ---
// Button functions below:

// will work as long as attribute string is unique to one key!
function answerString(attribute){
    let response = (Object.values(guessMe).includes(attribute));
    if (response) {
        alert("Yep!")
    } else {
        alert("Nope!")
    }
    showLeftMenu();
}
function answerStringR(attribute){
    let response = (Object.values(guessMe2).includes(attribute));
    if (response) {
        alert("Yep!")
    } else {
        alert("Nope!")
    }
    showRightMenu();
}
// both working fine.

const trueBoolButtons = $('.true-bool');

for (let i=0; i < trueBoolButtons.length; i++){
    let buttonId = trueBoolButtons[i].id;
    $(`#${buttonId}`).click(function(event){
        response = guessMe[event.target.id];
        if (response){
            alert('Yep!')
        } else {
            alert('Nope!')
        }
        showLeftMenu();
    });
}
const trueBoolButtonsR = $('.true-boolR');
for (let i=0; i < trueBoolButtonsR.length; i++){
    let buttonId2 = trueBoolButtonsR[i].id;
    console.log(buttonId2);
    $(`#${buttonId2}`).click(function(event){
        response2 = guessMe2[event.target.id.substring(1)];
        console.log(response2);
        if (response2){
            alert('Yep!')
        } else {
            alert('Nope!')
        }
        showRightMenu();
    });
}

const falseBoolButtons = $('.false-bool');
for (let i=0; i < falseBoolButtons.length; i++){
    let buttonId = (falseBoolButtons[i].id);
    $(`#${buttonId}`).click(function(event){
        response = !(guessMe[(event.target.id).substring(4)]);
        if (response) {
            alert('Yep!');
        } else {
            alert('Nope!');
        }
        showLeftMenu();
    });
}
const falseBoolButtonsR = $('.false-boolR');
console.log(falseBoolButtonsR);
for (let i=0; i < falseBoolButtonsR.length; i++){
    let buttonId2 = (falseBoolButtonsR[i].id);
    $(`#${buttonId2}`).click(function(event){
        response2 = !(guessMe2[(event.target.id).substring(5)]);
        if (response2) {
            alert('Yep!');
        } else {
            alert('Nope!');
        }
        showRightMenu();
    });
}

// ---
// Guess alert ***change alert to <div> to allow auto close! Same for button q's above.
document.getElementById('submit-button').addEventListener('click', function(){
    event.preventDefault(); // showing as deprecated, what should it be instead? Works though.
    let guess = document.getElementById('makeGuess').value.toLowerCase();
    if (guess == guessMe.name.toLowerCase()){
        alert("Woohoo! You guessed correctly!")
        location.reload();
    } else if (charArr.filter(obj => obj.name.toLowerCase() == guess).length == 1) {
        alert("D'oh! Try again")
    } else {
        alert('Not a character. Trying is the first step towards failure.')
    }
    showLeftMenu();
})
document.getElementById('submit-buttonR').addEventListener('click', function(){
    event.preventDefault(); // showing as deprecated, what should it be instead? Works though.
    let guess = document.getElementById('makeGuessR').value.toLowerCase();
    if (guess == guessMe2.name.toLowerCase()){
        alert("Woohoo! You guessed correctly!")
        location.reload();
    } else if (charArr.filter(obj => obj.name.toLowerCase() == guess).length == 1) {
        alert("D'oh! Try again")
    } else {
        alert('Not a character. Trying is the first step towards failure.')
    }
    showRightMenu();
})


console.log('Guess me :');
console.log(guessMe);
console.log(guessMe2);

// Show/hide menus
function showLeftMenu(){
    const menu = $('#dropdown-left');
    menu.slideToggle();
}
function showRightMenu(){
    const menu = $('#dropdown-right');
    menu.slideToggle();
}

// Hide character cards:
$('.box img').click(function(){
    $(this).fadeOut();
    }
);

