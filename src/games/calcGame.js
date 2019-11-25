import readlineSync from 'readline-sync';

import {
  randomNumber,
  randomSymbol,
  bigGame,
}
  from '..';

const mission = 'What is the result of the expression?';
const min = 1;
const max = 99;

const solution = (firstNumber, secondNumber, randomFunction) => {
  let result = 0;
  switch (randomFunction) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    default:
      result = firstNumber * secondNumber;
  } return result;
};

const gameInfo = () => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  const randomFunction = randomSymbol('+-*');
  const questionExpression = `${firstNumber} ${randomFunction} ${secondNumber}`;
  console.log(`Question: ${questionExpression}`);
  return solution(firstNumber, secondNumber, randomFunction).toString();
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(mission, gameInfo, getAnswer);
