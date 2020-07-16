/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let gamePlaying;
let previousDiceRoll = 0;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        let dice = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice + '.png';        
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';        

        // 2 b. store score to compare with next roll
        // 3.  update the round score if NOT 1.
        if (dice !== 1) {
            roundScore+=dice + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // hold the score
        // 1. add current players score to the global (not round) score
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        let inputValue = document.querySelector('.final-score').value;
        let winningScore = 100;
        if (inputValue){
            winningScore = inputValue;
        }

        // 2. - check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = " W I N N E R !";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            // 3. change active player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    // next player when 1 on dice
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //resetting scores
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

function init() {
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    // hide dice img
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = " Player 1";
    document.getElementById('name-1').textContent = " Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
};

// 3 challenges
// 1. a player loses his ENTIRE score when he rolls two 6 in a row
//  after that, its the next player's turn. (hint: always save previous dice roll)

// 2. add an input field to the html where players can set the winning score
// so that they can change the predefined score of 100 (hint : you can read that 
// value with .value property in Java Script). use google to figure this out


// 3. add another dice to the game, so that there are two dices now.
// the player looses his current score when one of them is 1.
// hint : you will need css to position the second dice, so take a look a
// at the CSS code for the first row