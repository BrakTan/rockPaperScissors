let playerScore = 0;
let computerScore = 0;



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
            return "You Lose ! Paper beats Rock !";
        }
        else if(computerChoice === "scissors"){
            playerScore++;
            return "You Win ! Rock beats Scissors !";
        }
    }
    else if(playerChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++;
            return "You Lose ! Scissors beat Paper !";
        }
        else if(computerChoice === "rock"){
            playerScore++;
            return "You Win ! Paper beats Rock !";
        }
    }
    else if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++;
            return "You Lose ! Scissors beat Rock !";
        }
        else if(computerChoice === "paper"){
            playerScore++;
            return "You Win ! Scissors beat Paper !";
        }
    }
    else{
        return "Did you write it well ?";
    }
}

function game(){
    if(playerScore > computerScore){
        console.log("Finally : You Win !!!")
    }
    else if(playerScore < computerScore){
        console.log("Finally : You Lose !!!");
    }
    else{
        console.log("Finally : Draw !!");
    }
    
}

game();