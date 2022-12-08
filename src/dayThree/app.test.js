import app from './part2.js'

const parsedInput = ['vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw']

describe('dayThree', () => {
  it('should split file into array for input', () => {
    const result = app.parseFile()
    expect(result[0]).toEqual(
      'gvNbShZZgQfWdQhdPQmggLTFLwmwjFqjVVgM'
    )
  })

  it('should return sum of priority values for duplicates', () => {
    const result = app.start(parsedInput)
    expect(result).toEqual(157)
  })

  it('should find duplicate item in compartments', () => {
    const result = app.findDuplicate('vJrwpWtwJgWrhcsFMMfFFhFp')
    expect(result).toEqual('p')
  })

  it('should find duplicate item in compartments for another value', () => {
    const result = app.findDuplicate('PmmdzqPrVvPwwTWBwg')
    expect(result).toEqual('P')
  })

  it('should return 1 for lower case a', () => {
    const result = app.mapPriority('a')
    expect(result).toEqual(1)
  })

  it('should return 26 for lower case z', () => {
    const result = app.mapPriority('z')
    expect(result).toEqual(26)
  })

  it('should return 27 for upper case A', () => {
    const result = app.mapPriority('A')
    expect(result).toEqual(27)
  })

  it('should return 52 for upper case Z', () => {
    const result = app.mapPriority('Z')
    expect(result).toEqual(52)
  })

})
