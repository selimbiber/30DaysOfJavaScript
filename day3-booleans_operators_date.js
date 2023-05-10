/* https://tr.javascript.info/operators and https://30dayjavascript.js.org/03-day/
Gün 3 - Konular:
    Boolean Değerleri
        Doğru Değerleri
        Yanlış Değerleri
    Tanımsız (Undefined)
    Boş (Null)
    Operatörler
        Atama Operatörleri
        Aritmetik Operatörleri
        Karşılaştırma Operatörleri
        Mantıksal Operatörler
        Arttırma Operatörü
        Azaltma Operatörü
        Koşul Operatörü
        Operatör Önceliği
    Window Metotları
        Window alert() metot
        Window prompt() metot
        Window confirm() metot
    Date Objesi
        Bir Zaman Objesi Oluşturma
        Tam Yılı Almak
        Ayı Almak
        Tarihi Almak
        Günü Almak
        Saati Almak
        Dakikayı Almak
        Saniyeyi Almak
        Zamanı Almak
    Gün 3: Egzersizleri
        Egzersiz: Seviye 1
        Egzersiz: Seviye 2
        Egzersiz: Seviye 3

*/

// Boolean Değerleri: Boolean ver türü iki değerden birini temsil eder :true yada false. Boolean değeri doğru veya yanlıştır. Herhangi bir karşılaştırma sonucu doğru veya yanlış olan bir boolean değeri döndürür.

let isLightOn = true // ışık açık doğru
let isRaining = false // yağıyor yanlış
let isHungry = false // aç yanlış
let isMarried = true // evli doğru
let truValue = 4 > 3 // true -- doğru
let falseValue = 4 < 3 // false -- yanlış

/* Doğru Değerleri (true)

    Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
    Boş bir dize ('') dışında tüm dizeler doğrudur
    Boolean değeri doğru
*/

/* Yanlış Değerleri (false)

    0
    0n
    null
    undefined
    NaN
    the boolean false
    '', "", ``, empty string
*/

// Tanımsız (Undefined): Bir değişken bildirirsek ve bir değer atamazsak, değer tanımsız olacaktır. Buna ek olarak, eğer bir fonksiyon değer döndürmüyorsa tanımsız olacaktır.
let firstName
console.log(firstName) // -> undenifed, çünkü henüz bir değer atanmamış.

// Boş (Null)
let empty = null
console.log(empty) // -> null(boş) , değer yok anlamına gelir

// **************************************** Operatörler ********************************

// Atama Operatörleri: JavaScript'te eşittir işareti bir atama operatörüdür. Değişken atamak için kullanılır.
let myName = 'Selim';
let city = 'Rize';

// Aritmetik Operatörleri: Aritmetik operatörler matematiksel operatörlerdir.
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // kalanı bulma (Kalan % operatörü yüzde ile alakası olmayan bir operatördür. a % b a’nın b’ye bölümünden kalan değeri verir.)
let powerOf = numOne ** numTwo // üstel sayı, Örnek: 4 Üssü 3 Kaçtır?

console.log(sum, diff, mult, div, remainder, powerOf) // -> 7, 1, 12, 1.33, 1, 64

const PI = 3.14 // -> PI sayısı
let radius = 100 // -> metre cinsinden uzunluk

// Bir dairenin alanını hesaplayalım
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) // -> Dairenin çapı: 314 m


const gravity = 9.81 // -> m/s2 cinsinden ( metre saniye cinsi )
let mass = 72 // -> kilogram cinsinden

// Bir cismin ağırlığını hesaplayalım
const weight = mass * gravity
console.log(weight) // -> 706.32 N(Newton)

const boilingPoint = 100 // -> oC cinsinden sıcaklık, suyun kaynama noktası
const bodyTemp = 37 // -> oC cinsinden vücut ısısı

