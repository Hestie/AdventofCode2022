
import fs from 'fs';
import neatCsv from 'neat-csv';

const readTextFile = (fileName) => {
    var data = fs.readFileSync(`${fileName}.txt`, 'utf8');
    return data.toString();
}

const parseCsvFile = async (fileName) => {
    var data = fs.readFileSync(`${fileName}.csv`, 'utf8');
    const object = await neatCsv(data);
    return object;
}

export default {
    readTextFile,
    parseCsvFile
}