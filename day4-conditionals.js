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

//! Exercises: Level 2

//! Exercises: Level 3