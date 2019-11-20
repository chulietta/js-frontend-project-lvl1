import readlineSync from 'readline-sync';

import { randomNumber, bigGame } from '..';

const task = 'Find the greatest common divisor of given numbers.';

const solution = (firstNumber, secondNumber) => {
  let nod = 0;
  const min = (firstNumber > secondNumber) ? secondNumber : firstNumber;
  for (let i = min; i > 0; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      nod = i;
      break;
    }
  } return nod;
};

const inputData = () => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  const questionExpression = `${firstNumber} ${secondNumber}`;
  console.log(`Question: ${questionExpression}`);
  return solution(firstNumber, secondNumber).toString();
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(task, inputData, getAnswer);
