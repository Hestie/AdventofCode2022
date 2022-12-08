import app from './src/dayThree/part2.js'

const run = async () => {
  try {
    const answer = app.start()
    console.log('answer', answer)
  } catch (e) {
    console.log('Error:', e.stack)
  }
}

run()
