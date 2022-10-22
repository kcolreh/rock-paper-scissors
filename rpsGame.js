// Pseudocode 
// 1.Computer generates a number 1-3
// 1.1. Computer generates number gets converted into strings for the game
// 2. User types in the input of his choise
// 3. Game compares imputs and decides whos the winner
// 4. Game is looped to play best of 5
// 5. Game decides the overall winner based on points

playBestOf5();


//Function that allows you to play a best of 5 of the game and decides whos the overall winner
function playBestOf5() {

    let round = 5;
    let userScore = 0;
    let aiScore = 0;

    for (round = 0; round < 5; round++) {

        let decider = playRound();

        if (decider === 'ai wins') {
            aiScore++, console.log('ai wins this one'), console.log(aiScore);
        } else if (decider === 'noone wins') {
            userScore + 0, console.log('this ones a draw');
        } else if (decider === 'you win') {
            userScore++, console.log('you won this round!'), console.log(userScore);
        } else {
            return;
        }
    }

    if (userScore > aiScore) {
        console.log('You won the game!');
    } else if (aiScore > userScore) {
        console.log('You lost the game!');
    } else if (aiScore === userScore) {
        console.log('Noone wins, its a draw!');
    }
}

//Function that allows you to play a single round and decides who won it
function playRound() {

    let ai = computerChoise();
    let user = userChoise();

    if (ai === user) {
        return 'noone wins';

    } else if (ai === 'rock' && user === 'paper') {
        return 'you win';
    } else if (ai === 'rock' && user === 'scissors') {
        return 'ai wins';


    } else if (ai === 'paper' && user === 'rock') {
        return 'ai wins';
    } else if (ai === 'paper' && user === 'scissors') {
        return 'you win';


    } else if (ai === 'scissors' && user === 'rock') {
        return 'you win';
    } else if (ai === 'scissors' && user === 'paper') {
        return 'ai wins';
    }
}

//function that lets user choose what to play
function userChoise() {

    let choise = prompt('Choose between Rock, Paper or Scissors!')

    if (choise === null){
        return alert(`Don't wanna play?`);
    } else if (choise.toLowerCase() === 'scissors') {
        return 'scissors';
    } else if (choise.toLowerCase() === 'rock') {
        return 'rock';
    } else if (choise.toLowerCase() === 'paper') {
        return 'paper';
    } else {
        alert('Try again!'), userChoise();
    }

}

//function that allows the computer to choose what to play
function computerChoise() {

    let choise = Math.floor(Math.random() * 3) + 1;

    if (choise === 1) {
        return 'scissors';
    } else if (choise === 2) {
        return 'rock';
    } else {
        return 'paper';
    }
}
