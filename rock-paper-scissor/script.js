const buttons = document.querySelectorAll("button");

let playerMove;

let computerScore = 0;
let playerScore = 0;
buttons.forEach((button) => {
  button.addEventListener("click", (move) => {
    document.querySelector('.result').innerHTML = playRound(button.id, computerMove());

  });
});

function computerMove() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It is a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerMove === "paper")
  ) {
    playerScore++;
        document.querySelector('.your-score').innerHTML =playerScore;

    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++
        document.querySelector('.computer-score').innerHTML =computerScore;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}
