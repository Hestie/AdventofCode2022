import app from './src/dayFive/app.js';

const runPart1 = async () => {
  try {
    const answer = app.start(9000);
    console.log('answer Part 1:', answer);
  } catch (e) {
    console.log('Error:', e.stack);
  }
};

const runPart2 = async () => {
  try {
    const answer = app.start(9001);
    console.log('answer Part 2:', answer);
  } catch (e) {
    console.log('Error:', e.stack);
  }
};

runPart1();
runPart2();
