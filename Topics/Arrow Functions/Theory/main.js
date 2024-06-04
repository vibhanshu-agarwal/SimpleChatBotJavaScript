// You can experiment here, it won’t be checked

// Method 2

// Declaring and initializing the Array at the same time.

// let marksOne = [45, 50, 44, 30, 29] // Only integers

// let marksTwo = ["forty-five", "fifty", 44, 30, "twenty-nine"] // Strings and integers


// Method 1

// Declaring and initializing the Array at the same time.

let marksOne = new Array(45, 50, 44, 30, 29); // Creates an array of marks with five elements

let marksTwo = new Array(5); // Creates an array of five undefined elements

let marksThree = new Array("45"); // Creates an array containing one string element, which is "45"

// let marks = new Array(5);

// marks[0] = "forty-five";
// marks[1] = "fifty";
// marks[2] = 44;
// marks[3] = 30;
// marks[4] = "twenty-nine";

let marks = [45, 50, 44, 30, 29];
marks[10] = 65;
console.log(marks);

const languages = ["C", "C++", "Python", "Java", "JavaScript"];

let len = languages.length; // 5

const colors = ['orange', 'blue', 'red', 'pink', 'magenta'];

const lastItem = colors[colors.length - 1]; // "magenta"

marks = [45, 50, 44, 30, 29];

Array.isArray(marks); // true

marksOne = "45";

Array.isArray(marksOne); // false