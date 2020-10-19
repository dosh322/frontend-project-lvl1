import promptly from 'promptly';

const numberOfRounds = 3;

const runGame = async (gameRule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let round = 0; round < numberOfRounds; round += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: '); // eslint-disable-line no-await-in-loop
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
