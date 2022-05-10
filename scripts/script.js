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

  const playerChoice = document.querySelector(".playerChoice");
  const computerChoice = document.querySelector(".computerChoice");

  playerChoice.textContent = playerSelection.toUpperCase();
  computerChoice.textContent = computerSelection.toUpperCase();

  const choices = document.querySelectorAll(".choicebox");
  choices.forEach((choice) => {
    console.log(choice.lastElementChild.textContent);
    if (choice.lastElementChild.textContent === 'ROCK') {
      choice.style.color = 'rgb(221, 73, 73)';
    } else if (choice.lastElementChild.textContent === 'PAPER') {
      choice.style.color = 'rgb(79, 216, 75)';
    } else {
      choice.style.color = 'rgb(49, 120, 212)';
    }
  });

  let result = findWinner(playerSelection, computerSelection);
  const winner = document.querySelector(".winner");
  winner.textContent = result;
}

function findWinner(playerSelection, computerSelection) {
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

  // Plays 5 rounds of the game
  /*
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Rock, Paper, or Scissors?");
    let result = playRound(userInput, computerPlay());
    console.log(result);
    alert(result);
  }
  */

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.getAttribute('class'), computerPlay());
    });
  });

}

game();