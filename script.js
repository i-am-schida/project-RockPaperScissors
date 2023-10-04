// STEP 1: Create a function for the computer choice that randomly outputs an option out of three choices. [FINISHED]
// STEP 2: Create a function that plays a single round of RPS. Takes two parameters and compares the results against each other. [FINISHED]
// STEP 3: Create a function that houses your previous function to allow it to play five times in a row and determines the winner out of 5 games. [FINISHED]


// STEP 1: Function to obtain a random computer choice
const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length); // acts as a random generator that chooses an random index per choice
  return choices[randomIndex];
};

const computerChoice = getComputerChoice();

// STEP 2: Function to play a single round
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

const computerSelection = computerChoice;

// STEP 3: Function to play 5 games in a row
const game = () => {
  let playerScore = 0;
  let computerScore= 0;

  for (let round = 1; round <= 5; round++) { // Using 'for loop' to loop the function 5 times for 5 games, starting at round 1 incrementing by 1 to round 5
    const playerChoice = prompt(`Round ${round}: Choose your choice (Rock, Paper, Scissors):`) 
    const computerChoice = getComputerChoice(); 

    const result = playRound(playerChoice, computerChoice); // play one round, based off that one round, log the results, then repeat 5 times

    console.log(`Round ${round}:`);
    console.log(`Player chose ${playerChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (result === "It's a tie!") {
      console.log("It's a tie\n");
    } else if (result.startsWith('You won!')) {
      console.log(`You win this round!\n`);
      playerScore++;
    } else {
      console.log(`Computer wins this round!\n`);
      computerScore++;
    }
  }
// Once the loop is over (5 rounds), log the final results
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