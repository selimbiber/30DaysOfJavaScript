/* Day 1: Exercise 
Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/02_Day_Data_types/02_day_data_types.md
https://30dayjavascript.js.org/02-day/
https://tr.javascript.info/types
*/

// JavaScript ilkel veri türleri(Primitives data types) şunları içerir:

console.log(typeof "Selim"); /* -> string (Tek tırnak, çift tırnak veya ters tırnak(backtick) arasında yer alan, bir veya daha fazla karakterden oluşan metinsel değerlerdir.(Her tür karakterleri içerisinde barındırabilir.) */

console.log(typeof 5.3); // -> number (tam sayılar: ...-3,-2,-1,0,1,2,3.../ondalıklı sayılar: -5.3, 0.1)

console.log(typeof true); // -> boolean (Boolean veri türü, yalnızca True(doğru) veya False(yanlış) bir değer alır-gönderir.)

console.log(typeof null); // -> object (JavaScript'te 'null' boş bir değer anlamına gelir.) Aslında yanlıştır. Bu typeof fonksiyonunun bilinen bir hatasıdır. Eski versiyonlara uygunluk açısından bu şekliyle bırakılmıştır. Yoksa null bir obje değildir. Kendine has bir tiptir. Tekrar söylemek gerekirse bu JavaScript dilinin bir hatasıdır.

console.log(typeof undefined); // undefined (JavaScript'te, bir değişkene bir değer atamaz isek, değeri undefined olarak alır. Buna ek olarak, bir fonksiyon hiçbir şey döndürmüyorsa, döndereceği tanım 'undefined' tır.)

// İlkel son veri türü: Symbol - (Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değerdir)

/*  İlkel veri türleri değişmez (değiştirilemez) veri türleridir. İlkel bir veri türü oluşturulduktan sonra onu değiştiremeyiz. */

let word = 'JavaScript';
word[0] = 'C'; // -> String ifadeler ilkel veri türü olduğu için bir word değişkeninin değeri değişmedi.

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) // true ( Burada iki değişkende 3 e eşit olduğu için birbirine eşit olduğu sonucu çıkıyor )

let js = 'JavaScript'
let py = 'Python'

console.log(js == py) //false ( Burada iki değişkende farklı olduğu ve eşitlenemedikleri için false yani 0 değeri dönüyor )

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) //false ( Yukarıdaki örnek gibi eşit olmadıkları için false yani 0 değeri dönüyor )



// İlkel olmayan veri türlerinin değerini, oluşturulduktan sonra değiştirebiliriz.
// JavaScript'teki ilkel olmayan veri türleri (non-primitive data types) şunları içerir:


// Objects ( Nesneler )

// Arrays ( Diziler ) : Dizi değerleri dizin indekslerine ( dizinine ) göre referans alınır. JavaScript'te dizilerin indeksi sıfırdan başlar. Yani bir dizinin ilk elemanı sıfır indeksinde, ikinci elemanı bir indeksinde, üçüncü elemanı iki indeksinde bulunur.
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // -> nums dizinin 0. elemanı olan 1'i 10 ile değiştirildi.

// NOT: İlkel olmayan veri türleri değere göre karşılaştırılamaz. İlkel olmayan veri türleri aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler. Örnek:

let numbers = [1, 2, 3]

console.log(nums == numbers)  // -> false

let userOne = {
    isim: 'Selim',
    soyisim: 'Biber',
    sehir: 'Rize'
}
let userTwo = {
    isim: 'Selim',
    soyisim: 'Biber',
    sehir: 'Rize'
}
console.log(userOne == userTwo); // -> false

/* NOTLAR: 
    Temel kural, ilkel olmayan veri türlerini karşılaştıramıyoruz. 
    Dizileri (arrays), fonksiyonları (functions) veya nesneleri (objects) karşılaştırmayın. 
    "İlkel olmayan değerler, değer yerine referansla karşılaştırıldıkları için referans türleri olarak adlandırılır."
    "İki nesne, yalnızca aynı temel nesneye atıfta bulunuyorlarsa kesinlikle eşittir."
*/

