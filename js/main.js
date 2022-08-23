//Reset all!
$('#new-game').click(function(){
    location.reload();
})

// Restructured character data:     

const charArr = [];

function char(name, image, male, child, hairColour, facialHair, glasses, tie, suspect = true){
    this.name = name;
    this.image = image;
    this.male = male;
    this.child = child;
    this.hairColour = hairColour;
    this.facialHair = facialHair;
    this.glasses = glasses;
    this.tie = tie;
    this.suspect = suspect;
    charArr.push(this);
}

let homer = new char("Homer", 'images/character-images/homer.jpeg', true, false, "bald", true, false, false);
let marge = new char("Marge", 'images/character-images/marge.png', false, false, "blue", false, false, false);
let bart = new char("Bart", 'images/character-images/bart.jpeg', true, true, "yellow", false, false, false);
let lisa = new char("Lisa", 'images/character-images/lisa.png', false, true, "yellow", false, false, false);
let milhouse = new char("Milhouse", 'images/character-images/milhouse.jpeg', true, true, "blue", false, true, false);
let maggie = new char("Maggie", 'images/character-images/maggie.gif', false, true, "yellow", false, false, false);
let ralph = new char("Ralph", 'images/character-images/ralph.webp', true, true, "wispy", false, false, false);
let nelson = new char('Nelson', 'images/character-images/nelson.png', true, true, 'brown', false, false, false);
let seymour = new char('Seymour', 'images/character-images/seymour.jpeg', true, false, 'grey', false, false, true);
let edna = new char('Edna', 'images/character-images/edna.webp', false, false, 'brown', false, false, false);
let moe = new char('Moe', 'images/character-images/moe.png', true, false, 'grey', false, false, true);
let barney = new char('Barney', 'images/character-images/barney.webp', true, false, 'brown', false, false, false);
let krusty = new char('Krusty', 'images/character-images/krusty.jpeg', true, false, 'green', true, false, true);
let maude = new char('Maude', 'images/character-images/maude.jpeg', false, false, 'brown', false, false, false);
let ned = new char('Ned', 'images/character-images/flanders.jpeg', true, false, 'brown', true, true, false);
let abe = new char('Abe', 'images/character-images/abe.jpeg', true, false, 'yellow', true, true, true);
let monty = new char('Monty', 'images/character-images/burns.jpeg', true, false, 'blue', false, false, true);
let lenny = new char('Lenny', 'images/character-images/lenny.jpeg', true, false, 'black', false, false, false);
let carl = new char('Carl', 'images/character-images/carl.png', true, false, 'black', false, false, false);
let martin = new char('Martin', 'images/character-images/martin.png', true, true, 'brown', false, false, false)


// Gets random character
let guessMe = charArr[Math.floor(Math.random() * charArr.length)];
let guessMe2 = charArr[Math.floor(Math.random() * charArr.length)]; 

// Populate char cards with (hidden) character image:
$('#left-card').prepend('<img class="hidden cardImg" src="' + guessMe2.image + '">')
$('#right-card').prepend('<img class="hidden cardImg" src="' + guessMe.image + '">')

// ---
// Button functions below:

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
    console.log(buttonId2);
    $(`#${buttonId2}`).click(function(event){
        response2 = guessMe2[event.target.id.substring(1)];
        console.log(response2);
        if (response2){
            popUp('Yes!');
        } else {
            popUp('Nope!');
        }
        showRightMenu();
    });
}

// for :values that are false bools, left and right side
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

// Popup function to show 'response' as element to user instead of as page alert
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
    console.log('close');
    $('#pop-up').remove();
}


// ---
// Guess Who functionality 'solves for winner', displays message and resets game. Shows message if incorrect guess / not a character name.
document.getElementById('submit-button').addEventListener('click', function(){
    event.preventDefault(); // showing as deprecated, what should it be instead? Works though.
    let guess = document.getElementById('makeGuess').value.toLowerCase();
    if (guess == guessMe.name.toLowerCase()){
        $('#right-card').children('img').toggleClass('hidden');
        document.getElementById('winner').play();
        popUp("Woohoo! You guessed correctly!", 'large');
        setTimeout(() => {
            location.reload();
        }, 3000);
    } else if (charArr.filter(obj => obj.name.toLowerCase() == guess).length == 1) {
        document.getElementById('wrong').play();
        popUp("D'oh! Try again", 'large');
    } else {
        document.getElementById('sad').play();
        popUp('Not a character. Remember: trying is the first step towards failure.', 'large');
    }
    showLeftMenu();
})
document.getElementById('submit-buttonR').addEventListener('click', function(){
    event.preventDefault(); // showing as deprecated, what should it be instead? Works though.
    let guess = document.getElementById('makeGuessR').value.toLowerCase();
    if (guess == guessMe2.name.toLowerCase()){
        document.getElementById('winner').play();
        $('#left-card').children('img').toggleClass('hidden');
        popUp("Woohoo! You guessed correctly!",'large')
        setTimeout(() => {
            location.reload();
        }, 3000);

    } else if (charArr.filter(obj => obj.name.toLowerCase() == guess).length == 1) {
        document.getElementById('wrong').play();
        popUp("D'oh! Try again",'large');
    } else {
        document.getElementById('sad').play();
        popUp('Not a character. Trying is the first step towards failure.','large');
    }
    showRightMenu();
})

// Tests:
// console.log('Guess me :');
// console.log(guessMe);
// console.log(guessMe2);

// Show/hide dropdown menus to keep interface less cluttered
function showLeftMenu(){
    const menu = $('#dropdown-left');
    menu.slideToggle();
}
function showRightMenu(){
    const menu = $('#dropdown-right');
    menu.slideToggle();
}

// Show hide character images to simulate flipping down eliminated characters:
$('.box img').click(function(){
    $(this).fadeOut();
    document.getElementById('fold').play();
    }
);

// Show/hide character cards to allow player to answer:
$('.card').click(function(){
    $(this).children('img').toggleClass('hidden');
    }
)

// Show/hide rules box
document.getElementById('rules').addEventListener('click', function(){
    let hideThis = document.getElementById('ruleBox');
    hideThis.classList.toggle('hidden');
})

// Sounds functions:
$('button').click(function(){
    document.getElementById('clicked').play();
})

// Character card width variable - purely visual! 
$('#right-card').width(($('#right-card').height() * 0.8))
$('#left-card').width($('#right-card').width());
