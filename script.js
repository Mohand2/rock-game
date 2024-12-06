
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

console.log(getComputerChoice())
