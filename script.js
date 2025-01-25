const startGame = document.querySelector("#start");
const gameChoices = document.querySelectorAll(".gameChoice");
let playerScoreText = document.querySelector(".playerScore");
let computerScoreText = document.querySelector(".computerScore");
let roundResultText = document.querySelector(".result");
let playerScoreValue = document.querySelector(".playerScoreValue");
let computerScoreValue = document.querySelector(".computerScoreValue");
let resultText = document.querySelector(".resultText");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

// Start the game by removing the start button and adding the game to display
document.getElementById("start").addEventListener("click", () => {
    console.log("clicked");
    startGame.style.display = "none";
document.getElementById("rock").style.display = "block";
document.getElementById("paper").style.display = "block";
document.getElementById("scissors").style.display = "block";
document.getElementById("text-container").style.display = "flex";
});

// When player selects a button, play a round of the game
gameChoices.forEach(button => button.addEventListener("click", () => {
    humanChoice = button.id;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    playRound();
}))

// function to display score as it updates
function calculateScore() {
    playerScoreValue.innerHTML = playerScore;
    computerScoreValue.innerHTML = computerScore;
};

// Logic to determine winner of each round of play (making a selection)
function playRound() {
    if (humanChoice === computerChoice) {
        resultText.innerHTML = `TIE! Both players selected ${humanChoice}!`;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        resultText.innerHTML = `WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`;
        playerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
        calculateScore();
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        resultText.innerHTML = `WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`;
        playerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
        calculateScore();
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        resultText.innerHTML = `WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`;
        playerScore++;
        resultText.innerHTML = 'Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!';
        calculateScore();
    } else {
        console.log(`LOSER! You chose ${humanChoice}, computer chose ${computerChoice}! Better luck next time!`);
        computerScore++;
        console.log('Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!');
        calculateScore();
    }
}