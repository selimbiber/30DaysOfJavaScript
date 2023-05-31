/*** Day 7 = Functions (Fonksiyonlar)
 *? https://30dayjavascript.js.org/07-day/
 *? https://tr.javascript.info/function-basics
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
 *  ***/

 /* Topics of Functions

    7. Gün Konuları:

    Functions - Fonksiyonlar
        Klasik fonksiyon Tanımlama
        Anonymous Function - İsimsiz fonksiyon
        Expression Function
        Parametresiz ve dönüş değeri olmayan fonksiyon
        Fonksiyonlarda return kullanımı
        Bir parametreli fonksiyon
        İki parametreli fonksiyon
        Çok parametreli fonksiyon
        Sınırsız sayıda parametreyle çalışan fonksiyon
            Klasik fonksiyonda sınırsız sayıda parametre
        Kendi kendine çağırılan fonksiyon - Self Invokinf function
        Arrow Function
            Arrow function'da sınırsız sayıda parametre
        Default parametre ile fonksiyon kullanımı
        Function declaration versus Arrow function
    Exercises - Egzersizler
        Exercises: Level 1
        Exercises: Level 2
        Exercises: Level 3
 */

//? Fonksiyon nedir ve ne amaçla kullanılır? 
                
        // Çoğu zaman kod yazarken belirli bölümleri tekrarlama ihtiyacı duyulur.

        // Örneğin kullanıcı hesabına giriş yaptığında veya çıktığında güzel görünümlü bir mesaj göstermek istenebilir.

        // Fonksiyonlar programın “yapı taşıdır”. Birçok defa bu fonksiyonlar çağırılarak tekrardan bu kodları yazmaktan kurtuluruz.

        // Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.

        // Bir fonksiyon, function anahtar kelimesi ardından gelen o fonksiyona ait fonksiyon ismi ve parantezler ile tanımlanır. Bu parantezler fonksiyona parametre atayabilmemizi sağlar. Şayet fonksiyon parametre alırsa bu parametre fonksiyon scope'u içerisinde geçerli olan bir değişkendir. Farklı bir kullanım olarak da bu parametreye default değerler atayabiliriz. Eğer bir fonksiyon yardımı ile veri taşımak istiyorsak söz konusu fonksiyonun belirli bir veri türünü geriye değişken olarak döndürmesi gerekir. Daha sonra dönen bu değişkeni bir başka değişkene atayarak kullanabilir.

//? Fonksiyon kullanmanın avantajları nelerdir?
        
        // temiz ve okunması kolay

        // yeniden kullanılabilir

        // kolay test edilir
        
//? Bir fonksiyon kaç farklı şekilde tanımlanabilir?
        
        // Declaration function

        // Expression function

        // Anonymous function

        // Arrow function

    //* Declaration function - Klasik Fonksiyon Tanımlama:

        // -> parametresiz fonksiyon tanımı:
        // function functionName() {
            // -> istenilen kod parçası
        // }
        // functionName() // -> fonksiyon, fonksiyon adı ve parantezler ile çağırılır

    //* Expression Function: Expression function, isimsiz fonksiyonlardır. İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız.

        // const square = function() {
        //     console.log("Bu bir expression function türünde fonksiyondur.")
        // }

    //* Anonymous Function - İsimsiz Fonksiyon:

    // const anonymousFun = function() {
    //     console.log(
    //     'Ben isimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor.'
    //     )
    // }

    //* Arrow Function:

        // const areaOfCircle = (radius) => {
        //     let area = Math.PI * radius * radius;
        //     return area
        // }
        // console.log( areaOfCircle(20) ) // -> 1256.6370614359173

// Parametresiz ve dönüş değeri olamayan fonksiyon: Fonksiyon, parametre olmadan tanımlanabilir. (Şu ana kadar tanımladıklarımız zaten parametresizdi)

    // Örnek-1:

    // function square () {
    //     let num = 4;
    //     let square = num * num;
    //     console.log(square);
    // }
    // square(); // -> 16

    // -> Örnek-2:

    // function addTwoNumbers () {
    //     let numOne = 1;
    //     let numTwo = 9;
    //     let sum = numOne + numTwo;

    //     console.log(sum);
    // }
    // addTwoNumbers(); // -> 10

// Bir değer döndüren fonksiyon: Fonksiyonlar geriye bir değer döndürebilir. bu işlemi return anahtar kelimesini kullanarak sağlarız. Normal fonksiyondan farklı olarak bir field'a atanabilir veya bir metot içerisinde parametre olarak kullanılabilir.

    // -> Örnek-1:

    // function printFullName () {
    //     let firstName = 'Selim';
    //     let lastName = 'Biber';
    //     let someSpace = ' ';

    //     let fullName = firstName + someSpace + lastName;

    //     return fullName
    // }
    // console.log( printFullName() ); // -> Selim Biber

    // -> Örnek-2:

    // function multiplyTwoNumbers () {
    //     let numOne = 1;
    //     let numTwo = 9;
    //     let total = numOne * numTwo;

    //     return total
    // }
    // console.log( multiplyTwoNumbers() ); // -> 9

