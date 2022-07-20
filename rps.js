function getComputerChoice() {
    var choiceNumber = Math.floor(Math.random() * 10);
    var choice = "rock";
    if (choiceNumber % 2 == 0) {
        choice = "paper";
    }
    else if (choiceNumber % 3 == 0) {
        choice = "scissors";
    }
    else {
        choice = "rock";
    }
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    var playerChoice = playerSelection.toLowerCase();
    var computerChoice = computerSelection.toLowerCase();
    var result = "Error"
    if (computerChoice == "rock") {
        if (playerChoice == "paper") { result = "paper vs rock = you won!" }
        else if (playerChoice == "scissors") { result = "scissors vs rock = Odin-Bot wins!" }
        else if (playerChoice == "rock") { result = "rock vs rock = its a tie!"; }
        else { console.log("Illegal move") }
    }
    else if (computerChoice == "scissors") {
        if (playerChoice == "paper") { result = "paper vs scissors = Odin-Bot wins!" }
        else if (playerChoice == "scissors") { result = "scissors vs scissors = its a tie" }
        else if (playerChoice == "rock") { result = "rock vs scissors = you won!" }
        else { console.log("Illegal move") }
    }
    else if (computerChoice == "paper") {
        if (playerChoice == "paper") { result = "paper vs paper = its a tie!"; }
        else if (playerChoice == "scissors") { result = "scissors vs paper = you won!"; }
        else if (playerChoice == "rock") { result = "rock vs paper = Odin-Bot wins!"; }
        else { console.log("Illegal move") }
    }
    console.log(result)
    return result;
}

function game () {
    var gameRounds = 5
    console.log("Odin-Bot wants to play " + gameRounds + " rounds!")
    for (let i = 0; i < gameRounds; i++) {
        console.log(playRound(window.prompt("Odin-Bot asks for your move:"), getComputerChoice()));
    }
}