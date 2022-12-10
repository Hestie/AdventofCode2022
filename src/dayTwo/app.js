import fileReader from '../fileReader.js';

const start = (input) => {
  const parsedInput = input || parseFile();
  const result = parsedInput.map(element => {
    return playGame(element);
  });
  return result.reduce((score, item) => score + item, 0);
};

const startPartTwo = (input) => {
  const parsedInput = input || parseFile();
  const result = parsedInput.map(element => {
    return playGamePart2(element);
  });
  return result.reduce((score, item) => score + item, 0);
};

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayTwo');
  const array = result.split('\n');
  return array;
};

const playGame = (data) => {
  // determine who wins?
  const game = data.split(' ');
  const them = game[0];
  const me = game[1];
  const mappedGame = `${shapeMatch[them]}, ${shapeMatch[me]}`;
  const result = gameResult(mappedGame);
  const score = resultScore[result];

  // calculate my score
  const bonus = shapeScore[me];
  return score + bonus;
};

const playGamePart2 = (data) => {
  // determine who wins?
  const game = data.split(' ');
  const them = game[0];
  const resultKey = game[1];
  const result = resultMatch[resultKey];
  const mappedGame = `${shapeMatch[them]}, ${result}`;
  const shape = shapeResult(mappedGame);
  const score = resultScore[result];

  // calculate my score
  const bonus = shapePart2Score[shape];
  return score + bonus;
};

const shapeScore = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3 // Scissor
};

const shapePart2Score = {
  rock: 1, // Rock
  paper: 2, // Paper
  scissor: 3 // Scissor
};

const shapeMatch = {
  A: 'rock',
  X: 'rock',
  B: 'paper',
  Y: 'paper',
  C: 'scissor',
  Z: 'scissor'
};

const resultMatch = {
  X: 'lost',
  Y: 'draw',
  Z: 'win'
};

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock
const gameResult = (game) => {
  const map = new Map([
    ['scissor, rock', 'win'],
    ['paper, scissor', 'win'],
    ['rock, paper', 'win'],
    ['rock, scissor', 'lost'],
    ['scissor, paper', 'lost'],
    ['paper, rock', 'lost']
  ]);
  return map.get(game) ?? 'draw';
};
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock
const shapeResult = (game) => {
  const map = new Map([
    // them, result, me
    ['scissor, win', 'rock'],
    ['paper, win', 'scissor'],
    ['rock, win', 'paper'],
    ['rock, lost', 'scissor'],
    ['scissor, lost', 'paper'],
    ['paper, lost', 'rock']
  ]);
  const draw = game.split(', ');
  return map.get(game) ?? draw[0];
};

const resultScore = {
  win: 6,
  draw: 3,
  lost: 0
};

export default {
  start,
  parseFile,
  playGame,
  startPartTwo
};
