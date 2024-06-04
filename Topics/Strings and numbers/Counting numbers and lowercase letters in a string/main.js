// Required library for handling console input/output
const readline = require('readline');

// Using the readline library to create interface for console input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This function will be called when the user provides input
rl.on('line', (input) => {

    // TODO: Write your code here
    // 1. You have to count the number of letters and numbers in the input string
    let letterCount = 0;
    let numberCount = 0;
    for (let i = 0; i < input.length; i++) {
        if (/[a-zA-Z]/.test(input[i])) {
            letterCount++;
        } else if (/[0-9]/.test(input[i])) {
            numberCount++;
        }
    }
    console.log(numberCount + ' ' + letterCount);
    // 2. You can use a loop to go through each character in the string
    // 3. You can check if a character is a letter or a number using conditions
    // 4. Print out the counts separated by a space

    // Finally, close the interface for clean-up 
    rl.close();
});
