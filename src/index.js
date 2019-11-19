import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const letsPlayEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('');
};

export const letsPlayCalc = () => {
  console.log('What is the result of the expression?');
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

// генерация случайного числа
const min = 10;
const max = 99;
const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;

// генерация операции
const operators = '+-*';
const randomSymbol = () => Math.floor(Math.random() * (operators.length));


// проверка на четность
const isEven = (questionNumber) => (questionNumber % 2 === 0 ? 'yes' : 'no');

// вычисление выражения
const solution = (firstNumber, secondNumber, randomOperator) => {
  if (randomOperator === '+') {
    return firstNumber + secondNumber;
  } if (randomOperator === '-') {
    return firstNumber - secondNumber;
  } return firstNumber * secondNumber;
};

// игра на четность
export const game = () => {
  // имя участника
  const name = player();
  // цикл из 3х попыток
  for (let i = 0; i < 3; i += 1) {
    const questionNumber = randomNumber(min, max);
    console.log(`Question: ${questionNumber}`);
    // ответ
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(questionNumber);
    // проверка на правильность ответа
    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};

// игра на вычисления
export const calc = () => {
  const name = player();
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNumber(min, max);
    const secondNumber = randomNumber(min, max);
    const randomOperator = operators[randomSymbol(operators)];
    const questionExpression = `${firstNumber} ${randomOperator} ${secondNumber}`;
    console.log(`Question: ${questionExpression}`);
    // ответ
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = solution(firstNumber, secondNumber, randomOperator).toString();
    // проверка на правильность ответа
    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!`);
};
