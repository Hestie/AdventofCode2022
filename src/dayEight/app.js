import sortBy from 'lodash/sortBy.js';
import fileReader from '../fileReader.js';

const start = (input) => {
  const array = input || parseFile();
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const r = isVisible(i, j, array);
      result.push(r);
    }
  }
  return result.reduce((score, item) => score + item, 0);
};

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayEight');
  const split = result.split('\n');
  return split.map(el => el.split('').map(x => parseInt(x)));
};

const isVisible = (rowIndex, colIndex, array) => {
  const treeValue = array[rowIndex][colIndex];
  const up = getTreesUpFrom(array, colIndex, rowIndex);
  const down = getTreesDownFrom(array, colIndex, rowIndex);
  const left = getTreesToTheLeft(array, rowIndex, colIndex);
  const right = getTreesToTheRight(array, rowIndex, colIndex);
  if (tallerThanOtherTrees(treeValue, up)) return 1;
  if (tallerThanOtherTrees(treeValue, down)) return 1;
  if (tallerThanOtherTrees(treeValue, left)) return 1;
  if (tallerThanOtherTrees(treeValue, right)) return 1;
  return 0;
};

const tallerThanOtherTrees = (treeValue, otherTrees) => {
  const compare = otherTrees.map(tree => {
    return treeValue > tree;
  });
  return compare.filter(el => el === false).length === 0;
};

const getTreesToTheLeft = (array, rowIndex, colIndex) => {
  const trees = [];
  for (let i = 0; i < colIndex; i++) {
    trees.push(array[rowIndex][i]);
  }
  return trees;
};

const getTreesToTheRight = (array, rowIndex, colIndex) => {
  const trees = [];
  for (let i = (colIndex + 1); i < array[0].length; i++) {
    trees.push(array[rowIndex][i]);
  }
  return trees;
};

const getTreesDownFrom = (array, colIndex, rowIndex) => {
  const trees = [];
  for (let i = (rowIndex + 1); i < array.length; i++) {
    trees.push(array[i][colIndex]);
  }
  return trees;
};

const getTreesUpFrom = (array, colIndex, rowIndex) => {
  const trees = [];
  for (let i = 0; i < rowIndex; i++) {
    trees.push(array[i][colIndex]);
  }
  return trees;
};

// part 2
const startPart2 = (input) => {
  const array = input || parseFile();
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const r = scenicScore(i, j, array);
      result.push(r);
    }
  }
  // find highest score in array
  return sortBy(result).pop();
};

const scenicScore = (rowIndex, colIndex, array) => {
  const treeValue = array[rowIndex][colIndex];
  const list = ['up', 'down', 'left', 'right'];
  const result = list.map(key => {
    let otherTrees = [];
    switch (key) {
      case 'up':
        otherTrees = getTreesUpFrom(array, colIndex, rowIndex).reverse();
        break;
      case 'down':
        otherTrees = getTreesDownFrom(array, colIndex, rowIndex);
        break;
      case 'left':
        otherTrees = getTreesToTheLeft(array, rowIndex, colIndex).reverse();
        break;
      case 'right':
        otherTrees = getTreesToTheRight(array, rowIndex, colIndex);
        break;
      default:
        break;
    }
    return calculateScenicScore(treeValue, otherTrees);
  });
  return result.reduce((score, item) => score * item, 1);
};

const calculateScenicScore = (treeValue, otherTrees) => {
  const compare = otherTrees.map(tree => {
    return treeValue > tree ? 1 : 0;
  });

  let score = 0;
  for (let i = 0; i < compare.length; i++) {
    score++;
    if (compare[i] === 0) break;
  }
  return score;
};

export default {
  start,
  parseFile,
  isVisible,
  getTreesToTheLeft,
  getTreesToTheRight,
  getTreesDownFrom,
  getTreesUpFrom,
  calculateScenicScore,
  scenicScore,
  startPart2
};
