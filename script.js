// let humanScore = 0;
// let computerScore = 0;

// let getComputerChoice = () => {
//     let result = (Math.floor(Math.random() * 3) + 1);
//     if (result === 1) {
//         console.log("getComputerChoice is rock"); //here for debugging as necessary
//         return "rock";
//     } else if(result === 2) {
//         console.log("getComputerChoice is paper"); //here for debugging as necessary
//         return "paper";
//     } else if(result === 3) {
//         console.log("getComputerChoice is scissors"); //here for debugging as necessary
//         return "scissors";
//     } else {
//         console.log("Houston, we have a problem"); //just in case
//     }
// }

// function getHumanChoice() {
//     return prompt("Rock, Paper, or Scissors?", "").toLowerCase();
// }


// // let getHumanChoice = prompt("Rock, Paper, or Scissors?", "");
// console.log(getHumanChoice() + ' is getHumanChoice');

// let humanChoice = getHumanChoice();
// console.log(humanChoice + ' is the humanChoice');
// let computerChoice = getComputerChoice();
// console.log(computerChoice + ' is the computerChoice');

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         console.log(`TIE! You both chose ${humanChoice}!`);
//     } else if (humanChoice === "rock" && computerChoice === "scissors") {
//         console.log(`WINNER! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
//         humanScore++;
//     } else if (humanChoice === "paper" && computerChoice === "rock") {
//         console.log(`WINNER! You chose ${humanChoice} and the computer chose ${computerChoice}!`)
//         humanScore++;
//     } else if (humanChoice === "scissors" && computerChoice === "paper") {
//         console.log(`WINNER! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
//         humanScore++;
//     } else {
//         console.log(`LOSER! You chose ${humanChoice} and the computer beat you with ${computerChoice}!`)
//         computerScore++;
//     }
// }

// playRound(humanChoice, computerChoice);
// console.log(humanScore + ' is the humanScore');
// console.log(computerScore + ' is the computerScore');

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        console.log("rock selected by computer");
        return "rock";
    } else if (choice === 1) {
        console.log("paper selected by computer");
        return "paper";
    } else {
        console.log("scissors selected by computer");
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
}

let humanSelection;// = getHumanChoice();
let computerSelection;// = getComputerChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    function playRound(humanChoice, computerChoice) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        if (humanSelection === computerSelection) {
            console.log(`TIE! You both chose ${humanSelection}!`);
            console.log(humanScore, computerScore);
            roundsPlayed++;
            console.log(roundsPlayed);
        } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            console.log(`WINNER! You chose ${humanSelection} and computer chose ${computerSelection}!`);
            humanScore++;
            console.log(humanScore, computerScore);
            roundsPlayed++;
            console.log(roundsPlayed);
        } else if (humanSelection === 'paper' && computerSelection === 'rock') {
            console.log(`WINNER! You chose ${humanSelection} and computer chose ${computerSelection}!`);
            humanScore++;
            console.log(humanScore, computerScore);
            roundsPlayed++;
            console.log(roundsPlayed);
        } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            console.log(`WINNER! You chose ${humanSelection} and computer chose ${computerSelection}!`);
            humanScore++;
            console.log(humanScore, computerScore);
            roundsPlayed++;
            console.log(roundsPlayed);
        } else {
            console.log(`LOSER! You chose ${humanSelection} and computer chose ${computerSelection}!`);
            computerScore++;
            console.log(humanScore, computerScore);
            roundsPlayed++;
            console.log(roundsPlayed);
        }
    }   
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    if (humanScore === computerScore) {
        console.log('The game ends in a TIE');
    } else if (humanScore > computerScore) {
        console.log('You WIN the game');
    } else {
        console.log('You LOSE the game')
    }
}

playGame();