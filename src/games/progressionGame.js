import { cons } from '@hexlet/pairs';

import {
  randomNum,
  startBigGame,
}
  from '..';

const mission = 'What number is missing in the progression?';
const min = 1;
const max = 15;
const minIndexOfHiddenElement = 0;
const questionExpressionLength = 10;

const getGameData = () => {
  const firstNum = randomNum(min, max);
  const step = randomNum(min, max);
  const indexOfHiddenElement = randomNum(minIndexOfHiddenElement, questionExpressionLength - 1);
  const arr = [];
  for (let i = 0; i < questionExpressionLength; i += 1) {
    if (i === indexOfHiddenElement) {
      arr[i] = '..';
    } else arr[i] = firstNum + (step * i);
  } const question = arr.join(' ');
  const correctAnswer = (firstNum + (step * indexOfHiddenElement)).toString();
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
