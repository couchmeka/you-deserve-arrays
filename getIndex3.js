const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Please make an array: "));

let itemThree = userArray[3];
console.log(itemThree);