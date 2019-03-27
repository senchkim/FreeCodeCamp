"use strict";

const readline = require(`readline`);
const colors = require(`colors`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: colors.cyan(`Enter only the word >> `)
});

rl.prompt();


const getPalindrome = (str) => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, ``);
  const reverseStr = lowRegStr.split(``).reverse().join(``);
  return reverseStr === lowRegStr;
};

rl.on(`line`, (line) => {
  rl.prompt();
  if (getPalindrome(line)) {
    console.log(colors.green(`'${line}' yes it's Palindrome!`));
    process.exit(0);
  } else {
    console.log(colors.red(`'${line}' Sorry( it's not Palindrome!`));
    process.exit(0);
  }
});
