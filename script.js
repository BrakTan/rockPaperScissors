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

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

if(playerChoice === computerChoice){
    console.log("Draw !!");
}
else if(playerChoice === "rock"){
    if(computerChoice === "paper"){
        console.log("You Lose ! Paper beats Rock !");
    }
    else if(computerChoice === "scissors"){
        console.log("You Win ! Rock beats Scissors !");
    }
}
else if(playerChoice === "paper"){
    if(computerChoice === "scissors"){
        console.log("You Lose ! Scissors beat Paper !");
    }
    else if(computerChoice === "rock"){
        console.log("You Win ! Paper beats Rock !");
    }
}
else if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
        console.log("You Lose ! Scissors beat Rock !");
    }
    else if(computerChoice === "paper"){
        console.log("You Win ! Scissors beat Paper !");
    }
}
else{
    console.log("Did you write it well ?");
}