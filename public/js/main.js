// Some important variables

var resultRound = document.querySelector(".resultRound");
var resultGame = document.querySelector(".resultGame");
var playerScoreResult = document.querySelector(".playerScore");
var computerScoreResult = document.querySelector(".computerScore");


// Computer variable
var answers = ["rock", "paper", "scissors"];

// ComputerChoice function
function getComputerChoice() {
    let i = Math.floor(Math.random() * answers.length);
    return answers[i];
}

// Player selection

// function getPlayerChoice() {
    var rock = document.querySelector(".rockBtn");
    rock.addEventListener("click", () => {
        playRound("rock");
    })
    var paper = document.querySelector(".paperBtn");
    paper.addEventListener("click", () => {
        playRound("paper");
    })
    var scissors = document.querySelector(".scissorsBtn");
    scissors.addEventListener("click", () => {
        playRound("scissors");
    })
// }

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
function playRound(playerSelection) {
    var computerSelection = getComputerChoice()
    if (playerSelection == "rock" && computerSelection == "paper") {
        resultRound.innerHTML = "You Lose! Paper beats Rock";
        return "computer";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultRound.innerHTML = "You Win! Rock beats Scissors";
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        resultRound.innerHTML = "You Win! Paper beats Rock";
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultRound.innerHTML = "You Lose! Scissors beats Paper";
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultRound.innerHTML = "You Lose! Rock beats Scissors";
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultRound.innerHTML = "You Win! Scissors beats Paper";
        return "player";
    } else {
        resultRound.innerHTML = "Tie";
        return "tie";
    }
}

// Game function
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let round = 0; round < 5; round++) {
//         var computerSelection = getComputerChoice();
//         var playerSelection = getPlayerChoice();
//         var result = playRound(playerSelection, computerSelection);

//         if (result == "player") {
//             playerScore++;
//         } else if (result == "computer") {
//             computerScore++;
//         }
//     }

//     console.log("Game Over!");
//     console.log("Player Score: " + playerScore);
//     console.log("Computer Score: " + computerScore);

//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//     } else if (playerScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

function gameFinale() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        var result = playRound(playerSelection)
        // var playerSelection = getPlayerChoice()

        var rock = document.querySelector(".rockBtn");
        rock.addEventListener("click", () => {
           playRound("rock");
        })
        var paper = document.querySelector(".paperBtn");
        paper.addEventListener("click", () => {
            playRound("paper");
        })
        var scissors = document.querySelector(".scissorsBtn");
        scissors.addEventListener("click", () => {
            playRound("scissors");
        })

        if (result == "player") {
            playerScore++;
            playerScoreResult.innerHTML = "Player: <br>" + playerScore; 
        } else if (result == "computer") {
            computerScore++;
            computerScoreResult.innerHTML = "computer: <br>" + computerScore;
        }
    }

    if (playerScore > computerScore) {
        resultGame.innerHTML= "You win the game!";
    } else if (playerScore < computerScore) {
        resultGame.innerHTML= "You lose the game!";
    } else {
        resultGame.innerHTML= "It's a tie!";
    }
}

var play = document.querySelector('.btn')
play.addEventListener('click', () => {
    gameFinale();
})