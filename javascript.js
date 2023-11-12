// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to randomly select the computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Standardize the case of player and computer selections
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let result = "";

  // Determine the outcome of the round and update scores
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You Win! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerSelection)}`;
  } else {
    computerScore++;
    result = `You Lose! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${capitalizeFirstLetter(playerSelection)}`;
  }

  // Update the DOM with the round result and current scores
  updateDOM(result);
  // Check if there is a winner
  checkForWinner();
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to update the result and score display in the DOM
function updateDOM(result) {
  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");

  resultsDiv.textContent = result;
  scoreDiv.textContent = `Score - Player: ${playerScore}, Computer: ${computerScore}`;
}

// Function to check if a player has reached 5 points and won the game
function checkForWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "Player" : "Computer";
    updateDOM(`${winner} wins the game!`);
    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
  }
}

// Adding event listeners to buttons to play a round with the selected choice
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
