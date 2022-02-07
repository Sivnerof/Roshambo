let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const availableChoices = ["rock", "paper", "scissors"];
    const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    return computerChoice;
}


function playRound(computerSelection, playerSelection){
    const playerChoice = playerSelection.toLowerCase();
    console.log(computerSelection, playerSelection)
    if (playerChoice === computerSelection){
        console.log(`${playerChoice} vs ${computerSelection}: Tie Game!`);
    } else if (playerChoice === "rock" && computerSelection === "scissors" ||
            playerChoice === "paper" && computerSelection === "rock" || 
            playerChoice === "scissors" && computerSelection === "paper"){
        console.log(`${playerChoice} beats ${computerSelection}, Player Wins!!!`);
        playerScore++;
    } else {
        console.log(`${computerSelection} beats ${playerChoice}, Computer Wins!!!`);
        computerScore++;
    }
}

// Remove 5 round logic
function game(){
    for(let i = 0; i < 5; i++){
        playRound(computerPlay(), prompt("Rock, Paper, or Scissors?", ""));
    }
    if (playerScore > computerScore){
        console.log(`FINAL SCORE: Player Wins! ${playerScore} vs ${computerScore}`);
    } else if (computerScoreScore > playerScore) {
        console.log(`FINAL SCORE: Computer Wins! ${computerScore} vs ${playerScore}`);
    } else {
        console.log(`Tie Game`);
    }
}

game();

/*
    Remove the logic that plays exactly five rounds.
    
    Create three buttons, one for each selection. 
    Add an event listener to the buttons that call your playRound function with 
    the correct playerSelection every time a button is clicked. 
    (you can keep the console.logs for this step)
    
    Add a div for displaying results and change all of your console.logs into DOM methods.
    
    Display the running score, and announce a winner of the game once one player reaches 5 points.
    
    You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
    That’s OK! Reworking old code is an important part of a programmer’s life.
    
    Once you’re all done with your UI and made sure everything’s satisfactory, 
    commit your changes to the rps-ui branch.

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