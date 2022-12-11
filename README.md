# AdventofCode2022

Install dependencies with yarn

The code for each day are in a folder in the src folder e.g. `src/dayOne`
- the app.js file contains the code
- and the app.test.js file the unit tests for that day
- the input are stored as a text file in the `input` folder

To execute unit test run: `yarn test`

To execute the code for a day update the import statement in the run.js file in the root of the project 
- e.g. `import app from './src/dayFive/app.js';`
- run: `yarn start`
- This will logs the answer to the terminal

Visual Code debugger can be used to debug unit test or to debug the code when running yarn start
