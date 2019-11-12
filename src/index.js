import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const letsPlay = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('');
};

export const yourName = () => {
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

// имя участника
export const player = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  return name;
};

// проверка на четность
const isEven = (question) => (question % 2 === 0 ? 'yes' : 'no');

// игра
export const game = () => {
  // имя участника
  const name = player();
  // цикл из 3х попыток
  for (let i = 0; i < 3; i += 1) {
    // генерация случайного числа
    const min = 10;
    const max = 99;
    const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;
    const question = randomNumber(min, max);
    console.log(`Question: ${question}`);
    // ответ
    const answer = readlineSync.question('Your answer: ');
    const even = isEven(question);
    // проверка на правильность ответа
    if (even !== answer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.\nLet's try again, ${name}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};
