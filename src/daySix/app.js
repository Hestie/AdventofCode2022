import fileReader from '../fileReader.js';

// the start of a packet is indicated by a sequence of four characters that are all different

// it needs to report the number of characters from the beginning of
// the buffer to the end of the first such four-character marker

const start = (length = 4) => {
  const string = parseFile();
  return findMarker(string, length);
};

const parseFile = () => {
  const result = fileReader.readTextFile('input/daySix');
  return result;
};

const findMarker = (data, length = 4) => {
  let marker;
  for (let i = 0; i < data.length; i++) {
    const takeFour = data.substr(i, length);
    if (/(.).*\1/.test(takeFour) === false) {
      marker = i + length;
      break;
    }
  }
  return marker;
};

export default {
  start,
  findMarker
};
