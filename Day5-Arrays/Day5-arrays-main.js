/* Level 2 Exercises of Arrays */

//! 1. -> Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//? 2. -> First remove all the punctuations and change the string to array and count the number of words in the array

    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

    let removePuncs = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    console.log(removePuncs); // -> I love teaching and empowering people I teach HTML CSS JS React Python

    let stringToArray = removePuncs.split(' ');

    console.log(stringToArray); // -> (13) ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']
    console.log(stringToArray.length); // -> 13

//? 3. -> In the following shopping cart add, remove, edit items:

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    shoppingCart.push('Sugar'); // -> add Sugar
    console.log(shoppingCart); // -> (5) ['Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']

    shoppingCart.shift(); // -> remove Milk
    console.log(shoppingCart); // -> (4) ['Coffee', 'Tea', 'Honey', 'Sugar']

    shoppingCart[0] = 'Water'; // -> edit [0]
    console.log(shoppingCart); // -> (4) ['Water', 'Tea', 'Honey', 'Sugar']

//? 3.1. -> add 'Meat' in the beginning of your shopping cart if it has not been already added:

    shoppingCart.unshift('Meat');
    console.log(shoppingCart); // -> (5) ['Meat', 'Water', 'Tea', 'Honey', 'Sugar']

//? 3.2. -> add Sugar at the end of you shopping cart if it has not been already added:
/*
    shoppingCart.push('Sugar'); // -> add Sugar
    console.log(shoppingCart); // -> (5) ['Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']
*/

//? 3.3. -> remove 'Honey' if you are allergic to honey:

    shoppingCart.splice(shoppingCart.lastIndexOf('Honey'), 1);
    console.log(shoppingCart); // -> (4) ['Meat', 'Water', 'Tea', 'Sugar']

//? 3.4. -> modify Tea to 'Green Tea':

    shoppingCart[2] = 'Green Tea';
    console.log(shoppingCart); // -> (4) ['Meat', 'Water', 'Green Tea', 'Sugar']

//? 4. -> In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

    if( countries.indexOf('Ethiopia') ) {
        console.log('ETHIOPIA');
    } else {
        countries.push('Ethiopia');
    }
    console.log(countries); // -> ETHIOPIA / (11) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

//? 5. -> In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    if( webTechs.indexOf('Sass') ) {
        console.log('Sass is a CSS preprocess.');
    } else {
        webTechs.push('Sass')
        console.log(webTechs);
    } // output: Sass is a CSS preprocess.

//? 6. -> Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']

    let fullStack = frontEnd.concat(backEnd);
    console.log(fullStack) // -> (8) ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]