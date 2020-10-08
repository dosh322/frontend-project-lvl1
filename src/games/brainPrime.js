import readlineSync from 'readline-sync';

const isPrime = (num) => {
  const minPrimeNumber = 2;
  if (num < minPrimeNumber) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getCorrectAnswer = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const [question, correctAnswer] = getCorrectAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default primeGame;
