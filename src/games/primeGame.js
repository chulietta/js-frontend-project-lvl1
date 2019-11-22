import readlineSync from 'readline-sync';

import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const min = 1;
const max = 99;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  } return 'yes';
};

const gameInfo = () => {
  const question = randomNumber(min, max);
  console.log(`Question: ${question}`);
  return isPrime(question);
};

const getAnswer = () => readlineSync.question('Your answer: ');

export default () => bigGame(mission, gameInfo, getAnswer);
