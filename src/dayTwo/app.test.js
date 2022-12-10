import app from './app.js';

const parsedInput = ['A Y', 'B X', 'C Z'];

describe('dayTwo', () => {
  it('should split file into array with input', () => {
    const result = app.parseFile();
    expect(result[0]).toEqual([
      'C Z'
    ]);
  });

  it('should apply rules to one game', () => {
    const result = app.playGame('A Y');
    expect(result).toEqual(8);
  });

  it('should return total of all games', () => {
    const result = app.start(parsedInput);
    expect(result).toEqual(15);
  });

  it('should return total of all games for new rules', () => {
    const result = app.startPartTwo(parsedInput);
    expect(result).toEqual(12);
  });
});
