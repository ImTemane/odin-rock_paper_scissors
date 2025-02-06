console.log("Hello World!");
const attacks = ["rock","paper","scissors"];

function getComputerChoice() {
  return attacks[Math.ceil(Math.random() * 3)]
};

function getHumanChoice() {
  let choice = prompt("Choose your attack: rock, paper or scissors?  ").toLowerCase;
  if (choice in attacks) {
    return choice
  }
  else {
    console.log("Invalid Choice: check the spell pls.");
    getComputerChoice();
  };
};