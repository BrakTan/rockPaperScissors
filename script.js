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

function getPlayerChoice(){
    const playerChoice = prompt("Choose between Rock, Paper or Scissors.").toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "Draw !!";
    }
    else if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            return "You Lose ! Paper beats Rock !";
        }
        else if(computerChoice === "scissors"){
            return "You Win ! Rock beats Scissors !";
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            return "You Lose ! Scissors beat Paper !";
        }
        else if(computerChoice === "rock"){
            return "You Win ! Paper beats Rock !";
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            return "You Lose ! Scissors beat Rock !";
        }
        else if(computerChoice === "paper"){
            return "You Win ! Scissors beat Paper !";
        }
    }
    else{
        return "Did you write it well ?";
    }
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));