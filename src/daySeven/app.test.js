import app from './app.js';

const input = [
  '$ cd /',
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k'
];

describe('daySeven', () => {
  it('should split file into array with array of steps', () => {
    const result = app.parseFile();
    expect(result[0]).toEqual('$ cd /');
  });

  it('should return sum of folders with total size at most of 100000', () => {
    const result = app.start(input);
    expect(result).toBe(95437);
  });

  it('map input to directory with files and sizes', () => {
    const expected = {
      root: { size: 23352670, folderName: 'root' },
      a_root: { folderName: 'a', size: 94269, parentKey: 'root' },
      e_a: { folderName: 'e', size: 584, parentKey: 'a_root' },
      d_root: { folderName: 'd', size: 24933642, parentKey: 'root' }
    };
    const result = app.mapToDirectory(input);
    expect(result).toEqual(expected);
  });

  it('calculate total sizes', () => {
    const directories = {
      root: { size: 23352670, folderName: 'root' },
      a_root: { folderName: 'a', size: 94269, parentKey: 'root' },
      e_a: { folderName: 'e', size: 584, parentKey: 'a_root' },
      d_root: { folderName: 'd', size: 24933642, parentKey: 'root' }
    };
    const expected = {
      root: { size: 23352670, totalSize: 48381165, folderName: 'root' },
      a_root: { size: 94269, parentKey: 'root', totalSize: 94853, folderName: 'a' },
      e_a: { size: 584, parentKey: 'a_root', totalSize: 584, folderName: 'e' },
      d_root: { size: 24933642, parentKey: 'root', totalSize: 24933642, folderName: 'd' }
    };
    const result = app.calculateTotalSize(directories);
    expect(result).toEqual(expected);
  });
});