// Dize enterpolasyonu kullanarak dizeyi sayılarla birleştirme
/*
 The boiling point of water is 100 oC. // Suyun kaynama noktası 100 oC'dir.
 Human body temperature is 37 oC.  // İnsan vücut sıcaklığı 37 oC'dir.
 The gravity of earth is 9.81 m/s2. // Dünyanın yerçekimi 9.81 m/s2'dir.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Karşılaştırma Operatörleri: Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değere eşit veya büyük olup olmadığını kontrol ederiz.

console.log(3 > 2) // -> true, çünkü 3 2 den büyüktür
console.log(3 >= 2) // -> true, çünkü 3 2 den büyüktür
console.log(3 < 2) // -> false,  çünkü 3 2 den büyüktür
console.log(2 < 3) // -> true, çünkü 2 3 den küçüktür
console.log(2 <= 3) // -> true, çünkü 2 3 den küçüktür
console.log(3 == 2) // -> false, çünkü 3 2 ye eşit değildir
console.log(3 != 2) // -> true, çünkü 3 2 ye eşit değildir
console.log(3 == '3') // -> true, sadece değeri karşılaştırıyor
console.log(3 === '3') // -> false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== '3') // -> true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3) // -> false, değeri karşılaştırıyor
console.log(3 !== 3) // -> false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false) // -> true, eşdeğer
console.log(0 === false) // -> false, tam olarak aynı değil
console.log(0 == '') // -> true, eşdeğer
console.log(0 == ' ') // -> true, eşdeğer
console.log(0 === '') // -> false, tam olarak aynı değil
console.log(1 == true) // -> true, eşdeğer
console.log(1 === true) // -> false, tam olarak aynı değil
console.log(undefined == null) // -> true
console.log(undefined === null) // -> false
console.log(NaN == NaN) // -> false, eşit değil
console.log(NaN === NaN) // -> false
console.log(typeof NaN) // -> number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Temel kural olarak, eğer bir değer == ile doğru değilse, === ile eşit olmayacaktır. === kullanmak, == kullanmaktan daha güvenlidir.

// Mantıksal Operatörler: Aşağıdaki semboller ortak mantıksal operatörlerdir: &&(ve işareti) , || (boru -veya-) ve !(olumsuzlama). && operatörü, yalnızca iki işlenen doğruysa doğru olur. || operatör, işlenenlerden herhangi birinin doğru olması durumunda gerçekleşir. ! operatör true - false ve false - true değerini olumsuzlar.

// &&   ve işareti operatörü örneği ( ampersand olarak anlandırılıyor)

const check1 = 4 > 3 && 10 > 5 // -> true && true -> true
const check2 = 4 > 3 && 10 < 5 // -> true && false -> false
const check3 = 4 < 3 && 10 < 5 // -> false && false -> false

// || boru veya operatörü örneği
const check4 = 4 > 3 || 10 > 5 // -> true  || true -> true
const check5 = 4 > 3 || 10 < 5 // -> true  || false -> true
const check6 = 4 < 3 || 10 < 5 // -> false || false -> false

/* ! olumsuzlama örnekleri */

let check7 = 4 > 3 // -> true
let check8 = !(4 > 3) // ->  false
let is_Light_On = true
let is_Light_Off = !is_Light_On // -> false
let is_Married = !false // -> true

// Arttırma Operatörü: JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. 

// Öncesi Artış için Örnek:
let count = 0
console.log(++count) // -> 1
console.log(count) // -> 1

// Sonrası Artış için Örnek:
let count1 = 0
console.log(count1++) // -> 0
console.log(count1) // -> 1

// Azaltma Operatörü: JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir.

// Öncesi Azaltma için Örnek:
let count2 = 0
console.log(--count2) // -> -1
console.log(count2) // -> -1

// Sonrası Azaltma için Örnek:
let count3 = 0
console.log(count3--) // -> 0
console.log(count3) // -> -1

// NOT: Artırma/Azaltma sadece değişkenlere uygulanabilirler. 5++ gibi bir kullanım hata verecektir.

