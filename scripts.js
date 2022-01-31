console.log("HEllo World");

/* Create a rock paper scisors:
The game is made of 5 rounds, there is one player playing against the computer;
after 5 rounds the computer announce the winner
*/

//Returns a random number between 0 & 2
function randomNumber(){
    return Math.floor(Math.random() * 3);
}


// The computer returns randomly rock/paper/scissors
function computerPlay(){
    let sign = ['PAPER', 'SCISSORS', 'ROCK'];
    return sign[randomNumber()]
}

//Prompt for the player's choice
function playerChoice(){ 
//Verify that the player has entered a valid answer
    let choice;
    do{
        choice = prompt("Choose a sign");
        choice = choice.toUpperCase();
    }while (choice !== 'ROCK' 
    && choice !== 'SCISSORS' 
    && choice !== 'PAPER')    

    return choice;
}



//The computer receive both the player's choice and the computer choice
//Then he returns the winner
function winner(playerSelection, computerSelection){
    playerSelection = playerChoice();
    computerSelection = computerPlay();
    let result;

    //Determine who wins
    if(playerSelection === 'SCISSORS'){
        if(computerSelection === 'ROCK'){
            return result = "Computer wins!"
        }else if (computerSelection === 'SCISSORS'){
            return result = "It's a tie !"
        }else{
            return result = "Player wins!"
        }
    }else if(playerSelection === 'ROCK'){
        if(computerSelection === 'ROCK'){
            return result = "It's a tie !"
        }else if (computerSelection === 'SCISSORS'){
            return result = "Player wins!"
        }else{
            return result = "Computer wins!"
        }
    }else{
        if(computerSelection === 'ROCK'){
            return result = "Player wins!"
        }else if (computerSelection === 'SCISSORS'){
            return result = "Computer wins!"
        }else{
            return result = "It's a tie !"
        }
    }

}

//The computer play for 5 rounds, keep the scores,
//Then returns the winner, and reset the scores.

function game(){
    let roundCount = 0;
    let playerScore = 0;
    let computerScore = 0;

    do{
        let result = winner();
        console.log(result);
        
        if (result === "Player wins!"){
            playerScore ++;
        }else if (result === "Computer wins!"){
            computerScore ++;
        }else if (result === "It's a tie !"){
            computerScore ++;
            playerScore ++;
        }
        roundCount ++;
    }while(roundCount<5)

    if(playerScore < computerScore){
        return "You loose :(";
    }else if (computerScore < playerScore){
        return "You win ! :D"
    }else if (computerScore === playerScore){
        return "It's a tie! :o"
    }
}