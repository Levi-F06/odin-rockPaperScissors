let humanScore = 0;
let computerScore = 0;

const buttonsContainer = document.querySelector("#buttons");
const buttons = buttonsContainer.children;

const options = ["rock", "paper", "scissors"];
const resultBox = document.querySelector("#result");
const gameState = document.querySelector("#gameState");

const playerScoreP = document.querySelector("#playerScore");
const cpuScoreP = document.querySelector("#cpuScore");

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
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

function playGame(choice, playerSrc) {
  buttonsContainer.classList.toggle("hide");

  const randomNumber = getRandomNumber();

  const humanChoice = choice;
  const computerChoice = options[randomNumber];

  const playerChar = document.createElement("img");
  const cpuChar = document.createElement("img");

  const para = document.createElement("p");
  para.textContent = "vs";

  playerChar.src = playerSrc;
  cpuChar.src = buttons[randomNumber].src;

  resultBox.appendChild(playerChar);
  resultBox.appendChild(para);
  resultBox.appendChild(cpuChar);

  switch (playRound(humanChoice, computerChoice)) {
    case "win":
      gameState.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
      break;
    case "loss":
      gameState.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
      break;
    default:
      gameState.textContent = `Draw! both you and the computer selected ${humanChoice}!`;
  }

  playerScoreP.textContent = `Player: ${humanScore}`;
  cpuScoreP.textContent = `CPU: ${computerScore}`;

  playAgainButton = document.createElement("button");
  playAgainButton.textContent = "play again!";
  playAgainButton.addEventListener("click", () => {
    gameState.textContent = "Choose your fighter...";
    buttonsContainer.classList.toggle("hide");
    resultBox.innerHTML = "";
  });

  resultBox.appendChild(playAgainButton);
}

for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", () => {
    playGame(options[i], buttons[i].src);
  });
}
