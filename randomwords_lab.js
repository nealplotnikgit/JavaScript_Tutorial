randomBodyParts = ['head','butt','arm','nose','leg'];
randomAdjectives = ['bloody','smelly','stinky','ugly','beautiful']; 
randomWords = ['money','monkey','fuck','dog','television'];

function randomwords(){
 
bodyPart = randomBodyParts[Math.floor((Math.random()*randomBodyParts.length))];
adjective = randomAdjectives[Math.floor((Math.random()*randomAdjectives.length))];
word = randomWords[Math.floor((Math.random()*randomWords.length))];
console.log("Your " + bodyPart + ' is like a ' + adjective + ' ' + word + "!");    
}

randomwords()