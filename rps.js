function getComputerChoice () {
    var choiceNumber = Math.floor(Math.random() * 10);
    var choice = "rock";
    if (choiceNumber %2 == 0)
    {
        choice = "paper";
    }
    else if (choiceNumber %3 == 0)
    {
        choice = "scissor";
    }
    else
    {
        choice = "rock";
    }
    console.log(choice);
    return choice;
}

function playRound (playerSelection, computerSelection) {
    var playerChoice = playerSelection.toLowerCase();
    var computerChoice = computerSelection.toLowerCase();
    var computerWon = false;
    var tie = false;
    if (computerChoice == "rock")
    {
        if (playerChoice == "paper") { computerWon = false; }
        else if (playerChoice == "scissors") { computerWon = true; }
        else if (playerChoice == "rock") { tie = true; }
        else { console.log("Illegal move")}
    }
    if (computerChoice == "scissors")
    {
        if (playerChoice == "paper") { computerWon = true; }
        else if (playerChoice == "scissors") { tie = true; }
        else if (playerChoice == "rock") { computerWon = false; }
        else { console.log("Illegal move")}
    }
    if (computerChoice == "paper")
    {
        if (playerChoice == "paper") { tie = true; }
        else if (playerChoice == "scissors") { computerWon = false; }
        else if (playerChoice == "rock") { computerWon = true; }
        else { console.log("Illegal move")}
    }
}