// STEP 1: Create a function for the computer choice that randomly outputs an option out of three choices. [FINISHED]
// STEP 2: Create a function that plays a single round of RPS. Takes two parameters and compares the results against each other. [FINISHED]
// STEP 3: Create a function that houses your previous function to allow it to play five times in a row and determines the winner out of 5 games. [FINISHED]



// Referencing to HTML elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

// Initial scores
let playerScore = 0;
let computerScore = 0;
const maxRounds = 5;

// Function to play a single round
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.trim().toLowerCase(); // makes user input case-insensitive + .trim to deny extra spaces in input
  computerSelection = computerSelection.trim().toLowerCase(); // makes computer input case-insensitive + .trim to deny extra spaces in input

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
};

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length); // acts as a random generator that chooses an random index per choice
  return choices[randomIndex];
};

const computerChoice = getComputerChoice();

// Function to update the score display
const updateScoreDisplay = () => {
  scoreDisplay.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
};

// Function to check for a game winner
const checkGameWinner = () => {
  if (playerScore === maxRounds) {
    resultDisplay.textContent = "Congratulations! You won the game!";
    resetGame();
  } else if (computerScore === maxRounds) {
    resultDisplay.textContent = "Computer won. Try again!";
    resetGame();
  }
};

// Event listeners for buttons
rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = playRound('rock', computerChoice);
  resultDisplay.textContent = result;
  if (result.startsWith('You won!')) {
    playerScore++;
  } else if (result.startsWith('You lost!')) {
    computerScore++;
  }
  updateScoreDisplay();
  checkGameWinner();
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = playRound('paper', computerChoice);
  resultDisplay.textContent = result;
  if (result.startsWith('You won!')) {
    playerScore++;
  } else if (result.startsWith('You lost!')) {
    computerScore++;
  }
  updateScoreDisplay();
  checkGameWinner();
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = playRound('scissors', computerChoice);
  resultDisplay.textContent = result;
  if (result.startsWith('You won!')) {
    playerScore++;
  } else if (result.startsWith('You lost!')) {
    computerScore++;
  }
  updateScoreDisplay();
  checkGameWinner();
});

// Reset function
const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
};