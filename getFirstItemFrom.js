const prompt = require('prompt-sync')({sigint: true});

let userPrompt = JSON.parse(prompt('Please create an array: '));
//let userIndex = 0;
let userItem = userPrompt[0];//user index in array

console.log(userItem); //logging the array from the prompts first item