// Step 2: Write the logic to get the computer choice
// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// write a function 'getComputerChoice' which will randomly return 'rock' 'paper' or 'scissors'
// what is the problem I need to solve?
// return a value which will produce the desired result

// create a function that produces a random result
// 


// let getComputerChoice = () => (Math.floor(Math.random() * 3) + 1);
// console.log(getComputerChoice());

// Now that I have a random number between 1 and 3, I need to make it give me one of my 3 choices
// if result = 1 give rock
// 2 = paper
// 3 = scissors
// if function might work.

// adjust the arrow function




// not sure how to make this work in an arrow function...GOT IT!

// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

// getHumanChoice
// Ask the user which option they will pick, it might be easiest to provide three options to the user so that they can't beef it




// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

let humanScore = 0;
let computerScore = 0;

// initial function that i'm struggling witj
let getComputerChoice = () => {
    let result = (Math.floor(Math.random() * 3) + 1);
    if (result === 1) {
        console.log("rock"); //here for debugging as necessary
        return "rock";
    } else if(result === 2) {
        console.log("paper"); //here for debugging as necessary
        return "paper";
    } else if(result === 3) {
        console.log("scissors"); //here for debugging as necessary
        return "scissors";
    } else {
        console.log("Houston, we have a problem"); //just in case
    }
}
// getComputerChoice(); //Here for debugging currently.

let getHumanChoice = prompt("Rock, Paper, or Scissors?", "");
console.log(getHumanChoice);

// Initialize a function playRound
// Define two parameters for the function, humanChoice, and computerChoice ***This is where I messed up earlier perhaps
// Compute the results
// Compare the results to determine the outcome
// Increment the score of the winner if applicable
// console.log the results

const humanChoice = getHumanChoice.toLowerCase();
console.log(humanChoice);
const computerChoice = getComputerChoice();
console.log(computerChoice);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`TIE! You both chose ${humanChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("WINNER! Rock smashes Scissors!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("WINNER! Paper covers Rock!")
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("WINNER! Scissors cuts Paper!");
        humanScore++;
    } else {
        console.log("Next time you should be better!")
        computerScore++;
    }
}

playRound(humanChoice, computerChoice);
console.log(humanScore);
console.log(computerScore);