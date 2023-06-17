/*** Day 9 = Higher Order Functions (Yüksek Dereceden Fonksiyonlar)
 *? https://30dayjavascript.js.org/09-day/
 *? https://tr.javascript.info/function-expressions
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 9:
    
    Higher Order Functions - Yüksek Dereceden Fonksiyonlar
        Callback
        Returning function
        Setting time
            Setting Interval using a setInterval function
            Setting a time using a setTimeout
    Functional Programming- Fonksiyonel Programlama
        forEach
        map
        filter
        reduce
        every
        find
        findIndex
        some
        sort
            Sorting string values
            Sorting Numeric values
            Sorting Object Arrays
    💻 Exercises
        Exercises: Level 1
        Exercises: Level 2
        Exercises: Level 3
*/

//! Higher Order Function - Yüksek Dereceden Fonksiyon

    /*
        Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

        Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise callback fonksiyon denir.
    */

    //* Callback: Callback fonksiyon yukarıda da söyledindiği gibi bir başka fonksiyona parametre olarak verilen fonksiyonlardır.

    /*
        // callback fonksiyonun adını istediğimiz şekilde verebiliriz.
        const callback = (n) => {
            return n ** 2
        }
        ​
        // bir başka fonksiyonu callback olarak alan fonksiyon
        function cube(callback, n) {
            return callback(n) * n
        }
        ​
        console.log(cube(callback, 3))
    */

    //* Returning function: Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir. ​

        //! Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.

            const higherOrder = n => {
                const doSomething = m => {
                    const doWhatEver = t => {
                        return 2 * n + 3 * m + t
                    }
                    return doWhatEver
                }
                return doSomething
            }
            // console.log(higherOrder(2)(3)(10));

        //! Callback fonksiyonunu nasıl kullandığımızı görelim. Örneğin foreach metodu callback kullanan metotlarından biridir.

            // const numbers = [1, 2, 3, 4];

            // const sumArray = array => {
            //     let sum = 0;

            //     const callback = function(element) {
            //         sum += element;
            //     }
            //     array.forEach(callback)
            //     return sum
            // }
            // console.log( sumArray(numbers) ); // -> 10

                //! Yukarıdaki örnek aşağıdaki gibi basitleştirilebilir:

                    // const sumArray = array => {
                    //     let sum = 0;

                    //     array.forEach( function(element) {
                    //         sum += element;
                    //     } )
                    //     return sum
                    // }
                    // console.log( sumArray(numbers) ); // -> 10

    //* Setting time: JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

        //* setInterval fonksiyonu ile süre ayarlama: JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için SetInterval fonksiyonunu kullanırız. SetInterval, genel olarak bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre alararak kullanılır.

            /*
                // syntax
                var duration = 10
                function callback() {
                    // code goes here
                }
                setInterval(callback, duration)
            */

                function sayHello(message) {
                    console.log('Hello ' + message)
                }
                // setInterval(sayHello('World', 1000)); // -> saniyede 1 Hello World yazdırır, 1000ms = 1s

        //* setTimeout ile zaman ayarlama: JavaScriptte belli bazı işlemleri gelecekteki belli bir zamanda gerçekleştirmek için Yüksek Dereceden Fonksiyon olan setTimeot fonksiyonunu kullanırız. setTimeout, genel olarak bir callback fonksiyonu ve ikinci olarak, beklemek istediğimiz süreyi parametre alararak kullanılır.
        
            /*
                // syntax
                function callback() {
                    // code goes here
                }
                setTimeout(callback, duration) 
            */

                function sayHello(message) {
                    console.log('Hello ' + message)
                }
                // setTimeout(sayHello('World', 9000)); // -> 9 milisaniye bekledikten sonra Hello World yazdıracak.

