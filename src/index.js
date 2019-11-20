import readlineSync from 'readline-sync';

// приветствие
const letsPlay = (task) => {
  const welcome = `Welcome to the Brain Games!\n${task}`;
  console.log(`${welcome}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

// генерация случайного числа
export const randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

// генерация операции
export const randomSymbol = (operators) => operators[Math.floor(Math.random() * operators.length)];

// ИГРА
export const bigGame = (task, inputData, getAnswer) => {
  const name = letsPlay(task);
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = inputData();
    const userAnswer = getAnswer();
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};
