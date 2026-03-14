// get computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            console.log("rock");
            return "rock";
        case 1:
            console.log("paper");
            return "paper";
        case 2:
            console.log("scissors");
            return "scissors";
    }
}

// get human choice
function getHumanChoice() {
    let choices = prompt("Choose between: Rock, Paper, Scissors!");
    let choice = choices.toLowerCase();
    console.log(choice);
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // round logic
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a draw!");
            humanScore += 1;
            computerScore += 1;
        } else if ((humanChoice == "rock" && computerChoice != "paper") || (humanChoice == "paper" && computerChoice != "scissors") || (humanChoice == "scissors" && computerChoice != "rock")) {
            console.log("You win!", humanChoice, "beats", computerChoice);
            humanScore += 1;
        } else {
            console.log("You lose!", computerChoice, "beats", humanChoice);
            computerScore += 1;
        }
    }

    // passing the human and computer choices as arguments
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // function passed to variable cannot recall function
    playRound(humanSelection, computerSelection);
    console.log("Human score:", humanScore, "and CPU score:", computerScore);

    // for loop recalls function
    for (let i = 0; i < 4; i++) {
    playRound(getHumanChoice(), getComputerChoice()); 
    console.log("Human score:", humanScore, "and CPU score:", computerScore);
    }

    if (humanScore == computerScore) {
        console.log("Game ends in a draw!");
        return "Game ends in a draw!";
    } else if (humanScore > computerScore) {
        console.log("You win the game!");
        return "You win the game!";
    } else {
        console.log("You lose the game!");
        return "You lose the game!";
    }
}

playGame();