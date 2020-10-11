import runGame from '../index.js';
import getRandomInt from '../random.js';

const isEven = (num) => num % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => {
  runGame(gameRules, getQuestionAndAnswer);
};

export default evenGame;
