// Math.floor() method rounds a number downwards
// Math.random() method returns random number from 0 (inclusive) to 1 (exclusive)

function computerPlay() {
    let computerInt = Math.floor(Math.random() * 3);
    if (computerInt === 0) {
        return "Rock";
    } else if (computerInt === 1) {
        return "Paper";
    }
        return "Scissors";
}

let playerScore = 0;
let computerScore = 0;
let resultSentence = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const playeraction = document.querySelector('.playerAction');
const computeraction = document.querySelector('.computerAction');
const playerscore = document.querySelector('.playerScore');
const computerscore = document.querySelector('.computerScore');

playerscore.textContent = playerScore;
computerscore.textContent = computerScore;

function playRound(playerSelection, computerSelection) {
    playeraction.textContent = playerSelection;
    computeraction.textContent = computerSelection;

    if ((playerSelection === "Paper" && computerSelection === "Rock" ) ||
    (playerSelection === "Scissors" && computerSelection === "Paper" ) ||
    (playerSelection === "Rock" && computerSelection === "Scissors" )) {
        playerScore += 1;
        playerscore.textContent = playerScore;
        if  (playerScore === 5 ) {
            for (var i = 0; i < buttons.length; i++) { 
                buttons[i].disabled = true;
            }
            return result.textContent = `You have 5 points and win the game!`;
        }
        return result.textContent = `${playerSelection} beats ${computerSelection.toLowerCase()}. You win this round!`;
        
    } else if ((playerSelection === "Rock" && computerSelection === "Paper" ) ||
    (playerSelection === "Paper" && computerSelection === "Scissors" ) ||
    (playerSelection === "Scissors" && computerSelection === "Rock" )) {
        computerScore++;
        computerscore.textContent = computerScore;
        if  (computerScore === 5 ) {
            for (var i = 0; i < buttons.length; i++) { 
                buttons[i].disabled = true;
            }
            return result.textContent = `The Computer has 5 points and wins the game!`;
        }
        return result.textContent = `${computerSelection} beats ${playerSelection.toLowerCase()}. Computer wins this round!`;
        
    } 
    return result.textContent = "This round is a draw.";
    
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className, computerPlay());
    });
});



