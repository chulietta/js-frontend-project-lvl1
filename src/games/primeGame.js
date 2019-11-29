import { cons } from '@hexlet/pairs';

import {
  getRandomNum,
  startBigGame,
}
  from '..';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const min = 1;
const max = 99;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  } return true;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomNum(min, max);
  const correctAnswer = getCorrectAnswer(question);
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
