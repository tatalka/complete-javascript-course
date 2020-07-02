/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

// querySelector as setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
// querySelector in getter
//let someVar = document.querySelector('#score-0').textContent;
//console.log(someVar);
// hide dice img
document.querySelector('.dice').style.display = 'none';

// initialize round score with zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. random number
    let dice = Math.floor(Math.random()*6) +1;

    // 2. display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    
    // 3.  update the round score if NOT 1.

});