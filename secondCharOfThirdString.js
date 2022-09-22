const prompt = require('prompt-sync')({sigint: true});

let userArray1 = JSON.parse(prompt("Please create an array: "));

console.log(userArray1[2][1]);