//! Functional Programming - Fonksiyonel Programalama

    /*
        JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur.Göreceğimiz tüm metotlar callback fonksiyonu ile birlikte kullanılabilir.
        
        Bu bölümde, forEach, map, filter, reduce, find, every, some, and sort metodlarını göreceğiz
    */

    //* forEach: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.

        /*
            arr.forEach(function (element, index, arr) {
                console.log(index, element, arr)
            })
            // Yukarıdaki kod arrow function kullanılarak yazılabilir.
            arr.forEach((element, index, arr) => {
                console.log(index, element, arr)
            })
            // Daha basite indirgemek istersek
            arr.forEach((element, index, arr) => console.log(index, element, arr))
        */

            // let sum = 0;
            // let evenNumbers = [0, 2, 4, 6, 8];

            // evenNumbers.forEach(number => console.log(number)); // -> 0 2 4 6 8

            // evenNumbers.forEach(number => sum+=number );
            // console.log(sum); // -> 20

            // const europeanCountries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

            // europeanCountries.forEach( (country) => console.log( country.toUpperCase() ) );
            // -> FINLAND DENMARK SWEDEN NORWAY ICELAND
            
    //* map: Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.

        // const modifiedArray = arr.map(function (element, index, arr) {
        //     return element
        // })

        // const numbers = [1, 2, 3, 4, 5];

        // const numbersSquare = numbers.map( (num) => num * num );
        // console.log(numbersSquare); // -> (5) [1, 4, 9, 16, 25]

        // const randomNames = ['Ali', 'Veli', 'Hasan', 'Mustafa'];

        // const namesToUpperCase = randomNames.map ( (name) => name.toUpperCase() );
        // console.log(namesToUpperCase); // -> (4) ['ALI', 'VELI', 'HASAN', 'MUSTAFA']

        const someCountries = [
            'Albania',
            'Bolivia',
            'Canada',
            'Denmark',
            'Ethiopia',
            'Finland',
            'Germany',
            'Hungary',
            'Ireland',
            'Japan',
            'Kenya',
        ]

        // const countriesToUpperCase = someCountries.map ( (country) => country.toUpperCase() );
        // console.log(countriesToUpperCase); // -> (11) ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

        // -> Arrow Function Solution:

        // const countriesToUpperCase = someCountries.map ( (country) => {
        //     return country.toUpperCase();
        // })
        // console.log(countriesToUpperCase);

        // Explicit return arrow function
        // const countriesToUpperCase = someCountries.map ( country => country.toUpperCase() );
        // console.log(countriesToUpperCase);

        // const countriesFirstThreeLetters = someCountries.map ( country => country.slice(0, 3).toUpperCase() );
        // console.log(countriesFirstThreeLetters); (11) // -> ['ALB', 'BOL', 'CAN', 'DEN', 'ETH', 'FIN', 'GER', 'HUN', 'IRE', 'JAP', 'KEN']

    //* Filter: Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür

        const countriesContainingLand = someCountries.filter( country => country.includes('land') );
        // console.log(countriesContainingLand); // -> (2) ['Finland', 'Ireland']

        const countriesEndsByia = someCountries.filter( country => country.endsWith('ia') );
        // console.log(countriesEndsByia); // -> (3) ['Albania', 'Bolivia', 'Ethiopia']

        const countriesHaveFiveLetters = someCountries.filter( country => country.length === 5 );
        // console.log(countriesHaveFiveLetters); // -> (2) ['Japan', 'Kenya']

        const scores = [
            {name: 'Birinci', score: 100},
            {name: 'Ikinci', score: 90},
            {name: 'Ucuncu', score: 80},
            {name: 'Dorduncu', score: 70},
        ]

        const scoresGreaterEighty = scores.filter( puan => puan.score >= 90 );
        // console.log(scoresGreaterEighty); // -> {name: 'Birinci', score: 100} {name: 'Ikinci', score: 90}

    //* reduce: Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

        // syntax

            // arr.reduce((acc, cur) => {
            //     // bir değer döndürmeden önce bazı işlevler buraya kodlanır
            // return 
            // }, initialValue)

        // example

        const numbers = [1, 2, 3, 4, 5]
        // const sum = numbers.reduce( (acc,cur) => acc+cur, 0 );
        // console.log(sum); // -> 15

        const sum = numbers.reduce( (acc,cur) => acc+cur, 5 );
        // console.log(sum); // -> 20

    //* every: Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol eder. Booelan türünde geri dönüş yapar.

        // const areAllStr = randomNames.every( (name) => typeof name === 'string' );
        // console.log(areAllStr); // -> true

        const randomArray = [
            1,
            true,
            'Selim'
        ]
        const areAllNum = randomArray.every( (areAllNum) => typeof areAllNum === 'number' );
        // console.log(areAllNum); // -> false

        const trueBools = [true, true, true]

        const areAllTrue = trueBools.every( (element) => element === true );
        // console.log(areAllTrue); // -> true

    //* find: İstenilen koşulu karşılayan ilk elemanı geri döndürür.

        const ages = [24, 22, 25, 32, 35, 18]
        const age = ages.find( (age) => age >= 23 );
        // console.log(age); // -> 24

        // const name = randomNames.find( (name) => name.length > 5 );
        // console.log(name); // -> Mustafa

        const score = scores.find( (user) => user.score < 90 );
        // console.log(score); // -> {name: 'Ucuncu', score: 80}

    //* findIndex: koşulu karşılayan ilk elemanın index değerini döndürür.

        // const nameIndex = randomNames.findIndex( (name) => name.length > 5 );
        // console.log(nameIndex); // -> 3

        const ageIndex = ages.findIndex( (age) => age < 24 );
        // console.log(ageIndex); // -> 1

    //* some: Dizinin en az bir öğesinin sağlanan ölçütü karşılayıp karşılamadığını belirlemek için kullanılır.

        //! every() ve some() fonksiyonunun farkı: Herhangi bir koşul sağlanırsa some() fonksiyonu true değerini döndürmesi, ancak bunların tümü doğruysa every() fonksiyonunun true, döndürmesidir.

        const objects = [
            {},
            {},
            {},
        ]
        const areAllObj = objects.some( (nesne) => typeof nesne === 'string' ); // -> are all objects?
        // console.log(areAllObj); // -> false

    //* sort: sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler.
        
        // String değerleri sıralama:
        // console.log( randomNames.sort() ); // -> (4) ['Ali', 'Hasan', 'Mustafa', 'Veli']

        // Number değerleri sıralamak ise o kadar basit değil. Sıralama yöntemini doğrudan bir sayı dizisine uygularsak, beklenmedik bir sonuç göreceğiz:

        const randomNumbers = [9.81, 3.14, 100, 37]
        // console.log( randomNumbers.sort() ); // -> (4) [100, 3.14, 37, 9.81]

        /*
            Sayısal değerleri artan veya azalan düzende sıralamak için, sıralama kriterini belirleyen bir fonksiyon kullanmamız gerekir. Sıralama yöntemi neyse ki negatif, sıfır ve pozitif değerleri doğru sırada sıralayabilir. Sort() methodu iki değeri karşılaştırdığında, değerleri karşılaştırma fonksiyonuna gönderir ve döndürülen değere göre sıralar.
            
                Sonuç negatifse; a, b'den önce sıralanır
                Sonuç pozitifse; a, b'den sonra sıralanır
                Sonuç 0 ise; hiçbir şey değişmez

            Tek ihtiyacımız olan ise sort() metodu içinde karşılaştırma fonksiyonu kullanmak.
        */

            randomNumbers.sort(function (a, b) {
                return a-b;
            })
            // console.log(randomNumbers); // -> (4) [3.14, 9.81, 37, 100]

            // tersinden sıralamak istersek:

            randomNumbers.sort(function (a, b) {
                return b-a;
            })
            // console.log(randomNumbers); // -> (4) [100, 37, 9.81, 3.14]

        // Array nesnelerini sıralamak: Bir dizideki nesneleri sıraladığımız zaman karşılaştırmak için key objesini kullanırız.

        // objArr.sort(function (a, b) {
        //     if (a.key < b.key) return -1
        //     if (a.key > b.key) return 1
        //     return 0
        // })
          
        // // or
          
        //   objArr.sort(function (a, b) {
        //     if (a['key'] < b['key']) return -1
        //     if (a['key'] > b['key']) return 1
        //     return 0
        // })

        someCountries.sort(function (a, b) {
            if (a.key < b.key) return -1
            if (a.key > b.key) return 1
            return 0
        })
        // console.log(someCountries); 
        // -> (11) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

