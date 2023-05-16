/*** Day 4 = Conditionals  
 * https://30dayjavascript.js.org/04-day/
 * https://tr.javascript.info/ifelse
 * Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
 * ***/
/*
    Koşullu ifadeler, farklı koşullara dayalı kararlar vermek için kullanılır. Varsayılan olarak, JavaScript komut dosyasındaki ifadeler yukarıdan aşağıya doğru uygulanır. İşleme mantığı bunu gerektiriyorsa, ardışık yürütme akışı iki şekilde değiştirilebilir:

    Koşullu yürütme: Belirli bir ifade doğruysa, bir veya daha fazla ifadeden oluşan bir blok yürütülür.
    Tekrarlayan yürütme : Belirli bir ifade doğru olduğu sürece, bir veya daha fazla ifadeden oluşan bir blok tekrar tekrar yürütülecektir.

    Koşullar aşağıdaki yollarla uygulanabilir:

    if
    if else
    if else if else
    switch
    ternary operator

*/

//! if : JavaScript ve diğer programlama dillerinde if anahtar kelimesi, bir koşulun doğru olup olmadığını kontrol etmek ve blok kodunu yürütmek için kullanılır. Bir if koşulu kullanmak oluşturmak için normal parantez ve küme parantezlerine ihtiyaç duyurulur. () {}


//! syntax
let condition;

if (condition) {
    // -> kodun bu kısmı doğru koşul için çalışır
}

//! example
// let sene = prompt('ECMAScript-2015 standarları hangi yıl yayınlanmıştır?', '');

// if (sene == 2015) console.log( 'Doğru bildin!' );

/* Yukarıdaki örnekte “if” basit bir eşitliği kontrol eder sene == 2015, fakat bu kontrol elbette daha karmaşık olabilir.

!Eğer birden fazla komut çalıştırmak istersek bunu süslü parantez içinde yapabiliriz. */

// if (sene == 2015) {
//     console.log( 'Doğru bildin.' );
//     alert( 'Harikasın!');
// } // -> Yanlış bir koşulun sonucunu görmek için, else ile başka bir bloğumuz olmalıdır.
//! Her if kullandığımızda süslü parantez kullanmamız okunurluğu artıracaktır. Tek satır bile yazsak süslü parantez içinde yazmamız doğru alışkanlık kazanmamız açısından önerilir.

//! else : if cümlesi opsiyonel olarak “else” bloğu da içerebilir.  if koşul bloğu doğruysa yürütülür, doğru değilse, else bloğu yürütülür.

// if (sene == 2015) {
//     console.log( 'Doğru bildin!' );
// } else {
//     console.log( 'Ah! Bunu nasıl bilemezsin? ')
// } // -> 2015 dışındaki her değerde burası çalışır.

//! else if : Bazı durumlarda birden fazla durumu kontrol etmemiz gerekebilir. Bu durumlarda else if cümlesini kullanabiliriz.

//! syntax
if (condition) {
    // code
} else if (condition) {
  // code
} else {
   //  code

}

//! example
// if (sene < 2015) {
//     alert( 'Hayır, daha sonra...' );
// } else if (sene > 2015) {
//     alert( 'Hayır, daha önce.' );
// } else {
//     alert( 'Kesinlikle!' );
// }

/*
    Yukarıdaki kodda önce sene < 2015 kontrolü yapılır. "Eğer bu değerlendirme yanlış ise bir sonraki koşula geçilir." Eğer sene > 2015 doğru ise bu koşul içindeki alarm fonksiyonu çalışır. Diğer hallerde son alert fonksiyonu çalışır.

    Sonuncusunda bir tane daha "else if" bloğu olabilirdi: else if ( sene == 2015 )
*/

//! switch : "else if" için bir alternatiftir. Switch ifadesi bir switch anahtar sözcüğüyle başlar, ardından bir parantez ve kod bloğu gelir. Switch kod bloğunun içinde farklı durumlarımız olacak. Case bloğu, switch parantezindeki değer eğer durum (case) değeriyle eşleşirse çalışır. Break (Kırmak) ifadesi, koşul yerine getirildikten sonra kod döngüsünü kırmak içindir. Default blok ise Switch kod bloğunun içinde tüm durumlar (case) istenen koşulu karşılamıyorsa çalışır.

