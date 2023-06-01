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

    // todo Exercises: Level 1

        //? 1. -> Declare a function fullName and it print out your full name.

            function printFullName() {
                let firstName = "Selim";
                let lastName = "Biber";
                const someSpace = " ";

                const fullName = firstName + someSpace + lastName;
                return fullName
            } console.log( printFullName() ); // -> Selim Biber

        //? 2. -> Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

            function fullName (firstName, lastName) {
                console.log(firstName + " " + lastName);
            } fullName('Selim', 'Biber'); // -> Selim Biber

        //? 3. -> Declare a function addNumbers and it takes two two parameters and it returns sum.

            function addNumbers (numberOne, numberTwo) {
                const sum = numberTwo + numberOne;
                return sum
            } console.log( addNumbers(5, 3) ); // -> 8

        //? 4. -> An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

            function areaOfRectangle (length, width) {
                const area = length * width;
                return area
            } console.log( areaOfRectangle(10, 25) ); // -> 250

        //? 5. -> A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

            function perimeterOfRectangle (length, width) {
                const perimeter = 2*(length + width);
                return perimeter
            } console.log( perimeterOfRectangle(3, 5) ); // -> 16

        //? 6. -> A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

            function volumeOfRectPrism (length, width, height) {
                const volume = length * width * height;
                return volume
            } console.log( volumeOfRectPrism(10, 20, 30) ); // -> 6000

        //? 7. -> Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.

            function areaOfCircle (radius) {
                const area = Math.PI * radius * radius;
                return area
            } console.log( areaOfCircle(5) ); // -> 78.53981633974483

        //? 8. -> Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.

            function circumOfCircle(radius) {
                const circumference = 2 * Math.PI * radius;
                return circumference
            } console.log( circumOfCircle(10) ); // -> 62.83185307179586

        //? 9. -> Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

            function calcDensity(mass, volume) {
                const density = mass/volume;
                return density
            } console.log( calcDensity(120, 20) ); // -> 6

        //? 10. -> Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

            function calcMovingObjectSpeed(distance, time) {
                const speed = distance / time;
                return speed
            } console.log ( calcMovingObjectSpeed(250,30) ); // -> 8.333333333333334

        //? 11. -> Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

            function calcWeight(mass = 10, gravity = 9.81) {
                const weight = mass*gravity;
                return weight
                
            } console.log( calcWeight() ); // -> 98.10000000000001

        //? 12. -> Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

            function convertCelsiusToFahrenheit(celsius) {
                const fahrenheit = (celsius * 9/5) + 32;
                return fahrenheit;
            } console.log( convertCelsiusToFahrenheit(30) ); // -> 86

        //? 13. -> Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

            /*
                
                The same groups apply to both men and women.
                Underweight: BMI is less than 18.5
                Normal weight: BMI is 18.5 to 24.9
                Overweight: BMI is 25 to 29.9
                Obese: BMI is 30 or more

            */

                function calculateBodyMassIndex(weight, height) {
                    height = height / 100; // -> convert height to meters
                    const bmi = weight / (height*height); // -> calculate bmi

                    if (bmi < 18.5) {
                        return "Underweight: BMI is less than 18.5";
                    } else if (bmi >= 18.5 && bmi <= 24.9) {
                        return "Normal weight: BMI is 18.5 to 24.9";
                    } else if (bmi >= 25 && bmi <= 29.9) {
                        return "Overweight: BMI is 25 to 29.9";
                    } else {
                        return "Obese: BMI is 30 or more";
                    }
                } console.log( calculateBodyMassIndex(73,173) ); // -> Normal weight: BMI is 18.5 to 24.9

        //? 14. -> Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

                function checkSeason(month) {
                    switch (month) {
                        case "March":
                        case "April":
                        case "May":
                            return "Spring";
                        case "June":
                        case "July":
                        case "August":
                            return "Summer";
                        case "September":
                        case "October":
                        case "November":
                            return "Autumn";
                        case "December":
                        case "January":
                        case "February":
                            return "Winter";
                        default:
                            return "Unknown weather!";
                    }
                } console.log( checkSeason("September") ); // -> Autumn

        //? 15. -> Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

            /*
                console.log(findMax(0, 10, 5))
                10
                console.log(findMax(0, -10, -2))
                0
            */

                function findMaxValue(value1, value2, value3) {
                    maximum = value1, value2, value3;

                    if (value1 > value2 && value1 > value3) {
                        return "Maximum: " + value1
                    } else if (value2 > value1 && value2 > value3) {
                        return "Maximum: " + value2
                    } else if (value3 > value1 && value3 > value2) {
                        return "Maximum: " + value3
                    } else {
                        return "Unknown State!";
                    }
                } console.log( findMaxValue(1, 2, 3) ); // -> Maximum: 3
                
    // todo Exercises: Level 2

        //? 1. -> Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

        //? 2. -> Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

            /*
                console.log(solveQuadratic()) // {0}
                console.log(solveQuadratic(1, 4, 4)) // {-2}
                console.log(solveQuadratic(1, -1, -2)) // {2, -1}
                console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
                console.log(solveQuadratic(1, 0, -4)) //{2, -2}
                console.log(solveQuadratic(1, -1, 0)) //{1, 0}
            */

        //? 3. -> Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

        //? 4. -> Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

            /*
                showDateTime()
                08/01/2020 04:08    
            */

        //? 5. -> Declare a function name swapValues. This function swaps value of x to y.

            /*
                swapValues(3, 4) // x => 4, y=>3
                swapValues(4, 5) // x = 5, y = 4
            */

        //? 6. -> Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

            /*
                console.log(reverseArray([1, 2, 3, 4, 5]))
                [5, 4, 3, 2, 1]
                console.log(reverseArray(['A', 'B', 'C']))
                ['C', 'B', 'A']
            */

        //? 7. -> Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

        //? 8. -> Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.

        //? 9. -> Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.

        //? 10. -> Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

        //? 11. -> Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

        //? 12. -> Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

        //? 13. -> Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

            /*
                evensAndOdds(100);
                The number of odds are 50.
                The number of evens are 51.
            */
        
        //? 14. -> Write a function which takes any number of arguments and return the sum of the arguments.

            /*
                sum(1, 2, 3) // -> 6
                sum(1, 2, 3, 4) // -> 10
            */

        //? 15. -> Write a function which generates a randomUserIp.

        //? 16. -> Write a function which generates a randomMacAddress.

        //? 17. -> Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

            /*
                console.log(randomHexaNumberGenerator());
                '#ee33df'
            */

        //? 18. -> Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

            /*
                console.log(userIdGenerator());
                41XTDbE
            */

    // todo Exercises: Level 3

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

        //? 2. -> Write a function name rgbColorGenerator and it generates rgb colors.

            /*
                rgbColorGenerator()
                rgb(125,244,255)
            */

        //? 3. -> Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

            /*
                Write a function arrayOfRgbColors which return any number of RGB colors in an array.
            */

        //? 4. -> Write a function arrayOfRgbColors which return any number of RGB colors in an array.

        //? 5. -> Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

        //? 6. -> Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

        //? 7. -> Write a function generateColors which can generate any number of hexa or rgb colors.

            /*
                console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
                console.log(generateColors('hexa', 1)) // '#b334ef'
                console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
                console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
            */

        //? 8. -> Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

        //? 9. -> Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

        //? 10. -> Call your function isEmpty, it takes a parameter and it checks if it is empty or not.

        //? 11. -> Call your function sum, it takes any number of arguments and it returns the sum.

        //? 12. -> Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

        //? 13. -> Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

        //? 14. -> Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

            /*
                console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
                ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

                console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
                ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

                console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
                  'Not Found'
            */

        //? 15. -> Write a function called isPrime, which checks if a number is prime number.

        //? 16. -> Write a functions which checks if all items are unique in the array.

        //? 17. -> Write a function which checks if all the items of the array are the same data type.

        //? 18. -> JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

        //? 19. -> Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

            /*
                sevenRandomNumbers()
                [(1, 4, 5, 7, 9, 8, 0)]
            */

        //? 20. -> Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array.

//! 🎉 CONGRATULATIONS ! 🎉


        
