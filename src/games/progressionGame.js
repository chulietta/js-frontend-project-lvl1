import { cons } from '@hexlet/pairs';

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

const gameInfo = () => {
  const firstNumber = randomNumber(min, max);
  const step = randomNumber(min, max);
  const indexOfHiddenElement = randomNumber(minIndexOfHiddenElement, questionExpressionLength - 1);
  const arr = [];
  for (let i = 0; i < questionExpressionLength; i += 1) {
    if (i === indexOfHiddenElement) {
      arr[i] = '..';
    } else arr[i] = firstNumber + (step * i);
  } const string = arr.join(' ');
  const correctAnswer = (firstNumber + (step * indexOfHiddenElement)).toString();
  return cons(string, correctAnswer);
};

export default () => bigGame(mission, gameInfo);
