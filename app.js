import app from './src/dayTwo/app.js'

const run = async () => {
  try {
    const answer = app.start()
    console.log('answer', answer)
  } catch (e) {
    console.log('Error:', e.stack)
  }
}

run()
