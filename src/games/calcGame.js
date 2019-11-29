import { cons } from '@hexlet/pairs';
import {
  randomNum,
  startBigGame,
}
  from '..';

const mission = 'What is the result of the expression?';
const min = 1;
const max = 99;

const getSolution = (a, fn, b) => {
  let result;
  switch (fn) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = null;
  } return result;
};

const operators = '+-*';

const getGameData = () => {
  const firstNum = randomNum(min, max);
  const secondNum = randomNum(min, max);
  const randomFunction = operators[randomNum(0, operators.length - 1)];
  const question = `${firstNum} ${randomFunction} ${secondNum}`;
  const correctAnswer = (getSolution(firstNum, randomFunction, secondNum)).toString();
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
