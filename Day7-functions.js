/*** Day 7 = Functions (Fonksiyonlar)
 *? https://30dayjavascript.js.org/07-day/
 *? https://tr.javascript.info/function-basics
 *? https://tr.javascript.info/function-expressions
 *? https://tr.javascript.info/arrow-functions-basics
 *? https://tr.javascript.info/javascript-specials#fonksiyonlar
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

        //!NOT: Fonksiyon ifadesi bir isme sahip olabilir fakat bu isim sadece bu fonksiyon içinde kullanılabilir. Örneğin: let toplam = function isim(a,b) gibi.

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

/* Summary (Özet):

    * Fonksiyon tanımı eğer kod bloğunun içerisinde tanımlanırsa o bloğun içerisinde her yerde kullanılabilir. Fakat dışarıda kullanılamaz.
    * Fonksiyona paslanan parametreler yerel değişken olarak fonksiyon içerisinde kopyalanırlar.
    * Fonksiyon dışarıdaki değişkene erişebilir. Fakat içeride yaratılmış bir değişken dışarıda kullanılamaz.
    * Fonksiyon değer döndürebilir. Eğer döndürmezse undefined olarak tanımlanır.
    
    Kodun daha anlaşılır ve okunabilir olması için, fonksiyonlar içerisinde yerel değişken kullanılması önerilir. Dış değişkenler kullanılması önerilmez.

    Eğer fonksiyon parametre ile değer alır ve bu değer üzerinde çalışıp değer geri döndürürse anlaşılırlığı artar. Fakat eğer fonksiyon hiçbir parametre almadan sadece dışarıdaki değişkenleri değiştiriyor ise kodun anlaşılırlığı büyük ölçüde azalır.

    !Fonksiyon isimlendirme:

    * Bir isim fonksiyonun ne işe yaradığını açıklayabiliyor olmalıdır. İyi bir isim fonksiyonun okunmadan ne iş yaptığına dair fikir verir.
    * Fonksiyon bir fiili yerine getirdiğinden, fonksiyon isimleri yüklem olmalıdır.
    * Örnek kaç tane ek , create... , show..., get..., check... vs.
    
    !Fonksiyon İfadeleri:

    *Fonksiyonlar değerdir. Atanabilir, kopyalanabilir ve kodun herhangi bir yerinde tanımlanabilirler.
    *Fonksiyon tanımları kod çalıştırmadan önce işlenir. Böylece kodun her yerinden ulaşılabilir olurlar.
    *Fonksiyon tanımları ise kod çalışırken bu tanıma erişirse çalışır.

    Çoğu zaman Fonksiyon Tanımı metodu tercih edilmelidir. Çünkü bu şekilde fonksiyon tanımlanmadan önce fonksiyon çağrısı yapmak mümkündür. Bu kodun daha düzenli tutulmasında yardımcı olur. Ayrıca daha okunabilirdir.

    Fonksiyon ifadesi sadece Fonksiyon Tanımı yetersiz kalırsa kullanılmalıdır. 

    !Ok (Arrow) Fonksiyonları: 
    Ok Fonksiyonları tek satır için kullanışlıdır. İki türlüsü vardır:

    1. Süslü parantez olmadan: Fonksiyon sağ taraftaki ifadeyi çalıştırır ve sonucu döndürür. Tek satırda biten işlemler için kullanılmalıdır.
    2. Süslü parantez ile (...args) => { gövde } – süslü parantez bizim birden fazla satır yazmamızı sağlar. Fakat gövde içerisinde return kullanılması gerekmektedir.
*/