// Parametreli fonksiyon: Bir fonksiyonda farklı veri türlerini (number, string, boolean, object, function) parametre olarak geçebiliriz.

    // -> tek parametreli fonksiyon:

        // function functionName(parm1) {
            // istenilen kod parçası
        // }
        // functionName(parm1) // fonksiyonu çağırma sırasında parantezler arasına bir parametreye ihtiyaç duyar

        // -> Örnek-1:

        // function circleOfArea (r) {
        //     let area = Math.PI * r * r;
        //     return area
        // }
        // console.log( circleOfArea(10) ); // -> 314.1592653589793

        // -> Örnek-2:

        // function square (number) {
        //     return number * number
        // }
        // console.log( square(15) ); // -> 225

    // -> çift parametreli fonksiyon:

        // function functionName(parm1, parm2) {
            // -> istenilen kod parçası
        // }
        // functionName(parm1, parm2) // -> fonksiyonu çağırma sırasında parantezler arasında iki tane parametreye ihtiyaç duyar.
        
        // Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım:

        // function sumTwoNumbers(numOne, numTwo) {
        //     let sum = numOne + numTwo
        //     console.log(sum)
        // }
        // sumTwoNumbers(10, 20) // fonksiyon çağırımı
        //! NOT: Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir. 
        

    // -> çok parametreli fonksiyon:
        // function functionName(parm1, parm2, parm3,...){
            // -> istenilen kod parçası
        // }
        // functionName(parm1,parm2,parm3,...) // fonksiyon çağırımı sırasında birden çok parametreye ihtiyaç duyar

        // Örnekteki fonksiyon, bir diziyi parametre olarak alır ve dizideki sayıları toplar:

        // function sumArrayValues(arr) {
        //     let sum = 0;
        //     for (let i = 0; i < arr.length; i++) {
        //         sum = sum + arr[i];
        //     }
        //     return sum;
        // }
        // const numbers = [1, 2, 3, 4, 5];
        // console.log( sumArrayValues(numbers) ); // -> fonksiyon çağırımının sonucu: 15

// Sınırsız sayıda parametreyle çalışan fonksiyon: Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz. Javascript'te bu durumda bize sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır. Bu şekilde bir fonksiyon tanımlamanın iki yolu vardır.

    //* Klasik fonksiyonda sınırsız sayıda parametre: Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse;

        // -> arguments nesnesine erişelim:

        // function sumAllNums () {
        //     console.log(arguments);
        // }
        // sumAllNums(1, 2, 3, 4) // -> Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

    //* Kendi kendine çağırılan fonksiyon: JavaScript sözdiziminde birçok ilginç şey vardır, bunlardan biri kendi kendine çalışan (kendi kendini çağıran) fonksiyonların tanımıdır. Böyle bir fonksiyonu şu şekilde tanımlayabiliriz:

        // ( function(n) {
        //     console.log(n * n)
        // } )  (2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
        
        // let squaredNum = ( function(n) {
        //     return n * n
        // } )  (24) // -> 576
        
        // console.log(squaredNum)

        //! NOT: Yukarıdaki fonksiyon, tanımlandıktan hemen sonra çağrılır. Kendi kendini çağıran işlevlerin yararı, global ad alanını karıştırmadan (herhangi bir global bildirmeden) kodu bir kez yürütmemize olanak vermeleridir.

    // Arrow Function: Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. function anahtar kelimesi yerine => işareti kullanılır.

        // Sırasıyla aynı fonksiyonun klasik ve arrow function halini yazalım:

            // function square(n) {
            //     return n * n
            // }
          
            // console.log( square(2) ) // -> 4

            // const squareArea = n => { // -> tek parametre kullanacaksak parantezleri kaldırabiliriz.
            //     return n * n
            // }

            // console.log (squareArea(4) ) // -> 16

            //! NOT: kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
            // const findSquareArea = n => n * n
            // console.log( findSquareArea(6) ) // -> 36

            // const printMyName = (firstName, lastName) => `${firstName} ${lastName}`
            // console.log( printMyName("Selim", "Biber") ) // -> Selim Biber

        //* Arrow function'da sınırsız sayıda parametre: Arrow function, klasik fonksiyon gibi arguments nesnesine sahip değildir. Arrow function'da sınırsız sayıda parametre kullanmak istersek spread operatör (...) ve hemen ardından parametre adı kullanılır. 
        //! Fonksiyonda bağımsız değişken olarak geçtiğimiz her şeye arrow functionda dizi olarak erişilebilir. 
    
            // -> function declaration:

            // const sumAllNums = (...args) => {
            //     let sum = 0;
            //     for (const element of args) {
            //     sum += element;
            //     }
            //     return sum
            // }

            // console.log(sumAllNums(1, 2, 3, 4)) // -> 10
            // console.log(sumAllNums(10, 20, 13, 40, 10))  // -> 93
            // console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // -> 173

// Default parametre ile fonksiyon kullanımı: Bazen parametrelere default değerler geçmek isteyebiliriz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak tamamlayacaktır.

    // syntax - söz dizimi

    // fonksiyon tanımı
    // function functionName(param = value) {
        // -> codes
    // }

    // fonksiyon çağırımı
    // functionName()
    // functionName(arg)

    // Örnek:

        // function greetings ( name = 'Selim' ) {
        //     return `Merhaba, ${name}!`
            
        // }
        // console.log( greetings() ); // -> Merhaba, Selim!
        // console.log( greetings('Bulut') ) // -> Merhaba, Bulut!

    // Yukarıdaki örnek foknisoynu bir de arrow function kullanarak tanımlayalım:

        // const message = (name = 'Selim') => {
        //     let greetings = `Merhaba, ${name}!`;
        //     return greetings
        // }
        // console.log( message() ); // -> Merhaba, Selim!
        // console.log( message('Bulut') ) // -> Merhaba, Bulut!

//! 💻 Exercises:

    // todo Exercises: Level 1

    // todo Exercises: Level 2

    // todo Exercises: Level 3

//! 🎉 CONGRATULATIONS ! 🎉


        
