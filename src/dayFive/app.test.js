import app from './app.js';

const input = [
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2'
];

const crates = [
  ['[Z]', '[N]'],
  ['[M]', '[C]', '[D]'],
  ['[P]']
];

describe('dayFive', () => {
  it('should move containers as per instructions with CrateMover 9000', () => {
    const result = app.start(9000, input, crates);
    // expect(result).toEqual([
    //   ['[C]'],
    //   ['[M]'],
    //   ['[P]', '[D]', '[N]', '[Z]']
    // ]);
    expect(result).toBe('[C][M][Z]');
  });

  it('should move containers as per instructions with CrateMover 9001', () => {
    const result = app.start(9001, input, crates);
    expect(result).toBe('[M][C][D]');
  });

  it('should split file into array with instructions', () => {
    const result = app.parseFile();
    expect(result[0]).toEqual('move 3 from 2 to 1');
  });

  it('should split crates in 3 items in array', () => {
    const result = app.parseCrateFile();
    expect(result[0]).toEqual(['[H]', '[L]', '[R]', '[F]', '[B]', '[C]', '[J]', '[M]'].reverse());
    expect(result[1]).toEqual(['[D]', '[C]', '[Z]'].reverse());
  });

  it('should move crates according to instructions and 9000', () => {
    app.moveCrates(crates, 'move 1 from 2 to 1');
    expect(crates[0]).toEqual(['[Z]', '[N]', '[D]']);
    expect(crates[1]).toEqual(['[M]', '[C]']);

    app.moveCrates(crates, 'move 3 from 1 to 3');
    expect(crates[0]).toEqual([]);
    expect(crates[2]).toEqual(['[P]', '[D]', '[N]', '[Z]']);
  });

  it('should move crates according to instructions and 9001', () => {
    app.moveCrates(crates, 'move 1 from 2 to 1', 9001);
    expect(crates[0]).toEqual(['[Z]', '[N]', '[D]']);
    expect(crates[1]).toEqual(['[M]', '[C]']);

    app.moveCrates(crates, 'move 3 from 1 to 3', 9001);
    expect(crates[0]).toEqual([]);
    expect(crates[2]).toEqual(['[P]', '[Z]', '[N]', '[D]']);
  });
});
