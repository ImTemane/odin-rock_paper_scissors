const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("button#paper");
const scissorsBtn = document.querySelector("button#scissors");

const scoreDisplayer = document.querySelector("p.score");
const roundWinnerDisplayer = document.querySelector("p.round-winner");
const gameWinnerDisplayer = document.querySelector("p.game-winner");

const attacks = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0;

const playRock = () => { playRound("rock");checkGameEnd();};
const playPaper = () => { playRound("paper");checkGameEnd();};
const playScissors = () => { playRound("scissors");checkGameEnd();};

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click",playPaper);
scissorsBtn.addEventListener("click",playScissors);

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

function checkGameEnd() {
  if (humanScore === 5 || computerScore === 5) {
    rockBtn.removeEventListener("click", playRock);
    paperBtn.removeEventListener("click",playPaper);
    scissorsBtn.removeEventListener("click",playScissors);
    gameWinnerDisplayer.textContent = humanScore = 5 ? "You won the game!" : "Computer won the game.";
    return true
  } else {
    return false
  }
}