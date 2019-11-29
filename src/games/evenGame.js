import { cons } from '@hexlet/pairs';
import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 99;

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const questionNum = randomNumber(min, max);
  const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
  return cons(questionNum, correctAnswer);
};

export default () => bigGame(mission, getGameData);
