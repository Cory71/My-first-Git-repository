
//Import statements should be at the top 
import fs from 'fs'; //opening an app
import os from 'os';
import chalk from 'chalk';
import figlet from 'figlet';

fs.writeFileSync('message.txt', 'Hello from Node.js (ESM)!');
const data = fs.readFileSync('message.txt', 'utf8');
console.log('File contents:', data);
console.log('Operating System:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log(chalk.red("Hello Word"));
console.log(chalk.green.bold("Hello Word"));
console.log(chalk.blue.underline("Hello Word"));
figlet('Node Rocks!', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    return;
  }
  console.log(data);
});

/*
UTF-8 - encoding system that uses 8 binary digits to represent 
an alphabet
*/

