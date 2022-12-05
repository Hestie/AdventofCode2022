import { result } from 'lodash';
import fileReader from './fileReader.js';

const start = (input) => {
    const numbers = input || parseFile();
    const sums = sumAmounts(numbers);
    console.log(sums);
    return Math.max(...sums);
}

const parseFile = () => {
    const result = fileReader.readTextFile('input/dayOne');
    const array = result.split('\n\n');
    const splitArray = array.map(item => item.split('\n'));
    return splitArray;
}

const sumAmounts = (input) => {
   const sum = input.map(item => {
       const list = item.reduce((result, el) =>{
           const number = parseInt(el, 10);
           return result + number;
       }, 0)
       return list;
   })
   return sum;
}

export default {
    start,
    parseFile,
    sumAmounts
}
