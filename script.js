const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

const scoreDisplayer = document.querySelector("p.score");
const roundWinnerDisplayer = document.querySelector("p.round-winner");
const gameWinnerDisplayer = document.querySelector("p.game-winner");

const attacks = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return attacks[Math.floor(Math.random() * 3)]
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

function playGame(){

  while (humanScore < 5 && computerScore < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Score:  " + humanScore + " - " + computerScore);
  }

  if (humanScore === 5) {
    console.log("§ YOU WON § 5 - " + computerScore)
  }
  else if (computerScore === 5){
    console.log("y o u  l o s e | . _ . | " + humanScore + " - 5");
  }
  else {
    console.log("H A C K E R")
  }

}
