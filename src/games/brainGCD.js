import runGame from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let [newNum1, newNum2] = [num1, num2];
  if (newNum1 === 0 || newNum2 === 0) return 0;
  while (newNum1 !== 0 && newNum2 !== 0) {
    if (newNum1 > newNum2) {
      newNum1 %= newNum2;
    } else newNum2 %= newNum1;
  }
  return (newNum1 + newNum2).toString();
};

const getAnswerAndQuestion = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, correctAnswer];
};

const gcdGame = () => {
  runGame(gameRules, getAnswerAndQuestion);
};

export default gcdGame;