numbers = nums;
console.log(numbers == nums); // -> numbers değişkeninin değeri nums değişkenine referans verdiği için "true" sonucunu konsola yazdırdı.

userOne = userTwo;
console.log(userOne == userTwo); // -> yine aynı şekilde yukardaki gibi userOne değişkeninin değeri userTwo değişkeninin değerini referans olarak aldığı için konsola "true" sonucu döndürüldü.

// Sayılar: Sayılar, tüm aritmetik işlemleri yapabilen tam sayılar ve ondalık değerlerdir.

// Sayı Veri Türlerini Bildirme:

let age = 23; // -> Yaş değeri zamanla değişen bir değer olduğu için let ile tanımlandı.
const bodyTemp = 37 // -> İnsan vücudun sabit olan ortalama sıcaklığı, sabit bir sayı olduğu için const ile oluşturuldu. 
console.log(age, bodyTemp);

// Matematik Nesnesi - Objesi ( Math Object ): JavaScript'te Math Objesi, sayılar ile çalışmamız için birçok yöntem sağlar.

const PI = Math.PI // Math objesi sayesinde PI sayısının değerini otomatik alındı.
console.log(PI) // -> 3.141592653589793

// En yakın sayıya yuvarlama:
// Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

console.log(Math.round(PI)) // -> 3
console.log(Math.round(9.91)) // -> Ondası 0.5 üstünde olduğu için 10 yapar.
console.log(Math.floor(PI)) // -> floor aşağı değere yuvarladığı için 3 yapar.
console.log(Math.ceil(PI)) // -> ceil tavan değere yuvarladığı için 4 yapar.
console.log(Math.min(-1, 0, 1)) // -> min en küçük değeri bulmaya yaradığı için -1 değerini verdi.
console.log(Math.max(-1, 0, 1)) // -> max en büyük değeri bulmaya yaradığı için 1 değerini verdi.

// Rastgele Sayı Üretme
const randomNum = Math.random() // -> 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randomNum); // -> 0.9346742091514257

const numb = Math.floor(Math.random() * 11) // -> 0 ile 10 arasında rastgele sayı oluşturur
console.log(numb);

//Mutlak değer
console.log(Math.abs(-10))  // 10

//Kare kök
console.log(Math.sqrt(100)) // 10

console.log(Math.sqrt(2))   // 1.4142135623730951

// Üs
console.log(Math.pow(3, 2)) // 9

console.log(Math.E) // -> Euler Formülü (2.718281828459045)

// Strings: Dizeler tek, çift ve ters tırnak arasındaki metinlerdir. Bir dize bildirmek için değişken adına, atama operatörüne, tek tırnak, çift tırnak veya ters tırnak içerisinde bir değere ihtiyacımız var.