// Koşul Operatörü (Ternary - Üçlü): Üçlü operatör bir koşul yazmaya izin verir. Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır.
let isRaining53 = true
isRaining53
  ? console.log('You need a rain coat.') // -> ? = true ise
  : console.log('No need for a rain coat.') // -> : = false ise
// -> console: You need a rain coat.

isRaining53 = false
isRaining53
  ? console.log('You need a rain coat.') // -> ? = true ise
  : console.log('No need for a rain coat.') // -> : = false ise
// -> console: No need for a rain coat.

let number = 5
number > 0
  ? console.log(`${number} is a positive number`) // -> ? = true ise
  : console.log(`${number} is a negative number`) // -> : = false ise
// -> console: 5 ise positive number

number = -5
number > 0
  ? console.log(`${number} is a positive number`) // -> ? = true ise
  : console.log(`${number} is a negative number`) // -> : = false ise
// -> console: -5 is a negative number

// Operatör Önceliği -> https://dorey.github.io/JavaScript-Equality-Table/ (Tabloyu ezberlemeye gerek yok sadece unary operatörlerin binary olanlara göre daha üstün olduğunu hatırlayalım yeter). Yani +elma + +portakal işleminde önce unary ile elma'nın değerini sayı yapar sonra portakal'ın değerini sayı yapar ve en sonunda toplar. Örnek:)
let elma = "2";
let portakal = "3";

// her iki değer de binary toplama işleminden önce sayıya çevrilmişlerdi
console.log((+elma + +portakal)); // -> 5

// Aynı işlemin daha uzun bir yöntemi:
console.log(( Number(elma) + Number(portakal) )); // -> 5

// Peki neden önce “unary” işlemi gerçekleşiyor da “binary” işlemi gerçekleşmiyor? Buna yüksek öncelik diyebiliriz.

/* 
    Eğer bir ifade birden fazla operatör içeriyorsa. Bu ifade çalıştırılırken tanımlı önceliklere göre çalıştırılır, bir başka ifade ile öncelik sırasına göre çalıştırılır. Okuldan hepinizin hatırlayacağı gibi çarpma işlemi toplamadan önce yapılır 1 + 2 * 2. Aslında öncelik tam olarakta budur. Çarpma işlemi toplama işleminden daha yüksek önceliğe sahiptir.

    Parantez, bu öncelikleri çiğner ve eğer bu önceliklerden memnun değilseniz bunları tekrar tanımlamanıza olanak verir. Örneğin (1 + 2 ) * 2

    JavaScript dilinde birçok operatör vardır. Her operatörün de bir önceliği. Yüksek öncelik sayısına sahip operatör önce çalışır. Eğer öncelik değerleri eşit ise soldan sağa doğru çalışır.

Öncelik 	Adı 	İşareti
… 	        … 	    …
16 	        unary   (toplama) +
16 	        unary   (çıkarma) -
14 	        çarpma 	    *
14 	        bölme 	    /
13 	        toplama 	+
13 	        çıkarma 	-
… 	        … 	        …
3 	        atama 	    =
… 	        … 	        …

Görüleceği üzere “unary toplama” 16 ile normal toplama işlemi(binary toplama) 13 ün öncesindedir.
*/

// ********************** Window Metotları *************************

// Window alert() metot: Belirtilen bir mesaj ve bir Tamam butonu ile bir uyarı kutusu görüntüler. Yerleşik bir yöntemdir ve argüman alır.

alert('Welcome to 30DaysOfJavaScript');
// NOT: Yıkıcı ve sinir bozucu olduğu için çok fazla uyarı kullanmayın, sadece test etmek için kullanın.

// Window prompt() metot: Pencere yöntemleri, tarayıcınızda giriş değerlerini almak için bir giriş içeren bir bilgi istemi kutusu görüntüler ve giriş verileri bir değişkende saklanabilir. prompt() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır.
prompt('required text', 'optional text')
let num = prompt('Enter number', 'number goes here')
console.log(num);

