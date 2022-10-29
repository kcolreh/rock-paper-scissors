
//Function that allows you to play a single round and decides who won it
function playRound(userChoise) {

    let ai = computerChoise();
    let user = userChoise.srcElement.id;
    
    const announcmentContainer = document.querySelector('.win-lose-tie');
    
    const won = document.createElement('h1');
    won.classList.add('Won');
    announcmentContainer.appendChild(won);

    const lose = document.createElement('h1');
    lose.classList.add('Won');
    announcmentContainer.appendChild(lose);

    const tie = document.createElement('h1');
    tie.classList.add('Won');;
    announcmentContainer.appendChild(tie);

    if (ai === user) {
             tie.textContent = 'its a tie!';;

    } else if (ai === 'rock' && user === 'paper') {
         won.textContent = 'you won the round', userScore++;
    } else if (ai === 'rock' && user === 'scissors') {
         lose.textContent = 'you lost the round', aiScore++;


    } else if (ai === 'paper' && user === 'rock') {
         lose.textContent = 'you lost the round', aiScore++;
    } else if (ai === 'paper' && user === 'scissors') {
         won.textContent = 'you won the round', userScore++;


    } else if (ai === 'scissors' && user === 'rock') {
        return won.textContent = 'you won the round', userScore++;
    } else if (ai === 'scissors' && user === 'paper') {
         lose.textContent = 'you lost the round', aiScore++;
    }

    if (userScore === 5){
        return alert ('You won!')
    } else if (aiScore === 5){
        return alert ('You lost!')
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});
let userScore = 0;
let aiScore = 0;
