function getComputerChoice() {
  // Array containing the possible choices: Rock, Paper, and Scissors
  const choices = ["Rock", "Paper", "Scissors"];

  // Generate a random index based on the length of the choices array
  // Math.random() returns a floating-point, pseudo-random number in the range 0 to less than 1
  // Math.floor() rounds the number down to the nearest whole number
  const randomIndex = Math.floor(Math.random() * choices.length);

  // Return the choice at the randomly generated index
  return choices[randomIndex];
}

// Test the function by logging the result to the console
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  // Convert both player and computer selections to lowercase
  // to make the comparison case-insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Check if both selections are the same, resulting in a tie
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  // Determine the outcome if the player chooses rock
  if (playerSelection === "rock") {
    // Compare with the computer's choice
    if (computerSelection === "paper") {
      // Paper covers rock - player loses
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      // Rock crushes scissors - player wins
      return "You Win! Rock beats Scissors";
    }
  }

  // Determine the outcome if the player chooses paper
  if (playerSelection === "paper") {
    // Compare with the computer's choice
    if (computerSelection === "scissors") {
      // Scissors cut paper - player loses
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      // Paper covers rock - player wins
      return "You Win! Paper beats Rock";
    }
  }

  // Determine the outcome if the player chooses scissors
  if (playerSelection === "scissors") {
    // Compare with the computer's choice
    if (computerSelection === "rock") {
      // Rock crushes scissors - player loses
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      // Scissors cut paper - player wins
      return "You Win! Scissors beats Paper";
    }
  }

  // Return an error message if the player's input doesn't match any of the expected choices
  return "Invalid input";
}

// Test the function with a case-insensitive input
console.log(playRound("RoCK", "Scissors")); // Example call to the function
