import dayOne from './services/dayOne.js';

const run = async () => {
    try {  
        const answer = daySix.start();
        console.log('answer', answer);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

run();
