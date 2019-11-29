import { cons } from '@hexlet/pairs';

import {
  randomNum,
  startBigGame,
}
  from '..';

const mission = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 99;

const getSolution = (x, y) => {
  let greatestCommonDivider = 0;
  const minNum = (x > y) ? y : x;
  for (let i = minNum; i > 0; i -= 1) {
    if ((x % i === 0) && (y % i === 0)) {
      greatestCommonDivider = i;
      break;
    }
  } return greatestCommonDivider;
};

const getGameData = () => {
  const firstNum = randomNum(min, max);
  const secondNum = randomNum(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = (getSolution(firstNum, secondNum)).toString();
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
