const startGame = document.querySelector("#start");
const gameChoices = document.querySelectorAll(".gameChoice");
let playerScoreText = document.querySelector(".playerScore");
let computerScoreText = document.querySelector(".computerScore");
let roundResultText = document.querySelector(".result");
let playerScoreValue = document.querySelector(".playerScoreValue");
let computerScoreValue = document.querySelector(".computerScoreValue");
let resultText = document.querySelector(".resultText");
let gameOverText = document.querySelector("#gameOverText")
let totalTiesText = document.querySelector("#ties");
let gameWinsText = document.querySelector("#winsText");
let gameLossesText = document.querySelector("#lossesText");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let totalTies = 0
let roundsPlayed = 0
let gameWins = 0;
let gameLosses = 0;

document.getElementById("restart").addEventListener("click", () => {
    document.getElementById("container").style.display = "flex";
    document.getElementById("rock").style.display = "block";
    document.getElementById("paper").style.display = "block";
    document.getElementById("scissors").style.display = "block";
    document.getElementById("text-container").style.display = "flex";
    document.getElementById("gameOver").style.display = "none";
});

// Determine if the game has been won
function isGameOver() {
    if (playerScore >= 5) {
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("text-container").style.display = "none";
        document.getElementById("container").style.display = "none";
        document.getElementById("gameOver").style.display = "flex";
        gameOverText.innerHTML = `YOU WIN! FINAL SCORE IS PLAYER: ${playerScore}, COMPUTER: ${computerScore}!`
        totalTiesText.innerHTML = `YOU HAD ${totalTies} TIES WITH THE COMPUTER AND PLAYED ${roundsPlayed} ROUNDS`
        playerScore = 0;
        computerScore = 0;
        totalTies = 0;
        roundsPlayed = 0;
        playerScoreValue.innerHTML = playerScore;
        computerScoreValue.innerHTML = computerScore;
        gameWins++;
        gameWinsText.innerHTML = `${gameWins}`;
        gameLossesText.innerHTML = `${gameLosses}`;
        resultText.innerHTML = "";
    } else if (computerScore >= 5) {
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("text-container").style.display = "none";
        document.getElementById("container").style.display = "none";
        document.getElementById("gameOver").style.display = "flex";
        gameOverText.innerHTML = `YOU LOSE! FINAL SCORE IS PLAYER: ${playerScore}, COMPUTER: ${computerScore}!`
        totalTiesText.innerHTML = `YOU HAD ${totalTies} TIES WITH THE COMPUTER AND PLAYED ${roundsPlayed} ROUNDS`
        playerScore = 0;
        computerScore = 0;
        totalTies = 0;
        roundsPlayed = 0;
        playerScoreValue.innerHTML = playerScore;
        computerScoreValue.innerHTML = computerScore;
        gameLosses++;
        gameWinsText.innerHTML = `${gameWins}`;
        gameLossesText.innerHTML = `${gameLosses}`;
        resultText.innerHTML = "";
    } else {
        return;
    }
}

// Start the game by removing the start button and adding the game to display
document.getElementById("start").addEventListener("click", () => {
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
        totalTies++;
        roundsPlayed++;
        resultText.innerHTML = `TIE! Both players selected ${humanChoice}!`;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        resultText.innerHTML = `WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`;
        roundsPlayed++;
        playerScore++;
        calculateScore();
        isGameOver();
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        resultText.innerHTML = `WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`;
        roundsPlayed++;
        playerScore++;
        calculateScore();
        isGameOver();
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        resultText.innerHTML = `WINNER! You chose ${humanChoice}, computer chose ${computerChoice}!`;
        roundsPlayed++;
        playerScore++;
        resultText.innerHTML = 'Player Score: ' + playerScore + '! Computer score: ' + computerScore + '!';
        calculateScore();
        isGameOver();
    } else {
        resultText.innerHTML = `LOSER! You chose ${humanChoice}, computer chose ${computerChoice}!`
        roundsPlayed++;
        computerScore++;
        calculateScore();
        isGameOver();
    }
}