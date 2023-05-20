/* Level 2 Exercises of Arrays */

//! 1. -> Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//? 2. -> First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let removePuncs = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

console.log(removePuncs); // -> I love teaching and empowering people I teach HTML CSS JS React Python

let stringToArray = removePuncs.split(' ');

console.log(stringToArray); // -> (13) ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']
console.log(stringToArray.length); // -> 13