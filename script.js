function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
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

let playerChoice = prompt("Choose between Rock, Paper or Scissors.").toLowerCase();