// Function to randomly select the computer's choice
function getComputerChoice() {
  // Array of possible choices
  const choices = ["Rock", "Paper", "Scissors"];
  // Generating a random index to select from the choices array
  const randomIndex = Math.floor(Math.random() * choices.length);
  // Returning the choice at the randomly selected index
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Converting selections to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Checking if both selections are the same for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  // Determining the outcome if the player chooses rock
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    }
  }

  // Determining the outcome if the player chooses paper
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    }
  }

  // Determining the outcome if the player chooses scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You Win! Scissors beats Paper";
    }
  }

  // Returning an error message for invalid player inputs
  return "Invalid input";
}

// Function to play a 5-round game of Rock Paper Scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${round}: ${result}`);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    // Ties do not change the score
  }

  console.log(`Final Score: Player ${playerScore}, Computer ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > playerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// Call the game function to start the 5-round game
game();
