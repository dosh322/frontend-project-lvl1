import runGame from '../index.js';
import getRandomInt from '../random.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const minPrimeNumber = 2;
  if (num < minPrimeNumber) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default primeGame;
