// PROGRAM TO PLAY A GAME //
let playerScore = 0;
let computerScore = 0;

// FUNCTION TO RANDOMLY RETURN ROCK PAPER SCISSOR //
function computerPlay() {
    const myNum = Math.floor(Math.random() * 3) + 1;

  if (myNum === 1) 
    return 'paper';
  if (myNum === 2) 
    return 'rock';
  if (myNum === 3) 
    return 'scissors';

}

// *********************************************************************** //

function manualPlay() {
    let playerInput = prompt('Please enter either: Rock, Paper or Scissors').toLowerCase();
    while (
        playerInput.trim().toLowerCase() !== 'paper' &&
        playerInput.trim().toLowerCase() !== 'rock' &&
        playerInput.trim().toLowerCase() !== 'scissors'
    ) {
        playerInput = prompt(' Invalid ❌ \n You are suppose to enter either: Rock, Paper or Scissors!');
    }
    return playerInput;
}

// *********************************************************************** //

//FUNCTION THAT PLAYS SINGLE ROUND OF ROCK PAPER SCISSOR //

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();

    console.log(`Computer entered ${computerSelection}`);
    console.log(`Player entered ${playerSelection}`);

    // Draw
    if (playerSelection === computerSelection) return "It's a draw 😲";

    //Rock 
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'Ooopss! You lose! Paper beats Rock 😢';
        } else {
            playerScore++;
            return 'Yayy! You Win! Rock beats Scissors 😊';
        }
    }

    // Paper 
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return 'Ooopss! You lose! Scissors beat Paper 😢';
        } else {
            playerScore++;
            return 'Yayy! You win! Paper beats Rock 😊';
        }
    }

    // Scissors 
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'Ooopss! You lose! Rock beats Scissors 😢';
        } else {
            playerScore++;
            return 'Yayy! You win! Scissors beat paper 😊';
        }
    }
}

// *********************************************************************** //

// FUNCTION TO PLAY A FIVE ROUND GAME //

function game() {

    alert("📣  Please note that you're about to enter in a game!");

    for (let i = 0; i < 5; i++) {
        console.log( "%c %s", "color:#6a0dad;  font-size: 14pt; font-weight: bold ",`Round ⤵️ ${i + 1}`);
        console.log(playRound(manualPlay(), computerPlay()));
    }
    if (computerScore > playerScore) {
        console.log("%c %s", "color:#ff0000; font-size: 14pt; font-weight: bold",
        `Sorry You Lost 😢 Computer Won! \n Final Score is: ${computerScore} - ${playerScore}`);

    } else if (computerScore < playerScore) {
        console.log("%c %s", "color:#006400; font-size: 14pt; font-weight: bold ",
        `Congratulations! You Won 😊 \n Final Score is: ${playerScore} - ${computerScore}`);

    } else {
        console.log(`It's a draw 😲 Final Score is: ${playerScore} - ${computerScore}`);
    }
}

game();

// PROGRAM ENDS HERE //