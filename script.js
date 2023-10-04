// STEP 1: Create a function for the computer choice that randomly outputs an option out of three choices. [FINISHED]
// STEP 2: Create a function that plays a single round of RPS. Takes two parameters and compares the results against each other. [FINISHED]
// STEP 3: Create a function that houses your previous function to allow it to play five times in a row and determines the winner out of 5 games.


// STEP 1:
const getComputerChoice = () => { // computer choice function
  const choices = ['Rock', 'Paper', 'Scissors']; // creates an array of choices to choose from
  const randomIndex = Math.floor(Math.random() * choices.length); // acts as a random generator that chooses an random index per choice
  return choices[randomIndex]; // returns the matching choice of that index 
};

const computerChoice = getComputerChoice(); // the computer's choice is randomly generated from the getComputerChoice function
console.log('Computer choice: ' + computerChoice); // logs it

// STEP 2: 
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase(); // makes user input case-insensitive
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) { // if player selection is the same as computer selection, it will return a tie game.
    return "It's a tie!";
  } else if ( // if player selection beats computer selection, it will return you won.
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else { // anything else and the computer won, it will return you lost.
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
};

const playerSelection = 'rock';
const computerSelection = computerChoice;
console.log(playRound(playerSelection, computerSelection));

// STEP 3:

