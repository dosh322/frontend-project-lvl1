import readlineSync from 'readline-sync';

const runGame = (gameRules, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const [question, correctAnswer] = getAnswerAndQuestion();
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

export default runGame;
