import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswerAndQuestion = () => {
  const question = getRandomInt(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => {
  runGame(gameRules, getAnswerAndQuestion);
};

export default evenGame;
