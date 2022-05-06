// Generates a random choice
function computerPlay() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  switch (randomChoice) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
  }
}

// Generates a single round and determines the winner based on the 
// selection of the player and the randomly generated choice of the
// computer.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return "You tied!";
      case 'paper':
        return "You lose! Paper beats Rock.";
      default:
        return "You win! Rock beats Scissors.";
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return "You win! Paper beats Rock.";
      case 'paper':
        return "You tied!";
      default:
        return "You lose! Scissors beats Paper.";
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return "You lose! Rock beats Scissors.";
      case 'paper':
        return "You win! Scissors beats Paper.";
      default:
        return "You tied!";
    }
  }
}

// Starts the actual game and takes input from the user each round
function game() {
  let userInput = prompt("Rock, Paper, or Scissors?");

  // Plays 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    playRound(userInput, computerPlay());
  }
}