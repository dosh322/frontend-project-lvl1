import runGame from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameRules = 'What number is missing in the progression?';

const createProgression = () => {
  const progressionLength = getRandomInt(5, 11); // from 5 to 11 (11 not included)
  const firstChar = getRandomInt(0, 100);
  const step = getRandomInt(1, 6); // step of progression
  const progression = [firstChar];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getAnswerAndQuestion = () => {
  const progression = createProgression();
  const hiddenIndex = getRandomInt(0, progression.length);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  runGame(gameRules, getAnswerAndQuestion);
};

export default progressionGame;
