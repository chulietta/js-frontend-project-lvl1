import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const randomNum = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

const numberOfCorrectAnswers = 3;

export const startBigGame = (mission, gameInfo) => {
  console.log(`Welcome to the Brain Games!\n${mission}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 0; i < numberOfCorrectAnswers; i += 1) {
    const questionAndAnswer = gameInfo();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};
