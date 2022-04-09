//Select divs to display everything
const results = document.querySelector('.results');
const selection = document.querySelector('.selection');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');
let playerWin = 0, computerWin = 0 

//Function that will return either rock paper or scissors
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock"
    }
    else if (random === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

//Function to play a single round of rock paper scissors
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = "Tie. Try Again"
        return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = "You Win! Rock beats Scissors";
        return "You Win!"
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You Win! Paper beats Rock"
        return "You Win!"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You Win! Scissors beats Paper"
        return "You Win!"
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = "You Lose! Paper beats Rock"
        return "You Lose!"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You Lose! Scissors beats Paper"
        return "You Lose!"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = "You Lose! Rock beats Scissors"
        return "You Lose!"
    }
}

//Function to display what the player and computer selected
function showSelection(playerSelection, computerSelection){
    selection.textContent = "You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
}

//Function to track scores
function trackScores(playerSelection, computerSelection) {  
    if ((playRound (playerSelection, computerSelection)).startsWith("You Lose!")) {
        computerWin += 1;
    }
    else if ((playRound (playerSelection, computerSelection)).startsWith("You Win!")) {
        playerWin += 1;
    }
    score.textContent = "The player has a score of " + playerWin + " and the computer has a score of " + computerWin + ".";
    if (playerWin === 5) {
        winner.textContent = "You scored 5 points first! You win!";
    } 
    else if (computerWin === 5) {
        winner.textContent = "The computer scored 5 points first! You lose!";
    }
}

//Event listener for the buttons
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerSelection = computerPlay();
    showSelection('rock', computerSelection);
    playRound('rock', computerSelection);
    trackScores('rock', computerSelection);
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerSelection = computerPlay();
    showSelection('paper', computerSelection);
    playRound('paper', computerSelection);
    trackScores('paper', computerSelection);
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computerSelection = computerPlay();
    showSelection('scissors', computerSelection);
    playRound('scissors', computerSelection);
    trackScores('scissors', computerSelection);
})