//! syntax
let caseValue;
switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
}

//! example-1
// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

//! example-2
// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Numbers is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }

//! ? -> Ternary (Üçlü) Operatör: Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Operatör "?" işareti ile ifade edilir. Resmi tanımda “üçlü” kullanılmasının sebebi üç tane operanddan oluşmasından dolayıdır çünkü JavaScript dilinde 3 tane operandı olan başka bir operatör yoktur. 

//! syntax
let koşul;
let deger1;
let deger2;
let sonuc = koşul ? deger1 : deger2

//! example
let isRaining = true
isRaining
  ? console.log('You need a rain coat.') // -> ? doğru mu diye sorgular ve eğer doğru dönerse hemen belirtilen kod bloğunu yürütür.
  : console.log('No need for a rain coat.') // -> : ise istenen koşul sağlanamadığında (yanlış döndüğünde) yürütülecek kod bloğunu belirtir.

// Birden fazla "?" işareti kullanarak birden fazla koşula göre değer döndürme işlemini sağlayabiliriz:
// let age = prompt('Kaç yaşındasın?', 23);

// let message = (age <= 12) ? 'Uyumadan önce sütünü içmeyi unutma!' :
//   (age <= 23) ? 'Naber kanka?' :
//   (age >= 35) ? 'Merhaba efendim!' :
//   'Kaç yaşında olduğunu bir daha düşün!';

// alert( message );

/*
    İlk başta neyin ne olduğunu anlamak zaman alabilir. Fakat daha yakından bakınca sıra ile değerin kontrol edildiğini görebiliriz.

    İlk soru işareti age <= 12 kontrolünü yapar.
    Eğer doğru ise 'Uyumadan önce sütünü içmeyi unutma!' ifadesini döndürür. Diğer türlü sonraki ":"e gider ve age <= 23 kontrolünü yapar.
    Eğer doğru ise 'Naber kanka?' ifadesini döndürür. Diğer türlü sonraki ":"e gider ve age >= 35 kontrolünü yapar.
    Eğer doğru ise 'Merhaba efendim!' ifadesini döndürür. Diğer türlü ise en sondaki ":"e gider ve 'Kaç yaşında olduğunu bir daha düşün!' ifadesini döner yani if..else kod bloğunun mantığıyla aynı çalışır.
*/

// Geleneksel olmayan olmayan ‘?’ kontrolü: Bazı durumlarda '?' if in yerine kullanılabilir.

// let company = prompt('JavaScript hangi firma tarafından yaratılmıştır?', '');

// (company == 'Netscape') ?
//    alert('Doğru!') : alert('Yanlış.');

/* Yukarıdaki koşula göre firma =='Netscape', soru işaretinden sonra birinci bölüm veya ikinci bölüm çalışır.
    Sonucu bir değere atanmamıştır. Amaç duruma göre doğrudan kodu çalıştırmak.
    Soru işaretinin bu amaç doğrultusunda kullanılması önerilmez.
    Yazımı if yazımından daha kısa olsa bile daha az okunabilir durumdadır.

    if (company == 'Netscape') {
    alert('Doğru!');
    } else {
    alert('Yanlış.');
    }

    Okurken kodu dikey olarak okuruz. Bundan dolayı yazımın bir kaç satıra dağıtılması okumayı uzun satırlara göre daha kolay hale getirir.
    '?' işaretinin ideal kullanımı sadece o ya da bu sorusudur. Daha uzun bir cümle için if kullanmalıyıız.
*/

//! Exercises: Level 1

//? 1. -> Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
    Enter your age: 30
    You are old enough to drive.

    Enter your age:15
    You are left with 3 years to drive.
*/
// let yourAge = prompt('Enter your age: ');
// let enoughAge = 18;
// let waitYears = enoughAge - yourAge;

// if (yourAge >= enoughAge) {
//     console.log('You are old enough to drive.');
// } else {
//     console.log('You are not old enough to drive, you must wait for ' + waitYears + ' years.');
// }

//? 2. -> Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
    Enter your age: 30
    You are 5 years older than me.
*/
// let myAge = 23;
// let yourAge = prompt('Enter your age:');

// if (myAge > yourAge) {
//     console.log('I am older than you.');
// } else {
//     console.log('I am younger than you or we are the same age.')
// }

