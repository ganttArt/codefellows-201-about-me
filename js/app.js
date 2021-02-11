'use strict';

let userName = prompt('What is your name?');
alert(`Hello ${userName}, get ready for 5 yes or no questions to learn more about Chris Gantt. Please answer y/n or yes/no.`);
let correctAnswerTally = 0;

let hometown = prompt('Was Chris born and raised in Seattle?').toLowerCase();
let hasDog = prompt('Does Chris have a dog?').toLowerCase();
let married = prompt('Is Chris married?').toLowerCase();
let children = prompt('Does Chris have a child?').toLowerCase();
let beard = prompt('Does Chris have a beard?').toLowerCase();

if ((hometown === 'no') || (hometown === 'n')) {
  alert('You were correct. Chris was not born and raised in Seattle, it was in Bellevue/Issaquah WA.');
  correctAnswerTally += 1;
  // console.log('You were correct. Chris was not born and raised in Seattle, it was in Bellevue/Issaquah WA.');
} else {
  alert('You guessed incorrectly. Chris was not born and raised in Seattle.');
  // console.log('You guessed incorrectly. Chris was not born and raised in Seattle.');
}

if ((hasDog === 'yes') || (hasDog === 'y')) {
  alert('You were correct. Chris does have a dog.');
  correctAnswerTally += 1;
  // console.log('You were correct. Chris does have a dog.');
} else {
  alert('You guessed incorrectly. Chris does have a dog.');
  // console.log('You guessed incorrectly. Chris does have a dog.');
}

if ((married === 'yes') || (married === 'y')) {
  alert('You were correct. Chris is married.');
  correctAnswerTally += 1;
  // console.log('You were correct. Chris is married.');
} else {
  alert('You guessed incorrectly. Chris is married.');
  // console.log('You guessed incorrectly. Chris is married.');
}

if ((children === 'no') || (children === 'n')) {
  alert('You were correct. Chris does not have children.');
  correctAnswerTally += 1;
  // console.log('You were correct. Chris does not have children.');
} else {
  alert('You guessed incorrectly. Chris does not have children.');
  // console.log('You guessed incorrectly. Chris does not have children.');
}

if ((beard === 'yes') || (beard === 'y')) {
  alert('You were correct. Chris does have a beard.');
  correctAnswerTally += 1;
  // console.log('You were correct. Chris does have a beard.');
} else {
  alert('You guessed incorrectly. Chris does have a beard.');
  // console.log('You guessed incorrectly. Chris does have a beard.');
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
// https://www.w3schools.com/js/js_random.asp

let guessedNumber = prompt('Guess a number from 1 to 100');

for (let i = 0; i < 4; i++) {
  console.log(guessedNumber);
  if (guessedNumber === randomNumber) {
    alert(`You guessed correctly, the number is ${guessedNumber}`);
    correctAnswerTally += 1;
    break;
  } else if (i === 3) {
    alert(`You did not guess the correct number, it was ${randomNumber}`);
  } else if (guessedNumber < randomNumber) {
    guessedNumber = prompt('You guessed too low, guess again!');
  } else if (guessedNumber > randomNumber) {
    guessedNumber = prompt('You guessed too high, guess again!');
  } else {
    guessedNumber = prompt('Guess again!');
  }
}

let coasterAnswers = [
  'Steel Vengeance',
  'The Incredible Hulk Coaster',
  'Valravn',
  'Millennium Force',
  'Rougarou',
  'Top Thrill Dragster',
];

let answeredCorrectly = false;
for (let i = 0; i < 6; i++) {
  if (answeredCorrectly) {
    break;
  } else {
    let coasterGuess = prompt('Guess a Chris Gantt approved roller coaster!');
    for (let i = 0; i < coasterAnswers.length; i++) {
      if (coasterAnswers[i] === coasterGuess) {
        alert('You guessed correctly!');
        correctAnswerTally += 1;
        answeredCorrectly = true;
        break;
      }
    }
  }
}
alert(`Chris's approved roller coasters are ${coasterAnswers}`);

alert(`${userName}, thanks for guessing and learning more about me. You got ${correctAnswerTally}/7 questions correct!`);
