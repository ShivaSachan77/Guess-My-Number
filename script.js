'use strict';

//vid:72DOM manipulation
// //Reading thhe content
// console.log(document.querySelector('.message').textContent);
// //manipulating the content
// document.querySelector('.message').textContent = 'Correct number';
// //reading the content again
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 2110;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//vid:73 Handeling click event
//firstly we need to select where the event should happen

//made the function and directly passed it to a event listener
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

//Randomizing number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMeessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMeessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆Correct number';
    displayMeessage('🏆Correct number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when the guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Too high' : '📉Too low';

      displayMeessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //  document.querySelector('.message').textContent = '😟You lost the game';
      displayMeessage('😟You lost the game');
      score--;
      document.querySelector('.score').textContent = 0;
    }
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈Too high';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '😟You lost the game';
    //       score--;
    //       document.querySelector('.score').textContent = 0;
    //     }
  }

  //when the guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😟You lost the game';
  //       score--;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//vid: 74 umplementing game logic
//1. defining secret numbers

//working on 'Again'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMeessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