//! 💻 Exercises

    //* Exercises: Level 1

    const northCountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    const someNames = ['Hasan', 'Ali', 'Veli', 'Mustafa']
    const firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'milk', price: 10 },
        { product: 'tea', price: '' },
    ]

        //? 1. -> Explain the difference between forEach, map, filter, and reduce.

            /*
                forEach() fonksiyonu ile bir dizideki tüm elemanlara kolaylıkla dolaşabiliriz.
                forEach() fonksiyonu Array nesnesi yani bir dizi üzerinden çağrılmalıdır.
                forEach() fonksiyonuna gönderdiğimiz callback fonksiyonu dizideki her bir elemana ulaşıldığında çağrılır.

                map() fonksiyonu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. O dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi meydana getirir.

                filter() fonksiyonu, bir dizi içerisinden birden fazla elemanı olan bir liste döndüreceksek kullanılabilir, lakin eğer belirlediğimiz koşula göre tek bir elemanı istiyorsak o zaman find() fonksiyonu kullanılabilir.

                reduce() fonksiyonu, verilen bir koşula göre diziden tek bir eleman almak için kullanılır. En yüksek değerli elemanı alma, elemanların toplamını bulma gibi işlemlerde kullanılabilir. 
            */

        //? 2. -> Define a callback function before you use it in forEach, map, filter or reduce.

            // function callback(element, index, array) {

            // }

        //? 3. -> Use forEach to console.log each country in the northCountries array.

            // northCountries.forEach( country => console.log(country) );
            // -> Finland Sweden Denmark Norway Iceland

        //? 4. -> Use forEach to console.log each name in the someNames array.

            // someNames.forEach( name => console.log(name) );
            // -> Hasan Ali Veli Mustafa

        //? 5. -> Use forEach to console.log each number in the firstNumbers array.

            // firstNumbers.forEach( num => console.log(num) );
            // -> 1 2 3 4 5 6 7 8 9 10

        //? 6. -> Use map to create a new array by changing each country to uppercase in the northCountries array.

            // let bigCountries = northCountries.map( country => country.toUpperCase() ); console.log(bigCountries);
            // -> (5) ['FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND']

        //? 7. -> Use map to create an array of countries length from northCountries array.

            // countriesLengths = northCountries.map( country => country.length ); console.log(countriesLengths);
            // -> (5) [7, 6, 7, 6, 7]

        //? 8. -> Use map to create a new array by changing each number to square in the firstNumbers array.

            // let squareOfNumbers =  firstNumbers.map( num => num * num ); console.log(squareOfNumbers);
            // -> (10) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

        //? 9. -> Use map to change to each name to uppercase in the someNames array.

            // let bigNames = someNames.map ( name => name.toUpperCase() ); console.log(bigNames);
            // -> (4) ['HASAN', 'ALI', 'VELI', 'MUSTAFA']

        //? 10. -> Use map to map the products array to its corresponding prices.

            // products.map( product => console.log( product.product + " = " + product.price ) );
            // -> banana = 3 | mango = 6 | potato | avocado = 8 | milk = 10 | tea =

        //? 11. -> Use filter to filter out northCountries containing land.

            let containingLand = northCountries.filter( country => country.includes('land') );
            // console.log(containingLand); // -> ['Finland']

        //? 12. -> Use filter to filter out northCountries having six character.

            let sixCharCountry = northCountries.filter( country => country.length === 6 );
            // console.log(sixCharCountry); // -> (2) ['Sweden', 'Norway']

        //? 13. -> Use filter to filter out northCountries containing six letters and more in the country array.

            // northCountries.filter( country => console.log(country.length >= 6) ); // -> 5 True

        //? 14. -> Use filter to filter out country start with 'E';

            // northCountries.filter( country => console.log( country.startsWith('E') ) ); // -> 5 False

        //? 15. -> Use filter to filter out only prices with values.

            let onlyPricesWithValues = products.filter( product => typeof product.price === 'number');
            // console.log(onlyPricesWithValues); // -> (4) [{…}, {…}, {…}, {…}]

        //? 16. -> Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

            const someRandomTypesArray = [1, true, null, undefined, {}, [], 'Selim', 'Biber']
        
            function getStringsLists(array) {
                return array.filter( item => typeof item === 'string' );
            }; 
            // console.log( getStringsLists(someRandomTypesArray) ); // -> (2) ['Selim', 'Biber']

        //? 17. -> Use reduce to sum all the numbers in the firstNumbers array.

            // let firstNumbersSum = firstNumbers.reduce( num => num + num ); console.log(firstNumbersSum);
            // -> 512

        //? 18. -> Use reduce to concatenate all the northCountries and to produce this sentence: Finland, Sweden, Denmark, Norway, and IceLand are north European countries.

            function createSentence(northCountries) {
                let endCountry = northCountries.splice(-1);
                let joinCountries = northCountries.reduce( (sentence, country) => sentence + ", " + country)
                let sentence = joinCountries + ", and " + endCountry + " are north European countries."
                return sentence;
            } 
            // console.log(createSentence(northCountries) ); 
            // -> Finland, Sweden, Denmark, Norway, and IceLand are north European countries.

        //? 19. -> Explain the difference between some and every.

            /*
                some() fonksiyonu bir dizi içinden istediğimiz herhangi bir değerin bulunup bulunmadığını kontrol eder ve bir tane bile varsa true değerini döndürür aksi halde de false değeri döndürür. Lakin every() fonksiyonu ise istediğimiz değerin dizinin tamamında mevcut olup olmadığını kontrol eder ve buna göre yine Boolean bir ifade döndürür.
            */

        //? 20. -> Use some to check if some names' length greater than seven in someNames array.

            // console.log(someNames.some( name => name.length > 7 )) // -> false

        //? 21. -> Use every to check if all the northCountries contain the word land.

            // console.log(northCountries.some( country => country.includes('land') ) ); // -> true

        //? 22. -> Explain the difference between find and findIndex.

            /*
                find() fonksiyonu ile bir dizinin içinden belirlediğimiz koşula uyan ilk elemanı bulabiliriz. 
                findIndex() fonksiyonu ise bize bir dizinin içinden belirlediğimiz koşula uyan ilk elemanın Index numarasını dönüş yapar.
            */

        //? 23. -> Use find to find the first country containing only six letters in the northCountries array.

            // console.log(northCountries.find( firstCountry => firstCountry.length === 6 ) ); // -> Sweden

        //? 24. -> Use findIndex to find the position of the first country containing only six letters in the northCountries array.

            // console.log(northCountries.findIndex( firstCountryIndex => firstCountryIndex.length === 6 ) ); // -> 1

        //? 25. -> Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

            // console.log(northCountries.findIndex( findNorwayIndex => findNorwayIndex.includes('Norway') ) ); // -> 3

        //? 26. -> Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

            // console.log(northCountries.findIndex( findRussiaIndex => findRussiaIndex.includes('Russia') ) ); // -> -1

    //* Exercises: Level 2

        //? 1. -> Find the total price of products by chaining two or more array iterators( eg. arr.map(callback).filter(callback).reduce(callback) )

        function totalPrice(products) {
            let prices = products.map( product => product.price );
            let notEmptyPrices = prices.filter( onlyNumbers => typeof onlyNumbers === 'number' )
            let totalPriceOfProducts = notEmptyPrices.reduce( (sum, prices) => sum + prices )
            return totalPriceOfProducts;
        }; 
        // console.log( totalPrice(products) ); // -> 27

        //? 2. -> Find the sum of price of products using only reduce reduce(callback) )

            let sumOfPrices = products.reduce( (total, product) => {
                if ( typeof product.price === 'number' && !isNaN(product.price) ) {
                    return total + product.price;
                } else {
                    return total;
                }
            }, 0); 
            // console.log(sumOfPrices); // -> 27

        //? 3. -> Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

            const categorizeCountries = (commonPatterns) => {
                return commonPatterns.filter( country => country.includes('land') || country.includes('ia'))
            }; 
            // console.log(categorizeCountries(countries)); 
            // -> (5) ['Albania', 'Bolivia', 'Ethiopia', 'Finland', 'Ireland']

        //? 4. -> Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

            // -> ChatGPT solution:

            function countCountryLetters(countries) {
                const counts = {};
                for (const country of countries) {
                  const letter = country.charAt(0).toUpperCase();
                  counts[letter] = (counts[letter] || 0) + 1;
                }
                return Object.entries(counts).map(([letter, count]) => ({ letter, count }));
            }; 
            // console.log( countCountryLetters(countries) ); // -> (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] -> {letter: 'A', count: 1} etc.

        //? 5. -> Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array.

            function getFirstTenCountries(countries) {
                return countries.filter( index => countries.indexOf(index)<10 )
            }; 
            // console.log( getFirstTenCountries(countries) );
            // -> (10) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan']

        //? 6. -> Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

            function getLastTenCountries(countries) {
                return countries.filter( index => countries.indexOf(index)>0 )
            }; 
            // console.log( getLastTenCountries(countries) );
            // -> (10) ['Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

        //? 7. -> Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc).

            // -> ChatGPT Solution:

            const worldCountries = ["Finland", "Fiji", "France", "Germany", "Greece", "Hungary", "Italy", "Japan", "Jamaica", "Kenya", "Liberia", "Mexico", "Nigeria", "Norway", "Pakistan", "Panama", "Qatar", "Russia", "Romania", "Spain", "Sweden", "Switzerland", "Thailand", "Turkey", "Ukraine", "United Kingdom", "United States", "Venezuela", "Vietnam", "Yemen", "Zimbabwe"];

            const initialCounts = {};

            // count initial letters
            for (const country of worldCountries) {
                const initial = country.charAt(0).toUpperCase();
                initialCounts[initial] = (initialCounts[initial] || 0) + 1;
            }

            // get highest count
            let highestCount = 0;
            let mostCommonInitial = "";
            for (const initial in initialCounts) {
                if (initialCounts[initial] > highestCount) {
                    highestCount = initialCounts[initial];
                    mostCommonInitial = initial;
                }
            }

            // console.log(`The letter "${mostCommonInitial}" is used most often as initial for a country name, with ${highestCount} occurrences.`);
            // -> The letter "F" is used most often as initial for a country name, with 3 occurrences.

    //* Exercises: Level 3
        
        //? 1. -> Use the randomCountries information. Sort countries by name, by capital, by population.

        const randomCountries = [
            {
              name: 'Afghanistan',
              capital: 'Kabul',
              languages: ['Pashto', 'Uzbek', 'Turkmen'],
              population: 27657145,
              flag: 'https://restcountries.eu/data/afg.svg',
              currency: 'Afghan afghani'
            },
            {
              name: 'Belgium',
              capital: 'Brussels',
              languages: ['Dutch', 'French', 'German'],
              population: 11319511,
              flag: 'https://restcountries.eu/data/bel.svg',
              currency: 'Euro'
            },
            {
              name: 'China',
              capital: 'Beijing',
              languages: ['Chinese'],
              population: 1377422166,
              flag: 'https://restcountries.eu/data/chn.svg',
              currency: 'Chinese yuan'
            },
            {
              name: 'Germany',
              capital: 'Berlin',
              languages: ['German'],
              population: 81770900,
              flag: 'https://restcountries.eu/data/deu.svg',
              currency: 'Euro'
            },
            {
              name: 'Myanmar',
              capital: 'Naypyidaw',
              languages: ['Burmese'],
              population: 51419420,
              flag: 'https://restcountries.eu/data/mmr.svg',
              currency: 'Burmese kyat'
            },
            {
              name: 'Turkey',
              capital: 'Ankara',
              languages: ['Turkish'],
              population: 78741053,
              flag: 'https://restcountries.eu/data/tur.svg',
              currency: 'Turkish lira'
            },
        ]

            // -> Sort by Name of Countries:

                // let countriesNames = randomCountries.map( country => country.name );
                // countriesNames.forEach( name => console.log(name)  );
                // -> Afghanistan Belgium China Germany Myanmar Turkey

            // -> Sort by Capital of Countries:

                // let countriesCapitals = randomCountries.forEach( country => console.log( country.capital) );
                // -> Kabul Brussels Beijing Berlin Naypyidaw Ankara

            // -> Sort by Population of Countries:

                // let countriesPopulations = randomCountries.forEach( country => console.log( country.population) );
                // -> 27657145 11319511 1377422166 81770900 51419420 78741053

        //? 2. -> *** Find the 10 most spoken languages:

            /*
                // Your output should look like this
                console.log(mostSpokenLanguages(countries, 10))
                [
                {country: 'English',count:91},
                {country: 'French',count:45},
                {country: 'Arabic',count:25},
                {country: 'Spanish',count:24},
                {country:'Russian',count:9},
                {country:'Portuguese', count:9},
                {country:'Dutch',count:8},
                {country:'German',count:7},
                {country:'Chinese',count:5},
                {country:'Swahili',count:4}
                ]

                // Your output should look like this
                console.log(mostSpokenLanguages(countries, 3))
                [
                {country: 'English',count: 91},
                {country: 'French',count: 45},
                {country: 'Arabic',count: 25},
                ]
            */

                // ChatGPT Solution:

                function mostSpokenLanguages(countries, numLanguages) {
                    let languageCount = {};
                    countries.forEach((country) => {
                        country.languages.forEach((language) => {
                            if (languageCount.hasOwnProperty(language.name)) {
                                languageCount[language.name] += 1;
                            } else {
                                languageCount[language.name] = 1;
                            }
                        });
                    });
                    let topLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]).slice(0, numLanguages);
                        return topLanguages.map((language) => {
                        return { country: language[0], count: language[1] };
                    });
                }
    
                // console.log(mostSpokenLanguages(randomCountries, 10));

        //? 3. -> *** Use randomCountries array and create a function which create the ten most populated countries

            /*
                console.log(mostPopulatedCountries(countries, 10))

                [
                {country: 'China', population: 1377422166},
                {country: 'India', population: 1295210000},
                {country: 'United States of America', population: 323947000},
                {country: 'Indonesia', population: 258705000},
                {country: 'Brazil', population: 206135893},
                {country: 'Pakistan', population: 194125062},
                {country: 'Nigeria', population: 186988000},
                {country: 'Bangladesh', population: 161006790},
                {country: 'Russian Federation', population: 146599183},
                {country: 'Japan', population: 126960000}
                ]

                console.log(mostPopulatedCountries(countries, 3))
                [
                {country: 'China', population: 1377422166},
                {country: 'India', population: 1295210000},
                {country: 'United States of America', population: 323947000}
                ]
            */

                // function mostPopulatedCountries(countries) {
                //     let sortedCountries = countries.sort( (a, b) => b.population - a.population)
                //     return sortedCountries.slice(0, 10);
                // }; console.log([
                //     {country: 'China', population: 1377422166},
                //     {country: 'India', population: 1295210000},
                //     {country: 'United States of America', population: 323947000},
                //     {country: 'Indonesia', population: 258705000},
                //     {country: 'Brazil', population: 206135893},
                //     {country: 'Pakistan', population: 194125062},
                //     {country: 'Nigeria', population: 186988000},
                //     {country: 'Bangladesh', population: 161006790},
                //     {country: 'Russian Federation', population: 146599183},
                //     {country: 'Japan', population: 126960000}
                // ])

        //? 4. -> ** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

        /*
            const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

            console.log('Count:', statistics.count()) // 25
            console.log('Sum: ', statistics.sum()) // 744
            console.log('Min: ', statistics.min()) // 24
            console.log('Max: ', statistics.max()) // 38
            console.log('Range: ', statistics.range() // 14
            console.log('Mean: ', statistics.mean()) // 30
            console.log('Median: ',statistics.median()) // 29
            console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
            console.log('Variance: ',statistics.var()) // 17.5
            console.log('Standard Deviation: ', statistics.std()) // 4.2
            console.log('Variance: ',statistics.var()) // 17.5
            console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

            console.log(statistics.describe())
            Count: 25
            Sum:  744
            Min:  24
            Max:  38
            Range:  14
            Mean:  30
            Median:  29
            Mode:  (26, 5)
            Variance:  17.5
            Standard Deviation:  4.2
            Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
        */

            /* chatGPT solution:

                class Statistics {
                constructor(data) {
                    this.data = data;
                }

                // Measures of Central Tendency
                mean() {
                    const sum = this.data.reduce((acc, val) => acc + val, 0);
                    return sum / this.data.length;
                }

                median() {
                    const sorted = this.data.sort((a, b) => a - b);
                    const mid = Math.floor(sorted.length / 2);
                    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
                }

                mode() {
                    const freq = {};
                    for (let i = 0; i < this.data.length; i++) {
                    freq[this.data[i]] = (freq[this.data[i]] || 0) + 1;
                    }
                    let mode = null;
                    let count = 0;
                    for (const key in freq) {
                    if (freq[key] > count) {
                        mode = key;
                        count = freq[key];
                    }
                    }
                    return mode;
                }

                // Measures of Variability
                range() {
                    return Math.max(...this.data) - Math.min(...this.data);
                }

                variance() {
                    const mean = this.mean();
                    const diff = this.data.map((val) => val - mean);
                    const squared = diff.map((val) => Math.pow(val, 2));
                    return squared.reduce((acc, val) => acc + val, 0) / this.data.length;
                }

                standardDeviation() {
                    return Math.sqrt(this.variance());
                }

                // Additional Measures
                min() {
                    return Math.min(...this.data);
                }

                max() {
                    return Math.max(...this.data);
                }

                count() {
                    return this.data.length;
                }

                percentile(n) {
                    const sorted = this.data.sort((a, b) => a - b);
                    const index = (n / 100) * (sorted.length - 1);
                    const floor = Math.floor(index);
                    const ceil = Math.ceil(index);
                    if (floor === ceil) {
                    return sorted[floor];
                    }
                    const lower = sorted[floor] * (ceil - index);
                    const upper = sorted[ceil] * (index - floor);
                    return lower + upper;
                }

                frequencyDistribution() {
                    const freq = {};
                    for (let i = 0; i < this.data.length; i++) {
                    freq[this.data[i]] = (freq[this.data[i]] || 0) + 1;
                    }
                    return freq;
                }
                }

                const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

                const stats = new Statistics(ages);

                console.log(`Mean: ${stats.mean()}`);
                console.log(`Median: ${stats.median()}`);
                console.log(`Mode: ${stats.mode()}`);
                console.log(`Range: ${stats.range()}`);
                console.log(`Variance: ${stats.variance()}`);
                console.log(`Standard Deviation: ${stats.standardDeviation()}`);
                console.log(`Min: ${stats.min()}`);
                console.log(`Max: ${stats.max()}`);
                console.log(`Count: ${stats.count()}`);
                console.log(`Percentile 50: ${stats.percentile(50)}`);
                console.log(`Frequency Distribution: ${JSON.stringify(stats.frequencyDistribution())}`);
            */
    
//! 🎉 CONGRATULATIONS ! 🎉