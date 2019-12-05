import { cons } from '@hexlet/pairs';
import startBigGame from '../index';
import getRandomNumber from '../utils';

const mission = 'What number is missing in the progression?';
const min = 1;
const max = 15;
const minHiddenElementIndex = 0;
const questionExpressionLength = 10;

const getGameData = () => {
  const progressionFirstNumber = getRandomNumber(min, max);
  const step = getRandomNumber(min, max);
  const hiddenElementIndex = getRandomNumber(minHiddenElementIndex, questionExpressionLength - 1);
  const progression = [];
  for (let i = 0; i < questionExpressionLength; i += 1) {
    if (i === hiddenElementIndex) {
      progression[i] = '..';
    } else progression[i] = progressionFirstNumber + (step * i);
  } const question = progression.join(' ');
  const correctAnswer = (progressionFirstNumber + (step * hiddenElementIndex)).toString();
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
