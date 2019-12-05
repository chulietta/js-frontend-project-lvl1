import { cons } from '@hexlet/pairs';
import startBigGame from '../index';
import getRandomNumber from '../utils';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const min = 1;
const max = 99;

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if ((num % i === 0) || (num <= 1)) return false;
  } return true;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomNumber(min, max);
  const correctAnswer = getCorrectAnswer(question);
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
