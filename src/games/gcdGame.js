import { cons } from '@hexlet/pairs';
import startBigGame from '../index';
import getRandomNumber from '../utils';

const mission = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 99;

const calculateGreatestCommonDivider = (x, y) => {
  let greatestCommonDivisor = 0;
  const minNum = (x > y) ? y : x;
  for (let i = minNum; i > 0; i -= 1) {
    if ((x % i === 0) && (y % i === 0)) {
      greatestCommonDivisor = i;
      break;
    }
  } return greatestCommonDivisor;
};

const getGameData = () => {
  const firstInteger = getRandomNumber(min, max);
  const secondInteger = getRandomNumber(min, max);
  const question = `${firstInteger} ${secondInteger}`;
  const correctAnswer = calculateGreatestCommonDivider(firstInteger, secondInteger).toString();
  return cons(question, correctAnswer);
};

export default () => startBigGame(mission, getGameData);
