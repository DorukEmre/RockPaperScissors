// Math.floor() method rounds a number downwards
// Math.random() method returns random number from 0 (inclusive) to 1 (exclusive)

function computerPlay() {
    let computerInt = Math.floor(Math.random() * 3);
    if (computerInt === 0) {
        return "rock";
    } else if (computerInt === 1) {
        return "paper";
    }
        return "scissors";
}

// document.getElementById("computerSelection").innerHTML = computerSelection; 

let playerToken = 0;
let computerToken = 0;
let playerSelection;
let computerSelection;

function playRound() {
    let playerSelection = window.prompt("Rock, paper, scissors?").toLowerCase();
    let computerSelection = computerPlay();
    console.log("Player: "+playerSelection + " - Computer: "+computerSelection);
    
    if (playerSelection === "paper" && computerSelection === "rock" ) {
        playerToken++;
        return "Paper beats rock. You win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        playerToken++;
        return "Scissors beats paper. You win!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ) {
        playerToken++;
        return "Rock beats scissors. You win!";
    } else if (playerSelection === "rock" && computerSelection === "paper" ) {
        computerToken++;
        return "Paper beats rock. Computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors" ) {
        computerToken++;
        return "Scissors beats paper. Computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock" ) {
        computerToken++;
        return "Rock beats scissors. Computer wins!";
    }
        return "It's a draw.";
  }

function game() {
    console.log(playRound());
    console.log("Round 1 score, Player: "+playerToken+". Computer: "+computerToken); 
    
    console.log(playRound());
    console.log("Round 2 score, Player: "+playerToken+". Computer: "+computerToken); 
    
    console.log(playRound());
    console.log("Round 3 score, Player: "+playerToken+". Computer: "+computerToken); 
    
    console.log(playRound());
    console.log("Round 4 score, Player: "+playerToken+". Computer: "+computerToken); 
    
    console.log(playRound());
    if ( playerToken > computerToken ) {
        return "Player wins the game by " + playerToken + " to " + computerToken +"!";
    } else if ( playerToken < computerToken ) {
        return "Computer wins the game by " + computerToken + " to " + playerToken +"!";
    } 
        return "The final score is a draw! " + computerToken + " to " + playerToken;
}



console.log(game(playerSelection, computerSelection));