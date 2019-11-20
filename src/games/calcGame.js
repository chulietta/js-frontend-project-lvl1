import readlineSync from 'readline-sync';

import { randomNumber, randomSymbol, bigGame } from '..';

const task = 'What is the result of the expression?';

const solution = (firstNumber, secondNumber, randomOperator) => {
  if (randomOperator === '+') {
    return firstNumber + secondNumber;
  } if (randomOperator === '-') {
    return firstNumber - secondNumber;
  } return firstNumber * secondNumber;
};

const inputData = () => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  const randomFunction = randomSymbol('+-*');
  const questionExpression = `${firstNumber} ${randomFunction} ${secondNumber}`;
  console.log(`Question: ${questionExpression}`);
  return solution(firstNumber, secondNumber, randomFunction).toString();
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(task, inputData, getAnswer);
