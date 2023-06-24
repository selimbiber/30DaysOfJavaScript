/*** Day 13 = Console Object Methods
 *? https://30dayjavascript.js.org/13-day/
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 13:
    
    Console Object Methods
        console.log()
        console.warn()
        console.error()
        console.table()
        console.time()
        console.info()
        console.assert()
        console.group()
        console.count()
        console.clear()
*/

//! console.log()

    /* Çıktıyı tarayıcı konsolunda göstermek için console.log() kullanıyoruz. Değerleri değiştirebiliriz ve ayrıca %c'yi kullanarak log çıkışını biçimlendirebiliriz. */

    console.log('30 Days of JavaScript'); // -> 30 Days of JavaScript

    console.log('%d %s of JavaScript', 30, 'Days'); // -> 30 Days of JavaScript

    //* CSS kullanarak log çıktılarımızı şekillendirebiliriz: 

    console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
    console.log(
    '%c30 Days%c %cOf%c %cJavaScript',
    'color:green',
    '',
    'color:red',
    '',
    'color:blue'
    ) // log output green red and yellow text

//! console.warn()

    /* Tarayıcıda uyarı vermek için console.warn() kullanıyoruz. Örneğin, bir paketin sürümünün kullanımdan kaldırıldığını veya kötü uygulamaları bildirmek veya uyarmak için. */

    // console.warn('This is warning!')

    // console.warn(
    //     'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
    // )

    // console.warn('Warning is different from error')

//! console.error()

    /* Bu method hata mesajları göstermeye yarar. */

    // console.error('This is an error message.')

//! console.table()

    /* console.table() yöntemi, verileri konsolda index ve value veya daha farklı sütunlarla bir tablo olarak görüntüler.  */

    // const myName = ['Selim', 'Biber']
    // console.table(myName);

    // const userInfo = {
    //     name: 'Selim',
    //     title: 'Programmer',
    //     country: 'Turkiye',
    //     city: 'Rize',
    //     age: 24
    // }
    // console.table(userInfo);

    // const nordCountries = [
    //     ['Finland', 'Helsinki'],
    //     ['Sweden', 'Stockholm'],
    //     ['Norway', 'Oslo']
    // ]
    // console.table(nordCountries);

    // const users = [
    //     {
    //       name: 'Selim',
    //       title: 'Programmer',
    //       country: 'Turkiye',
    //       city: 'Rize',
    //       age: 24
    //     },
    //     {
    //       name: 'Eyob',
    //       title: 'Teacher',
    //       country: 'Sweden',
    //       city: 'London',
    //       age: 25
    //     },
    //     {
    //       name: 'Asab',
    //       title: 'Instructor',
    //       country: 'Norway',
    //       city: 'Oslo',
    //       age: 22
    //     },
    //     {
    //       name: 'Matias',
    //       title: 'Developer',
    //       country: 'Denmark',
    //       city: 'Copenhagen',
    //       age: 28
    //     }
    // ]
    // console.table(users)

//! console.time()

    /* Bir işlemin ne kadar sürdüğünü izlemek için kullanabileceğiniz bir zamanlayıcı başlatır. Her zamanlayıcıya benzersiz bir ad verirsiniz ve belirli bir sayfada çalışan en fazla 10.000 zamanlayıcınız olabilir. Aynı adla console.timeEnd() öğesini çağırdığınızda tarayıcı, zamanlayıcının başlatılmasından bu yana geçen süreyi milisaniye cinsinden verir. */

    // const nordCountries = [
    //     ['Finland', 'Helsinki'],
    //     ['Sweden', 'Stockholm'],
    //     ['Norway', 'Oslo']
    // ]
    
    // console.time('Regular for loop')
    // for (let i = 0; i < nordCountries.length; i++) {
    //     console.log(nordCountries[i][0], nordCountries[i][1])
    // }
    // console.timeEnd('Regular for loop')
    
    // console.time('for of loop')
    // for (const [name, city] of nordCountries) {
    //     console.log(name, city)
    // }
    // console.timeEnd('for of loop')
    
    // console.time('forEach loop')
    // nordCountries.forEach(([name, city]) => {
    // console.log(name, city)
    // })
    // console.timeEnd('forEach loop')

