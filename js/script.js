"use strict";

//Declare global variables

let rNumber = Math.trunc(Math.random() * 20 + 1);


//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

//Starting conditions
let scores,currentScore,activePlayer;

const initialize = function(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    diceEl.classList.add('hidden');
    btnHold.disabled = false;
    btnRoll.disabled = false;
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    // document.querySelector(`.player--0`).classList.add('player--active');
    // document.querySelector(`.player--1`).classList.remove('player--active');
    player1El.classList.remove('player--active');//player 2 //0
    player0El.classList.add('player--active');//player 1 //1
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    
    scores[activePlayer] = 0;
};
initialize();


const switchPlayer = function(){

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0? 1:0;
    player1El.classList.toggle('player--active');//player 2 //0
    player0El.classList.toggle('player--active');//player 1 //1
    return;
}


btnRoll.addEventListener('click', function () {

    //show the dice picture dependent in the rdm()
    diceEl.classList.remove('hidden');
    //1 generating the random number 
    rNumber = Math.trunc(Math.random() *6 + 1);
    //display the random number of dice in image
    diceEl.src = `images/dice-${rNumber}.png`;
   
    //check if the dice is  = 1?
    if(rNumber !==1){

        //add the dice rolled in the current score
        currentScore += rNumber; //store and sum the value of the random dice
        //selecting the score dynamicly if which is the active player right now
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        switchPlayer();
    }
        
    
});

    btnHold.addEventListener('click',function () {
    //1. Add current score to active player
    scores[activePlayer] += currentScore; 
    //scores[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. Check if player's score is >= 100
    //Finish the game
    if(scores[activePlayer] >=10 ){
        
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    // document.querySelector('.check').disabled = true;
    btnHold.disabled = true;
    btnRoll.disabled = true;
    }
    else{

        switchPlayer();
    }
    
    //Switch to the next player
});

btnNew.addEventListener('click', function(){
    diceEl.classList.add('hidden');
    btnHold.disabled = false;
    btnRoll.disabled = false;
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    // document.querySelector(`.player--0`).classList.add('player--active');
    // document.querySelector(`.player--1`).classList.remove('player--active');
    player1El.classList.remove('player--active');//player 2 //0
    player0El.classList.add('player--active');//player 1 //1
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    scores[activePlayer] = 0;

});

