import readlineSync from 'readline-sync';

import { randomNumber, bigGame } from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  } return 'yes';
};

const inputData = () => {
  const questionNumber = randomNumber(1, 99);
  console.log(`Question: ${questionNumber}`);
  return isPrime(questionNumber);
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(task, inputData, getAnswer);