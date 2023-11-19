// Computer variable
var answers = ["rock", "paper", "scissors"];

// ComputerChoice function
function getComputerChoice() {
    let i = Math.floor(Math.random() * answers.length);
    return answers[i];
}

// PlayerChoice function
function getPlayerChoice() {
    let j = prompt("Enter rock, paper or scissors").toLowerCase();

    if (j == "rock" || j == "paper" || j == "scissors") {
        return j;
    } else {
        alert("Error");
        return getPlayerChoice();
    }
}

// Play a round function
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        return "computer";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        return "player";
    } else {
        console.log("Tie");
        return "tie";
    }
}

// Game function
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        var computerSelection = getComputerChoice();
        var playerSelection = getPlayerChoice();
        var result = playRound(playerSelection, computerSelection);

        if (result == "player") {
            playerScore++;
        } else if (result == "computer") {
            computerScore++;
        }
    }

    console.log("Game Over!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}