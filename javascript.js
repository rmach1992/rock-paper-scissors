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
        return "Tie. Try Again"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }
}

//Function to play a 5 round game
function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Please type in either rock, paper or scissors.").toLowerCase();
        //if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors") {
        //const playerSelection = prompt("Invalid output. Please type in either rock, paper or scissors.")
        //}
        const computerSelection = computerPlay();
        console.log ("You selected", playerSelection);
        console.log ("The computer selected", computerSelection);
        console.log(playRound (playerSelection, computerSelection));
    }
}

console.log(game ());