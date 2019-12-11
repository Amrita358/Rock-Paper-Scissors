var userChoice = prompt('Please pick Rock, Paper, or Scissors');
if (userChoice.toLowerCase() === 'paper') {
    document.write('You picked paper.');
} else if (userChoice.toLowerCase() === 'rock') {
    document.write('You picked rock');
} else if (userChoice.toLowerCase() === 'scissors') {
    document.write('You picked ' + userChoice);
} else {
    document.write('You picked something else.');
};

var computerChoice = Math.random();
var computerPicked = '';
if (computerChoice < 0.34) {
    computerPicked = 'paper';
} else if (computerChoice >= 0.34 && computerChoice < 0.67) {
    computerPicked = 'rock';
} else {
    computerPicked = 'scissors';
}
document.write('<div> The computer picked ' + computerPicked + '.');

if (userChoice === computerPicked) {
    document.write('The game is a tie, try again.')
}

if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
        document.write('You win!')
    } else if (computerPicked === 'scissors') {
        document.write('The computer won!')
    }
}
if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        document.write('The computer won!')
    } else if (computerPicked === 'scissors') {
        document.write('You win!')
    }
}
if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
        document.write('You win!')
    } else if (computerPicked === 'rock') {
        document.write('The computer won!')
    }
}
