// You can experiment here, it won’t be checked

// const input = require('sync-input');
// let name = input("Enter your name: ");
// let age = Number(input("Enter your age: "));
//
// console.log(`Hello ${name}, you are ${age} years old!`);

/*
Output:
Enter your name: John
Enter your age: 26
Hello John, you are 26 years old!
*/

console.log("15" === 15);         // false
console.log("15" == 15);          // true
console.log(true === 1);          // false
console.log(true == 1);           // true
console.log(null === undefined);  // false
console.log(null == undefined);   // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false

console.log(undefined == null);  // true
console.log(undefined == 0);     // false