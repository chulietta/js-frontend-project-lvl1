import readlineSync from 'readline-sync';

import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'What is the result of the expression?';
const min = 1;
const max = 99;

const solution = (firstNumber, secondNumber, randomFunction) => {
  switch (randomFunction) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return false;
  }
};

const operators = '+-*';

const gameInfo = () => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  const randomFunction = operators[randomNumber(0, operators.length - 1)];
  const questionExpression = `${firstNumber} ${randomFunction} ${secondNumber}`;
  console.log(`Question: ${questionExpression}`);
  return solution(firstNumber, secondNumber, randomFunction).toString();
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(mission, gameInfo, getAnswer);
