import { cons } from '@hexlet/pairs';
import {
  randomNum,
  startBigGame,
}
  from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 99;

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = randomNum(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
