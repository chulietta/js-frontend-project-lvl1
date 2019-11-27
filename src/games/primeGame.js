import { cons } from '@hexlet/pairs';

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
    if (number % i === 0) return false;
  } return true;
};

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const gameInfo = () => {
  const questionNumber = randomNumber(min, max);
  const correctAnswer = getCorrectAnswer(questionNumber);
  return cons(questionNumber, correctAnswer);
};

export default () => bigGame(mission, gameInfo);
