// STEP 1: Create a function for the computer choice that randomly outputs an option out of three choices. [FINISHED]
// STEP 2: Create a function that plays a single round of RPS. Takes two parameters and compares the results against each other.


// STEP 1:
const getComputerChoice = () => { // computer choice function
  const choices = ['Rock', 'Paper', 'Scissors']; // creates an array of choices to choose from
  const randomIndex = Math.floor(Math.random() * choices.length); // acts as a random generator that chooses an random index per choice
  return choices[randomIndex]; // returns the matching choice of that index 
};

const computerChoice = getComputerChoice(); // the computer's choice is randomly generated from the getComputerChoice function
console.log(computerChoice); // logs it