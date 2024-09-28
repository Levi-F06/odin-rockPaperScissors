let humanScore = 0;
let computerScore = 0;

const buttonsContainer = document.querySelector("#buttons");
const buttons = buttonsContainer.children;
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  let result;
  if (humanChoice === computerChoice) {
    return;
  }
  switch (humanChoice) {
    case "rock":
      result = computerChoice === "scissors" ? "win" : "loss";
      break;
    case "paper":
      result = computerChoice === "rock" ? "win" : "loss";
      break;
    case "scissors":
      result = computerChoice === "paper" ? "win" : "loss";
      break;
  }
  return result;
}

function playGame(choice) {
  const humanChoice = choice; 
  const computerChoice = getComputerChoice();

  switch (playRound(humanChoice, computerChoice)) {
    case "win":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    case "loss":
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      break;
    default:
      console.log(`Draw! both you and the computer selected ${humanChoice}!`);
  }
  console.log(`Player score : ${humanScore}`);
  console.log(`Computer score : ${computerScore}`);
  console.log("Press the button to play again!");
}

for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", () => {
    playGame(options[i]);
  })
}
