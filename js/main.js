$('#test-button').click(function(){
    alert('It works!');
})

const charArr = [
    {
        name: 'Jean Claude',
        male: true,
        glasses: true,
        eyeColor: 'brown'
    },
        {
        name: 'Pierre',
        male: true,
        mustache: true,
        eyeColor: 'brown'
        }
        // ...and so on
]

const charList = {
    "Jean-Claude": ["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"],
    "Pierre": ["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"],
    "Jean": ["Male","White hair","Big nose","Big mouth","Blue eyes"],
    "Amelie":["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"],
    "Mirabelle": ["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"],
    "Isabelle": ["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"],
    "Antonin": ["Male","Brown eyes","Black hair","Small nose","Big mouth"],
    "Bernard": ["Male","Brown eyes","Brown hair","Small nose","Hat"],
    "Owen": ["Male","Blue eyes","Blonde hair","Small nose","Small mouth"],
    "Dylan": ["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"],
    "Herbert":["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"],
    "Christine": ["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"],
    "Luc": ["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"],
    "Cecilian":["Male","Brown eyes","Ginger hair","Small nose","Small mouth"],
    "Lionel":["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"],
    "Benoit":["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"],
    "Robert":["Male","Blue eyes","Brown hair","Big nose","Big mouth"],
    "Charline":["Female","Brown hair","White hair","Small nose","Big mouth"],
    "Renaud":["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"],
    "Michel":["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"],
    "Pierre-Louis":["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"],
    "Etienne":["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"],
    "Henri":["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"],
    "Damien":["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]
}

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
