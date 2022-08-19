# SEI-66 Project 1:     
## - build a game from scratch!       

# 'Guess Who?'        

## Technologies used:       
- HTML, CSS, JavaScript     
- jQuery
- Code written in _Visual Studio Code_      
- Repository hosted on _GitHub Enterprise_      
- Kanban boards on _trello.com_
- Wireframes on _good old pen & paper_      

## Links to Wireframes and User Stories:        
[User Stories - Trello Board](https://trello.com/b/inPyVyln/project-01-user-stories)       
[Project Kanban - Trello Board](https://trello.com/b/4Ooc6PXD/project-01-kanban-board)      


## Project Timeline:        
### 18/08/22: Beginning the project     
- Decided upon _Guess Who_ after weighing up options, doing Opportunity/Risk analysis.      
- Set up GitHub repository for project, established basic file structure, added README, first commit made.      

### 19/08/22: Planning stages       
- Trello boards set up to map progress, user stories.       
- Initial wireframe sketched out on paper to plan UI based on user stories.     
- Game 'flow' mapped out to begin to plan functionality based on user stories.      

## 18/08/22: Beginning the project:        
- Settled on _Guess Who?_ - or some variant thereof - as my choice of game to build. I came to this decision on the basis that it is simple enough to be achievable in the timeframe given: I'd much rather execute a simple idea well than overcommit and end up with a half-finished project. A version of this game was included in the examples shown before the project, I also took advice from a GA alum who agreed that it would make for an interesting (and achievable) project. See section 'What might have been...' below for rejected ideas!        
- Repository established, basic file structure set up, README started.

### Opportunities identified:      
- Game should be an achievable project in time given.       
- Not an 'action' game with many simultaneously moving parts so it should be easier to animate well.        
- Programming the computer to guess will likely be an interesting challenge.        
- Potential for both Player vs. Computer and Player vs. Player modes.       
- Short game duration - minimises risk of code breaking down.       
- Well-known game with simple concept and rules - familiar and accessible to most.       
- It's a fun game to play!      

### Potential risks:      
- Possibly under-ambitious? Better than the opposite though!        
- Game might not be visually compelling enough - characters must be interesting to look at and animations need to be slick.     
- Game art is not something I am naturally good at. It's important I push myself here but there is a risk of this area becoming a significant time-sink.        
- 'AI' could be under/over powered - need to ensure balanced gameplay.      
- PvP on one screen may be a challenge - how to ensure player's cards/choices remain secret?        

## 19/08/22: Planning Stages:      

- I began today by mapping out a rough flowchart setting out the stages of the project, before moving on to setting up Trello boards to map out progress for the project and for the user stories. This is my first real experience using Kanban - something I have seen on a lot of Job Descriptions.      
- _There is a real risk of procrastination here: as much as it is nice setting up visually interesting Trello boards, I need to be careful that this doesn't become a displacement activity...!_        
- Boards now set up. User stories added to Trello board. Off the back of these I then sketched out a very rough first wireframe and high-level 'Game flow' flowchart below. I really like using pen and paper for this! Quick, if a little illegible:       

!['Game Flow' flowchart](images/image2.jpeg)        

![Initial Wireframe Sketch](images/image1.jpeg)     

- I'm starting by simply linking my HTML, CSS and JS files - jQuery included - and then testing that the page has worked. I can then run Inspector (sinister sounding!) from this page, crucial for testing everything else I go on to do! And it works!        

![It's alive!](images/screenshot1.png)      

- The next thing I am going to do is to set up my characters' characteristics. This is surely crying out for a JS object, right? _If you understand objects, you understand JavaScript, they say_. I'm going to see if I can find 'true to the real game' information, as the distribution of characteristics will affect how the game plays: if it ain't broke then I ain't fixing it...       
- Found an [interesting article](https://edge.ua.edu/andie-alexander/guess-who-a-game-of-differentiation/) on _Guess Who?_ that (aside from posing some important critiques of how the game) also offers insight into how weighting of characteristics can dramatically affect the game, even to the point of 'breaking' it.        
- Also found pre-loaded 'Character Characteristics' from [codewards.com](https://www.codewars.com/kata/58b2c5de4cf8b90723000051) - I'm going to use these as a starting point, I can always adjust and amend later. I've structured the data at this stage as follows:      

```
obj = {
    character: [array, of, characteristic, strings],
    character2: [array, of, different, strings]
}
```     

- I'm now going to write a simple function that takes a characteristic and returns the characters that have that characteristic. I'm going to save the potential choices in an array.       
- Needed to refresh my knowledge a little but got there in the end. Code is as follows:    

```
function findCharacters(attribute){
    const guess = [];
    for (const character in characterList) {
        const checking = characterList[character]
        if (checking.includes(attribute)){
            console.log(`Found someone: ${character}`);
            guess.push(character);
        }
    }
    console.log('');
    console.log('Found the following people:');
    guess.forEach(element => {
        console.log(` - ${element}`);        
    });
}
```       

- I'm now going to set up arrays of 'potential characters' and 'eliminated characters' to allow for repeat elimination. Added to the original function - and it works!      
```
const suspect = (Object.keys(charList));
const eliminated = []

function findCharacters(attribute){
    console.log(`Input: do they have the attribute: ${attribute}?`);
    const guess = [];
    for (const character in charList) {
        if (suspect.includes(character)){
            const checking = charList[character]
            if (checking.includes(attribute)){
                guess.push(character);
            } else {
                eliminated.push(character);
                suspect.splice(suspect.indexOf(character), 1);
            }
        }
    }
    console.log('Found the following people:');
    guess.forEach(element => {
        console.log(` - ${element}`);        
    });
    console.log(`Suspects: ${suspect}`);
    console.log(`Eliminated: ${eliminated}`);
    console.log('');
    if (suspect.length === 1){
        console.log(`Found them: it is ${suspect[0]}!`);
    }
}

findCharacters("Hat");
findCharacters("Male");
findCharacters("Brown hair");
```     
![Early Console Logs](images/earlyConsole.png)      

- I'm wondering if my current data structure is best for my requirements: currently `obj{ name: [attributes] ... }` but I could also use `array [ {name: 'name', attribute: 'attribute}, {...} ]`. I've asked the question as to which should be better!        
- I'm also trying to set up a drop-down button as a very rough first version.       



## Unsolved Issues:     

## Solving for the winner:      

## Highlights: favourite functions / code snippets:

## What might have been...(rejected ideas):     

### Cluedo:     
- Too ambitious! Potentially a very interesting project but was warned off this, especially due to the challenges around handling multi-directional character movement as well as game duration: "long game = code more likely to break".       
- Multiple players: either needs 6 people to play on one screen (cumbersome/clumsy) or 5 separate 'AI' (probably beyond my current skillset). One for the future, maybe!        

### Scrabble:       
- Would require a dictionary-type API. No way I'm going to manually input every word in the dictionary! 'Scrabble - but only with words beginning with 'A'' not likely to become an instant classic.        
- Programming a computer opponent that doesn't just choose the optimal word each time is going to be a problem.     

### Bohnanza:       
- I love this game, but not many people have heard of it!       
- Also quite a long game and faces similar AI issues as above.      

### Battleships:        
- Great game and fun project but my friend already did this!        