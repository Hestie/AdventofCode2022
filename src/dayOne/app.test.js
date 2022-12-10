import app from './app.js';

const input = [['1000', '2000', '3000'], ['4000'], ['5000', '6000'], ['7000', '8000', '9000'], ['10000']];

describe('dayOne', () => {
  it('should split file into array with array of numbers', () => {
    const result = app.parseFile();
    expect(result[2]).toEqual([
      '2612', '15638'
    ]);
  });

  it('should return highest total', () => {
    const result = app.sumAmounts(input);
    expect(result).toEqual([
      6000, 4000, 11000, 24000, 10000
    ]);
  });

  it('should return array of summed values', () => {
    const result = app.sumAmounts(input);
    expect(result).toEqual([
      6000, 4000, 11000, 24000, 10000
    ]);
  });

  it('should return highest value', () => {
    const result = app.start(input);
    expect(result).toEqual(24000);
  });

  it('should return top 3 values as a sum', () => {
    const result = app.startPartTwo(input);
    expect(result).toEqual(45000);
  });
});
