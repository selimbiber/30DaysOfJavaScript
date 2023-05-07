/* Day 1: Exercises 
Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/02_Day_Data_types/02_day_data_types.md

https://tr.javascript.info/types
*/

// JavaScript ilkel veri türleri(Primitives data types) şunları içerir:

console.log(typeof "Selim"); /* -> string (Tek tırnak, çift tırnak veya ters tırnak(backtick) arasında yer alan, bir veya daha fazla karakterden oluşan metinsel değerlerdir.(Her tür karakterleri içerisinde barındırabilir.) */

console.log(typeof 5.3); // -> number (tam sayılar: ...-3,-2,-1,0,1,2,3.../ondalıklı sayılar: -5.3, 0.1)

console.log(typeof true); // -> boolean (Boolean veri türü, yalnızca True(doğru) veya False(yanlış) bir değer alır-gönderir.)

console.log(typeof null); // -> object (JavaScript'te 'null' boş bir değer anlamına gelir.)

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

// substr(): İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.
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

// Exercises: Level 1

// Exercises: Level 2

// Exercises: Level 3