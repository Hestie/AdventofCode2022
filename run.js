import app from './src/daySeven/app.js';

const runPart1 = async () => {
  try {
    const answer = app.start();
    console.log('answer Part 1:', answer);
  } catch (e) {
    console.log('Error:', e.stack);
  }
};

const runPart2 = async () => {
  try {
    const answer = app.start();
    console.log('answer Part 2:', answer);
  } catch (e) {
    console.log('Error:', e.stack);
  }
};

runPart1();
runPart2();
