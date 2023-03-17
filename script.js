let playerScore = 0;
let computerScore = 0;
const track = document.getElementById('track');
const playerScoreTrack = document.querySelector('.playerScore');
const computerScoreTrack = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const firstTrack = document.querySelector('.firstTrack');
const secondTrack = document.querySelector('.secondTrack');
const thirdTrack = document.querySelector('.thirdTrack');


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('get-data');
        const computerChoice = getComputerChoice();
        firstTrack.textContent = secondTrack.textContent;
        secondTrack.textContent = thirdTrack.textContent;
        thirdTrack.textContent = playRound(playerChoice, computerChoice);
        game()
    })
})

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return "I don't know...";
    }
}



function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "Draw !!";
    }
    else if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            computerScoreTrack.textContent = computerScore;
            return "You Lose ! Paper beats Rock !";
        }
        else if(computerChoice === "scissors"){
            playerScore++;
            playerScoreTrack.textContent = playerScore;
            return "You Win ! Rock beats Scissors !";
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++;
            computerScoreTrack.textContent = computerScore;
            return "You Lose ! Scissors beat Paper !";
        }
        else if(computerChoice === "rock"){
            playerScore++;
            playerScoreTrack.textContent = playerScore;
            return "You Win ! Paper beats Rock !";
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            computerScoreTrack.textContent = computerScore;
            return "You Lose ! Scissors beat Rock !";
        }
        else if(computerChoice === "paper"){
            playerScore++;
            playerScoreTrack.textContent = playerScore;
            return "You Win ! Scissors beat Paper !";
        }
    }
    else{
        return "Did you write it well ?";
    }
}

function game(){
    if(playerScore === 5){
        result.textContent = 'Finally!! You Win !!!'
    }
    else if(computerScore === 5){
        result.textContent = 'Oups... You Lose !'
    } 
}