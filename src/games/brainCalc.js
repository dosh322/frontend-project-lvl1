import runGame from '../index.js';
import getRandomInt from '../random.js';

const operators = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unsupported operation');
  }
};

const getQuestionAndAnswer = () => {
  const operator = operators[getRandomInt(0, operators.length)];
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};

const calcGame = () => {
  runGame(gameRules, getQuestionAndAnswer);
};

export default calcGame;
