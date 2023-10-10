'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumberStyleWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayNumberContent = function (number) {
  document.querySelector('.number').textContent = number;
};

const bodyBackground = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number ');
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    bodyBackground('#60b347');
    displayNumberStyleWidth('30rem');
    displayNumberContent(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayNumberContent('?');
  bodyBackground('#222');
  document.querySelector('.number').style.width = '15rem';
});
