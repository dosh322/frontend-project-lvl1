import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const operators = ['+', '-', '*'];

const getCorrectAnswer = (num1, num2, operator) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log('error');
  }

  return correctAnswer.toString();
};

const getParams = () => {
  const operator = operators[getRandomInt(operators.length)];
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2, operator);
  return [question, correctAnswer];
};

const calcGame = () => {
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

export default calcGame;
