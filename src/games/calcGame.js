import { cons } from '@hexlet/pairs';
import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'What is the result of the expression?';
const min = 1;
const max = 99;

const solution = (a, fn, b) => {
  let result;
  switch (fn) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
  } return result;
};

const operators = '+-*';

const gameInfo = () => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  const randomFunction = operators[randomNumber(0, operators.length - 1)];
  const questionExpression = `${firstNumber} ${randomFunction} ${secondNumber}`;
  const getCorrectAnswer = solution(firstNumber, randomFunction, secondNumber);
  const correctAnswer = getCorrectAnswer.toString();
  return cons(questionExpression, correctAnswer);
};

export default () => bigGame(mission, gameInfo);
