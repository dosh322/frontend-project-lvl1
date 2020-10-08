import runGame from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const operators = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log('error');
  }

  return correctAnswer.toString();
};

const getAnswerAndQuestion = () => {
  const operator = operators[getRandomInt(operators.length)];
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);
  return [question, correctAnswer];
};

const calcGame = () => {
  runGame(gameRules, getAnswerAndQuestion);
};

export default calcGame;