let space = ' ' // boş alan string tek tırnaklı
let firstName = 'Selim' // tek tırnaklı string
let lastName = "Biber" // çift tırnaklı string
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.` // ters tırnaklı string (bu karakteri genellikle klavyenizdeki noktalı virgülü kullanarak yaparsınız. Benim klavyemde alt gr + noktalı virgül ve iki kere tıklanınca çıkıyor)

// String Birleştirme: İki veya daha fazla string'i birbirine bağlama işlemine birleştirme denir.

let fullName = firstName + space + lastName;
console.log(fullName); // -> Selim Biber

// Toplama Operatörünü Kullanarak Birleştirme

let city = "Rize";
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + city; // ES5 toplama operatörü ile değişkenleri birleştiriyor

console.log(personInfoOne) // -> Selim Biber. I am 23. I live in Rize

// Uzun Değişmez Stringler: String'in bir sonraki satırda devam edeceğini belirtmek için her satırın sonunda ters eğik çizgi karakterini (\) kullanabiliriz.

const paragraph = "My name is Selim Biber. I live in Türkiye, Rize.\
I am a student and i love to learn. I learn HTML5, CSS3, Bootstrap5, Git, JavaScript, jQuery and more.\
"
console.log(paragraph);

// String'lerdeki Kaçış Dizileri: JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. En yaygın kaçış karakterlerini görelim:

/*
    \n: yeni satır
    \t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
    \\: Ters eğik çizgi
    \': Tek Tırnak (')
    \": Çift Tırnak (")
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') //  Buradakı \n satır sonu anlamına gelir sonrası aşağı iner
console.log('Days\tTopics\tExercises') // Burada her kelimeden sonra bir tab (\t) tuşuna basılmış etkisi verir
console.log('Year 20\t23') // \t bir başka örnek
console.log('This is a backslash  symbol (\\)') // Ters eğik çizgi yazmak için \\ kullanılıyor
console.log('In every programming language it starts with \'Hello, World!\'') // Hello World'ü tek tırnak içine almak için \'Hello World\' kullanılıyor. Tek tırnakla açılan dizinin içinde başka bir tek tırnak kullanmak hata verir o yüzden bu şekilde bir kullanım gerekir.
console.log("In every programming language it starts with \"Hello, World!\"") // Hello World'ü çift tırnak içine almak için \"Hello World\" kullanılıyor. Çift tırnakla açılan dizinin içinde başka bir çift tırnak kullanmak hata verir o yüzden bu şekilde bir kullanım gerekir.
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2023') // Bu kısımdada alıntıları kullanmak için \ kullanımı gösterilmiş.

// Şablon Değişmezleri (Template Literal): Şablon string'leri oluşturmak için iki ters tırnak kullanıyoruz. Verileri bir şablon string'i içine ifade olarak ekleme yapabiliriz. Verileri eklemek için, ifadeyi $ (dolar) işareti ile başlayan bir küme parantezinin "{}" içine alırız.

//Syntax
let expression = `String literal text`
let literal = `String literal text ${expression}`

// Örnek-1

console.log(`The sum of 2 and 3 is 5`) // statik bir veri
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // verileri dinamik olarak ekleme

// Örnek-2

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${city}.` //ES6 - dize ekleme yöntemi
console.log(personInfoTwo);

// Bir string şablonu veya interpolasyon ( matematiksel bir terim ) yöntemi kullanarak, bir değer olabilecek ifadeler veya bazı işlemler ekleyebiliriz.(karşılaştırma, aritmetik işlemler, üçlü işlem)

let abc = 2;
let xyz = 3;
console.log(`${abc} is greater than ${xyz}: ${abc > xyz}`) // a b den büyüktür yazıyor ve  interpolasyon metodu bunun yanlış olduğunu söylecek -> 2 is greater than 3: false

// Multiline Strings with Template Literals

let learnCoding1 = `How to start learning web development?
- Learn HTML
- Learn CSS
- Learn JavaScript
Use freeCodeCamp to learn all the above and much, much more !
`

console.log(learnCoding1);

// Multiline Strings Using the + Operator in JavaScript

let learnCoding2 = 'How to start learning web development?' +
' - Learn HTML' +
' - Learn CSS' +
' - Learn JavaScript' +
' Use freeCodeCamp to learn all the above and much, much more!'

console.log(learnCoding2)

// Strings Methods (Everyting in JavaScript is an object.): Birçok string metodu bulunmaktadır, bunlar string'ler ile çalışmamıza yardımcı olurlar.

// length: String içerisindeki karakterlerin sayısını belirtir. Boşluklar dahildir.
let JS = 'JavaScript'
console.log(JS.length) // -> 10

// String'deki karakterlere erişim: String içerisinde bulunan her karaktere indeks numarasıyla erişebiliriz. Programlamada sayma 0 dan başlar. String'in ilk dizini 0, son dizini ise toplam uzunluğun -1'dir. ( Kısaca 10 karakter varsa sıralama 0-9 arasında yapılıyor. )
let firstLetter = JS[0];
console.log(firstLetter); // -> J
let fourthLetter = JS[4];
console.log(fourthLetter); // -> S
let lastIndex = JS.length - 1; 
console.log(lastIndex) // -> t

