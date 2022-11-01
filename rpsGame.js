const buttons = document.querySelectorAll('.humanChoises');
buttons.forEach((button) => {
    button.addEventListener('click', playRound,);
});


const verdict = document.querySelector('.win-lose-tie')
const pcScore = document.querySelector('#aiScore')
const humanScore = document.querySelector('#userScore')
let userScore = 0;
let aiScore = 0;

function playRound(userChoise) {

    const ai = computerChoise();
    const user = userChoise.srcElement.id;



    if (ai === user) {
        verdict.textContent = 'its a tie!';;

    } else if (ai === 'rock' && user === 'paper') {
        verdict.textContent = 'You won Paper beats Rock!', userScore++;
        humanScore.textContent = +humanScore.textContent + 1;

    } else if (ai === 'rock' && user === 'scissors') {
        verdict.textContent = 'You lost Rock beats Scissors!', aiScore++;
        pcScore.textContent = +pcScore.textContent + 1;


    } else if (ai === 'paper' && user === 'rock') {
        verdict.textContent = 'You lost Paper beats Rock!', aiScore++;
        pcScore.textContent = +pcScore.textContent + 1;

    } else if (ai === 'paper' && user === 'scissors') {
        verdict.textContent = 'You won Scissors beats Paper!', userScore++;
        humanScore.textContent = +humanScore.textContent + 1;

    } else if (ai === 'scissors' && user === 'rock') {
        verdict.textContent = 'You won Rock beats Scissors!', userScore++;
        humanScore.textContent = +humanScore.textContent + 1;

    } else if (ai === 'scissors' && user === 'paper') {
        verdict.textContent = 'You lose Scissors beats Paper!', aiScore++;
        pcScore.textContent = +pcScore.textContent + 1;

    }

    if (userScore === 3) {
        return alert('Congratulations you won a best out of 5!'),
            pcScore.textContent = 0,
            humanScore.textContent = 0,
            userScore = 0,
            aiScore = 0;

    } else if (aiScore === 3) {
        return alert('Unfortunetly you lost a best out of 5'),
            pcScore.textContent = 0,
            humanScore.textContent = 0,
            userScore = 0,
            aiScore = 0;
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

