
// This function returns string according to a randon undex in range [0-2]

function getComputerChoice() {
    let index = Math.floor(Math.random()*3)
    console.log(`Index is: ${index}`)

    switch (index) {
        case 0: return 'rock'
            
            break;
        case 1: return 'paper'
            break;
        case 2: return 'scissors'

        default:
            break;
    }
}

// validate human choice against Array of choices
function validateHumanChoice(choice){

const OPTIONS = ["rock","paper","scissors"]

 return OPTIONS.includes(choice) ?  true :false

}

// Get human choice from a prompt
function getHumanChoice() {
     
    let choice = prompt("Type one option", "rock, paper, scissors")

    if (choice !== null){
        return validateHumanChoice(choice) ? choice : "Please type in a valid option"
        
    }
    
    
}

console.log(getHumanChoice())