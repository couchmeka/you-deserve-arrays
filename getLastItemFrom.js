const prompt = require('prompt-sync')({sigint: true});

let userPrompt = JSON.parse(prompt("Please make an array: "));


console.log(userPrompt[userPrompt.length -1]); //logging the array from the prompts first item