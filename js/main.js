//Reset all!
$('#new-game').click(function(){
    location.reload();
})

// Restructured character data:     

const charArr = [];

function char(name, altName, image, male, child, hairColour, facialHair, glasses, tie, alive = true, suspect = true, angry = false, school = false){
    this.name = name;
    this.altName = altName;
    this.image = image;
    this.male = male;
    this.child = child;
    this.hairColour = hairColour;
    this.facialHair = facialHair;
    this.glasses = glasses;
    this.tie = tie;
    this.alive = alive;
    this.suspect = suspect;
    this.angry = angry;
    this.school = school;
    // could I refactor the above to run a loop over each property key?
    charArr.push(this);
}

let homer = new char("Homer", ['homer', 'homer simpson', 'max power'], 'images/character-images/homer.jpeg', true, false, "bald", true, false, false);
let marge = new char("Marge", ['marge', 'marge simpson'], 'images/character-images/marge.png', false, false, "blue", false, false, false);
let bart = new char("Bart", ['bart', 'bart simpson'], 'images/character-images/bart.jpeg', true, true, "yellow", false, false, false);
let lisa = new char("Lisa", ['lisa', 'lisa simpson'], 'images/character-images/lisa.png', false, true, "yellow", false, false, false);
let milhouse = new char("Milhouse", ['milhouse', 'milhouse van houten'], 'images/character-images/milhouse.jpeg', true, true, "blue", false, true, false);
let maggie = new char("Maggie", ['maggie', 'maggie simpson'], 'images/character-images/maggie.gif', false, true, "yellow", false, false, false);
let ralph = new char("Ralph", ['ralph', 'ralph wiggum'], 'images/character-images/ralph.webp', true, true, "wispy", false, false, false);
let nelson = new char('Nelson', ['nelson', 'nelson muntz'], 'images/character-images/nelson.png', true, true, 'brown', false, false, false);
let seymour = new char('Seymour', ['seymour', 'skinner', 'seymour skinner', 'prinicpal skinner'], 'images/character-images/seymour.jpeg', true, false, 'grey', false, false, true);
let edna = new char('Edna', ['edna', 'edna krabappel', 'ms krabappel', 'ms. krabappel'], 'images/character-images/edna.webp', false, false, 'brown', false, false, false);
let moe = new char('Moe', ['moe', 'moe szylak'], 'images/character-images/moe.png', true, false, 'grey', false, false, true);
let barney = new char('Barney', ['barney', 'barney gumble'], 'images/character-images/barney.webp', true, false, 'brown', false, false, false);
let krusty = new char('Krusty', ['krusty', 'krusty the clown', 'herschel krustofsky', 'rory b. bellows'], 'images/character-images/krusty.jpeg', true, false, 'green', true, false, true);
let maude = new char('Maude', ['maude', 'maude flanders', 'maud'], 'images/character-images/maude.jpeg', false, false, 'brown', false, false, false);
let ned = new char('Ned', ['ned', 'ned flanders', 'flanders'], 'images/character-images/flanders.jpeg', true, false, 'brown', true, true, false);
let abe = new char('Abe', ['abe', 'abe simpson', 'grandpa', 'grandpa simpson'], 'images/character-images/abe.jpeg', true, false, 'yellow', true, true, true);
let monty = new char('Monty', ['monty', 'burns', 'monty burns', 'montgomery', 'montgomery burns', 'mr burns', 'mr. burns'], 'images/character-images/burns.jpeg', true, false, 'bald', false, false, true);
let lenny = new char('Lenny', ['lenny', 'lenny leonard'], 'images/character-images/lenny.jpeg', true, false, 'black', false, false, false);
let carl = new char('Carl', ['carl', 'carl carlson'], 'images/character-images/carl.png', true, false, 'black', false, false, false);
let martin = new char('Martin', ['martin', 'martin prince', 'martin prince, jr.'], 'images/character-images/martin.png', true, true, 'brown', false, false, false)

// reassinging properties that are not the constructor default:
maude.alive = false;
edna.alive = false;
maggie.angry = true;
moe.angry = true;
abe.angry = true;
const schoolArr = [bart, lisa, milhouse, ralph, nelson, seymour, edna, martin];
schoolArr.forEach(element => {
    element.school = true;
});

// Assinging true properties - all other chars will return falsy undefined if checked.
const powerArr = [homer, monty, lenny, carl];
powerArr.forEach(element => {
    element.powerPlant = true;
});
const moesArr = [homer, moe, barney, lenny, carl]
moesArr.forEach(element => {
    element.moes = true;
})
marge.jewellery = true;
lisa.jewellery =true;
edna.jewellery = true;
lenny.pudding = true;

console.log(marge.powerPlant);

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
    $('#pop-up').remove();
}


// ---

// Solving for a winner...rewritten!
// Function to run when either submit button is clicked
function guessMade(inputSide){
    event.preventDefault();
    // gets user input from correct input element, convert to lower case, saves in variable:
    let guess = document.getElementById(inputSide).value.toLowerCase();
    console.log(guess);
    // sets character to guess based on inputSide (had to do this as I can only pass a string argument into a function within an onclick html attribute...):
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

// console.log(charArr.filter(char => char.altName.includes('max power')).length());

// Single checker function:
function checkGuess(guess, characterToGuess){
    let output = ''
    let filterAll = charArr.filter(char => char.altName.includes(guess));
    if (characterToGuess.altName.includes(guess)){
        output = 'winner';
    } else if (filterAll.length == 1){
    // } else if ((charArr.filter(char => char.altName.includes(guess).length()) == 1)){
    // } else if (charArr.filter(char => char.name.toLowerCase() == guess).length == 1){
        output = 'wrong';
    } else {
        output = '';
    }
    return output;
}
// Takes the result of checkGuess and executes code based on result.
function guessResult(checkedGuess, inputSide){
    if (checkedGuess === 'wrong'){
        document.getElementById('wrong').play();
        popUp("D'oh! Try again", 'large');
    } else if (checkedGuess === 'winner'){
        // Below if/else is messy and a symptom of poor planning...but still works
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
        document.getElementById('sad').play();
        popUp('Not a character: trying is the first step towards failure.', 'large');
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
    document.getElementById('flip').play();
    $(this).children('img').toggleClass('hidden');
    }
)

// Show/hide rules box
document.getElementById('rules').addEventListener('click', function(){
    let hideThis = document.getElementById('ruleBox');
    hideThis.classList.toggle('hidden');
})

// Button sounds functions:
$('button').click(function(){
    document.getElementById('clicked').play();
})

// Background music
function musicLoop(){
    document.getElementById('bgm').play();
}
// Commenting this out for now before my sanity finally fails me....
// musicLoop();

// Mute sound
function muteIt(){
    const loudNoises= document.querySelectorAll('audio');
    for (const element of loudNoises){
        if (element.muted === true){
            element.muted = false
            musicLoop(); // resumes BGM (unless I've commented it about, as above)
        } else {
            element.muted = true;
            element.pause()
        }
    }
}
document.getElementById('mute').addEventListener('click', muteIt)

// Character card width variable - purely visual! 
$('#right-card').width(($('#right-card').height() * 0.8))
$('#left-card').width($('#right-card').width());
