let computerScore = 0
let playerScore = 0

//function that plays 1 round of Rock Paper Scissors. Takes 2 parameters, playerSelection and computerSelection and then returns string declaring winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats rock!';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats paper!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats paper!';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats rock!';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beat paper!';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats scissors!';
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return 'You\'ve tied!';
    } else {
        return 'Input a valid choice: rock, paper or scissors!'
    }
}

//function to decide winner
function decideWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return 'Five rounds and one winner...you!';
    }   else if (playerScore < computerScore) {
        return 'Five rounds and one loser...you!';
    } else if (playerScore === computerScore) {
        return 'Five rounds and tied??!!'
    }
}


