import runGame from '../index.js';
import getRandomInt from '../random.js';

const gameRule = 'What number is missing in the progression?';

const createProgression = (firstNum, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = getRandomInt(5, 11); // from 5 to 11 (11 not included)
  const firstNum = getRandomInt(0, 100);
  const step = getRandomInt(1, 6);
  const progression = createProgression(firstNum, step, progressionLength);
  const hiddenIndex = getRandomInt(0, progression.length);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default progressionGame;
