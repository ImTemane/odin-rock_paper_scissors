const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

const scoreDisplayer = document.querySelector("p.score");
const roundWinnerDisplayer = document.querySelector("p.round-winner");
const gameWinnerDisplayer = document.querySelector("p.game-winner");

rockBtn.addEventListener("click",() => playRound("rock"));
paperBtn.addEventListener("click",() => playRound("paper"));
scissorsBtn.addEventListener("click",() => playRound("scissors"));

const attacks = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return attacks[Math.floor(Math.random() * 3)]
};

function playRound(humanChoice, computerChoice = getComputerChoice()) {
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