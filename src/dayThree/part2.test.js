import app from './part2.js'

const parsedInput = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw'
]

describe('dayThree', () => {
  it('should split file into array for input', () => {
    const result = app.parseFile()
    expect(result[0]).toEqual(
      'gvNbShZZgQfWdQhdPQmggLTFLwmwjFqjVVgM'
    )
  })

  it('should return sum of priority values for duplicates', () => {
    const result = app.start(parsedInput)
    expect(result).toEqual(70)
  })

  it('should find duplicate item in 3 rucksaks', () => {
    const result = app.findDuplicate('vJrwpWtwJgWrhcsFMMfFFhFp', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', 'PmmdzqPrVvPwwTWBwg')
    expect(result).toEqual('r')
  })

})
