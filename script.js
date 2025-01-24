const startGame = document.querySelector("#start");

const gameChoices = document.querySelectorAll(".gameChoice");
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function startGame() {
    document.getElementById("#start").style.display = "none";
    document.getElementById(".gameChoice").style.display = "block";
}

// When player selects a button, play a round of the game
gameChoices.forEach(button => button.addEventListener("click", () => {
    humanChoice = button.id;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playRound();
}))


// Logic to determine winner of each round of play (making a selection)
function playRound() {
    if (humanChoice === computerChoice) {
        console.log(`TIE! Both players selected ${humanChoice}!`);
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`);
        playerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`);
        playerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`);
        playerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
    } else {
        console.log(`LOSER! You chose ${humanChoice}, computer chose ${computerChoice}! Better luck next time!`);
        computerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
    }
}

// function playGame() {
//     let roundsPlayed = 0;

//     while (roundsPlayed < 5) {
//         playRound(humanChoice, computerChoice);
//         roundsPlayed++;
//     }

//     while (playerScore === computerScore) {
//         console.log('TIES are for Europeans, try again maggot!');
//         playRound(humanChoice, computerChoice);
//     }
// }