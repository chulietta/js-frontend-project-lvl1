import { cons } from '@hexlet/pairs';
import startBigGame from '../index';
import getRandomNumber from '../utils';

const mission = 'What is the result of the expression?';
const min = 1;
const max = 99;

const getAnswer = (operation, a, b) => {
  let result;
  switch (operation) {
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
      return null;
  } return result;
};

const operators = '+-*';

const getGameData = () => {
  const firstArgument = getRandomNumber(min, max);
  const secondArgument = getRandomNumber(min, max);
  const randomOperation = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstArgument} ${randomOperation} ${secondArgument}`;
  const correctAnswer = getAnswer(randomOperation, firstArgument, secondArgument).toString();
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
