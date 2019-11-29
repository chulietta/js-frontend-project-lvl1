import { cons } from '@hexlet/pairs';

import {
  randomNumber,
  startBigGame,
}
  from '..';

const mission = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 99;

const getSolution = (x, y) => {
  let greatestCommonDivider = 0;
  const minNumber = (x > y) ? y : x;
  for (let i = minNumber; i > 0; i -= 1) {
    if ((x % i === 0) && (y % i === 0)) {
      greatestCommonDivider = i;
      break;
    }
  } return greatestCommonDivider;
};

const getGameData = () => {
  const firstNum = randomNumber(min, max);
  const secondNum = randomNumber(min, max);
  const questionExpression = `${firstNum} ${secondNum}`;
  const correctAnswer = getSolution(firstNum, secondNum);
  const correctAnswerString = correctAnswer.toString();
  return cons(questionExpression, correctAnswerString);
};

export default () => startBigGame(mission, getGameData);
