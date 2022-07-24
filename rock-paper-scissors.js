function getcomputerSelection(){
    let computerValues = ['Rock', 'Paper', 'Scissors'];
   return computerValues[Math.floor(Math.random() * computerValues.length)];
}

function playRound() {
    const playerSelection = prompt('Rock! Paper! Scissors! Shoot!');
    const computerSelection = getcomputerSelection();
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

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

// start game by entering game() into console