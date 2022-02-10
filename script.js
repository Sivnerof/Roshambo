/* Global Variables */
let computerScore = 0;
let playerScore = 0;
let round = 0;

/* Query Selectors */
const playerChoice = document.querySelectorAll('button.rps-buttons');
const playerScoreSection = document.querySelector('#player-score');
const computerScoreSection = document.querySelector('#computer-score');
const roundWinnerSection = document.querySelector('#winner');
const roundNumberSection = document.querySelector('#round-number');
const announceWinnerSection = document.querySelector('#announce-winner');


/* Functions */
function computerPlay(){
    const availableChoices = ["rock", "paper", "scissors"];
    const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}

function updateRound(){
    round++;
    roundNumberSection.textContent = `Round ${round}`;
}

function updateScore(){
    playerScoreSection.textContent = playerScore;
    computerScoreSection.textContent = computerScore;
}

function playRound(computerSelection, playerSelection){
    updateRound();
    if (playerSelection === computerSelection){
        roundWinnerSection.textContent = `${playerSelection} vs ${computerSelection}: Tie Game`;
        return;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" || 
            playerSelection === "scissors" && computerSelection === "paper"){
        roundWinnerSection.textContent = `${playerSelection} vs ${computerSelection}: Player Wins`;
        playerScore++;
    } else {
        roundWinnerSection.textContent = `${playerSelection} vs ${computerSelection}: Computer Wins`;
        computerScore++;
    }
    updateScore();
}


/* Event listeners */
playerChoice.forEach(element => {
    element.addEventListener('click', () => {
        playRound(computerPlay(), element.id);
    });
})
