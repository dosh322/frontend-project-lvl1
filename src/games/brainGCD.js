import runGame from '../index.js';
import getRandomInt from '../random.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num2 !== 0 ? getGcd(num2, num1 % num2) : num1);

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

const gcdGame = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default gcdGame;
