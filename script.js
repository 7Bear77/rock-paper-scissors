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

let getComputerChoice = () => {
    let result = (Math.floor(Math.random() * 3) + 1);
    if (result === 1) {
        console.log("Rock");
    } else if(result === 2) {
        console.log("Paper");
    } else if(result === 3) {
        console.log("Scissors")
    } else {
        console.log("Houston, we have a problem")
    }
}
getComputerChoice();

// not sure how to make this work in an arrow function...GOT IT!