'use strict';

let userName = prompt('What is your name?');
alert(`Hello ${userName}, get ready for 5 yes or no questions to learn more about Chris Gantt. Please answer y/n or yes/no.`);
let correctAnswerTally = 0;


function hometownQuestion(){
  let hometown = prompt('Was Chris born and raised in Seattle?');
  if (hometown) {
    hometown = hometown.toLowerCase();
  }
  console.log('hometown question asked');
  if ((hometown === 'no') || (hometown === 'n')) {
    alert('You were correct. Chris was not born and raised in Seattle, it was in Bellevue/Issaquah WA.');
    correctAnswerTally += 1;
    // console.log('You were correct. Chris was not born and raised in Seattle, it was in Bellevue/Issaquah WA.');
  } else {
    alert('You guessed incorrectly. Chris was not born and raised in Seattle.');
    // console.log('You guessed incorrectly. Chris was not born and raised in Seattle.');
  }
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
hometownQuestion();


function dogQuestion(){
  let hasDog = prompt('Does Chris have a dog?');
  if (hasDog) {
    hasDog = hasDog.toLowerCase();
  }
  console.log('dog question asked');
  if ((hasDog === 'yes') || (hasDog === 'y')) {
    alert('You were correct. Chris does have a dog.');
    correctAnswerTally += 1;
    // console.log('You were correct. Chris does have a dog.');
  } else {
    alert('You guessed incorrectly. Chris does have a dog.');
    // console.log('You guessed incorrectly. Chris does have a dog.');
  }
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
dogQuestion();


function marriedQuestion(){
  let married = prompt('Is Chris married?');
  if (married) {
    married = married.toLowerCase();
  }
  console.log('marriage question asked');
  if ((married === 'yes') || (married === 'y')) {
    alert('You were correct. Chris is married.');
    correctAnswerTally += 1;
    // console.log('You were correct. Chris is married.');
  } else {
    alert('You guessed incorrectly. Chris is married.');
    // console.log('You guessed incorrectly. Chris is married.');
  }
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
marriedQuestion();


function childrenQuestion(){
  let children = prompt('Does Chris have a child?');
  if (children) {
    children = children.toLowerCase();
  }
  console.log('children question asked');
  if ((children === 'no') || (children === 'n')) {
    alert('You were correct. Chris does not have children.');
    correctAnswerTally += 1;
    // console.log('You were correct. Chris does not have children.');
  } else {
    alert('You guessed incorrectly. Chris does not have children.');
    // console.log('You guessed incorrectly. Chris does not have children.');
  }
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
childrenQuestion();


function beardQuestion(){
  let beard = prompt('Does Chris have a beard?');
  if (beard) {
    beard = beard.toLowerCase();
  }
  console.log('beard question asked');
  if ((beard === 'yes') || (beard === 'y')) {
    alert('You were correct. Chris does have a beard.');
    correctAnswerTally += 1;
    // console.log('You were correct. Chris does have a beard.');
  } else {
    alert('You guessed incorrectly. Chris does have a beard.');
    // console.log('You guessed incorrectly. Chris does have a beard.');
  }
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
beardQuestion();


function numberGuessingGame(){
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  // https://www.w3schools.com/js/js_random.asp

  let guessedNumber = prompt('Guess a number from 1 to 100');
  console.log('number guessing game beginning');

  for (let i = 0; i < 4; i++) {
    console.log('user guessed ' + guessedNumber);
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
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
numberGuessingGame();


function rollercoasterGuessing(){
  let coasterAnswers = [
    'Steel Vengeance',
    'The Incredible Hulk Coaster',
    'Valravn',
    'Millennium Force',
    'Rougarou',
    'Top Thrill Dragster',
  ];

  console.log('roller coaster guessing game beginning');
  let answeredCorrectly = false;
  for (let i = 0; i < 6; i++) {
    if (answeredCorrectly) {
      break;
    } else {
      let coasterGuess = prompt('Guess a Chris Gantt approved roller coaster!');
      console.log('user guessed ' + coasterGuess);
      for (let i = 0; i < coasterAnswers.length; i++) {
        if (coasterAnswers[i] === coasterGuess) {
          alert('You guessed correctly!');
          console.log('user guessed a roller coaster correctly');
          correctAnswerTally += 1;
          answeredCorrectly = true;
          break;
        }
      }
    }
  }
  alert(`Chris's approved roller coasters are ${coasterAnswers}`);
  console.log(`Correct Answers = ${correctAnswerTally}`);
}
rollercoasterGuessing();

alert(`${userName}, thanks for guessing and learning more about me. You got ${correctAnswerTally}/7 questions correct!`);
