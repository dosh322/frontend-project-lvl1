import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getGcd = (num1, num2) => {
  let newNum1 = num1;
  let newNum2 = num2;
  if (newNum1 === 0 || newNum2 === 0) return 0;
  while (newNum1 !== 0 && newNum2 !== 0) {
    if (newNum1 > newNum2) {
      newNum1 %= newNum2;
    } else newNum2 %= newNum1;
  }
  return (newNum1 + newNum2).toString();
};

const getParams = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return [question, correctAnswer];
};

const GcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const [question, correctAnswer] = getParams();
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

export default GcdGame;
