console.log("Hello World!");
const attacks = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return attacks[Math.floor(Math.random() * 3)]
};

function getHumanChoice() {
  let choice = prompt("Choose your attack: rock, paper or scissors?  ").toLowerCase();
  if (attacks.includes(choice)) {
    return choice
  }
  else {
    console.log("Invalid Choice: check the spell pls.");
    getHumanChoice();
  };
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie (._.); " + humanChoice + " vs " + computerChoice + " = Tie.");
  }
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won! " + humanChoice + " beats " + computerChoice);
    humanScore += 1;
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! " + humanChoice + " beats " + computerChoice);
    humanScore += 1;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won! " + humanChoice + " beats " + computerChoice);
    humanScore += 1;
  }
  else {
    console.log("You lose. " + computerChoice + " beats " + humanChoice);
    computerScore += 1;
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
