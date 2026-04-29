// The Red Heart Button with Function

// The Counter Variable;
let count = 0;

let errors = 0;

let Attempts = 0; 

function Reset(){
    
}

function Red(){

// Here we declare a variable and save a random number from the computer in it.
let computerGuess = Math.random();
console.log(computerGuess);

// Compare the random number to display a Heart colour depending on the value (0 to 0.49 is Red Heart) == (0.5 to 1 is Black Heart)
let Display = '';
if (computerGuess >= 0 && computerGuess < 0.5) {
    Display = '❤️';
} else {
   Display = '🖤'; 
}

let displaySpace = document.getElementById('display');
displaySpace.value = Display;
console.log(Display);

// The Scores Counter
let ScoreBoard = document.getElementById('scoreBoard');

// Compare if your clicked button is the same as the computer,the Scores incresses by 1;
if (Display === '❤️') {
    count++;
    console.log(count);
    ScoreBoard.value = count;
    
}else {
    errors++;
}

Attempts = count + errors;
document.getElementById('attempts').innerHTML = Attempts;

document.getElementById('error').innerHTML = errors;

// Show your Scores in the Score Board;
document.getElementById('scoreBoard').innerHTML = ScoreBoard.value;
}



// The Black Heart Button with Function
function Black(){

// Here we declare a variable and save a random number from the computer in it.
let computerGuess = Math.random();
console.log(computerGuess);

// Compare the random number to display a Heart colour depending on the value (0 to 0.49 is Red Heart) == (0.5 to 1 is Black Heart)
let Display = '';
if (computerGuess >= 0 && computerGuess < 0.5) {
    Display = '❤️';
} else {
   Display = '🖤'; 
}

let displaySpace = document.getElementById('display');
displaySpace.value = Display;
console.log(Display);

// The Scores Counter
let ScoreBoard = document.getElementById('scoreBoard');

// Compare if your clicked button is the same as the computer,the Scores incresses by 1;
if (Display === '🖤') {
    count++;
    console.log(count);
    ScoreBoard.value = count;
    
}else {
    errors++;
}

Attempts = count + errors;
document.getElementById('attempts').innerHTML = Attempts;

document.getElementById('error').innerHTML = errors;

// Show your Scores in the Score Board;
document.getElementById('scoreBoard').innerHTML = ScoreBoard.value;

}