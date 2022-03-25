//Function that will return either rock paper or scissors
function computerPlay () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Rock"
    }
    else if (random === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}
console.log(computerPlay());