// toUpperCase(): bu metot string verisini büyük harflere dönüştürür.
let country = 'Turkiye'
console.log(country.toUpperCase()) // -> TURKIYE

// toLowerCase(): bu metot string verisini küçük harflere dönüştürür.
let string = 'JavaScript'
console.log(string.toLowerCase()) // -> javascript

// substr(): İki argüman alır, başlangıç indeksi ve silenecek karakter sayısı.
console.log(string.substr(4, 6)) // -> Script
console.log(country.substr(0, 4)) // -> Turk

// substring(): Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.
console.log(string.substring(4, 10)) // Script
console.log(country.substring(0, 4)) // Turk

// split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // İknci elementin solunda boşluk oluşuyor.  ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) // ', ' virgül ve boşluk bulunmakta bu yüzden elementleri virgülden ayırıp boşluksuz array oluşturuyor.

// trim(): String'in başında ve sonundaki boşlukları silmeye yarar.
let challenge = '   30 Days Of JavaScript   ';
console.log(challenge.trim());

// includes(): Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )
console.log(string.includes('Days')) // -> true
console.log(string.includes('days')) // -> false - büyük küçük harfe duyarlı birebir arama yapar!
console.log(string.includes('Script')) // -> true
console.log(string.includes('script')) // -> false
console.log(string.includes('java')) // -> false
console.log(string.includes('Java')) // -> true

// replace(): Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.
let plaka = 'Otuz Dört';
console.log(plaka.replace('Dört', 'Beş')); // -> Otuz Beş

// charAt(): Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır.
console.log(plaka.charAt(5)); // -> D

// charCodeAt(): String'teki vermiş olduğunuz index değerinin ASCII numarasını döndürür.
console.log(plaka.charCodeAt(5)); // -> D ASCII 68

// indexOf(): Bu metot belirtilen değerin indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
console.log(plaka.indexOf('z')); // -> 3
console.log(string.indexOf('Javas')) // -1

// lastIndexOf(): Bu metot belirtilen değerin son değer indeksini verir. Değer bulunamazsa -1 sonucunu döndürür. ( Birebir arama yapar örneğe bakın )
console.log(plaka.lastIndexOf('t')) // -> 8
console.log(string.lastIndexOf('a')) // -> 3

