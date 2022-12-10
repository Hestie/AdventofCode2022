import fileReader from '../fileReader.js'

const start = (input) => {
  const pairs = input || parseFile()
  const result = pairs.map(pair => fullyContaints(pair))
  return result.reduce((score, item) => score + item, 0)
}

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayFour')
  const array = result.split('\n')
  const splitArray = array.map(item => item.split(','))
  return splitArray
}

const fullyContaints = (pair) => {
  const low1 = parseInt(pair[0].split('-')[0], 10)
  const high1 = parseInt(pair[0].split('-')[1], 10)
  const low2 = parseInt(pair[1].split('-')[0], 10)
  const high2 = parseInt(pair[1].split('-')[1], 10)
  if (contains(low1, high1, low2, high2)) {
    return 1
  }
  if (contains(low2, high2, low1, high1)) {
    return 1
  }
  return 0
}

const contains = (low, high, value1, value2) => {
  if ((value1 >= low) && (value1 <= high) && (value2 >= low) && (value2 <= high)) {
    return true
  }
  return false
}

export default {
  start,
  parseFile,
  fullyContaints
}
