
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


//The function receive both the player's choice and the computer choice
//Then he returns the winner

function runTheGame(playerSelection){

    let computerSelection = computerPlay();
    let result;

    //Determine who wins
    if(playerSelection === 'Scissors'){
        if(computerSelection === 'ROCK'){
            result = "Computer wins!";
        }else if (computerSelection === 'SCISSORS'){
            result = "It's a tie !"
        }else{
            result = "Player wins!"
        }
    }else if(playerSelection === 'Rock'){
        if(computerSelection === 'ROCK'){
            result = "It's a tie !"
        }else if (computerSelection === 'SCISSORS'){
            result = "Player wins!"
        }else{
            result = "Computer wins!"
        }
    }else{
        if(computerSelection === 'ROCK'){
             result = "Player wins!"
        }else if (computerSelection === 'SCISSORS'){
            result = "Computer wins!"
        }else{
             result = "It's a tie !"
        }
    }

    document.getElementById("results").textContent=result;
    
    
    //Set the counters according to the result
    if(result === "Player wins!"){
        let newScore = document.getElementById("playerCounter").textContent;
        newScore ++;
        document.getElementById("playerCounter").textContent = newScore;
    }else if(result === "Computer wins!"){
        let newScore = document.getElementById("computerCounter").textContent;
        newScore ++;
        document.getElementById("computerCounter").textContent = newScore;
    }

    //End the game and announce the winner
    if(document.getElementById("playerCounter").textContent === "5"){
        document.getElementById("results").textContent="You win !!! :D";
        resetCounter()    
    }else if(document.getElementById("computerCounter").textContent === "5"){
        document.getElementById("results").textContent="You loose :(";
        resetCounter()
    }
    
}

function resetCounter(){
    document.getElementById("computerCounter").textContent = "0";
    document.getElementById("playerCounter").textContent = "0";
}




let buttons = document.querySelectorAll("button"); //Nodelist of buttons
buttons.forEach(button => button.addEventListener('click', function(e){
    runTheGame(this.textContent);
}));



