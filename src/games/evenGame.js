import { cons } from '@hexlet/pairs';
import {
  randomNumber,
  bigGame,
}
  from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 99;

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const gameInfo = () => {
  const questionNumber = randomNumber(min, max);
  const correctAnswer = getCorrectAnswer(questionNumber);
  return cons(questionNumber, correctAnswer);
};

export default () => bigGame(mission, gameInfo);
