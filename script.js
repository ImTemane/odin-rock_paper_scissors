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
    roundWinnerDisplayer.textContent = "Tie: " + humanChoice + " vs " + computerChoice
  }
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    roundWinnerDisplayer.textContent = "You won! " + humanChoice + " beats " + computerChoice;
    humanScore += 1;
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    roundWinnerDisplayer.textContent = "You won! " + humanChoice + " beats " + computerChoice;
    humanScore += 1;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
   roundWinnerDisplayer.textContent = "You won! " + humanChoice + " beats " + computerChoice;
    humanScore += 1;
  }
  else {
    roundWinnerDisplayer.textContent = "You lose. " + computerChoice + " beats " + humanChoice;
    computerScore += 1;
  }
  scoreDisplayer.textContent = "You: " + humanScore + " | Computer: " + computerScore;
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
