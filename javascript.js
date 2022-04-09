//Select divs to display everything
const results = document.querySelector('.results');
const selection = document.querySelector('.selection');

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
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = "You Win! Rock beats Scissors";
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You Win! Paper beats Rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You Win! Scissors beats Paper"
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = "You Lose! Paper beats Rock"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You Lose! Scissors beats Paper"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = "You Lose! Rock beats Scissors"
    }
}

//Function to display what the player and computer selected
function showSelection(playerSelection, computerSelection){
    selection.textContent = "You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
}

//Function to track scores
//function trackScores {
//    let playerWin = 0, computerWin = 0   
//    if ((playRound (playerSelection, computerSelection)).startsWith("You Lose!")) {
//        computerWin += 1;
//    }
//    else if ((playRound (playerSelection, computerSelection)).startsWith("You Win!")) {
//        playerWin += 1;
//    }
//    }
//    if (playerWin > computerWin) {
//        console.log ("You scored ", playerWin, " and the computer scored ", computerWin, ". You win.")
//    } 
//    else if (computerWin > playerWin) {
//        console.log ("You scored ", playerWin, " and the computer scored ", computerWin, ". The computer wins.")
//    }
//    else console.log ("You scored ", playerWin, " and the computer scored ", computerWin, ". It is a tie.")
//}

//Event listener for the buttons
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerSelection = computerPlay();
    showSelection('rock', computerSelection);
    playRound ('rock', computerSelection);
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerSelection = computerPlay();
    showSelection('paper', computerSelection);
    playRound ('paper', computerSelection);
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computerSelection = computerPlay();
    showSelection('scissors', computerSelection);
    playRound ('scissors', computerSelection);
})

