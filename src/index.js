import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const correctAnswersCount = 3;

export default (mission, getGameData) => {
  console.log(`Welcome to the Brain Games!\n${mission}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  let messageAfterUserAnswer = '';
  const congratulationMessage = `Congratulations, ${playerName}!`;

  for (let i = 0; i < correctAnswersCount; i += 1) {
    const questionAndAnswer = getGameData();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      messageAfterUserAnswer = 'Correct!';
      console.log(`${messageAfterUserAnswer}`);
    } else {
      messageAfterUserAnswer = `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`;
      console.log(`${messageAfterUserAnswer}`);
      return;
    }
  }
  console.log(`${congratulationMessage}`);
};