//? 3. -> If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways: using if else and ternary operator.

// let a = Number(prompt('Enter a value'));
// let b = Number(prompt('Enter another more value'));

// using if else:

// if (a > b) {
//     console.log('a is greater than b');
// } else {
//     console.log('a is less than b');
// }

// using ternary operator:

// a > b ? console.log('a is greater than b') : console.log('a is less than b');

//? 4. -> Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
*/
// let number = Number(prompt('Enter a number'));

// if (number % 2 === 0) {
//     console.log(number + ' is an even number.');
// } else {
//     console.log(number + ' is not an odd number.');
// }

//! Exercises: Level 2

//? 1. -> Write a code which can give grades to students according to theirs scores:
/*
    80-100, A
    70-79, B
    60-69, C
    50-59, D
    0-49, F
*/

// let yourScore = Number(prompt('Enter your score'));

// if (yourScore >= 80 && yourScore <= 100) {
//     console.log(yourScore + ' = A');
// } else if (yourScore >= 70 && yourScore <= 79) {
//     console.log(yourScore + ' = B');
// } else if (yourScore >= 60 && yourScore <= 69) {
//     console.log(yourScore + ' = C');
// } else if (yourScore >= 50 && yourScore <= 59) {
//     console.log(yourScore + ' = D');
// } else if (yourScore >= 0 && yourScore <= 49) {
//     console.log(yourScore + ' = F')
// } else {
//     console.log('You entered the wrong value.')
// }

//? 2. -> Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
/*
    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
*/
// let month = prompt('Enter the current month');

// if (month === 'September' || month === 'October' || month === 'November') {
//     console.log('This month is Autumn season.')
// } else if (month === 'December' || month === 'January' || month === 'February') {
//     console.log('This month is Winter season.');
// } else if (month === 'March' || month === 'April' || month === 'May') {
//     console.log('This month is Spring season.');
// } else if (month === 'June' || month === 'July' || month === 'August') {
//     console.log('This month is Summer season.')
// } else {
//     console.log('You entered the wrong month.')
// }

//? 3. -> Check if a day is weekend day or a working day. Your script will take day as an input.
/*
  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day.
*/
let today = prompt('What is the day today?');  // -> Kullanıcıdan gün bilgisini al.
let firstLetter = today[0].toUpperCase(); // -> Gün bilgisinin ilk harfini büyük yap.
let sliceLetters = today.slice(1) // -> İlk harfin dışındaki kalan harfleri al.
let otherLetters = sliceLetters.toLowerCase() // -> ve o kalan harfleri küçük harf yap.
let currentDay = firstLetter + otherLetters; // -> Büyük ilk harf ile küçük diğer harfleri birleştir.

// if (currentDay == 'Saturday' || currentDay == 'Sunday') {
//     console.log(currentDay + ' is a weekend.')
// } else if (currentDay == 'Monday' || currentDay == 'Tuesday' || currentDay == 'Wednesday' || currentDay == 'Thursday' || currentDay == 'Friday') {
//     console.log(currentDay + ' is a working day.');
// } else {
//     console.log('There is no such day!')
// }

//! Exercises: Level 3

//? -> Write a program which tells the number of days in a month, now consider leap year.
/*
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 days.

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/
let month = prompt('Enter a month:');  // -> Kullanıcıdan Ay bilgisini al.
let first_Letter = month[0].toUpperCase(); // -> Ay bilgisinin ilk harfini büyük yap.
let slice_Letters = month.slice(1) // -> İlk harfin dışındaki kalan harfleri al.
let other_Letters = slice_Letters.toLowerCase() // -> ve o kalan harfleri küçük harf yap.
let current_Month = first_Letter + other_Letters; // -> Büyük ilk harf ile küçük diğer harfleri birleştir.

// if (current_Month == 'January' || current_Month == 'March' || current_Month == 'May' || current_Month == 'July' || current_Month == 'August' || current_Month == 'October') {
//     console.log(current_Month + ' has 31 days.')
// } else if (current_Month == 'April' || current_Month == 'June' || current_Month == 'September' || current_Month == 'November') {
//     console.log(current_Month + ' has 30 days.')
// } else if (current_Month == 'February') {
//     console.log(current_Month + ' has 28 days. (2023)')
// } else {
//     console.log('There is no such month!')
// }
