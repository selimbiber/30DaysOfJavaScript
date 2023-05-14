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
        Mantıksal Operatörler (https://tr.javascript.info/logical-operators)
        Arttırma Operatörü
        Azaltma Operatörü
        Koşul Operatörü
        Yerinde Değiştir Operatörü (Modify-in-place)
        Virgül Operatörü
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

// Karşılaştırma Operatörleri: Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değere eşit veya büyük olup olmadığını kontrol ederiz. Çoğu karşılaştırma operatörlerini matematik derslerinden biliyoruz.

console.log(3 > 2) // -> true, çünkü 3 2 den büyüktür
console.log(3 >= 2) // -> true, çünkü 3 2 den büyüktür
console.log(3 < 2) // -> false,  çünkü 3 2 den büyüktür
console.log(2 < 3) // -> true, çünkü 2 3 den küçüktür
console.log(2 <= 3) // -> true, çünkü 2 3 den küçüktür
console.log(3 == 2) // -> false, çünkü 3 2 ye eşit değildir (tek = işareti anlamına gelir)
console.log(3 != 2) // -> true, çünkü 3 2 ye eşit değildir (Eşit değildir matematikte şu şekilde gösteriliyor ≠, JavaScript’te ise eşittir öncesine ünlem işareti olarak kullanabiliriz)
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
//! >= > < <= gibi karşılaştırmaları null/undefined değeri alabilecek değişkenler ile yapmayın, yaparsanız bile kesinlikle çok dikkatli olun. Eğer bir değişken null/undefined gibi değerler alabiliyorsa bunları ayrıca kontrol etmeniz gerekli.

// Sıkı Eşitlik: Normal eşitlik kontorlü "=="'nün bir problemi vardır. 0 ile false'ı birbirinden ayıramamaktadır.
console.log( 0 == false ); // -> true
console.log( '' == false ); // -> true
/*
    Bunun nedeni farklı tiplerdeki verilerin karşılaştırılmaya çalışılmasıdır. Her iki taraf da sayısal değerlere çevrilir. Örneğin '' 0 olur, aynen false'ın 0 olması gibi.

    Peki false ile 0'ın birbirinden farklı olarak tanımlamak için ne yapılmalıdır?

    Sıkı eşitlik kontrolü === eşitliğin iki tarafını değiştirmeden kontrol eder.

    Diğer bir deyişle eğer a ve b iki farklı tip ise a === b doğrudan false ( yanlış ) döner.
*/
console.log( 0 === false ); // -> yanlış, çünkü tipler farklı.
// Ayrıca eşitsizliği belirtmek için yukarıdaki örneklerde de kullanıldığı üzere !== operatörü de bulunmaktadır.

//!Sıkı eşitlik için temel kural olarak, eğer bir değer == ile doğru değilse, === ile eşit olmayacaktır. === kullanmak, == kullanmaktan daha güvenlidir. Sıkı eşitlik kontrolü biraz daha uzun yazıma sahip olsa da hataya yer bırakmaz.

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// Karakter dizisi karşılaştırma: Hangi karakter dizisinin hangisinden büyük olduğunu bulmak için alfabe sırasına bakılır ve her harf sıra ile kontrol edilir. (Alfabede sonra gelen harf büyüktür)
console.log( 'Z' > 'A' ); // doğru ( true )
console.log( 'Kum' > 'Kan' ); // doğru ( true )
console.log( 'Bee' > 'Be' ); // doğru ( true )
/*
    İki karakter dizisini karşılaştıran algoritma aslında basit bir algoritmadır. Basamakları şu şekildedir.

    İki karakter dizisinin ilk karakterlerini karşılaştır.

    Eğer birincisi ikincisinden büyükse, birinci karakter dizisi büyüktür. İşlem bitti.

    Eğer karakterler eşit ise ikinci karakteri de aynı şekilde kontrol et. Eğer birincisi büyükse true döner.

    Karakter dizilerinin sonuna kadar test et.

    Eğer sonuna kadar tüm karakterler aynıysa uzun olanı daha büyüktür.

    Tam olarak sözlükteki sıralama gibi değildir, unicode bir sıralama var

    Algoritmada belirtilen karşılaştırma tam olarak sözlükteki veya telefon defterindeki gibi bir karşılaştırma vermez.

    Örneğin karakterin büyük veya küçük harf olması önemlidir. "A" ile "a" eşit değildir. Peki hangisi büyük? Aslında "a" daha büyüktür. Neden ? Çünkü küçük harf karakterler büyüklere göre (Unicode) index olarak daha sonradır.
*/
/***Karşılaştırma Operatörleri Özeti:

    Karşılaştırma operatörleri mantıksal değerler döndürür. (true/false) gibi

    Karakter dizileri harf harf alfabe sırasına göre kontrol edilir.

    Karşılaştırmalarda eğer farklı tipler kullanılıyorsa bu işlem yapılmadan sayıya çevirilir. ( Eğer sıkı eşittir kullanıyorsanız çevirilmez)

    null ve undefined eşittir. Bu değerler başka hiçbir değere eşit değildirler.

    Değeri null/undefined olabilen bir değişken ile > veya < karşılaştırması yaparken dikkat edin. Ayrı bir null/undefined kontrolü yapmakta fayda var.
*/
// Karşılaştırma Operatörleri Tasks: (https://tr.javascript.info/comparison)

5 > 4 // -> true
"apple" > "pineapple" // -> false (Alfabe dizilimine göre yanlış.)
"2" > "12" // -> true (Yine harf sırasına göre "2" "1"'den büyük)
undefined == null // -> true (null ve undefined birbirine eşittir.)
undefined === null // -> false (Eğer sıkı eşitlik kontrolü yaparsak farklı tipler her halükarda yanlış(false) döndürür)
null == "\n0\n" // -> false (null ve undefined sadece birbirine eşittir!)
null === +"\n0\n" // -> Sıkı eşitlik kontrolü yaparsak farklı tipler yanlış(false) döndürür.

// Mantıksal Operatörler: Aşağıdaki semboller ortak mantıksal operatörlerdir: &&(ve işareti) , || (boru -veya-) ve !(olumsuzlama). && operatörü, yalnızca iki işlenen doğruysa doğru olur. || operatör, işlenenlerden herhangi birinin doğru olması durumunda gerçekleşir. ! operatör true - false ve false - true değerini olumsuzlar. JavaScript dilinde üç tane mantıksal operatör bulunmaktadır: || (OR – VEYA ), &&(AND – VE ), ! (NOT – DEĞİL )

// && ( ampersand olarak anlandırılıyor) Ve operatörü iki tane & işaretiyle tanımlanmaktadır. VE Operatörü Örnekleri:

// Klasik programlamaya göre eğer iki operandda doğru ise doğru, diğer türlü yanlış döner.

const check1 = 4 > 3 && 10 > 5 // -> true && true -> true
const check2 = 4 > 3 && 10 < 5 // -> true && false -> false
const check3 = 4 < 3 && 10 < 5 // -> false && false -> false
/*
    AND "&&" operatörü aşağıdaki gibi çalışır:

    Operandları soldan sağa doğru değerlendir.
    Her bir operandı boolean değere çevir. Eğer sonuç yanlış ise dur ve operatörün orijinal değerini döndür.

    Eğer diğer operandlara erişim sağlandıysa ( hepsinin doğru olma durumu ) sondaki operandı döndür.

    Yukarıdaki kurallar VEYA kuralları ile benzerlik göstermektedir. Farklılık AND operatörünün ilk yanlış bulduğunda dönmesi. Aşağıda göreceğimiz OR operatörü ise ilk doğru bulduğunda dönmektedir.
*/
//! VE && VEYA’dan || önce çalışır. VE’nin && önceliği VEYA’ya || göre daha yüksektir. Bundan dolayı VEYA’dan önce çalışır. Aşağıdaki örnekte 1 && 0 önce hesaplanır.
console.log( 5 || 1 && 0 ); // -> 5

// || “OR”,“VEYA” operatörü iki dikey çizgiden oluşur. Çoğu zaman, VEYA || if yapısı içerisinde kullanılır. Herhangi biri doğruysa yap anlamı taşımaktadır. OR (VEYA) Operatörü Örnekleri:
const check4 = 4 > 3 || 10 > 5 // -> true  || true -> true
const check5 = 4 > 3 || 10 < 5 // -> true  || false -> true
const check6 = 4 < 3 || 10 < 5 // -> false || false -> false
/*
    VEYA "||" operatörü şunları yapar:

    Soldan sağa olacak şekilde operandları değerlendirir.
    Her operandın değerini boolean’a çevirir. Eğer sonuç doğru ise durur ve o operandın orjinal değerini döner.
    Eğer tüm operandlar kontrol edildi ve tamamı yanlış ise son operandı döner.

    Eğer VEYA zincirinde bir tane doğru bulunursa o an dönülür. Eğer bulunamazsa sonuncusu döner.
*/
console.log( 1 || 0 ); // -> 1 (1 doğru)
console.log( true || 'önemsiz' ); // -> (true doğru)

console.log( null || 1 ); // -> 1 (1 tek doğru veri)
console.log( null || 0 || 1 ); // -> 1 (1 tek doğru veri)
console.log( undefined || null || 0 ); // -> 0 (Hepsi yanlış sonuncusunu döner)

// ! (DEĞİL) Boolean değil operatörü "!" ile tanımlanmıştır. Değil Operatörü ile olumsuzlama örnekleri:

let check7 = 4 > 3 // -> true
let check8 = !(4 > 3) // ->  false
let is_Light_On = true
let is_Light_Off = !is_Light_On // -> false
let is_Married = !false // -> true
// Çift DEĞİL işareti değeri boolean tipine çevirmeye yarar: 
console.log( !!"Boş olmayan karakter dizisi" ); // -> true
console.log( !!null ); // -> false
// Birinci DEĞİL değeri booleana çevirir ve tersini alır. İkincisi ise tersinin tersini alarak değeri orjinal halinin boolean haline çevirir. Aynı şeyi Boolean fonksiyonu ile de yapmak mümkündür.
console.log( Boolean("boş olmayan karakter dizisi") ); // -> true
console.log( Boolean(null) ); // -> false

// Artırma/Azaltma Operatörleri: Bir sayıyı artırmak veya azaltmak sayısal operasyonlarda önemli sayılabilecek bir düzeydedir.
//!Dikkat: Artırma/Azaltma sadece değişkenlere uygulanabilirler. 5++ gibi bir kullanım hata verecektir.
/* ++ ve -- operatörleri değişkenden önce veya sonra kullanılabilirler.
    Operatör değişkenden sonra geliyorsa ona “postfix form” deriz: counter++.
    “prefix form” ise operatörün değişkenden önce geldiği durumdur: ++counter.
    Bu iki durumda da aynı işlem yapılır: counter değişkeni 1 arttırılır veya azaltılır fakat aşağıdaki örneklerde görüleceği üzere bu iki formun arasında bir kullanım farkı mevcuttur.
*/

// Arttırma Operatörü: JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. 

// Artırma ++ değişkenin değerini 1 artırır:

// Öncesi Artış (“prefix form”) için Örnek:
let count = 0
console.log(++count) // -> 1
console.log(count) // -> 1

// Sonrası Artış (“postfix form”) için Örnek:
let count1 = 0
console.log(count1++) // -> 0
console.log(count1) // -> 1

// Azaltma Operatörü: JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir.

// Azaltma -- değişkenin değerini 1 azaltır:

// Öncesi Azaltma (“prefix form”) için Örnek:
let count2 = 0
console.log(--count2) // -> -1
console.log(count2) // -> -1

// Sonrası Azaltma (“postfix form”) için Örnek:
let count3 = 0
console.log(count3--) // -> 0
console.log(count3) // -> -1

// Eğer arttırma/azaltma işleminin sonucunu kullanmıyorsak hangi formu kullandığımızın bir farkı olmaz:
let counter = 0;
counter++;
++counter;
console.log( counter ); // -> 2, iki satır da aynı işlemi yaptı.

// Eğer bir değeri arttıracak ve onu aynı anda(o işlem sırasında) kullanacaksak, prefix formunu kullanmamız gerekir:
let counter0 = 0;
console.log( ++counter0 ); // -> 1

// Eğer arttırma yapacak fakat arttırma yapmadan yapmadan önceki değeri kullanacaksak, postfix formunu kullanmamız gerekir:
let counterNumber = 0;
console.log( counterNumber++ ); // -> 0

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

// Modify-in-place (Yerinde Değiştir) Operatörü: Bazen bir değişken üzerinde bir operatör işlemi yaparız ve yeni oluşacak değerini aynı değişkende tutmak isteriz.
let n = 2;
n = n + 5;
n = n * 2;
// Bu işlemler += ve *= kullanılarak kısaltılabilir:
let numX = 2;
numX += 5; // -> şu an numX = 7 (numX = numX + 5 ile aynı)
numX *= 2; // -> şu an numX = 14 (numX = numX * 2 ile aynı)

console.log(numX); // -> 14

// Kısa olan “modify-and-assign” operatörleri tüm aritmetik ve bitsel operatörler için mevcuttur: /=, -=, vb. Bu tür operatörler normal bir atama(assignment) ile aynı önceliğe sahiptir, bu yüzden diğer birçok hesaplamalardan sonra çalışırlar.

let numY = 2;
numY *= 3 + 5;

console.log(numY); // -> 16 (önce sağ kısımda işlem yapıldı, numY *= 8 gibi)

// Virgül Operatörü: Virgül operatörü , nadir ve en alışılmadık operatörlerden birisidir. Bazen daha kısa kodlar yazmak için kullanılır. Bu yüzden neler olduğunu anlamak için bu operatörü de bilmemiz gerekiyor.Virgül operatörü birden fazla ifadeyi virgül , ile ayırarak hesaplamamıza olanak sağlar. Her bir ifade işleme alınır fakat bu ifadelerden sadece sonuncusu döndürülür.
let a = (1 + 2, 3 + 4);
alert(a); // -> 7 (3 + 4 işleminin sonucu)
// Burada, ilk ifade olan 1 + 2 işleme giriyor fakat sonucu çöpe atılıyor. Sonrasında gelen 3 + 4 işleme giriyor ve sonuç olarak geri döndürülüyor.
//!Dikkat: Unutmamak gerekir ki; virgül operatörü çok düşük bir önceliğe sahiptir, önceliği ='den bile daha düşüktür. Bu yüzden yukarıdaki örnekte gördüğümüz gibi parantezler çok önemlidir. Parantezler olmadan: a = 1 + 2, 3 + 4 ifadesinde önce + işleme alınır, değerler toplanarak a = 3, 7 ifadesine çevirilir, ondan sonra atama operatörü = ile a = 7 ataması yapılır, ve sonuç olarak virgülden önceki sayı olan 3 işlenmeyerek yok sayılır.

// Peki neden son kısım hariç her şeyi yok sayan bir operatöre ihtiyacımız var? - Bazen bizler; bir satırda birkaç işlem yapılan karmaşık yapılarda bu operatörü kullanırız.

// Bir satırda 3 farklı işlem
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     ...
// }
//! Bu tarz numaralar birçok JavaScript frameworklerinde kullanılır. Bu yüzden bunlardan bahsettik. Ama genelde bunlar kodun okunabilirliğini azaltıyorlar. Bu yüzden kullanmadan önce iyi düşünmek gerekir.

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
let durum = confirm("İyi misin?");
console.log(durum) // -> eğer OK'e basıldıysa `true` döner.
//*NOT: Bunların hepsi window yöntemleri değil, window yöntemlerine derinlemesine girmek için ayrı bir bölümümüz olacak.
// Window Metotları Tasks: (https://tr.javascript.info/alert-prompt-confirm) Kullanıcıdan adını isteyen ve bunu ekrana yazan basit bir web sayfası yapın.
let isim = prompt("İsminizi Giriniz: ");
alert("Merhaba "+isim);

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

//!Exercises: Level 1

// 1. -> Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
firstName = "Selim";
console.log(typeof firstName); // -> string
lastName = "Biber";
console.log(typeof lastName); // -> string
country = "Turkiye";
console.log(typeof country); // -> string
city = "Rize";
console.log(typeof city); // -> string
age = 23;
console.log(typeof age); // number
isMarried = "No";
console.log(typeof isMarried)// -> string
let Year = 2023;
console.log(typeof Year); // -> number

// 2. -> Check if type of '10' is equal to 10
console.log('10' == 10); // -> true
console.log('10' === 10); // -> false

// 3. -> Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); //

// 4. -> Boolean value is either true or false.
console.log(5 < 3); // -> false
console.log(5 > 3); // -> true

// 5. -> Write three JavaScript statement which provide truthy value.
Boolean(1) // -> true
Boolean(' '); // -> true
Boolean(Boolean); // -> true

// 6. -> Write three JavaScript statement which provide falsy value.
Boolean(0); // -> false
Boolean(undefined); // -> false
Boolean(NaN); // -> false

// 7. -> Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

/*
    4 > 3 -> true
    4 >= 3 -> true
    4 < 3 -> false
    4 <= 3 -> false
    4 == 4 -> true
    4 === 4 -> true
    4 != 4 -> false
    4 !== 4 -> false
    4 != '4' -> false
    4 == '4' -> true
    4 === '4' -> false
*/
console.log(4 > 3); // -> true
console.log(4 >= 3); // -> true
console.log(4 < 3); // -> false
console.log(4 <= 3); // -> false
console.log(4 == 4); // -> true
console.log(4 === 4); // -> true
console.log(4 != 4); // -> false
console.log(4 !== 4); // -> false
console.log(4 != '4'); // -> false
console.log(4 == '4'); // -> true
console.log(4 === '4'); // -> false

// 8. -> Find the length of python and jargon and make a falsy comparison statement.
let lengthPython = "python";
let lengthJargon = "jargon";

console.log(lengthPython.length > lengthJargon.length); // -> false

// 9. -> Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

/*
    4 > 3 && 10 < 12 -> true
    4 > 3 && 10 > 12 -> false
    4 > 3 || 10 < 12 -> true
    4 > 3 || 10 > 12 -> true
    !(4 > 3) -> false
    !(4 < 3) -> true
    !(false) -> true
    !(4 > 3 && 10 < 12) -> false
    !(4 > 3 && 10 > 12) -> true
    !(4 === '4') -> true
*/
console.log(4 > 3 && 10 < 12) // -> true
console.log(4 > 3 && 10 > 12) // -> false
console.log(4 > 3 || 10 < 12) // -> true
console.log(4 > 3 || 10 > 12) // -> true-
console.log(!(4 > 3)) // -> false
console.log(!(4 < 3)) // -> true
console.log(!(false)) // -> true
console.log(!(4 > 3 && 10 < 12)) // -> false
console.log(!(4 > 3 && 10 > 12)) // -> true
console.log(!(4 === '4')) // -> true

// 10. -> Use the Date object to do the following activities: 
//! What is the year today?
let currentTime = new Date();
console.log(currentTime.getFullYear()); // -> 2023

//! What is the month today as a number?
console.log(currentTime.getMonth()); // -> 4

//! What is the date today?
console.log(currentTime); // -> Sat May 13 2023 22:48:22 GMT+0300 (GMT+03:00)

//! What is the day today as a number?
console.log(currentTime.getDay()); // -> 6

//! What is the hours now?
console.log(currentTime.getHours()); // -> 22

//! What is the minutes now?
console.log(currentTime.getMinutes()); // -> 49

//! Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(currentTime.getTime()); // -> 1684007453651

// Exercises: Level 2

// 1.1. -> Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
    Enter base: 20
    Enter height: 10
    The area of the triangle is 100
*/
//! Remove comment lines with ctrl + u (for windows users)
// let base = parseFloat(prompt("enter base"));
// let height = parseFloat(prompt("enter height"));
// let area = (0.5*base)*height;
//     document.write('base is:' +base+ '<br>');
//     document.write('height is:' +height+ '<br>');
//     document.write('Area of this triangle is:' +area); 

// 1.2. -> Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
    Enter side a: 5
    Enter side b: 4
    Enter side c: 3
    The perimeter of the triangle is 12
*/
//! Remove comment lines with ctrl + k + u (for windows users)
// let side_a = parseFloat(prompt("enter side a"));
// let side_b = parseFloat(prompt("enter side b"));
// let side_c = parseFloat(prompt("enter side c"));
// let triangle_perimeter = side_a + side_b + side_c;
//     document.write('Perimeter of this triangle is:' +triangle_perimeter);

// 1.3. -> Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//! Remove comment lines with ctrl + k + u (for windows users)
// let rectangle_length = parseFloat(prompt("enter rectangle length"));
// let rectangle_width = parseFloat(prompt("enter rectangle width"));
// let rectangle_area = rectangle_length * rectangle_width;
// let rectangle_perimeter = 2 * (rectangle_length + rectangle_width);
//     document.write('Area of rectangle is: ' + rectangle_area + ', and perimeter of rectangle: ' + rectangle_perimeter);

// 2. -> Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//! Remove comment lines with ctrl + k + u (for windows users)
// let pi = 3.14;
// let circleRadius = parseFloat(prompt("enter radius"));
// let circle_area = pi * circleRadius * circleRadius;
// let circumference_area = 2 * pi * circleRadius;
//     document.write('Area of circle is: ' + circle_area + ' , and circumference of circle is: ' + circumference_area);

// 3. -> Calculate the slope, x-intercept and y-intercept of y = 2x -2
//! I'm sorry for this
// 4. -> Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//! I'm sorry for this

// 5. -> Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//! Remove comment lines with ctrl + k + u (for windows users)
// let hour = parseFloat(prompt("Enter hours:"));
// let rate = parseFloat(prompt("Enter rate per hour:"));
// let pay = hour * rate;
//     document.write('Your weekly earning is: ' + pay);

// 6. -> If the length of your name is greater than 7 say, your name is long else say your name is short.
//! Remove comment lines with ctrl + k + u (for windows users)
// let yourName = prompt("Enter your name: ");
// if (yourName.length > 7) {
//     document.write('Your name is long!')
// } else {
//     document.write('Your name is short!')
// }

// 7. -> Compare your first name length and your family name length and you should get this output. : Your first name, Asabeneh is longer than your family name, Yetayeh
//! Remove comment lines with ctrl + k + u (for windows users)
// let yourFirstName = prompt("Enter your first name: ");
// let yourLastName = prompt("Enter your last name: ");
// if (yourFirstName.length > yourLastName.length) {
//     document.write('Your first name, ' + yourFirstName + ' is longer than your family name, ' + yourLastName)
// } else if (yourFirstName.length < yourLastName.length) {
//     document.write('Your family name, ' + yourLastName + ' is longer than your first name, ' + yourFirstName)
// } else {
//     document.write('Your first name and family name are the same length or you entered an incorrect value.')
// }

// 8. -> Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/* 
    let myAge = 250
    let yourAge = 25
    I am 225 years older than you.
*/
//! Remove comment lines with ctrl + k + u (for windows users)
// let myAge = 23;
// let yourAge = Number(prompt("Enter your age: "));
// let ageDifference;
// if (myAge > yourAge) {
//     ageDifference = myAge - yourAge;
//     document.write('I am ' + ageDifference + ' years older than you.')
// } else if (myAge < yourAge) {
//     ageDifference = yourAge - myAge;
//     document.write('You are ' + ageDifference + ' years older than me.')
// } else {
//     document.write('Our ages are the same or you entered the wrong value.')
// }

// 8.1. -> Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*
    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
*/
//! Remove comment lines with ctrl + k + u (for windows users)
// let birthYear = Number(prompt("Enter your birth year: "));
// let currentYear = 2023;
// let currentAge = currentYear - birthYear;
// let enoughAge = 18;
// let waitForYears;

// if (currentAge >= enoughAge) {
//     document.write('You are ' + currentAge + '. You are old enough to drive.')
// } else if (currentAge < enoughAge) {
//     waitForYears = enoughAge - currentAge;
//     document.write('You are ' + currentAge + '. You will be allowed to drive after ' + waitForYears + ' years.')
// } else {
//     document.write('You entered the wrong value.')
// }

// 8.2. -> Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.
/*
    Enter number of years you live: 100
    You lived 3153600000 seconds.
*/
//! Remove comment lines with ctrl + k + u (for windows users)
// let secondsInseconds = 60;
// let secondsInHour = secondsInseconds * 60;
// let secondsInDay = secondsInHour * 24;
// let secondsInYear = secondsInDay * 365;
// let yearsLive = Number(prompt("How many years have you live?"));
// let secondsOld = yearsLive * secondsInYear;
//     document.write('You lived ' + secondsOld + ' seconds.')

// Create a human readable time format using the Date time object
//! Remove comment lines with ctrl + k + u (for windows users)
// let readableTime = new Date();
// let currentYear = readableTime.getFullYear();
// let currentMonth = readableTime.getMonth()+1;
// let currentDay = readableTime.getDate();
// let currentHours = readableTime.getHours();
// let currentMinutes = readableTime.getMinutes();
//     document.write(`YYYY-MM-DD HH:mm: ${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}DD-MM-YYYY HH:mm: ${currentDay}-${currentMonth}-${currentYear} ${currentHours}:${currentMinutes}
//     DD/MM/YYYY HH:mm: ${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}`);

// Exercises: Level 3

// -> Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let readableTime = new Date();
let currentYear = readableTime.getFullYear();
let currentMonth = readableTime.getMonth()+1;
let currentDay = readableTime.getDate();
let currentHours = readableTime.getHours();
let currentMinutes = readableTime.getMinutes();

    if (currentMonth < 10, currentHours < 10, currentMinutes < 10) {
        let readableMonth = '0' + currentMonth
        let readableHours = '0' + currentHours
        let readableMinutes = '0' + currentMinutes
        document.write(`Human Readable Time Format: ${currentDay}.${readableMonth}.${currentYear} ${readableHours}:${readableMinutes}`)
    } if (currentMonth > 10) {
        document.write(`Human Readable Time Format: ${currentDay}.${currentMonth}.${currentYear} ${readableHours}:${readableMinutes}`)
    } if (currentHours > 10) {
        document.write(`Human Readable Time Format: ${currentDay}.${currentMonth}.${currentYear} ${currentHours}:${readableMinutes}`)
    } if (currentMinutes > 10) {
        document.write(`Human Readable Time Format: ${currentDay}.${currentMonth}.${currentYear} ${currentHours}:${currentMinutes}`) }
       
/*************************** tr.javascript.info/operators Tasks  ****************************/

//!TASK-1: Önden ve sonradan eklemeli değişkenler.
// Aşağıdaki işlemlerden sonraki a, b, c,d değerlerini yazınız?
let a1 = 1, b = 1;
console.log( ++a ); // 2, eğer toplamayı önce yaparsanız sonraki değeri gösterir.
console.log( b++ ); // 1, eğer toplamayı sonra yaparsanız önceki değerini gösterir.

let c2 = ++a1; // ? -> Answer: 2 (bir defa artırıldı.)
let d3 = b++; // ? -> Answer: 1 (bir defa artırıldı.)

//!TASK-2: Atama sonuçları
// Aşağıdaki işlemler sonrasında a ve x değerleri nedir ?
let ab = 2;

let x = 1 + (ab *= 2); // -> Answer: ab 2 ile çarpılıp yeni değeri olan 4'ü alır ve x değerine atanmış 1 ile toplanır sonuç olarak x'de 5 olur.