//! 💻 Exercises:

    //? Exercises: Level 1

        //? 1. -> Declare a function fullName and it print out your full name.

            function printFullName() {
                let firstName = "Selim";
                let lastName = "Biber";
                const someSpace = " ";

                const fullName = firstName + someSpace + lastName;
                return fullName
            } console.log( printFullName() ); // -> Selim Biber

        //? 2. -> Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

            // function fullName (firstName, lastName) {
            //     console.log(firstName + " " + lastName);
            // } fullName('Selim', 'Biber'); // -> Selim Biber

        //? 3. -> Declare a function addNumbers and it takes two two parameters and it returns sum.

            // function addNumbers (numberOne, numberTwo) {
            //     const sum = numberTwo + numberOne;
            //     return sum
            // } console.log( addNumbers(5, 3) ); // -> 8

        //? 4. -> An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

            // function areaOfRectangle (length, width) {
            //     const area = length * width;
            //     return area
            // } console.log( areaOfRectangle(10, 25) ); // -> 250

        //? 5. -> A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

            // function perimeterOfRectangle (length, width) {
            //     const perimeter = 2*(length + width);
            //     return perimeter
            // } console.log( perimeterOfRectangle(3, 5) ); // -> 16

        //? 6. -> A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

            // function volumeOfRectPrism (length, width, height) {
            //     const volume = length * width * height;
            //     return volume
            // } console.log( volumeOfRectPrism(10, 20, 30) ); // -> 6000

        //? 7. -> Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.

            // function areaOfCircle (radius) {
            //     const area = Math.PI * radius * radius;
            //     return area
            // } console.log( areaOfCircle(5) ); // -> 78.53981633974483

        //? 8. -> Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.

            // function circumOfCircle(radius) {
            //     const circumference = 2 * Math.PI * radius;
            //     return circumference
            // } console.log( circumOfCircle(10) ); // -> 62.83185307179586

        //? 9. -> Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

            // function calcDensity(mass, volume) {
            //     const density = mass/volume;
            //     return density
            // } console.log( calcDensity(120, 20) ); // -> 6

        //? 10. -> Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

            // function calcMovingObjectSpeed(distance, time) {
            //     const speed = distance / time;
            //     return speed
            // } console.log ( calcMovingObjectSpeed(250,30) ); // -> 8.333333333333334

        //? 11. -> Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

            // function calcWeight(mass = 10, gravity = 9.81) {
            //     const weight = mass*gravity;
            //     return weight
                
            // } console.log( calcWeight() ); // -> 98.10000000000001

        //? 12. -> Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

            // function convertCelsiusToFahrenheit(celsius) {
            //     const fahrenheit = (celsius * 9/5) + 32;
            //     return fahrenheit;
            // } console.log( convertCelsiusToFahrenheit(30) ); // -> 86

        //? 13. -> Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

            /*
                
                The same groups apply to both men and women.
                Underweight: BMI is less than 18.5
                Normal weight: BMI is 18.5 to 24.9
                Overweight: BMI is 25 to 29.9
                Obese: BMI is 30 or more

            */

                // function calculateBodyMassIndex(weight, height) {
                //     height = height / 100; // -> convert height to meters
                //     const bmi = weight / (height*height); // -> calculate bmi

                //     if (bmi < 18.5) {
                //         return "Underweight: BMI is less than 18.5";
                //     } else if (bmi >= 18.5 && bmi <= 24.9) {
                //         return "Normal weight: BMI is 18.5 to 24.9";
                //     } else if (bmi >= 25 && bmi <= 29.9) {
                //         return "Overweight: BMI is 25 to 29.9";
                //     } else {
                //         return "Obese: BMI is 30 or more";
                //     }
                // } console.log( calculateBodyMassIndex(73,173) ); // -> Normal weight: BMI is 18.5 to 24.9

        //? 14. -> Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

                // function checkSeason(month) {
                //     switch (month) {
                //         case "March":
                //         case "April":
                //         case "May":
                //             return "Spring";
                //         case "June":
                //         case "July":
                //         case "August":
                //             return "Summer";
                //         case "September":
                //         case "October":
                //         case "November":
                //             return "Autumn";
                //         case "December":
                //         case "January":
                //         case "February":
                //             return "Winter";
                //         default:
                //             return "Unknown weather!";
                //     }
                // } console.log( checkSeason("September") ); // -> Autumn

        //? 15. -> Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

            /*
                console.log(findMax(0, 10, 5))
                10
                console.log(findMax(0, -10, -2))
                0
            */

                // function findMaxValue(value1, value2, value3) {
                //     maximum = value1, value2, value3;

                //     if (value1 > value2 && value1 > value3) {
                //         return "Maximum: " + value1
                //     } else if (value2 > value1 && value2 > value3) {
                //         return "Maximum: " + value2
                //     } else if (value3 > value1 && value3 > value2) {
                //         return "Maximum: " + value3
                //     } else {
                //         return "Unknown State!";
                //     }
                // } console.log( findMaxValue(1, 2, 3) ); // -> Maximum: 3

    //? Exercises: Level 2

        //? 1. -> Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
                
        // -> chatGPT
        // function solveLinEquation(a, b, c) {
        //     if (a === 0 && b === 0) {
        //         return "Invalid equation: Both a and b can't be zero";
        //     }
        //     let x = -(b * c) / (a * a + b * b);
        //     let y = -(a * x + c) / b;
        //     return { x, y };
        // } console.log( solveLinEquation(2, 3, 6) ); // -> x: -1.3846153846153846 y: -1.0769230769230769

        //? 2. -> Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

            /*
                console.log(solveQuadratic()) // {0}
                console.log(solveQuadratic(1, 4, 4)) // {-2}
                console.log(solveQuadratic(1, -1, -2)) // {2, -1}
                console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
                console.log(solveQuadratic(1, 0, -4)) //{2, -2}
                console.log(solveQuadratic(1, -1, 0)) //{1, 0}
            */

            // -> chatGPT

            // function solveQuadEquation(a, b, c) {
            //     const discriminant = b*b - 4*a*c;
            //         if (discriminant < 0) {return []; // the equation has no real roots
            //     } else if (discriminant === 0) {
            //     const root = -b / (2*a);
            //     return [root]; // the equation has one real root
            //     } else {
            //     let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
            //     let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
            //     return [root1, root2]; // the equation has two real roots
            //     }
            // } // -> {x: -1.3846153846153846, y: -1.0769230769230769}

        //? 3. -> Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

            // function printArray (array) {
            //     for (let i = 0; i < array.length; i++) {
            //         let print = console.log(array[i])
            //     }
            // } 
            // let myArray = ["Selim", "Biber", 53]
            // console.log( printArray(myArray) ); // -> Selim Biber 53

        //? 4. -> Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

            /*
                showDateTime()
                08/01/2020 04:08    
            */

                function showDateTime () {
                    let readableTime = new Date();
                    let readableMonth;
                    let readableDay;
                    let readableHours;
                    let readableMinutes;

                    let currentYear = readableTime.getFullYear();
                    let currentMonth = readableTime.getMonth() + 1;
                    let currentDay = readableTime.getDate();
                    let currentHours = readableTime.getHours();
                    let currentMinutes = readableTime.getMinutes();

                    if (currentMonth < 10) {
                        currentMonth = '0' + currentMonth;
                    } if (currentDay < 10) {
                        currentDay = '0' + currentDay;
                    } if (currentHours < 10) {
                        currentHours = '0' + currentHours;
                    } if (currentMinutes < 10) {
                        currentMinutes = '0' + currentMinutes;
                    } return (`${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}`)
                } console.log( showDateTime() );

        //? 5. -> Declare a function name swapValues. This function swaps value of x to y.

            /*
                swapValues(3, 4) // x => 4, y=>3
                swapValues(4, 5) // x = 5, y = 4
            */
                // -> chatGPT

                
                // function swapValues(x, y) {
                //     const temp = x;
                //     x = y;
                //     y = temp;
                //     return [x, y];
                // }

                // Testing
                // console.log(swapValues(5, 10)); // Output: [10, 5]

                // In this solution, we have declared a function named swapValues that expects two arguments, x and y. Inside the function, we have initialized a temporary variable 'temp' and assigned its value to x. After that, we have assigned the value of y to x and assigned the value of temp to y. Finally, we have returned an array of x and y.

                // We have tested the function by calling it and passing two integers 5 and 10. As a result, we have got an array of [10, 5].

        //? 6. -> Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

            /*
                console.log(reverseArray([1, 2, 3, 4, 5]))
                [5, 4, 3, 2, 1]
                console.log(reverseArray(['A', 'B', 'C']))
                ['C', 'B', 'A']
            */
            //     let numbers = [1, 2, 3, 4, 5];
            //     let letters = ['A', 'B', 'C'];
            // function reverseArray(array) {
            //     let printArray;
            //     for (let i = array.length - 1; i >= 0; i--) {
            //         printArray = console.log(array[i]);
            //     }
            // } 
            // console.log( reverseArray(numbers) ); // -> 5, 4, 3, 2, 1
            // console.log( reverseArray(letters) ); // -> C, B, A

        //? 7. -> Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

            // let letters = ['abc', 'bca', 'cba'];

            //     function capitalizeArray(array) {
            //         let printArray;
            //         for (let i = 0; i < array.length; i++) {
            //             printArray = console.log( array[i].toUpperCase() );
            //         }
            //     } console.log( capitalizeArray(letters) ); // -> ABC, BCA, CBA

        //? 8. -> Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.

                // function addItem(item) {
                //     let newArray = [];
                //     if (item == undefined && item == null && item == ' ') {
                //         console.log( "Invalid value!" );
                //     } else {
                //         newArray.push( item );
                //         console.log(newArray);
                //     }
                // } console.log( addItem('3') ) // -> 3

        //? 9. -> Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.

                // let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                // function removeItem(index) {
                //     index.pop();
                //     return console.log( index );
                // } console.log( removeItem(numbersArray) )

        //? 10. -> Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

                // function sumOfNumbers(n) {
                //     let sum = 0;
                //     for (let i = 1; i <= n; i++) {
                //         sum += i;;
                //     }
                //     return sum
                // } 
                // console.log( sumOfNumbers(53) ); // -> 1431

        //? 11. -> Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

                // function sumOfOdds(n) {
                //     let sum = 0;
                //     for (let i = 1; i <= n; i++) {
                //         if (i % 2 === 1) {
                //             sum += i;
                //         }
                //     }
                //     return sum
                // }
                // console.log( sumOfOdds(53) ); // -> 729

        //? 12. -> Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

                // function sumOfEven(n) {
                //     let sum = 0;
                //     for (let i = 1; i <= n; i++) {
                //         if (i % 2 === 0) {
                //             sum += i;
                //         }
                //     }
                //     return sum
                // }
                // console.log( sumOfEven(53) ); // -> 702

        //? 13. -> Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

            /*
                evensAndOdds(100);
                The number of odds are 50.
                The number of evens are 51.
            */

                // function evensAndOdds(n) {

                //     let evens = [];
                //     let odds = [];
                //     let result;

                //     if (n > 0) {

                //         for (let i = 0; i <= n; i++) {

                //             if (i % 2 === 0) {
                //                 evens.push(i);
                //             } if (i % 2 === 1) {
                //                 odds.push(i);
                //             }
                //         }
                //     } else {
                //         return 'Enter a positive number.'
                //     }
                //     result = console.log(`The number of evens are ${evens.length} and the number of odds are ${odds.length}.`)
                //     return result
                // } console.log( evensAndOdds(100) ); // -> The number of evens are 51 and the number of odds are 50.
        
        //? 14. -> Write a function which takes any number of arguments and return the sum of the arguments.

            /*
                sum(1, 2, 3) // -> 6
                sum(1, 2, 3, 4) // -> 10
            */

                // function sumAllNums() {
                //     let sum = 0;
                //     for (let i = 0; i < arguments.length; i++) {
                //         sum += arguments[i];
                //     }
                //     return sum
                // } console.log( sumAllNums(1, 2, 3, 4) ); // -> 10

        //? 15. -> Write a function which generates a randomUserIp.

                // function printRandomUserIp() {
                //     let digit1 = Math.floor(Math.random(10)*255);
                //     let digit2 = Math.floor(Math.random(10)*255);
                //     let digit3 = Math.floor(Math.random(10)*255);
                //     let digit4 = Math.floor(Math.random(10)*255);

                //     let randomUserIp = `${digit1}.${digit2}.${digit3}.${digit4}`;
                //     console.log( randomUserIp );
                // } printRandomUserIp(); // -> 50.11.188.210 / 233.125.212.8 / 135.120.118.247 / 79.201.207.80

        //? 16. -> Write a function which generates a randomMacAddress.

                // function randomMacAddress() {
                //     let hexDigits = "0123456789ABCDEF";
                //     let randomMac = "";
                //     for (let i= 0; i < 6; i++) {
                //         randomMac+=hexDigits.charAt(Math.round(Math.random() * 15));
                //         randomMac+=hexDigits.charAt(Math.round(Math.random() * 15));
                //         if (i != 5) randomMac += ":";
                //     }
                //     return randomMac
                // } console.log( randomMacAddress() ); // -> 71:64:0E:66:73:57

        //? 17. -> Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

            /*
                console.log(randomHexaNumberGenerator());
                '#ee33df'
            */

                // function randomHexaNumberGenerator() {
                //     const randomNumber = Math.floor( Math.random() * (16777216 + 1) );
                //     let randomHexNumbers = '#' + randomNumber.toString(16);
                //     if (randomHexNumbers.length < 7) {
                //         randomHexNumbers += Math.floor( Math.random() * 9 );
                //     }
                //     return randomHexNumbers
                // } console.log( randomHexaNumberGenerator() ); // -> #792fc9 / #d906d4 / #f71e3e / #43ef7d

        //? 18. -> Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

            /*
                console.log(userIdGenerator());
                41XTDbE
            */
            
            // function userIdGenerator() {
            //     let randomUserId = []
            //     const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ';
            //     const randomChar = letters.split("")
            //     const randomNumber = Math.floor( Math.random() * (12345678) );
            //     randomUserId = randomNumber.toString(36);
            //     randomUserId += randomChar[parseInt(Math.random(10) * 51)]
            //     if (randomUserId.length < 7) {
            //         randomUserId += randomChar[parseInt(Math.random(10) * 51)]
            //     }
            //     console.log(randomUserId)
            // } console.log( userIdGenerator() ); // -> 5hiwuaA / 1n0htdy / 2yklppB / 6r0i5TV / 6t01hsM
                
    //? Exercises: Level 3

        //? 1. -> Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

            /*
                userIdGeneratedByUser()
                'kcsy2
                SMFYb
                bWmeq
                ZXOYh
                2Rgxf
                '
                userIdGeneratedByUser()
                '1GCSgPLMaBAVQZ26
                YD7eFwNQKNs7qXaT
                ycArC5yrRupyG00S
                UbGxOFI7UXSWAyKN
                dIV0SSUTgAdKwStr
                '
            */

                // let userIdGeneratedByUser = () => {

                //     let numberOfChars = parseInt( prompt(" Enter the number of characters: ") );
                //     let numberOfIds = parseInt( prompt(" Enter the number of ids: ") );
                //     const possibleAlphanums = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ';

                //     let userIds = [];

                //     function userIdGenerator() {
                //         let userId = "";
                        
                //         for (let i = 0; i < numberOfChars; i++) {
                //             userId += possibleAlphanums.charAt( Math.floor(Math.random() * possibleAlphanums.length) )
                //         }
                //         return userId;
                //     }
                //     for (let i = 0; i < numberOfIds; i++) {
                //         userIds.push( userIdGenerator() );
                //     }
                //         userIds.join("\n");
                //         console.log( userIds );
                // } 
                // console.log( userIdGeneratedByUser() ); // 7, 3 -> (3) ['sRZ1EZ9', 'TdTFy3T', 'DdYAWiL']

        //? 2. -> Write a function name rgbColorGenerator and it generates rgb colors.

            /*
                rgbColorGenerator()
                rgb(125,244,255)
            */

                // let rgbColorGenerator = () => {
                //     let randomRed = Math.floor(Math.random()*255);
                //     let randomGreen = Math.floor(Math.random()*255);
                //     let randomBlue = Math.floor(Math.random()*255);

                //     const randomRGB = `rgb(${randomRed},${randomGreen},${randomBlue})`;
                //     console.log(randomRGB);
                // }
                // console.log( rgbColorGenerator() ); // -> rgb(29,235,109) / rgb(140,30,53) / rgb(199,192,234)

        //? 3. -> Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

                // const arrayOfHexaColors = () => {
                //     const allHexCodes = '123456789abcdef';
                //     const randomNumber = Math.floor( Math.random() * 10 );
                //     const hexColorArray = [];

                //     for (let i = 0; i <= randomNumber; i++) {
                //         const hexChars = [];
                //         for (let j = 0; j < 6; j++) {
                //             hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
                //         }
                //         hexColorArray.push( '#' + hexChars.join('') );
                //     }
                //     return hexColorArray;
                // }
                // console.log( arrayOfHexaColors() ); // -> (6) ['#379212', '#93a6ee', '#c6a831', '#4da713', '#c571b', '#91ee1']

        //? 4. -> Write a function arrayOfRgbColors which return any number of RGB colors in an array.

                // const arrayOfRgbColors = () => {

                //     const randomNumber = Math.floor(Math.random()*10);
                //     const arrayOfRandomRGB = [];

                //     for (let i = 0; i < randomNumber; i++) {
                //         const randomRed = Math.floor(Math.random()*255);
                //         const randomGreen = Math.floor(Math.random()*255);
                //         const randomBlue = Math.floor(Math.random()*255);

                //         const randomRGB = `rgb(${randomRed},${randomGreen},${randomBlue})`;
                //         arrayOfRandomRGB.push(randomRGB);
                //     }
                //     return arrayOfRandomRGB;
                // }
                // console.log( arrayOfRgbColors() ); // -> (2) ['rgb(61,104,46)', 'rgb(200,170,41)']

        //? 5. -> Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

                // -> chatGPT:

                // function hexToRgb(hex) {
                //     //Separate the hexa color code into three pairs of two characters each
                //     let hexPairs = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
                    
                //     //Convert each pair of characters into its decimal equivalent using the base 16 system
                //     let red = parseInt(hexPairs[1], 16);
                //     let green = parseInt(hexPairs[2], 16);
                //     let blue = parseInt(hexPairs[3], 16);
                    
                //     //Divide each decimal value by 255 to get the fractional equivalent and round off the fractional values to two decimal places.
                //     red = Math.min(red / 255 * 100) / 100;
                //     green = Math.min(green / 255 * 100) / 100;
                //     blue = Math.min(blue / 255 * 100) / 100;
                //     //! -> The chatGPT response used the Math.round method and this caused the fractional number so I used Math.min and it provided the desired result.

                //     //Return the RGB color as a string in the format "rgb(r, g, b)"
                //     return `rgb(${red * 255}, ${green * 255}, ${blue * 255})`;
                // } console.log( hexToRgb("#379212") ); // -> rgb(55, 146, 18)

        //? 6. -> Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

                // -> chatGPT:

                // const convertRgbToHexa = (r, g, b) => {

                //     hex_r = r.toString(16).padStart(2, '0');
                //     hex_g = g.toString(16).padStart(2, '0');
                //     hex_b = b.toString(16).padStart(2, '0');

                //     return console.log(hexColor = '#' + hex_r + hex_g + hex_b);
                    
                // } 
                // convertRgbToHexa(255, 50, 100); // -> #ff3264

        //? 7. -> Write a function generateColors which can generate any number of hexa or rgb colors.

            /*
                console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
                console.log(generateColors('hexa', 1)) // '#b334ef'
                console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
                console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
            */

                // const generateHexaOrRgb = (color, count) => {
                //     let colors = [];

                //     if (color == 'hexa') {
                        
                //         for (let i = 0; i < count; i++) {
                //             let randomHexa = '#' + Math.floor(Math.random()*16777215).toString(16);
                //             colors.push(randomHexa); 
                //         }
                //         console.log(colors);
                //     } else if (color == 'rgb') {

                //         for (let i = 0; i < count; i++) {
                //             let randomRed = Math.floor(Math.random()*255);
                //             let randomGreen = Math.floor(Math.random()*255);
                //             let randomBlue = Math.floor(Math.random()*255);

                //             const randomRgb = `rgb(${randomRed},${randomGreen},${randomBlue})`;
                //             colors.push(randomRgb);
                //         }
                //         console.log(colors);
                //     }     
                // }
                //? console.log( generateHexaOrRgb('rgb', 3) ) 
                //! -> (3) ['rgb(236,129,207)', 'rgb(108,190,167)', 'rgb(108,76,171)']

                //? console.log( generateHexaOrRgb('hexa', 3) ) 
                //! -> (3) ['#66f5b1', '#6216e2', '#5c13a6']

        //? 8. -> Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

            // -> chatGPT

            // function shuffleArray(array) {
            //     for (let i = array.length - 1; i > 0; i--) {
            //         const j = Math.floor(Math.random() * (i + 1));
            //         [array[i], array[j]] = [array[j], array[i]];
            //     }
            //     return array;
            // }
            
             // example usage

            // const myArray = [1, 2, 3, 4, 5];
            // const shuffledArray = shuffleArray(myArray);
            // console.log(shuffledArray); // output: shuffled version of myArray

        //? 9. -> Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

            // -> chatGPT solution:

            // function factorial(num) {
            //     if (num < 0) {
            //         return NaN; // factorial of negative numbers is not defined
            //     } else if (num === 0) {
            //         return 1; // factorial of 0 is 1
            //     } else {
            //         var result = 1;
            //         for (var i = 1; i <= num; i++) {
            //             result *= i;
            //         }
            //         return result;
            //     }
            // }
            
            console.log(factorial(5)); // Output: 120
            console.log(factorial(0)); // Output: 1
            console.log(factorial(-5)); // Output: NaN

        //? 10. -> Call your function isEmpty, it takes a parameter and it checks if it is empty or not.

            // const isEmpty = (checkValue) => {
            //     if (checkValue === undefined) {
            //         return "Empty value!"
            //     } else {
            //         return "Not empty value!"
            //     }
            // }
            console.log( isEmpty() ); // -> Output: Empty value!
            console.log( isEmpty("Hello World") ); // -> Output: Not empty value!

        //? 11. -> Call your function sum, it takes any number of arguments and it returns the sum.

            // const sum = (...args) => {
            //     let totalValue = 0;
            //     for (let each of args) {
            //         totalValue += each
            //     }
            //     return totalValue
            // }
            // console.log( sum(5, 3, 2) ); // -> Output: 10

        //todo 12. -> Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

            const numbersArray = [1, 2, 3, 4]

            const sumOfArrayItems = (array) => {
                let totalValue = 0;
                for (let each of array) {
                    totalValue += each
                }
                return totalValue
            }
            console.log( sumOfArrayItems(numbersArray) ); // -> 10

        //todo 13. -> Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

        //todo 14. -> Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

            /*
                console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
                ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

                console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
                ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

                console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
                  'Not Found'
            */

        //todo 15. -> Write a function called isPrime, which checks if a number is prime number.

        //todo 16. -> Write a functions which checks if all items are unique in the array.

            // chatGPT solution:

        // function allUnique(arr) {
        //     let unique = new Set(arr);
        //     return unique.size === arr.length;
        //     }
            
        //     This function uses a Set to check if all items in the array are unique. A Set only allows unique values, so if the size of the Set matches the length of the original array, then all items are unique.

        //todo 17. -> Write a function which checks if all the items of the array are the same data type.

        //todo 18. -> JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

            /* chatGPT solution: 

                function isValidVariable(variable) {
                check if first character is a letter, $, or _
                if (!variable.match(/^[a-zA-Z\$_]/)) {
                    return false;
                }
                check if subsequent characters are letters, digits, $, or _
                if (!variable.match(/^[a-zA-Z\$_][a-zA-Z0-9\$_]*$/)) {
                    return false;
                }
                return true;
                }

                Example usage:
                console.log(isValidVariable('example')); // true
                console.log(isValidVariable('$var')); // true
                console.log(isValidVariable('_var1')); // true
                console.log(isValidVariable('1var')); // false
                console.log(isValidVariable('ex.ample')); // false
                The isValidVariable function checks if the given variable name is valid or not by using regular expressions. The function first checks if the first character is a letter, $, or _. Then it checks if subsequent characters are letters, digits, $, or _. If the variable name passes both these checks, the function returns true. Otherwise, it returns false.

                The above code includes some sample usage of the function for testing.
            */

        //todo 19. -> Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

            /*
                sevenRandomNumbers()
                [(1, 4, 5, 7, 9, 8, 0)]
            */

        //todo 20. -> Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array.

            // let countries = ["USA", "Canada", "Mexico", "Brazil"];

            // const reverseCountries = (countries) => {
            //     let copy = countries.slice(); // create a copy of the original array
            //     return copy.reverse(); // reverse the copy and return it
            // }
            
//! 🎉 CONGRATULATIONS ! 🎉


        
