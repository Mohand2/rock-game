let humanScore = 0;
let computerScore = 0;

// This function returns a string according to a random index in range [0-2]

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    console.log(`Index is: ${index}`);

    switch (index) {
        case 0:
            return "rock";

            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";

        default:
            break;
    }
}

// validate human choice against Array of choices
function validateHumanChoice(choice) {
    const OPTIONS = ["rock", "paper", "scissors"];

    return OPTIONS.includes(choice) ? true : false;
}

// Get human choice from a prompt
function getHumanChoice() {
    let choice = prompt("Type one option", "rock, paper, scissors");

    if (choice !== null) {
        return validateHumanChoice(choice) ? choice : "invalid";
    }
}

function playRound(inputHumanChoice, inputComputerChoice) {
    let humanChoice = inputHumanChoice.toLowerCase();
    let computerChoice = inputComputerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        return "You won! Rock Beats scissors ";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        return "You lose! Rock Beats Scissors ";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        return "You won! scissors Beats Paper";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        return "You lose!  scissors Beats Paper";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore = +1;
        return "You won! Paper Beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        return "You Lose! Paper Beats Rock";
    } else {
        return "Draw";
    }
}

function playGame() {


    for (let index = 0; index < 5; index++) {

        let humanSelection = getHumanChoice();
        // if invalid option, break than start the game again
        if (humanSelection === "invalid") {
            console.log("Invalid option, try again")
            return "Refrech the tab"
        }

        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        console.log(result)
        console.log(`Computer score is ${computerScore}`)
        console.log(`Your score is ${humanScore}`)
        console.log(`Round: ${index+1}`)

    }

    if (computerScore > humanScore) {
        return "Computer Won"

    } else if (humanScore > computerScore) {
        return "You won"
    }


}


window.alert('Please use the console to play the game ')
console.log(playGame())