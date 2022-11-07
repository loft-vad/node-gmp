import { createReadStream, createWriteStream } from 'fs';
import csv from 'csvtojson';
import { pipeline } from 'stream';

const csvInputFilePath = "./csv/nodejs-hw1-ex1.csv";
const txtOutputFilePath = "./csv/nodejs-hw1-ex1.txt";

pipeline(
  createReadStream(csvInputFilePath),
  csv(),
  createWriteStream(txtOutputFilePath),
  (error) => {
    if (error) {
      console.error('Pipeline failed:', error);
    } else {
      console.log('Data saved');
    }
  }
);
