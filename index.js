// The ScoreBoard counters Variables;
let Correct = 0;

let Errors = 0;

let Attempts = 0; 



function Red(){

// Here we declare a variable and save a random number from the computer in it.
let computerGuess = Math.random();
console.log(computerGuess);

// Compare the random number to display a Heart colour depending on the value (0 to 0.49 is Red Heart) and (0.5 to 1 is Black Heart).
let Display = '';
if (computerGuess >= 0 && computerGuess < 0.5) {
    Display = '❤️';
} else {
   Display = '🖤'; 
}

let displaySpace = document.getElementById('display');
displaySpace.value = Display;
console.log(Display);


// Compare if your clicked button is the same as the computer predicted then Correct incresses by 1 Else Error incresses by 1. Add both and display as Attempts;
if(Display === '❤️') {
    Correct++;
    console.log(Correct);
    
}else {
    Errors++;
    console.log(Errors);
}

Attempts = Correct + Errors;
console.log(Attempts);

// The Correct Counter display variable.
let correctCounter = document.getElementById('corrects');
correctCounter.value = Correct;


// The Error Counter display variable.
let errorCounter = document.getElementById('errors');
errorCounter.value = Errors;

// The Attempt Counter display variable.
let attemptCounter = document.getElementById('attempts');
attemptCounter.value = Attempts;

}






// The Black Heart Button with Function
function Black(){

// Here we declare a variable and save a random number from the computer in it.
let computerGuess = Math.random();
console.log(computerGuess);

// Compare the random number to display a Heart colour depending on the value (0 to 0.49 is Red Heart) and (0.5 to 1 is Black Heart).
let Display = '';
if (computerGuess >= 0 && computerGuess < 0.5) {
    Display = '❤️';
} else {
   Display = '🖤'; 
}

let displaySpace = document.getElementById('display');
displaySpace.value = Display;
console.log(Display);


// Compare if your clicked button is the same as the computer predicted then Correct incresses by 1 Else Error incresses by 1. Add both and display them  as number Attempts;
if(Display === '🖤') {
    Correct++;
    console.log(Correct);
    
}else {
    Errors++;
    console.log(Errors);
}

Attempts = Correct + Errors;
console.log(Attempts);

// The Correct Counter display variable.
let correctCounter = document.getElementById('corrects');
correctCounter.value = Correct;


// The Error Counter display variable.
let errorCounter = document.getElementById('errors');
errorCounter.value = Errors;

// The Attempt Counter display variable.
let attemptCounter = document.getElementById('attempts');
attemptCounter.value = Attempts;


}

// The Reset Button
function Reset(){
    Correct = 0;
    Errors = 0;
    Attempts = 0;
}


