/* Global Variables */
let computerScore = 0;
let playerScore = 0;

/* Query Selectors */
const playerChoice = document.querySelectorAll('button.rps-buttons');
const gameScores = document.querySelector('#announcement');


/* Functions */
function computerPlay(){
    const availableChoices = ["rock", "paper", "scissors"];
    const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}


function playRound(computerSelection, playerSelection){
    if (playerSelection === computerSelection){
        console.log(`${playerSelection} vs ${computerSelection}: Tie Game!`);
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "rock" || 
            playerSelection === "scissors" && computerSelection === "paper"){
        console.log(`${playerSelection} beats ${computerSelection}, Player Wins!!!`);
        playerScore++;
    } else {
        console.log(`${computerSelection} beats ${playerSelection}, Computer Wins!!!`);
        computerScore++;
    }
}


/* Event listeners */
playerChoice.forEach(element => {
    element.addEventListener('click', () => {
        playRound(computerPlay(), element.id);
    });
})

/*
    Add a div for displaying results and change all of your console.logs into DOM methods.
    
    Display the running score, and announce a winner of the game once one player reaches 5 points.

Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.

    Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
    
    Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
    
    If everything goes fine, our rps-ui branch is now successfully merged with main! 
    Use git log and you’ll see all the commits you’ve made to your feature branch 
    on top of the commits you made to the main branch. Now for our final step!
    
    Let’s push our main branch into our remote repo by running git push origin main . 
    Go to your Github repo and you’ll see that our main branch will have all the 
    changes and commits you made to the rps-ui branch. 
    Now that we have all our code in the main branch, 
    we don’t really need our rps-ui branch anymore. 
    Let’s do some cleanup, both locally and in the remote repo. 
    Delete the branch from our local repo with git branch -d rps-ui and also 
    delete it from the remote repo on Github with 
    git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!
*/