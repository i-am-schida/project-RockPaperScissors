// STEP 1: Create a function for the computer choice that randomly outputs an option out of three choices. [FINISHED]
// STEP 2: Create a function that plays a single round of RPS. Takes two parameters and compares the results against each other. [FINISHED]
// STEP 3: Create a function that houses your previous function to allow it to play five times in a row and determines the winner out of 5 games. [FINISHED]


// STEP 1: Function to obtain a random computer choice
const getComputerChoice = () => { // computer choice function
  const choices = ['Rock', 'Paper', 'Scissors']; // creates an array of choices to choose from
  const randomIndex = Math.floor(Math.random() * choices.length); // acts as a random generator that chooses an random index per choice
  return choices[randomIndex]; // returns the matching choice of that index 
};

const computerChoice = getComputerChoice(); // the computer's choice is randomly generated from the getComputerChoice function
// console.log('Computer choice: ' + computerChoice); // logs it ##################################

// STEP 2: Function to play a single round
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.trim().toLowerCase(); // makes user input case-insensitive
  computerSelection = computerSelection.trim().toLowerCase();

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

// const playerSelection = 'rock'; #########################
const computerSelection = computerChoice;
// console.log(playRound(playerSelection, computerSelection)); ########################

// STEP 3: Function to play 5 games in a row
const game = () => {
  let playerScore = 0; // Intial player score; zero
  let computerScore= 0; // Initial computer score; zero

  for (let round = 1; round <= 5; round++) { // Using 'for loop' to loop the function 5 times for 5 games, starting at round 1 incrementing by 1 to round 5
    const playerChoice = prompt(`Round ${round}: Choose your choice (Rock, Paper, Scissors):`) // creates a prompt to allow user to choose Rock Paper or Scissors
    const computerChoice = getComputerChoice(); // retrieves computer choice

    const result = playRound(playerChoice, computerChoice); // play one round

    console.log(`Round ${round}:`);
    console.log(`Player chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (result === "It's a tie!") {
      console.log("It's a tie\n");
    } else if (result.startsWith('You won!')) {
      console.log(`You win this round!\n`);
      playerScore++; // adds one to playerScore if player won
    } else {
      console.log(`Computer wins this round!\n`);
      computerScore++; // adds one to computerScore if computer won
    }
  }
// Once the loop is over (5 rounds), log the results
  console.log('Game Over'); 
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if (playerScore > computerScore) { // compares player score to computer score to determine overall winner
    console.log(`Congratulations! You won!`);
  } else if (playerScore < computerScore) {
    console.log(`You lost! Better luck next time.`);
  } else {
    console.log("It's a tie.");
  }
};

// Call to play a 5-round game
game();