//! console.info()

    /* Tarayıcı konsolunda bilgi mesajı görüntüler. (console.log methodundan pek bir farkı yok.) */

    console.info('30 Days Of JavaScript challenge is trending on Github')
    console.info('30 Days Of fullStack challenge might be released')
    console.info('30 Days Of HTML and CSS challenge might be released')

    console.info(3+5); // -> 8

//! console.assert()

    /* Konsol.assert() yöntemleri, iddia yanlışsa konsola bir hata mesajı yazar. İddia doğruysa, hiçbir şey olmaz. İlk parametre bir onaylama ifadesidir. Bu ifade yanlışsa Onaylama başarısız oldu hata mesajı görüntülenecektir. */

    console.assert(4 > 3, '4 is greater than 3') // no result
    console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

    for (let i = 0; i <= 10; i += 1) {
        let errorMessage = `${i} is not even`
        console.log('the # is ' + i)
        console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
    }

//! console.group()

    /* console.group(), farklı log gruplarının gruplanmasına yardımcı olur.  */

    const names = ['Asabeneh', 'Brook', 'David', 'John']
    const nordCountries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
    ]
    const user = {
        name: 'Selim',
        title: 'Programmer',
        country: 'Turkiye',
        city: 'Rize',
        age: 24
    }
    const users = [
    {
        name: 'Selim',
        title: 'Programmer',
        country: 'Turkiye',
        city: 'Rize',
        age: 24
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
    ]

    console.group('Names')
    console.log(names)
    console.groupEnd()

    console.group('Countries')
    console.log(nordCountries)
    console.groupEnd()

    console.group('Users')
    console.log(user)
    console.log(users)
    console.groupEnd()

//! console.count()

    /* console.count() öğesinin kaç kez çağrıldığını yazdırır. Bir dizi etiketi parametresi alır. Bir fonksiyonun kaç kez çağrıldığını saymak çok faydalı olabilir.  */

    const func = () => {
        console.count('Function has been called')
    }
    func()
    func()
    func()

    /*
        Function has been called: 1
        Function has been called: 2
        Function has been called: 3
    */
      
//! console.clear()

    /* console.clear() methodu tarayıcı konsolunu temizler. */

    console.clear(); // -> Console was cleared

//! 💻 Exercises

    // Exercises: Level 1
        
        //? 1. -> Display the nordCountries array as a table

            console.table(nordCountries);

        //? 2. -> Display the users object as a table

            console.table(users);

        //? 3. -> Use console.group() to group logs

            console.group('Nordic Countries');
            console.table(nordCountries);
            console.groupEnd();

            console.group('Some Users');
            console.table(users);
            console.groupEnd();

    // Exercises: Level 2

        
        //? 1. -> 10 > 2 * 10 use console.assert()

            // console.assert(10 > 2 * 10, "10 sayısı 20'den büyük değildir.");

        //? 2. -> Write a warning message using console.warn()

            // console.warn('30 Günlük JavaScript öğrenme serisini bitirmek için hızlanmalısın!');

        //? 3. -> Write an error message using console.error()

            // console.error('Bu eğitim serisini 30 gün içinde tamamlayamadın!');


    // Exercises: Level 3

        //? 1. -> Check the speed difference among the following loops: while, for, for of, forEach

        // console.time('while loop');

        // let addThis = 0;
        // while (addThis < users.length) {
        //   addThis++;
        //   console.table(users);
        // }
        
        // console.timeEnd('while loop'); // -> while loop: 2.758056640625 ms

        // console.time('for loop');

        // for (let i = 0; i < users.length; i++) {
        //     console.log(users[i])
        // }; 

        // console.timeEnd('for loop'); // -> for loop: for loop: 0.65380859375 ms

        // console.time('for of loop');

        // for (const user of users) {
        //     console.log(user);
        // };

        // console.timeEnd('for of loop'); // -> for of loop: 1.399169921875 ms

        // console.time('forEach loop');

        // users.forEach( user => console.log(user) );

        // console.timeEnd('forEach loop'); // -> forEach loop: 0.635009765625 ms

//! 🎉 CONGRATULATIONS ! 🎉