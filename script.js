function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?").toLowerCase();
  while (!validateChoice(choice)) {
    choice = prompt("Invalid choice! enter 'rock' 'paper' or 'scissors'");
  }
  return choice;
}

function validateChoice(choice) {
  const options = ["rock", "paper", "scissors"];
  for (let i = 0; i < options.length; i++) {
    if (choice === options[i]) {
      return true;
    }
  }
  return false;
}
