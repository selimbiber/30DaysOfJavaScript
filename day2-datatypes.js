/* Day 1: Exercises 
Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/02_Day_Data_types/02_day_data_types.md
*/

// primitive data types:
console.log(typeof "Selim"); // -> string (Tek tırnak, çift tırnak veya ters tırnak(backtick) arasında yer alan, bir veya daha fazla karakterden oluşan metinsel değerlerdir.(Her tür karakterleri içerisinde barındırabilir.)
console.log(typeof 5.3); // -> number (tam sayılar: ...-3,-2,-1,0,1,2,3.../ondalıklı sayılar: -5.3, 0.1)
console.log(typeof true); // -> boolean (Boolean veri türü, yalnızca True(doğru) veya False(yanlış) bir değer alır-gönderir.)
console.log(typeof null); // -> object (JavaScript'te 'null' boş bir değer anlamına gelir.)
console.log(typeof undefined); // undefined (JavaScript'te, bir değişkene bir değer atamaz isek, değeri undefined olarak alır. Buna ek olarak, bir fonksiyon hiçbir şey döndürmüyorsa, döndereceği tanım 'undefined' tır.)
// typeof operatörü ile bir verinin türünü öğrenebiliriz.

// JavaScript'teki ilkel olmayan veri türleri (non-primitive data types) şunları içerir:

// Objects ( Nesneler )
// Arrays ( Diziler )

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true ( Burada iki değişkende 3 e eşit olduğu için birbirine eşit olduğu sonucu çıkıyor )

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false  ( Burada iki değişkende farklı olduğu ve eşitlenemedikleri için false yani 0 değeri dönüyor )

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff)  //false  ( Yukarıdaki örnek gibi eeşit olmadıkları için false yani 0 değeri dönüyor )

// JavaScript ilkel veri türleri(Primitives data types) şunları içerir:

// Long Literal Strings

// Escape Sequences in Strings

// Template Literals (Template Strings)

// Strings Methods (Everyting in JavaScript is an object.)

// Checking Data Types (typeof)

// Changing Data Type (Casting)

// Exercises: Level 1

// Exercises: Level 2

// Exercises: Level 3