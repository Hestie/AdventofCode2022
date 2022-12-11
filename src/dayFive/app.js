import fileReader from '../fileReader.js';

// part 1 mover = 9000 and part 2 mover = 9001
const start = (mover, input, input2) => {
  const instructions = input || parseFile();
  const crates = input2 || parseCrateFile();
  instructions.forEach((el) => {
    moveCrates(crates, el, mover);
  });
  return getAnswer(crates);
};

const getAnswer = (crates) => {
  const answer = crates.reduce((result, el) => {
    result = result + el.splice(-1);
    return result;
  }, '');
  return answer;
};

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayFive');
  const array = result.split('\n');
  return array;
};

const parseCrateFile = () => {
  const result = fileReader.readTextFile('input/dayFiveCrates');
  const array = result.split('\n');
  const crates = [];
  for (let i = 0; i < 9; i++) {
    const crate = loadCrate(array, i);
    crates.push(crate);
  }
  return crates;
};

const loadCrate = (array, crateNumber) => {
  const start = crateNumber * 4;
  const crate = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i].substr(start, 3);
    if (item !== '   ') {
      crate.push(item);
    }
  }
  return crate.reverse();
};

const moveCrates = (crates, instruction, mover) => {
  const { move, from, to } = instructions(instruction);
  const take = crates[from - 1].splice(-1 * move);
  const stack = mover === 9001 ? take : take.reverse();
  stack.forEach((element) => {
    crates[to - 1].push(element);
  });
  return crates;
};

const instructions = (value) => {
  const [, move, , from, , to] = value.split(' ').map(Number);
  return { move, from, to };
};

export default {
  start,
  parseFile,
  parseCrateFile,
  moveCrates,
  getAnswer
};
