import fileReader from '../fileReader.js'

const start = (input) => {
  const parsedInput = input || parseFile()
  const result = parsedInput.map(element => {
    return playGame(element)
  })
  return result.reduce((score, item) => score + item, 0)
}

const parseFile = () => {
  const result = fileReader.readTextFile('input/dayTwo')
  const array = result.split('\n')
  return array
}

const playGame = (data) => {
  // determine who wins?
  const game = data.split(' ')
  const them = game[0]
  const me = game[1]
  const mappedGame = `${shapeMatch[them]}, ${shapeMatch[me]}`
  const result = gameResult(mappedGame)
  const score = resultScore[result]

  // calculate my score
  const bonus = shapeScore[me]
  return score + bonus
}

const shapeScore = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3 // Scissor
}

const shapeMatch = {
  A: 'rock',
  X: 'rock',
  B: 'paper',
  Y: 'paper',
  C: 'scissor',
  Z: 'scissor'
}

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock
const gameResult = (game) => {
  const map = new Map([
    ['scissor, rock', 'win'],
    ['paper, scissor', 'win'],
    ['rock, paper', 'win'],
    ['rock, scissor', 'lost'],
    ['scissor, paper', 'lost'],
    ['paper, rock', 'lost']
  ])
  return map.get(game) ?? 'draw'
}

const resultScore = {
  win: 6,
  draw: 3,
  lost: 0
}

export default {
  start,
  parseFile,
  playGame
}
