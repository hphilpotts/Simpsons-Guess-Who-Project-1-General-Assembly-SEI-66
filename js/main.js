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


// get random character
let guessMe = charArr[Math.floor(Math.random() * charArr.length)]; 
// answer string - will work as long as attribute string is unique to one key!
function answerString(attribute){
    let response = (Object.values(guessMe).includes(attribute));
    console.log(response);
}

const trueBoolButtons = $('.true-bool');

for (let i=0; i < trueBoolButtons.length; i++){
    let buttonId = trueBoolButtons[i].id;
    console.log(buttonId);
    $(`#${buttonId}`).click(function(event){
        response = guessMe[event.target.id];
        console.log(response);
    });
}

// works!
$('#male').click(function(event){
    response = guessMe[event.target.id];
    console.log(response);
});

// This is giving me problems!
// function answerBool(key){
//     console.log(key);
//     console.log(guessMe[key]); // doesn't work, always false
 
//     // console.log(guessMe[eval(key)]); // just doesn't work

//     // key = eval.key();
//     // console.log(guessMe.key); also no
// }

console.log('Guess me :');
console.log(guessMe);

// Show/hide menus
function showLeftMenu(){
    const menu = $('#dropdown-left');
    menu.toggle();
}
function showRightMenu(){
    const menu = $('#dropdown-right');
    menu.toggle();
}





// all characters in an object with names as keys and attribute arrays as values

// // list of names for easy selection, arrays for eliminator function
// const allCharNames = (Object.keys(charList));
// const suspect = allCharNames;
// const eliminated = []

// function selectRandomChars(){ // selects two characters at random
//     let char1 = allCharNames[Math.floor(Math.random() * allCharNames.length)];
//     let char2 = allCharNames[Math.floor(Math.random() * allCharNames.length)];
//     $('#left-card').append('<p>' + char1 + '</p>');
//     $('#right-card').append('<p>' + char2 + '</p>');
// }

// selectRandomChars();

// // Eliminator function:
// function findCharacters(attribute){
//     console.log(`Input: do they have the attribute: ${attribute}?`);
//     const guess = [];
//     for (const character in charList) {
//         if (suspect.includes(character)){
//             const checking = charList[character]
//             if (checking.includes(attribute)){
//                 guess.push(character);
//             } else {
//                 eliminated.push(character);
//                 suspect.splice(suspect.indexOf(character), 1);
//             }
//         }
//     }
//     console.log('Found the following people:');
//     guess.forEach(element => {
//         console.log(` - ${element}`);        
//     });
//     console.log(`Suspects: ${suspect}`);
//     console.log(`Eliminated: ${eliminated}`);
//     console.log('');
//     if (suspect.length === 1){
//         console.log(`Found them: it is ${suspect[0]}!`);
//     }
// }

// findCharacters("Hat");
// findCharacters("Male");
// findCharacters("Brown hair");

// for (const char in charList) {
//     const element = charList[char];
//     $('#left-list').append('<li>' + char + ': ' + element + '</li>')
// }

