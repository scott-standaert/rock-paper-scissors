let computerScore = 0;
let playerScore = 0;
let playerChoice = prompt('Rock! Paper! Scissors! Shoot!');
let computerChoice = getComputerChoice();

    //getComputerChoice(...computerValues)

    function getComputerChoice(){
        let computerValues = ['Rock', 'Paper', 'Scissors'];
        computerValues[Math.floor(Math.random() * computerValues.length)];
    }

//function that plays 1 round of Rock Paper Scissors. Takes 2 parameters, playerChoice and computerChoice and then returns string declaring winner
function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'Paper') {
        computerScore++
        return 'You lose! Paper beats rock!';
    } else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'Scissors') {
        computerScore++
        return 'You lose! Scissors beats paper!';
    } else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'Rock') {
        computerScore++
        return 'You lose! Rock beats paper!';
    } else if (playerChoice.toLowerCase() === 'paper' && computerChoice === 'Rock') {
        playerScore++
        return 'You win! Paper beats rock!';
    } else if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'Paper') {
        playerScore++
        return 'You win! Scissors beat paper!';
    } else if (playerChoice.toLowerCase() === 'rock' && computerChoice === 'Scissors') {
        playerScore++
        return 'You win! Rock beats scissors!';
    } else if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return 'You\'ve tied!';
    } else {
        return 'Input a valid choice: rock, paper or scissors!'
    }
}

console.log(playRound(playerChoice, computerChoice))

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


//need to finish game() function