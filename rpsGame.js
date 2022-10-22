// Pseudocode 
// 1.Computer generates a number 1-3
// 1.1. Computer generates number gets converted into strings for the game
// 2. User types in the input of his choise
// 3. Game compares imputs and decides whos the winner
// 4. Game is looped to play best of 5
// 5. Game decides the overall winner based on points


function userChoise() {
    
    choise = prompt ('Choose between Rock, Paper or Scissors!')

    if (choise.toLowerCase() === 'scissors'){
        return 'Scissors';
    } else if (choise.toLowerCase() === 'rock'){
        return 'Rock';
    } else if (choise.toLowerCase() === 'paper'){
        return 'Paper';
    } else{
        alert ('Try again!'), userChoise();
    }

}

function computerChoise() {

    choise = Math.floor(Math.random() * 3) + 1;

    if (choise === 1) {
        return 'Scissors';
    } else if (choise === 2) {
        return 'Rock';
    } else {
        return 'Paper';
    }
}
