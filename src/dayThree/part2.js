import fileReader from '../fileReader.js';

const start = (input) => {
  const parsedInput = input || parseFile();
  const priorities = [];
  let i = 0;
  while (i < parsedInput.length) {
    const item1 = parsedInput[i];
    i++;
    const item2 = parsedInput[i];
    i++;
    const item3 = parsedInput[i];
    i++;
    const badge = findDuplicate(item1, item2, item3);
    const number = mapPriority(badge);
    priorities.push(number);
  }
  return priorities.reduce((score, item) => score + item, 0);
};

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayThree');
  const array = result.split('\n');
  return array;
};

const findDuplicate = (item1, item2, item3) => {
  let duplicate;
  for (let i in item2) {
    duplicate = item1.includes(item2[i]) && item3.includes(item2[i]) ? item2[i] : duplicate;
    i++;
  }
  return duplicate;
};

const mapPriority = (value) => {
  if (value === value.toUpperCase()) {
    return value.charCodeAt(0) - 38;
  }
  return value.charCodeAt(0) - 96;
};

export default {
  start,
  parseFile,
  findDuplicate,
  mapPriority
};
