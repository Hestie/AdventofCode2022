import fileReader from '../fileReader.js'

const start = (input) => {
  const parsedInput = input || parseFile()
  const result = parsedInput.map(element => {
    const duplicate = findDuplicate(element)
    return mapPriority(duplicate)
  })
  return result.reduce((score, item) => score + item, 0)
}

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayThree')
  const array = result.split('\n')
  return array
}

const findDuplicate = (item) => {
  const middle = item.length / 2
  const one = item.substr(0, middle)
  const two = item.substr(middle, item.length)
  let duplicate
  for (let i in two) {
    duplicate = one.includes(two[i]) ? two[i] : duplicate
    i++
  }
  return duplicate
}

const mapPriority = (value) => {
  if (value === value.toUpperCase()) {
    return value.charCodeAt(0) - 38
  }
  return value.charCodeAt(0) - 96
}

export default {
  start,
  parseFile,
  findDuplicate,
  mapPriority
}
