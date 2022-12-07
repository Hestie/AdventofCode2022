import fileReader from '../fileReader.js'

const start = (input) => {
  const numbers = input || parseFile()
  const sums = sumAmounts(numbers)
  return Math.max(...sums)
}

const startPartTwo = (input) => {
  const numbers = input || parseFile()
  const sums = sumAmounts(numbers)
  const topThree = getTopThree(sums)
  return topThree.reduce((score, item) => score + item, 0)
}

const getTopThree = (sums) => {
  const loopTimes = 3
  const topThree = []
  for (let i = 0; i < loopTimes; i++) {
    const top = Math.max(...sums)
    topThree.push(top)
    sums.splice(sums.indexOf(top), 1)
  }
  return topThree
}

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayOne')
  const array = result.split('\n\n')
  const splitArray = array.map(item => item.split('\n'))
  return splitArray
}

const sumAmounts = (input) => {
  const sum = input.map(item => {
    const list = item.reduce((result, el) => {
      const number = parseInt(el, 10)
      return result + number
    }, 0)
    return list
  })
  return sum
}

export default {
  start,
  parseFile,
  sumAmounts,
  startPartTwo
}
