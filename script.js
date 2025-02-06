console.log("Hello World!");
const attacks = ["rock","paper","scissors"];

function getComputerChoice() {
  return attacks[Math.ceil(Math.random() * 3)]
} 