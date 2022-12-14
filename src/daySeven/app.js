import sortBy from 'lodash/sortBy.js';
import fileReader from '../fileReader.js';

const start = (input) => {
  const array = input || parseFile();
  const directories = mapToDirectory(array);
  const total = calculateTotalSize(directories);
  return sumTotal(total);
};

const startPart2 = (input) => {
  const array = input || parseFile();
  const directories = mapToDirectory(array);
  const directoriesTotal = calculateTotalSize(directories);
  const totalUsed = directoriesTotal.root.totalSize;
  const unUsed = 70000000 - totalUsed;
  const deleteSpace = 30000000 - unUsed;

  return findDirectoryToDelete(directoriesTotal, deleteSpace);
};

const parseFile = () => {
  const result = fileReader.readTextFile('input/daySeven');
  return result.split('\n');
};

const mapToDirectory = (array) => {
  const directory = {};
  const folders = ['root'];
  let parentKey;
  let folderName;
  let folderKey;
  array.forEach((command) => {
    const commandParts = command.split(' ');
    const size = parseInt(commandParts[0], 10);
    switch (true) {
      case command === '$ cd /':
        parentKey = undefined;
        folderName = 'root';
        folderKey = 'root';
        directory[folderKey] = { folderName, size: 0 };
        break;
      case command === '$ cd ..':
        // eslint-disable-next-line no-case-declarations
        const folderIndex = folders.indexOf(folderKey);
        folderKey = folders[(folderIndex - 1)];
        parentKey = folders[(folderIndex - 2)];
        folders.splice(folderIndex, 1);
        break;
      case command.substr(0, 4) === '$ cd':
        parentKey = folderKey;
        folderName = commandParts[2];
        folderKey = `${folderName}_${parentKey}`;
        folders.push(folderKey);
        if (!directory[folderKey]) {
          directory[folderKey] = { size: 0, parentKey, folderName };
        }
        break;
      case !Number.isNaN(size):
        directory[folderKey].size += size;
        break;
      default:
        break;
    }
  });
  return directory;
};

const calculateTotalSize = (directories) => {
  const keys = Object.keys(directories);
  keys.forEach((key) => {
    const object = directories[key];
    directories[key].totalSize = directories[key].totalSize || 0;
    directories[key].totalSize += object.size;
    let parentKey = object.parentKey;
    while (parentKey) {
      directories[parentKey].totalSize += object.size;
      parentKey = directories[parentKey].parentKey;
    }
  });
  return directories;
};

const sumTotal = (directories) => {
  let total = 0;
  const keys = Object.keys(directories);
  keys.forEach((key) => {
    if (directories[key].totalSize <= 100000) {
      total += directories[key].totalSize;
    }
  });
  return total;
};

const findDirectoryToDelete = (directories, deleteSpace) => {
  const canDelete = [];
  const keys = Object.keys(directories);
  keys.forEach((key) => {
    if (directories[key].totalSize >= deleteSpace) {
      canDelete.push(directories[key]);
    }
  });
  return sortBy(canDelete, ['totalSize']);
};

export default {
  start,
  parseFile,
  mapToDirectory,
  calculateTotalSize,
  startPart2
};
