import readlineSync from 'readline-sync';

import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'What number is missing in the progression?';
const min = 1;
const max = 15;
const minIndexOfHiddenElement = 0;
const questionExpressionLength = 10;

const inputData = () => {
  const firstNumber = randomNumber(min, max);
  const step = randomNumber(min, max);
  const indexOfHiddenElement = randomNumber(minIndexOfHiddenElement, questionExpressionLength - 1);
  const arr = [];
  for (let i = 0; i < questionExpressionLength; i += 1) {
    if (i === indexOfHiddenElement) {
      arr[i] = '..';
    } else arr[i] = firstNumber + (step * i);
  } const string = arr.join(' ');
  console.log(`Question: ${string}`);
  return (firstNumber + (step * indexOfHiddenElement)).toString();
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(mission, inputData, getAnswer);
