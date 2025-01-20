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

let humanSelection;
let computerSelection;

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