import readlineSync from 'readline-sync';

import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 99;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const gameInfo = () => {
  const question = randomNumber(min, max);
  console.log(`Question: ${question}`);
  return isEven(question);
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(mission, gameInfo, getAnswer);
