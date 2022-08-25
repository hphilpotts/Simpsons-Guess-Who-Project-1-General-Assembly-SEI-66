// Character data: restructured (could be further restructured)

// Array to hold all char objects
const charArr = [];

// Constructor: could be trimmed down
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
    // Also, could I refactor the above to run a loop over each property key?
    charArr.push(this); // Pushes the char object to the charArr array when constructed.
}

// Let's make some characters!
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
// Could have done more of this and less of the monstrous obj constructor above. Hindsight eh?