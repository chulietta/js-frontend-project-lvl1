import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

const countOfRounds = 3;

export const bigGame = (mission, gameInfo) => {
  console.log(`Welcome to the Brain Games!\n${mission}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 0; i < countOfRounds; i += 1) {
    const questionAndAnswer = gameInfo();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${playerName}!`);
};
