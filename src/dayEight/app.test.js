import app from './app.js';

const input = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390'
];

describe('daySeven', () => {
  it('should split file into array with array of steps', () => {
    const result = app.parseFile();
    expect(result[0][0]).toEqual(0);
    expect(result[1][1]).toEqual(1);
  });

  it('should return result of isVisible check for each tree', () => {
    const result = app.start(input);
    expect(result).toBe(21);
  });

  it('should return 1 if tree is visible', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.isVisible(1, 1, array);
    expect(result).toBe(1);
  });

  it('should return 1 if tree on edge', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.isVisible(0, 1, array);
    expect(result).toBe(1);
  });

  it('should return 0 if tree not visible', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.isVisible(1, 3, array);
    expect(result).toBe(0);
  });

  it('should return expected trees to the left of 5', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.getTreesToTheLeft(array, 1, 1);
    expect(result).toEqual([2]);
  });

  it('should return expected trees to the left of 1', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.getTreesToTheLeft(array, 1, 3);
    expect(result).toEqual([2, 5, 5]);
  });

  it('should return expected trees to the right of 5', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.getTreesToTheRight(array, 1, 1);
    expect(result).toEqual([5, 1, 2]);
  });

  it('should return empty array if no trees to the right', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.getTreesToTheRight(array, 1, 4);
    expect(result).toEqual([]);
  });

  it('should return expected trees down from 5 with index 1', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.getTreesDownFrom(array, 1, 1);
    expect(result).toEqual([5, 3, 5]);
  });

  it('should return expected trees up from 5 with index 1', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.getTreesUpFrom(array, 1, 1);
    expect(result).toEqual([0]);
  });
});

describe('daySeven Part 2', () => {
  it('should return result of isVisible check for each tree', () => {
    const result = app.startPart2(input);
    expect(result).toBe(8);
  });

  it('should multiply and return final score of 4', () => {
    const array = input.map(el => el.split('').map(x => parseInt(x)));
    const result = app.scenicScore(1, 2, array);
    expect(result).toBe(4);
  });

  it('should return 2 for scenic score', () => {
    const result = app.calculateScenicScore(5, [1, 2]);
    expect(result).toEqual(2);
  });

  it('should return 1 for scenic score', () => {
    const result = app.calculateScenicScore(5, [5, 2]);
    expect(result).toEqual(1);
  });

  it('should return 1 for scenic score', () => {
    const result = app.calculateScenicScore(5, [3]);
    expect(result).toEqual(1);
  });

  it('should return 2 for scenic score', () => {
    const result = app.calculateScenicScore(5, [3, 5, 3]);
    expect(result).toEqual(2);
  });

  it('should return 0 for scenic score if no trees', () => {
    const result = app.calculateScenicScore(5, []);
    expect(result).toEqual(0);
  });
});
