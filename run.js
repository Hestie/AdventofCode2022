import app from './src/dayFour/app2.js'

const run = async () => {
  try {
    const answer = app.start()
    console.log('answer', answer)
  } catch (e) {
    console.log('Error:', e.stack)
  }
}

run()
