import readlineSync from 'readline-sync';

import { randomNumber, bigGame } from '..';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const inputData = () => {
  const questionNumber = randomNumber(1, 99);
  console.log(`Question: ${questionNumber}`);
  return isEven(questionNumber);
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(task, inputData, getAnswer);