// concat(): Bu metot birleştirme işlemini sağlar, birden fazla değer alabilir
let newChallenge = '30';
console.log(newChallenge.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// startsWith: String'in belirtilen değer ile başlayıp başlamadığını kontrol eder. true yada false döndürür.
console.log( newChallenge.startsWith(3) ); // -> true
console.log( newChallenge.startsWith(0) ); // -> false

// endsWith: String'in belirtilen değer ile bitip bitmediğini kontrol eder. true yada false döndürür.
console.log( newChallenge.endsWith(0) ); // -> true
console.log( newChallenge.endsWith(3) ); // -> false

// search: Argüman olarak bir alt dize alır ve ilk eşleşmenin dizinini döndürür. Arama değeri bir dize veya normal ifade kalıbı olabilir.
let newString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log( newString.search('love'))  // 2
console.log(string.search(/javascript/gi))  // 7 buradaki gi açıklaması bir alt örnekte var

// match: Argüman olarak bir alt dize veya normal ifade kalıbı alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Normal bir ifade kalıbının nasıl göründüğünü görelim. / işareti ile başlar ve / işareti ile biter.
let javascript = 'love';
let patternOne = /love/ // koşulsuz
let patternTwo = /love/gi // g-bütün metinde ara, i - büyük küçük harf duyarsız
console.log(newString.match('love'));   // -> ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
let pattern = /love/gi
console.log(newString.match(pattern))   // -> ["love", "love", "love"]

// repeat(): bağımsız değişken olarak bir sayı alır ve stringi sayı kadar döndürür.
console.log(javascript.repeat(3)) // -> lovelovelove

// Veri Türlerini Kontrol Etme (Casting): Belirli bir değişkenin veri türünü kontrol etmek için typeof yöntemini kullanırız.
console.log(typeof 'Selim') // string
console.log(typeof firstName) // string
console.log(typeof 10)  // number
console.log(typeof 3.14)    // number
console.log(typeof true)    // boolean
console.log(typeof false)   // boolean
console.log(typeof NaN) // number
console.log(typeof job) // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)    // object

// Veri Türünü Değiştirme (Döküm): Döküm: Bir veri tipini başka bir veri tipine dönüştürme. Kullandıklarımız parseInt(), parseFloat(), Number(), + sign, str() Aritmetik işlemler yapmadan önce string sayıları önce integer yada float türüne dönüştürmeliyiz yoksa hata alırız.

// String to Int: String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır. Bir string numarası örneği: '10', '5', vb. Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:

/* 
    parseInt() -> String olarak tanımlanmış tamsayıları Integer veri tipine dönüştürmek için kullanılır.
    Number()
    Plus sign(+) // artı işareti demek
*/
let numara = '10'
let numInt = parseInt(numara)
console.log(numInt) // 10

let num1Int = Number(numara)
console.log(num1Int) // 10

let num2Int = +numara
console.log(num2Int) // 10

// String to Float: String içindeki ondalık numarayı sayıya çevirebiliriz. Tırnak içerisindeki ondalık sayı string ondalık sayıdır. Bir string ondalık numarası örneği: '9.81', '3.14', '1.44' vb. Aşağıdaki metotları kullanarak ondalık stringi sayıya dönüştürebiliriz:

/* 
    parseFloat()
    Number()
    Plus sign(+)
*/
let newNum = '9.19';
let numFloat = parseFloat(newNum)

console.log(numFloat) // 9.19

let numFloat2 = +newNum
console.log(numFloat2) // 9.19

// Float to Int: Ondalık sayıları tam sayılara çevirebiliriz. (Int) ( bu aşağıya yuvarlıyor ) Float'ı int'e dönüştürmek için aşağıdaki metodu kullanıyoruz:
// parseInt()


let newNum2 = 9.99;
let numInteger = parseInt(newNum2)
console.log(numInteger) // 9

/*
    Özet

Javascript dilinde 8 tane basit tip bulunmaktadır.

    number her türlü sayı için (integer veya floating point)

    bigint isteğe bağlı uzunluktaki tam sayılar içindir.

    string bir veya birden fazla karakter için

    boolean , true/false yani doğru-yanlış değerleri için.

    null bilinmeyen değerler için.

    undefined değer atanmamış değişkenler için.

    object daha karmaşık veri yapıları için.
    
    symbol eşsiz tanımlamalar için.

*/

/* What is the output of the script? https://tr.javascript.info/task/string-quotes

let name = "Ilya";

alert( `hello ${1}` ); -> ?

alert( `hello ${"name"}` ); -> ?

alert( `hello ${name}` ); -> ? */

// Solutions:
let name = "Ilya";

// alert( `hello ${1}` ); // -> hello 1

// alert( `hello ${"name"}` ); // -> hello name 

// alert( `hello ${name}` ); // -> hello Ilya

// type conversions: https://tr.javascript.info/type-conversions
/*

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9  " + 5 = " -9  5" // (3)
" -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6) 

The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.

The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.

The addition with a string appends the number 5 to the string.

The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null becomes 0 after the numeric conversion.

undefined becomes NaN after the numeric conversion.

*/

/* Day 2: Exercises: Level 1 */
// 1. -> Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challengeName = '30 Days Of JavaScript';
// 2. -> Print the string on the browser console using console.log()
console.log(challengeName);
// 3. -> Print the length of the string on the browser console using console.log()
console.log(challengeName.length);
// 4. -> Change all the string characters to capital letters using toUpperCase() method
console.log(challengeName.toUpperCase());
// 5. -> Change all the string characters to lowercase letters using toLowerCase() method
console.log(challengeName.toLowerCase());
// 6. -> Cut (slice) out the first word of the string using substr() or substring() method
console.log(challengeName.substr(0, 2));
// 7. -> Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challengeName.substring(2,21));
// 8. -> Check if the string contains a word Script using includes() method
console.log(challengeName.includes('Java')); // -> true
// 9. -> Split the string into an array using split() method
console.log(challengeName.split(',')); // -> ['30 Days Of JavaScript']
// 10. -> Split the string 30 Days Of JavaScript at the space using split() method
console.log(challengeName.split(''));
// 11. -> Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let techGiants = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(techGiants.split(', ')); // -> ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 12. -> Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challengeName.replace('JavaScript', 'Python')); // -> 30 Days Of Python
// 13. -> What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challengeName.charAt(15)); // -> S
// 14. -> What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challengeName.charCodeAt('J')); // -> 51
// 15. -> Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challengeName.indexOf('a')); // -> 4
// 16. -> Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challengeName.lastIndexOf('a')); // -> 14
// 17. -> Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // -> 31
// 18. -> Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because')); // -> 47
// 19. -> Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because')); // 31
// 20. -> Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '
let spaceJS = ' 30 Days Of JavaScript   ';
console.log(spaceJS.trim()); // -> 30 Days Of JavaScript
// 21. -> Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challengeName.startsWith('30')); // -> true
// 22. -> Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challengeName.endsWith('Script')); // true
// 23. -> Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challengeName.match('a')); // -> ['a', index: 4, input: '30 Days Of JavaScript', groups: undefined]
// 24. -> Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let month = '30 Days of';
let lang = 'JavaScript';
console.log(month.concat(lang)); // -> 30 Days ofJavaScript
// 25. -> Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challengeName.repeat(2)); // -> 30 Days Of JavaScript30 Days Of JavaScript

/* Day 2: Exercises: Level 2 */

// 1. -> Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."); // Çift tırnak içinde tek tırnaklı ifade olabilir!

// 2. -> Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.');

// 3. -> Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' == 10); // -> true
console.log('10' === 10); // -> false
console.log('10' === '10'); // -> true
console.log(10 === 10); // -> true

// 4. -> Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let pf = '9.8';
let equal10 = parseFloat(pf);

console.log(equal10) // 9.8
console.log(Math.ceil(equal10)) // 10
console.log(Math.ceil(equal10)===10) // -> true

// 5. -> Check if 'on' is found in both python and jargon
let pn = 'python';
let jn = 'jargon';
console.log(pn.includes('on')); // -> true
console.log(jn.includes('on')); // -> true

// 6. -> I hope this course is not full of jargon. Check if jargon is in the sentence.
let checkJargon = 'I hope this course is not full of jargon.'
console.log( checkJargon.match('jargon')); // -> ['jargon', index: 34, input: 'I hope this course is not full of jargon.', groups: undefined]

// 7. -> Generate a random number between 0 and 100 inclusively.
const zeroToHundred = Math.floor(Math.random() * 101)
console.log(zeroToHundred);

// 8. -> Generate a random number between 50 and 100 inclusively.
const fiftyToHundred = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(fiftyToHundred);

// 9. -> Generate a random number between 0 and 255 inclusively.
const zeroTo255 = Math.floor(Math.random() * 256)
console.log(zeroTo255);

// 10. -> Access the 'JavaScript' string characters using a random number.
let favLanguage = 'JavaScript';
console.log(favLanguage[0]) // -> J

// 11. -> Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
let escapeChar = '1 1 1 1 1\n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125'
console.log(escapeChar);
/* ->
1 1 1 1 1
2 1 2 4 8 
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

// 12. -> Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.substr(31, 24)) // -> because because because

/* Day 2: Exercises: Level 3 */