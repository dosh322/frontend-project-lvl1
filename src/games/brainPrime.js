import runGame from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  runGame(gameRules, getQuestionAndAnswer);
};

export default primeGame;
