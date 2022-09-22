const prompt = require('prompt-sync')({sigint: true});

let userArray1 = JSON.parse(prompt("Please create an array: "));

if (userArray1.length >= 10)
{
    console.log(true);
}