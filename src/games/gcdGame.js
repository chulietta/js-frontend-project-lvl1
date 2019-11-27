import { cons } from '@hexlet/pairs';

import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 99;

const solution = (firstNumber, secondNumber) => {
  let nod = 0;
  const minNumber = (firstNumber > secondNumber) ? secondNumber : firstNumber;
  for (let i = minNumber; i > 0; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      nod = i;
      break;
    }
  } return nod;
};

const gameInfo = () => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  const questionExpression = `${firstNumber} ${secondNumber}`;
  const getCorrectAnswer = solution(firstNumber, secondNumber);
  const correctAnswer = getCorrectAnswer.toString();
  return cons(questionExpression, correctAnswer);
};

export default () => bigGame(mission, gameInfo);
