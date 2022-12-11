import app from './app.js';

describe('daySix', () => {
  it('should split file into array with array of numbers', () => {
    const result = app.parseFile();
    expect(result[2]).toEqual('');
  });

  it('should return position of marker as 7', () => {
    const result = app.findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb');
    expect(result).toEqual(7);
  });

  it('should return position of marker as 5', () => {
    const result = app.findMarker('bvwbjplbgvbhsrlpgdmjqwftvncz');
    expect(result).toEqual(5);
  });

  it('should return position of marker as 6', () => {
    const result = app.findMarker('nppdvjthqldpwncqszvftbrmjlhg');
    expect(result).toEqual(6);
  });

  it('should return position of marker as 19', () => {
    const result = app.findMarker('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14);
    expect(result).toEqual(19);
  });
});
