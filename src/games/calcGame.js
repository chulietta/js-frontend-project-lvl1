import { cons } from '@hexlet/pairs';
import {
  randomNumber,
  bigGame,
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
  const firstNum = randomNumber(min, max);
  const secondNum = randomNumber(min, max);
  const randomFunction = operators[randomNumber(0, operators.length - 1)];
  const questionExpression = `${firstNum} ${randomFunction} ${secondNum}`;
  const correctAnswer = getSolution(firstNum, randomFunction, secondNum);
  const correctAnswerString = correctAnswer.toString();
  return cons(questionExpression, correctAnswerString);
};

export default () => bigGame(mission, getGameData);
