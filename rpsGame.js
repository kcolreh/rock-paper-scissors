const buttons = document.querySelectorAll('.humanChoises');
buttons.forEach((button) => {
    button.addEventListener('click', playRound,);
});


let verdict = document.querySelector('.win-lose-tie')
let pcScore = document.querySelector('#aiScore')
let humanScore = document.querySelector('#userScore')
let userScore = 0;
let aiScore = 0;

function playRound(userChoise) {

    let ai = computerChoise();
    let user = userChoise.srcElement.id;



    if (ai === user) {
        verdict.textContent = 'its a tie!';;

    } else if (ai === 'rock' && user === 'paper') {
        verdict.textContent = 'you won the round', userScore++;
        humanScore.textContent = +humanScore.textContent + 1;

    } else if (ai === 'rock' && user === 'scissors') {
        verdict.textContent = 'you lost the round', aiScore++;
        pcScore.textContent = +pcScore.textContent + 1;


    } else if (ai === 'paper' && user === 'rock') {
        verdict.textContent = 'you lost the round', aiScore++;
        pcScore.textContent = +pcScore.textContent + 1;

    } else if (ai === 'paper' && user === 'scissors') {
        verdict.textContent = 'you won the round', userScore++;
        humanScore.textContent = +humanScore.textContent + 1;

    } else if (ai === 'scissors' && user === 'rock') {
        verdict.textContent = 'you won the round', userScore++;
        humanScore.textContent = +humanScore.textContent + 1;

    } else if (ai === 'scissors' && user === 'paper') {
        verdict.textContent = 'you lost the round', aiScore++;
        pcScore.textContent = +pcScore.textContent + 1;

    }

    if (userScore === 5) {
        return alert('You won!'),
            pcScore.textContent = 0,
            humanScore.textContent = 0;

    } else if (aiScore === 5) {
        return alert('You lost!'),
            pcScore.textContent = 0,
            humanScore.textContent = 0;
    }
}

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

