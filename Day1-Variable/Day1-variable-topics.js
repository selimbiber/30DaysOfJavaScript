/*
https://tr.javascript.info/variables

Değişken isimlendirme

JavaScript dilinde değişken oluştururken iki sınırlama vardır.

    Değişken ismi sadece harfler, rakamlar, $ ve _ karakterlerinden oluşabilir.
    İlk karakter rakam olamaz.

    Eğer isim birden fazla kelime kullanıyorsa deveHörgücü veya camelCase küçük harfle başlanıp her kelimenin baş harfi büyük olacak şekilde devam etme yöntemine deveHörgücü yöntemi denir. Bu yöntem yaygın bir şekilde kullanılır. Örneğin : benimUzunDegiskenim gibi.
*/

// Geçersiz isimlendirmeler:

// let 1a; // Rakam ile başlanılmaz.

// let my-name; // isimlendirmede '-' karakteri kullanılamaz.

/* Büyük küçük harf farkı önemlidir örneğin "elma" ve "Elma" iki farklı değişken tanımlar. Bu değişkenler birbirlerinden farklıdır. */

// İngilizce harici harfler geçerlidir fakat önerilmez.

const Fenerbahçe = "En Büyük";

/* Teknik olarak bir hata olmamasına ve bu şekilde kullanıma izin verilesine rağmen genel olarak uluslararası gelenek olarak değişkenler İngilizce isimlendirilirler. En basit bir kod parçasının bile önünde uzun bir hayat olabilir. Diğer ülkedeki insanların bu kodları okuması gerekebilir. */

/* Saklı tutulan isimler
Değişken olarak kullanılamayacak dilin kendisine saklı tuttuğu isimler mevcuttur.

Örneğin : let, class, return, function gibi kelimeleri değişken ismi olarak adlandıramazsınız.

Aşağıdaki örnek yazım yanlışı (syntax error) verecektir:
*/

// let let = 5; // değişken ismi "let" verilemez, hata!
// let return = 5; // değişken ismi return verilemez, hata!

/* use strict kullanmadan değer atama

    Normalde değişkeni kullanmak için önce tanımlamanız gerekmektedir. Fakat eski zamanlarda tanımlamadan da, let kullanmadan da, değer atamak mümkündü. Eğer use strict kullanmıyorsanız hâlâ eskisi gibi kullanabilirsiniz. Bu davranış eski kodlarla uyumluluk açısından olduğu gibi bırakılmıştır.
*/

// not: bu örnekte "use strict" kullanılmamıştır

num = 5; // eğer "num" değişkeni daha önce yaratılmadıysa yaratılır ve 5 değeri atanır.

alert(num); // 5

// Bu kötü bir kullanımdır. Eğer sıkı moda geçerseniz hata alırsınız.

"use strict";

num = 5; // error: num tanımlanmadı.

/* Sabitler

Sabit(değişmeyen) tanımlamak için let yerine const kullanabilirsiniz. */

const benimDogumYilim = 1999;

/* const ile tanımlanan değişkenler “constants” (Sabit) olarak tanımlanır. Bunlar değiştirilemezler, değiştirilmek istendiğinde hata alınır: */

// benimDogumYilim = 2023; // hata verir çünkü sabit'in değeri değiştirilemez!

// Programcı değişkenin değerinin değişmeyeceğine eminse const bunu garantiler. Ayrıca bu kodu kullanan herkese bunun garantilendiğini bildirmiş olur.

/* Sabitlerin Büyük Harf İle İsimlendirilmesi

Genel kullanımda sabitler büyük harf ile isimlendirilirler. Eğer birden fazla kelimeden oluşuyorsa “_” ile bu kelimeleri ayırmak mümkündür. */

const RENK_KIRMIZI = "#F00";
const RENK_YESIL = "#0F0";
const RENK_MAVI = "#00F";
const RENK_TURUNCU = "#FF7F00";

// ...Resim seçmek istediğimizde
let renk = RENK_TURUNCU;
alert(renk); // #FF7F00

/* Yararları:

    RENK_TURUNCU "#FF7F00" a göre hatırlanması daha kolaydır.
    "#FF7F00" yazarken yanlış yazma olasılığı RENK_TURUNCU'ya göre yüksektir.
    Kodu okurken RENK_TURUNCU #FF7F00'dan daha fazla anlam ifade eder.
*/

/* İsimlendirmeyi doğru yapmak
    Lütfen değişkenleri isimlendirirken iyice düşünün sonrasında çok işinize yarayacak.

Birkaç kural şu şekildedir:

    İnsan-okuyabilir değişken ismi verin kullaniciAdi veya alisverisSepeti gibi.

    a, b, c gibi kısaltmaları kullanmayın. Tabi ne yaptığınızı kesin olarak biliyorsanız kullanabilirsiniz.

    İsimlerin açıklayıcı olmasına önem verin. Örneğin veri ve deger adindaki değişkenler bir şey ifade etmezler. Tabi eğer kod bloğunda bunların bir anlamı var ise kullanılabilir.

    Bazı tanımları kafanızda takımınızın kullandığı şekil ile uyumlu şekilde oturtun. Örneğin siteyi ziyaret eden kişi kullanici ise kullanıcı ile olan değişkenleri anlikKullanici veya yeniKullanici gibi kullanın fakat yeniZiyaretci veya yeniCocuk gibi kullanmayın.

*/

// Day 1: Variable Exercises -> Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

// let personName = "Selim";
// let personAge = 23;
// let isPersonStillLive = true;
// let personMidName = null;
// let personWealth = undefined;

// const personGender = "Male";
// const personBornYear = 1999;

let personName = "Selim",
    personAge = 23,
    isPersonStillLive = true,
    personMidName = null,
    personWealth = undefined;

const personGender = "Male", personBornYear = 1999;

console.log(personName, personGender, personBornYear, personAge, isPersonStillLive, personMidName, personWealth);

/* Değişkenler ile çalışma -> https://tr.javascript.info/task/hello-variables
    
  1. yonetici ve isim adında iki değişken tanımlayın.
  2. "isim" değişkenine "Ahmet" atayın
  3. Değeri isim den yoneticiye kopyalayın.
  4. yonetici değişkeninin içeriğini uyarı fonksiyonuyla gösterin. ( Çıktısı “Ahmet” olmalı)

*/

let yonetici, isim; // iki değişkeni tek bir satırda tanımlamanın mümkün olduğunu öğrenmiştik.
isim = "Ahmet";
yonetici = isim;
alert(yonetici); // -> Ahmet

/* Doğru isimlendirmeyi yapabilmek -> https://tr.javascript.info/task/declare-variables

    
   1. Gezegenimizin isminin tutulacağı bir değişken oluşturun. Bu değişkeni nasıl isimlendirirsiniz?
   2. Şu anda web sitesini ziyaret eden kişinin adının tutulduğu bir değişken oluşturun. Bu değişkeni nasıl isimlendirirsiniz?

*/

const ourPlanetName = "World";
let mevcutKullaniciAdi;

/* Not: Modern kod düzenleyicilerin otomatik tamamlayıcıları oldukça gelişmiş olduğundan uzun değişken isimleri bile bir kaç harften sonra tamamlanabilmektedir. Bundan dolayı değişken isimlerinizi maksimum 3 kelime olacak şekilde ayarlarsanız yeterli olur. */