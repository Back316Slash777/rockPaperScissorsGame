//Rock, Paper, Scissors Game

let check = document.getElementById('check');
let guess = new URLSearchParams(window.location.search);
let myAnswer = guess.get('guess');
let rivalAnswer = Math.random();

    if (rivalAnswer < 0.33) {
        rivalAnswer = "rock";
    }
    else if (rivalAnswer > 0.66) {
        rivalAnswer = "scissors";
    }
    else {
        rivalAnswer = "paper";
    }

//draw scenario
if (myAnswer===rivalAnswer) 
    {check.innerHTML = `Its a draw! You both chose ${myAnswer}!`;}
//winning scenario
else if (((myAnswer==="rock")&&(rivalAnswer==="scissors")) ||
         ((myAnswer==="paper")&&(rivalAnswer==="rock"))    ||
         ((myAnswer==="scissors")&&(rivalAnswer==="paper")))
    {let capMyAnswer = myAnswer.charAt(0).toUpperCase() + myAnswer.slice(1);
    check.innerHTML = `${capMyAnswer} beats ${rivalAnswer}! You win!`;}
//losing scenario
else {let capRivalAnswer = rivalAnswer.charAt(0).toUpperCase() + rivalAnswer.slice(1);
    check.innerHTML = `${capRivalAnswer} beats ${myAnswer}! You win!`;}
