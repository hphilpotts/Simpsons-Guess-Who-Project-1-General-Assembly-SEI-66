// Restructured character data:     

const charArr = [];

function char(name, male, child, hairColour, facialHair, glasses, suspect = true){
    this.name = name;
    this.male = male;
    this.child = child;
    this.hairColour = hairColour;
    this.facialHair = facialHair;
    this.glasses = glasses;
    this.suspect = suspect;
    charArr.push(this);
}

let homer = new char("Homer", true, false, "bald", true, false);
let marge = new char("Marge", false, false, "blue", false, false);
let bart = new char("Bart", true, true, "yellow", false, false);
let lisa = new char("Lisa", false, true, "yellow", false, false);
let milhouse = new char("Milhouse", true, true, "blue", false, true);


// get random character - ***add second for PvP later***
let guessMe = charArr[Math.floor(Math.random() * charArr.length)]; 

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


console.log('Guess me :');
console.log(guessMe);

// Show/hide menus
function showLeftMenu(){
    const menu = $('#dropdown-left');
    menu.slideToggle();
}
function showRightMenu(){
    const menu = $('#dropdown-right');
    menu.toggle();
}

// Hide character cards:
$('.box img').click(function(){
    $(this).fadeOut();
    }
);

