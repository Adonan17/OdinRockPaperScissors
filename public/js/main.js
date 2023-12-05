// Some important variables

var resultRound = document.querySelector(".resultRound");
var resultGame = document.querySelector(".resultGame");
var playerScoreResult = document.querySelector(".playerScore");
var computerScoreResult = document.querySelector(".computerScore");
var playerScore = 0
var computerScore = 0
var play = document.querySelector('.play')


// Computer variable
var answers = ["rock", "paper", "scissors"];

// ComputerChoice function
function getComputerChoice() {
    let i = Math.floor(Math.random() * answers.length);
    return answers[i];
}

// PlayerChoice function
// function getPlayerChoice() {   
// let j = prompt("Enter rock, paper or scissors").toLowerCase();

//     if (j == "rock" || j == "paper" || j == "scissors") {
//         return j;
//     } else {
//         alert("Error");
//         return getPlayerChoice();
//     }
// }

// Play a round function

function playRound(playerSelection) {
    var computerSelection = getComputerChoice()
    if (playerSelection == "rock" && computerSelection == "paper" && playerScore + computerScore < 5) {
        resultRound.innerHTML = "You Lose! Paper beats Rock";
        updateScore("computer");
    } else if (playerSelection == "rock" && computerSelection == "scissors" && playerScore + computerScore < 5) {
        resultRound.innerHTML = "You Win! Rock beats Scissors";
        updateScore("player");
    } else if (playerSelection == "paper" && computerSelection == "rock" && playerScore + computerScore < 5) {
        resultRound.innerHTML = "You Win! Paper beats Rock";
        updateScore("player");
    } else if (playerSelection == "paper" && computerSelection == "scissors" && playerScore + computerScore < 5) {
        resultRound.innerHTML = "You Lose! Scissors beats Paper";
        updateScore("computer");
    } else if (playerSelection == "scissors" && computerSelection == "rock" && playerScore + computerScore < 5) {
        resultRound.innerHTML = "You Lose! Rock beats Scissors";
        updateScore("computer");
    } else if (playerSelection == "scissors" && computerSelection == "paper" && playerScore + computerScore < 5) {
        resultRound.innerHTML = "You Win! Scissors beats Paper";
        updateScore("player");
    } else if (playerScore + computerScore < 5) {
        resultRound.innerHTML = "Tie";
        return "tie";
    } else if (playerScore + computerScore == 5) {
        resultRound.innerHTML = ""
        if (playerScore > computerScore) {
            resultGame.innerHTML = "You won!"
        } else if (playerScore < computerScore) {
            resultGame.innerHTML = "You lost!"
        }
    }
}

function updateScore(playRoundResult){
    while ((playerScore + computerScore) < 5){
        if (playRoundResult === "player"){
            playerScore++;
            playerScoreResult.innerHTML = "Player: <br>" +  playerScore;
            break
        } else if (playRoundResult === "computer"){
            computerScore++;
            computerScoreResult.innerHTML = "computer: <br>" + computerScore;
            break
        }
    }
}

// Player selection

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

play.addEventListener('click', () => {
    playerScore = 0
    computerScore = 0
    resultRound.innerHTML = ""
    playerScoreResult.innerHTML = "Player: <br>" +  playerScore;
    computerScoreResult.innerHTML = "computer: <br>" + computerScore;
    resultGame.innerHTML = ""
})
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

// function gameFinale() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let round = 0; round < 5; round++) {
//         var result = playRound(playerSelection)
//         // var playerSelection = getPlayerChoice()

//         var rock = document.querySelector(".rockBtn");
//         rock.addEventListener("click", () => {
//            playRound("rock");
//         })
//         var paper = document.querySelector(".paperBtn");
//         paper.addEventListener("click", () => {
//             playRound("paper");
//         })
//         var scissors = document.querySelector(".scissorsBtn");
//         scissors.addEventListener("click", () => {
//             playRound("scissors");
//         })

//         if (result == "player") {
//             playerScore++;
//             playerScoreResult.innerHTML = "Player: <br>" + playerScore; 
//         } else if (result == "computer") {
//             computerScore++;
//             computerScoreResult.innerHTML = "computer: <br>" + computerScore;
//         }
//     }

//     if (playerScore > computerScore) {
//         resultGame.innerHTML= "You win the game!";
//     } else if (playerScore < computerScore) {
//         resultGame.innerHTML= "You lose the game!";
//     } else {
//         resultGame.innerHTML= "It's a tie!";
//     }
// }