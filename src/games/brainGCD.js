import runGame from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let [newNum1, newNum2] = [num1, num2];
  while (newNum1 !== 0 && newNum2 !== 0) {
    if (newNum1 > newNum2) newNum1 %= newNum2;
    else newNum2 %= newNum1;
  }
  return newNum1 + newNum2;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

const gcdGame = () => {
  runGame(gameRules, getQuestionAndAnswer);
};

export default gcdGame;
