// Here the computer rolls as random number after being called in userPlay function
function computerPlay(){
    // Returns a random integer from 1 to 3:
    let computerRoll = Math.floor(Math.random() * 3) + 1;
    // Convert random number to string
    if (computerRoll == 1) {computerResult = 'Rock'}
    else if (computerRoll == 2) {computerResult = 'Paper'}
    else if (computerRoll == 3) {computerResult = 'Scissors'}
    console.log('The computer has chosen: ' + computerResult)
}

// Win counter, keep track of wins
let playerWins = 0
console.log(playerWins)
let computerWins = 0
console.log(computerWins)

// compare results, there must be better ways to do this >_<
function compareResults () {
    // check for tie
    if (computerResult === finalGuess){
        console.log('It is a tie, try again')
        } // check for loss
        else if ((computerResult === 'Paper' && finalGuess === 'Rock')||(computerResult === 'Scissors' && finalGuess === 'Paper') || (computerResult === 'Rock' && finalGuess === 'Scissors')){
        console.log('You lose, '+computerResult+' beats '+finalGuess)
        computerWins++
        } // others must be win
        else {console.log('You win, '+finalGuess+' beats '+computerResult)
        playerWins++
    } 

    console.log('Computer has '+computerWins+' wins')
    console.log('Player has '+playerWins+' wins')   
    if (playerWins === 3) {
        console.log('You have won 3 times, you are the RPS champion!')
        gameOver()
    }   else if (computerWins === 3) {
        console.log('The computer has won 3 times, better luck next time!')
        gameOver()
    }   else {
        console.log('Try again, the first one to get 3 wins becomes the RPS champ!')
        userPlay()
    }
}
// Let the player make a choice, check input and run computerPlay and compareResults

function userPlay(){
    let userGuess = prompt('Rock, Paper or Scissors')
    // Convert to Lower Case to Upper Case
    const guessLower = userGuess.toLowerCase()
    finalGuess = userGuess.charAt(0).toUpperCase() + guessLower.slice(1)
    // Check if the user input is valid and return result
    if (finalGuess === 'Rock' || finalGuess === 'Paper' || finalGuess === 'Scissors'){
        console.log('You have chosen: ' + finalGuess)
    }
    // If it's not valid, clear variable and try again
    else {
        userGuess = undefined
        console.log('You did not make a valid choice. Try again!')
        userPlay()
    }
    computerPlay()
    compareResults()
}

function gameOver(){
    computerWins = 0
    playerWins = 0
    console.log('Start Over')
    userPlay()
}
userPlay ()

