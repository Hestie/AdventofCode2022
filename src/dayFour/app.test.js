import app from './app.js';

const input = [
  ['2-4', '6-8'],
  ['2-3', '4-5'],
  ['5-7', '7-9'],
  ['2-8', '3-7'],
  ['6-6', '4-6'],
  ['2-6', '4-8']
];

describe('dayFour', () => {
  it('should count two fully contain pairs', () => {
    const result = app.start(input);
    expect(result).toEqual(2);
  });

  it('should split file into array with pairs', () => {
    const result = app.parseFile();
    expect(result[0]).toEqual([
      '7-50', '8-33'
    ]);
  });

  it('should return 1s', () => {
    const result = app.fullyContaints(['2-8', '3-7']);
    expect(result).toEqual(1);
  });

  it('should return 0', () => {
    const result = app.fullyContaints(['5-7', '7-9']);
    expect(result).toEqual(0);
  });

  it('should return 1', () => {
    const result = app.fullyContaints(['7-50', '8-33']);
    expect(result).toEqual(1);
  });

  it('should return 1', () => {
    const result = app.fullyContaints(['28-39', '8-41']);
    expect(result).toEqual(1);
  });
});
