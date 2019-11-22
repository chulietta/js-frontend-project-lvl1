import readlineSync from 'readline-sync';

// приветствие
const letsPlay = (mission) => {
  const welcome = `Welcome to the Brain Games!\n${mission}`;
  console.log(`${welcome}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

// генерация случайного числа
export const randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

// генерация операции
export const randomSymbol = (operators) => operators[Math.floor(Math.random() * operators.length)];

const countOfRounds = 3;
// ИГРА
export const bigGame = (mission, gameInfo, getAnswer) => {
  const name = letsPlay(mission);
  for (let i = 0; i < countOfRounds; i += 1) {
    const correctAnswer = gameInfo();
    const playerAnswer = getAnswer();
    if (playerAnswer !== correctAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};
