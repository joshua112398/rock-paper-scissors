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

////////////////

// Generates a single round and determines the winner based on the 
// selection of the player and the randomly generated choice of the
// computer.

function playRound(playerSelection, computerSelection, playerScore, computerScore) {

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
  if (result === 'player') {
    playerScore += 1;
  }
  else if (result === 'computer') {
    computerScore += 1;
  }

  const playerScoreboard = document.querySelector(".playerScore");
  const computerScoreboard = document.querySelector(".computerScore");
  
  setScore(playerScoreboard, playerScore);
  setScore(computerScoreboard, computerScore);

  return result;

}

/////////////////

function setScore(scoreboard, score) {
  const scoreBoxes = scoreboard.children;
  for (let i = 0; i < score && score <= 5; i++) {
    if (scoreBoxes[i].style.backgroundColor !== 'black') {
      scoreBoxes[i].style.backgroundColor = 'black';
    }
  }
}

/////////////////

function findWinner(playerSelection, computerSelection) {
  const winner = document.querySelector(".winner");
  let winnerName = "";
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        winner.textContent = "You tied!";
        winnerName = "none";
        break;
      case 'paper':
        winner.textContent = "You lose! Paper beats Rock.";
        winnerName = "computer";
        break;
      default:
        winner.textContent = "You win! Rock beats Scissors.";
        winnerName = "player";
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        winner.textContent = "You win! Paper beats Rock.";
        winnerName = "player";
        break;
      case 'paper':
        winner.textContent = "You tied!";
        winnerName = "none";
        break;
      default:
        winner.textContent = "You lose! Scissors beats Paper.";
        winnerName = "computer";
        break;
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        winner.textContent = "You lose! Rock beats Scissors.";
        winnerName = "computer";
        break;
      case 'paper':
        winner.textContent = "You win! Scissors beats Paper.";
        winnerName = "player";
        break;
      default:
        winner.textContent = "You tied!";
        winnerName = "none";
        break;
    }
  }

  return winnerName;
}

/////////////////

// Starts the actual game and takes input from the user each round
function game() {

  let playerScore = 0;
  let computerScore = 0;
  let result = "";

  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      result = playRound(button.getAttribute('class'), computerPlay(), playerScore, computerScore);
      if (result === 'player') {
        playerScore += 1;
      } else if (result === 'computer') {
        computerScore += 1;
      }


      const modal = document.querySelector(".modal");
      if (playerScore === 5) {
        modal.lastElementChild.firstElementChild.textContent = 'YOU WON!';
        modal.style.display = "block";
      } else if (computerScore === 5) {
        modal.lastElementChild.firstElementChild.textContent = 'YOU LOST!';
        modal.style.display = "block";
      }
    });
  });

  const playAgain = document.querySelector(".playAgain");
  playAgain.addEventListener('click', () => {
    window.location.reload();
  });

}

game();