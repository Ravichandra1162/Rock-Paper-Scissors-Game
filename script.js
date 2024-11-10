let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  console.log("Computer choice:", options[randIdx]); // Debugging line
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "It's a draw! Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice, outcome) => {
  console.log(`Result: ${userWin ? 'User wins' : 'Computer wins'}, Outcome: ${outcome}`); // Debugging line

  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${outcome}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${outcome}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice:", userChoice); // Debugging line

  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin;
    let outcome; // Describe the winning interaction

    if (userChoice === "rock") {
      if (compChoice === "scissors") {
        userWin = true;
        outcome = "Rock beats Scissors";
      } else {
        userWin = false;
        outcome = "Paper beats Rock";
      }
    } else if (userChoice === "paper") {
      if (compChoice === "rock") {
        userWin = true;
        outcome = "Paper beats Rock";
      } else {
        userWin = false;
        outcome = "Scissors beat Paper";
      }
    } else if (userChoice === "scissors") {
      if (compChoice === "paper") {
        userWin = true;
        outcome = "Scissors beat Paper";
      } else {
        userWin = false;
        outcome = "Rock beats Scissors";
      }
    }

    showWinner(userWin, userChoice, compChoice, outcome);
  }
};

// Add event listeners to each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
