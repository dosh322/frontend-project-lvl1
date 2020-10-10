import promptly from 'promptly';

const askName = async () => {
  const name = await promptly.prompt('May I have your name? ');
  return name;
};

const askAnswer = async () => {
  const answer = await promptly.prompt('Your answer: ');
  return answer;
};

const runGame = async (gameRules, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = await askName();
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const [question, correctAnswer] = getAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const answer = await askAnswer(); // eslint no-await-in-loop disabled this line
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