// Window confirm() metot: Tamam ve İptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler. Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. Pencere confirm() argüman olarak bir dize alır. Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak yanlış değeri verir.
const assent = confirm('Are you sure you like to delete?')
console.log(assent) // -> result will be true or false based on what you click on the dialog box
//*NOT: Bunların hepsi window yöntemleri değil, window yöntemlerine derinlemesine girmek için ayrı bir bölümümüz olacak.

// Date Objesi: Zaman önemli bir şeydir. Belirli bir faaliyetin veya olayın zamanını bilmek isteriz. JavaScript'te geçerli saat ve tarih, JavaScript Date Objesi kullanılarak oluşturulur. Date objesini kullanarak oluşturduğumuz nesne, tarih ve saat ile çalışmak için birçok yöntem sunar. Bir tarih nesnesi değerlerinden tarih ve saat bilgisi almak için kullandığımız yöntemler, bilgiyi sağladığı için get kelimesi ile başlamaktadır. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

// Bir Zaman Objesi Oluşturma: Bir kez zaman objesi oluşturduğumuzda zaman objesi, zaman hakkında bilgi sağlayacaktır. Bir zaman objesi oluşturalım:
const now = new Date()
console.log(now) // -> Thu May 11 2023 00:22:10 GMT+0300 (GMT+03:00)

// Tam Yılı Almak: Bir zaman objesinden tam yılı çıkaralım veya alalım.
console.log(now.getFullYear()) // -> 2023

// Ayı Almak: Bir zaman objesinden ayı çıkaralım veya alalım.
console.log(now.getMonth()) // -> Bunu yazdığınızda muhtemelen bulunduğunuz aydan bir önceki ayın sayısını alıcaktır çünkü aylar 0-11 arasında oluşuyor. Ocak 1 değil 0. ay oluyor aralıkta 11. ay oluyor.

// Tarihi Almak: Bir zaman objesinden ayın tarihini çıkaralım veya alalım.
console.log(now.getDate()) // yukardaki örnekte bulunan açıklamaya ek olarak geçen ayın gün sayısını verecektir.

// Günü Almak: Bir zaman objesinden haftanın gününü çıkaralım veya alalım.
console.log(now.getDay()) // Bugün Perşembe ve Haftanın 4. Günü Çünkü Programlamada Pazar 0. Gün, Pazartesi 1. ve Cumartesi 6. Gündür.

// Saati Almak: Bir zaman objesinden saatleri çıkaralım veya alalım.
console.log(now.getHours());

// Dakikayı Almak: Bir zaman objesinden dakikaları çıkaralım veya alalım.
console.log(now.getMinutes());

// Saniyeyi Almak: Bir zaman objesinden saniyeleri çıkaralım veya alalım.
console.log(now.getSeconds());

// Zamanı Almak: Bu metot 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir. Unix zamanını iki şekilde alabiliriz:

// 1. Yöntem getTime() Kullanımı:
console.log(now.getTime()) // -> çıktı farklı olacaktır, 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir. 

// 2. Yöntem Date.now() Kullanımı:
const allSeconds = Date.now()
console.log(allSeconds) // -> çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir. (1683754223195)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

// Yukarıdaki değerleri insan tarafından okunabilir bir zaman biçimine biçimlendirelim.
const present = new Date()
const year = present.getFullYear() // -> yılı döndürür
const month = present.getMonth() + 1 // -> ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = present.getDate() // -> günü döndürür (1 - 31)
const hours = present.getHours() // -> sayıyı döndürür (0 - 23)
const minutes = present.getMinutes() // -> sayıyı döndürür (0 -59)

console.log(`${date}//${month}//${year} ${hours}:${minutes}`) // -> 11/5/2023 0:33

/*************************** Day 3: Exercises ******************************************/

// Exercises: Level 1

// Exercises: Level 2

// Exercises: Level 3