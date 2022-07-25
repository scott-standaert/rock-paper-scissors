let playerScore = 0;
let computerScore = 0;

function getcomputerSelection(){
    let computerValues = ['rock', 'paper', 'scissors'];
   return computerValues[Math.floor(Math.random() * computerValues.length)];
}

function playRound() {
    const playerSelection = prompt('Rock! Paper! Scissors! Shoot!');
    const computerSelection = getcomputerSelection();

    if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') 
|| (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') 
|| (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')){
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}! The score is Player: ${playerScore} | Computer: ${computerScore}`;

} else if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') 
|| (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') 
|| (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock')){
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}! The score is Player: ${playerScore} | Computer: ${computerScore}`;

} else if (playerSelection.toLowerCase() == computerSelection){
    return `Tie! You have both chose ${playerSelection}! The score is Player: ${playerScore} | Computer: ${computerScore}`;

} else {
    return 'Please input a valid choice: rock, paper or scissors!';
}
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

game()

