import readlineSync from 'readline-sync';

import { randomNumber, bigGame } from '..';

const task = 'What number is missing in the progression?';

const inputData = () => {
  const firstNumber = randomNumber(1, 9);
  const step = randomNumber(1, 9);
  const indexOfHiddenElement = randomNumber(1, 9);
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    if (i === indexOfHiddenElement) {
      arr[i] = '..';
    } else arr[i] = firstNumber + (step * i);
  } const string = arr.join(' ');
  console.log(`Question: ${string}`);
  return (firstNumber + (step * indexOfHiddenElement)).toString();
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(task, inputData, getAnswer);
