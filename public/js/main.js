var choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let i = Math.floor(Math.random() * choices.length)
    return choices[i];
}

