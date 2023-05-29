/*** Day 6 = Loops (Döngüler)
 *? https://30dayjavascript.js.org/06-day/
 *? https://tr.javascript.info/while-for
 *? https://tr.javascript.info/while-for#dngy-krma (+)
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
 *  ***/

/*   Döngüler:

Çoğu zaman aynı bir sıra ile tekrar yapma ihtiyacı duyulabiliriz.

Örneğin bir listede bulunan ürünlerin sıra ile çıktısını almak. Veya aynı kodu 1-10’a kadar olan sayılar için çalıştırmak.

Döngü aynı kod parçacığının birden fazla defa çalıştırılmasına denir.

Tekrar eden görevleri gerçekleştirmek için programlama dillerinde farklı döngü türleri kullanırız. Aşağıdaki örnekler, JavaScript ve diğer programlama dillerinde yaygın olarak kullanılan döngülerdir.

*/

//! for Loop - for Döngüsü: for döngüsü en fazla kullanılan döngüdür.

    // For Döngüsünün yapısı

    // for(başlangıç_değeri, şart, arttırma/azaltma){
        // uygulamak istediğimiz kod
    // }

    // for(let i = 0; i <= 5; i++){
    //     console.log(i)
    // }
    
    // 0 1 2 3 4 5

    // for(let i = 5; i >= 0; i--){
    //     console.log(i)
    // }
    
    // 5 4 3 2 1 0

    // for(let i = 0; i <= 5; i++){
    //     console.log(`${i} * ${i} = ${i * i}`)
    // }

    /* Output:

    0 * 0 = 0
    1 * 1 = 1
    2 * 2 = 4
    3 * 3 = 9
    4 * 4 = 16
    5 * 5 = 25
    */

    //? Satır arasında değişken tanımlama:

        // Sayaç değişkeni olan i döngüye girdiğinde oluşturulur. Buna “satır arası” değişken tanımlama denir. Bu değişken sadece döngü içerisinde kullanılabilir.

            // for (let i = 0; i < 3; i++) {
            //     console.log(i); // -> 0, 1, 2
            // }
            // console.log(i); // -> hata! böyle bir değişken bulunamadı.

        // Değişken tanımlamak yerine var olan da kullanılabilir:

            // let i = 0;

            // for (i = 0; i < 3; i++) { // var olan değişkeni kullan
            // console.log(i); // -> 0, 1, 2
            // }

            // console.log(i); // -> 3, görünür halde çünkü değişken döngünün dışında tanımlandı.

    // Bazı bölümlerin pas geçilmesi

        // for döngüsünün her bölümü pas geçilebilir.
        
        // Örneğin başlangıç bölümüne ihtiyaç yoksa pas geçilebilir.
        
        // Örneğin:

            // let i = 0; // -> i'yi tanımlanıp 0 değeri atandı

            // for (; i < 3; i++) { // "başlangıç"'a ihtiyaç yok
            //     console.log( i ); // -> 0, 1, 2
            // }

        // basamak bilgisini silmek de mümkün:

            // let i = 0;

            // for (; i < 3;) {
            //     console.log( i++ );
            // }

        //! NOT: Dikkat edersek for döngüsü yazarken noktalı virgüller ; yazılmalıdır, aksi halde yazım hatası verir.

        //* Dizideki tüm elemanları toplama:
    
        // const numbers = [1, 2, 3, 4, 5]
        // let sum = 0
        // for(let i = 0; i < numbers.length; i++){
        //     sum  = sum + numbers[i] // daha pratik kullanım için, sum += numbers[i]
        // }
        // console.log(sum)  // -> 15

        //* Mevcut diziyi temel alan yeni bir dizi oluşturma

        // const numbers = [1, 2, 3, 4, 5]
        // const newArr = []
        // let sum = 0
        // for(let i = 0; i < numbers.length; i++){
        // newArr.push( numbers[i] ** 2)
        // }
        // console.log(newArr)  // -> [1, 4, 9, 16, 25]

    //! while loop - while Döngüsü

    // while anahtar kelimesinin yanında belirtilen şarta doğru olduğu sürece çalışan bir döngü türüdür. Eğer koşul sürekli doğru çıkacak şekilde ayarlanırsa while döngüsü uygulama kasten kesilmediği sürece sonsuza kadar devam edebilir. Bu yüzden buraya dikkat etmek gerekebilir.

    // while döngüsü aşağıdaki gibi bir yazıma sahiptir:

        // while (koşul) {
             // kod
             // veya döngünün gövdesi
        // }

        // koşul doğru iken(while), döngü gövdesinde bulunan kod çalıştırılır.

        // Örneğin, aşağıdaki kod i < 3 iken çalışır.

            // let i = 0;
            // while (i < 3) { // önce 0, sonra 1, sonra 2
            //   console.log( i );
            //   i++;
            // }

        /* NOTLAR

        Döngünün gövdesinde bulunan kodun her çalışmasına tekrar(iteration) denir. Yukarıdaki örnekte gövde 3 defa tekrar etmiştir.

        Eğer i++ gibi bir kod olmasaydı, teoride kod sonsuza kadar devam ederdi. Pratikte ise tarayıcınız bu kodun uzun süre çalışmasını engeller, sunucu tabanlı JavaScript yazdığınızda ise bu işlem durdurulur.

        Sadece karşılaştırma değil, bir ifade veya değişken koşul olabilir. While döngüsü tarafından alınan tüm ifadeler boolean’a dönüştürülür.

        */

        // Tek satır gövde varsa süslü paranteze gerek kalmaz.

            // let i = 3;
            // while (i) console.log(i--);

        
    //! do while loop do while döngüsü: 

    // do while döngüsü Koşul ile belirtilen alanın doğru olup olmadığına bakmadan kod bloğunu bir kez çalıştırır ve daha sonra Koşul ile belirtilen alan doğru (true) olduğu sürece kod bloğunun çalışması için kullanılır.

        // do {
             // döngü gövdesi
        // } while (condition);

        //! Döngü önce gövdeyi çalıştırır, sonra koşul kontrolü yapar ve eğer doğruysa tekrar döngü gövdesini çalıştırır.

        // let i = 0
        // do {
        //     console.log(i)
        //     i++
        // } while (i <= 4)

        // 0 1 2 3 4

        // Not: Bu şekilde döngü yazımı çok nadir olarak kullanılır. Kullanılmasının en önemli amacı en azından bir defa ne olursa olsun gövdenin çalıştırılma istenmesidir. Genelde while(..){} şekli tercih edilir.


    //! for of loop - for of döngüsü:

    /*
        ES6, geleneksel bir döngüden daha basit olan bir döngü olan yeni bir döngü yöntemi sunar ve her tür için ve giriş döngülerinin eksikliklerini telafi eder.

        for..of Deyimi, yinelenen nesneler üzerinde yinelemek için bir döngü oluşturur. ES6'da tanıtılan for..of döngü , yeni yinelemeli protokollerin yerini alır. for..in ve forEach() destekler. for..of Array (Diziler), String (Metinler), Map (Haritalar), Set (Kümeler), Array benzeri nesneler (örneğin arguments veya NodeList), ve diğer yinelenen veri yapıları arasında yineleme yapmanızı sağlar.
    */

        // for (const element of arr) {
             // uygulamak istediğimiz kod
        // }

        // array içindeki tüm nsayıları toplama

        // let sum = 0
        // for (const num of numbers) {
            // sum = sum + num  
        //! daha pratik kullanım için, sum += num
        //! bundan sonra pratik olan bu syntax türünün kullanacağız(+=, -=, *=, /= etc)
        // }
        // console.log(sum) // 15

    //! break: Break, bir döngüyü kesmek için kullanılır.

        /*
            Normalde döngüler koşul yanlış olduğunda biter.

            Fakat bazı durumlarda bu döngü kırılabilir ( break ).

            Örneğin, kullanıcıdan bir dizi sayı girmesini istediniz eğer boş bir değer girerse döngüyü kırabilirsiniz.
        */

            // for(let i = 0; i <= 5; i++){
            //     if(i == 3){
            //       break;
            //     }
            //     console.log(i)
            // }
              
            // -> 0 1 2 (i değeri 3 sayısına eşit olduğunda döngüyü durdurur)

    //! continue: Belirli bir döngü aşamasını atlamak için continue anahtar kelimesi kullanılır.

        /*
            continue, break'in daha hafif versiyonudur. Döngüyü tamamen kırmaz da zorla bir sonraki tekrara geçer(tabi koşul sağlanıyorsa)

            O anda tekrar eden değer ile işimiz bitti ve bir sonraki tekrar geçmek istendiğinde continue kullanılır.
        */

            // for(let i = 0; i <= 5; i++){
            //     if(i == 3){
            //       continue
            //     }
            //     console.log(i)
            // }
              
            // -> 0 1 2 4 5 (3'e geldiğinde döngü durdu ve bir sonraki sayıdan devam etti)

            //! continue talimatı döngü sayısının azalmasına yardımcı olur.

            // Tek değerler gösteren döngü aşağıdaki gibi de yazılabilir:

                // for (let i = 0; i < 10; i++) {
                //     if (i % 2) {
                //         console.log( i );
                //     }
                // }

                /*
                    Teknik açısından birbiri ile aynıdırlar. Her zaman continue bloğunun yerine if kullanabiliriz.

                    Tabi bunun yan etkisi döngü gövdesi içinde bir tane daha if kullanarak okunabilirliği düşürmektir.
                */

            //!  ‘if’ yerine ‘?’ kullanılıyorsa sağ tarafa ‘continue/break’ yazılmaz.

            // break/continute talimatları '?' ile kullanılamazlar

            // Örneğin:

            // if (i > 5) {
            //     console.log(i);
            //   } else {
            //     continue;
            // }

            // Yukarıdaki döngü ? ile yazılacak olursa:

            // (i > 5) ? alert(i) : continue; // `continue` burada kullanılamaz! Böyle kodlar yazım hatası verir.
            // Bu da '?' işaretini if yerine kullanmamak için ayrı bir neden.

/*
        *Summary (Özet)

    Bu konuda 3 farklı döngü işlendi:

        while – Her tekrardan önce koşul kontrol edilir
        do..while – Koşul tekrardan sonra kontrol edilir.
        for (;;) – Her tekrardan önce koşul kontrol edilir. Farklı seçenekler mevcuttur.

    Sonsuz döngü yapmak için genelde while(true) kullanılır. Böyle döngüler de diğerleri gibi break talimatıyla kırılabilir.

    Eğer o anki tekrar ile işimiz bitti ve bir sonrakine geçmek istiyorsak "continue" kullanmamız lazım.

    break/continue ile döngüden önce yazılan etikete atlamak veya üst döngüyü kırmak mümkündür.
*/

//! Exercises:Day 6 (Loops-Döngüler)

    //! Exercises: Level 1

    const countries = [
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
        'Iceland',
    ]
      
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ]
      
    const mernStack = ['MongoDB', 'Express', 'React', 'Node']

    //? 1. -> Iterate 0 to 10 using for loop, do the same using while and do while loop

        let i = 0;
        // while (i < 10) {
        //     i++;
        //     console.log(i); // -> 1 2 3 4 5 6 7 8 9 10
        // }

        // do {
        //     i++;
        //     console.log(i);
        // } while (i < 10);

        // -> 1 2 3 4 5 6 7 8 9 10

    //? 2. -> Iterate 10 to 0 using for loop, do the same using while and do while loop

        i = 10;
        // while (i > 0) {
        //     i--;
        //     console.log(i); // -> 0 1 2 3 4 5 6 7 8 9
        // }

        // do {
        //     i--;
        //     console.log(i); // -> 0 1 2 3 4 5 6 7 8 9
        // } while (i > 0)

        // -> 0 1 2 3 4 5 6 7 8 9

    //? 3. -> Iterate 0 to n using for loop

        // for (let i = 0; i <= 12; i++) {
        //     console.log(i); // -> 0 1 2 3 4 5 6 7 8 9 10 11 12
        // }

    //? 4. -> Write a loop that makes the following pattern using console.log():

        /*
            #
            ##
            ###
            ####
            #####
            ######
            #######
        */

            // no loop solution
            // console.log('#\n##\n###\n####\n#####\n######\n#######')

            /* OUTPUT:

                #
                ##
                ###
                ####
                #####
                ######
                #######
            */

            // for loop solution

            // for (let i = 0; i <= 7; i++) {
            //     console.log('#'.repeat(i));
            // }
            
            /* OUTPUT:

                #
                ##
                ###
                ####
                #####
                ######
                #######
            */

        //? 5. -> Use loop to print the following pattern:

            /*
                0 x 0 = 0
                1 x 1 = 1
                2 x 2 = 4
                3 x 3 = 9
                4 x 4 = 16
                5 x 5 = 25
                6 x 6 = 36
                7 x 7 = 49
                8 x 8 = 64
                9 x 9 = 81
                10 x 10 = 100
            */

            // Çözüm (Solution)

            // for (let i = 0; i <= 10; i++) {
            //     console.log(`${i} x ${i} = ${i * i}`);
            // }

            /* OUTPUT:

                0 x 0 = 0
                1 x 1 = 1
                2 x 2 = 4
                3 x 3 = 9
                4 x 4 = 16
                5 x 5 = 25
                6 x 6 = 36
                7 x 7 = 49
                8 x 8 = 64
                9 x 9 = 81
                10 x 10 = 100
            */

        //? 6. -> Using loop print the following pattern

        /*
            i    i^2   i^3
            0    0     0
            1    1     1
            2    4     8
            3    9     27
            4    16    64
            5    25    125
            6    36    216
            7    49    343
            8    64    512
            9    81    729
            10   100   1000
        */

        // Çözüm (Solution)

        // for (let i = 0; i <= 10; i++) {
        //     console.log(`${i} ${i*i} ${i * (i*i)}`);
        // }

        /*  
            0    0     0
            1    1     1
            2    4     8
            3    9     27
            4    16    64
            5    25    125
            6    36    216
            7    49    343
            8    64    512
            9    81    729
            10   100   1000
        */

            //? 6.1. -> Use for loop to iterate from 0 to 100 and print only even numbers

                // for (let i = 0; i <= 100; i++) {
                //     if (i % 2 == 0) {
                //      console.log(i);
                //     }
                // }

            //? 6.2. -> Use for loop to iterate from 0 to 100 and print only odd numbers

                // for (let i = 0; i <= 100; i++) {
                //     if (i % 2 == 1) {
                //         console.log(i)
                //     }
                // }

            //? 6.3. -> Use for loop to iterate from 0 to 100 and print only prime numbers

                // let primeNumbers;
                // let result;
                // for (let i = 2; i <= 100; i++) {
                //     result = true;
                //     for (primeNumbers = 2; primeNumbers < i; primeNumbers++) {
                //         if (i % primeNumbers == 0) {
                //             result = false;
                //         }
                //     } if (result == true) {
                //         console.log(primeNumbers);
                //     }
                // }

            //? 6.4. -> Use for loop to iterate from 0 to 100 and print the sum of all numbers.

                // The sum of all numbers from 0 to 100 is 5050.

                // let sum = 0;
                // for (let i = 0; i <= 100; i++) {
                //     sum += i;
                //     console.log(sum); // -> ...4851 4950 5050
                // }

            //? 6.5. -> Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

                // The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

                // let evens = 0;
                // let odds = 0;
                // for (let i = 0; i <= 100; i++) {
                //     if (i % 2 == 0) {
                //         evens += i;
                //         console.log(evens)
                //     } else if (i % 2 == 1) {
                //         odds += i;
                //         console.log(odds)
                //     }
                // } console.log(`From 0 to 100 sum of all evens (${evens}) and the sum of all odd (${odds}) numbers: ${evens + odds}`)

            //? 6.6. -> Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

                // Beklenen (Expected) ->   [2550, 2500]

                // let evens = 0;
                // let odds = 0;
                // for (let i = 0; i <= 100; i++) {
                //     if (i % 2 == 0) {
                //         evens += i;
                //     } else if (i % 2 == 1) {
                //         odds += i;
                //     }
                // } console.log([evens, odds]) // Output -> (2) [2550, 2500]

        //? 7. -> Develop a small script which generate array of 5 random numbers

            // let randomNums = [];
            // for (let i = 0; i < 5; i++) {
            //     randomNums.push(parseInt(Math.random(10) * 10));
            // }
            // console.log(randomNums.join('')); // -> 53531 / 82780 / 87837 etc.

        //? 7.1. -> Develop a small script which generate array of 5 random numbers and the numbers must be unique

            // let randomNumbers = [];
            // for (let i = 0; i < 5; i++) {
            //     randomNumbers.push(Math.floor(Math.random(10) * 10))   
            // }
            // console.log(randomNumbers.join('')); // -> 59330 / 19810 / 66317 etc.

        //? 7.2. -> Develop a small script which generate a six characters random id:

            // Beklenen (Expected) -> 5j2khz

            // let letters = 'abcdefghijklmnopqrstuvwxyz';
            // let randoms = [];
            // for(let i = 0; i < 6; i++) {
            //     if(i%2 == 0) {
            //         randoms.push(Math.floor(Math.random(10) * 10));
            //     } else {
            //         randoms.push(letters[parseInt(Math.random() * 25)])
            //     }
            // }
            // console.log(randoms.join('')); // -> 0l0f4t / 6a0c1a / 3b4d5e etc.

    // todo Exercises: Level 2

        //? 1. -> Develop a small script which generate any number of characters random id:
            //* fe3jo1gl124g
            //* xkqci4utda1lmbelpkm03rba

            // let letters = 'abcdefghijklmnopqrstuvwxyz';
            // let randoms = [];
            // for(let i = 0; i < Math.floor(Math.random(1000) * 1000); i++) {
            //     if(i%2 == 0) {
            //         randoms.push(Math.floor(Math.random(100) * 10));
            //     } else if (randoms.length < 7) {
            //         randoms.push(Math.floor(Math.random(100) * 10));
            //         randoms.push(letters[parseInt(Math.random(10) * 25)])
            //     }
            // }
            // console.log(randoms.join('')); // -> 5c9o8h6r5q9x7d3y2p4y2a / 4j1j9l5r8k0t1q2p9n etc.

        //? 2. -> Write a script which generates a random hexadecimal number.
            //* '#ee33df'

            // const hexNumber = Math.floor(Math.random() * (16777216 + 1));
            // const randomHexColors = '#' + hexNumber.toString(16);
            // console.log(randomHexColors); // -> #b4263c / #44a6a5 / #345cbe

        //? 3. -> Write a script which generates a random rgb color number.
            //* rgb(240,180,80)

            // let randomRGB = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
            // console.log(randomRGB); // -> rgb(239,181,96) / rgb(179,168,38) / rgb(24,22,80) / rgb(193,223,168) etc.

        //? 4. -> Using the above countries array, create the following new array.
            //* ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

            // let randomCountriesArray = [];

            // let randomIndex1 = Math.floor(Math.random()*11);
            // let randomIndex2 = Math.floor(Math.random()*11);
            // let randomIndex3 = Math.floor(Math.random()*11);

            // if (randomIndex1 !== randomIndex2 && randomIndex1 !== randomIndex3 && randomIndex2 !== randomIndex3) {    
            //     randomCountriesArray.push( (countries[randomIndex1]), (countries[randomIndex2]), (countries[randomIndex3]) );
            //     console.log(randomCountriesArray);
            // } else {
            //     randomIndex1 = Math.floor(Math.random()*11);
            //     randomIndex2 = Math.floor(Math.random()*11);
            //     randomIndex3 = Math.floor(Math.random()*11);

            //     randomCountriesArray.push( (countries[randomIndex1]), (countries[randomIndex2]), (countries[randomIndex3]) );
            //     console.log(randomCountriesArray);
            // } // -> ['Japan', 'Germany', 'Finland'] / ['Japan', 'Germany', 'Canada'] / ['Germany', 'Albania', 'Denmark']

        //? 5. -> Using the above countries array, create an array for countries length'.
            //* [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

            let randomCountryLength = []
            // randomCountryLength.push(countries[Math.floor(Math.random()*11)].length, (countries[Math.floor(Math.random()*11)].length), countries[Math.floor(Math.random()*11)].length);

            // console.log(randomCountryLength); // -> (3) [7, 5, 8] / (3) [7, 5, 7] / (3) [8, 7, 7] / (3) [7, 7, 8] / (3) [7, 7, 5]

        //? 6. -> Use the countries array to create the following array of arrays:
            /*   
                [
                    ['Albania', 'ALB', 7],
                    ['Bolivia', 'BOL', 7],
                    ['Canada', 'CAN', 6],
                    ['Denmark', 'DEN', 7],
                    ['Ethiopia', 'ETH', 8],
                    ['Finland', 'FIN', 7],
                    ['Germany', 'GER', 7],
                    ['Hungary', 'HUN', 7],
                    ['Ireland', 'IRE', 7],
                    ['Iceland', 'ICE', 7],
                    ['Japan', 'JAP', 5],
                    ['Kenya', 'KEN', 5]
                ]
            */

            // let arrays = [];
            // for(const countriesArray of countries) {
            //     let length = countriesArray.length;
            //     let first3Chars = countriesArray.slice(0, 3).toUpperCase();
            //     arrays.push([countriesArray, first3Chars, length]);
            // } 
            // for (const arrayOfArrays of arrays) {
            //     console.log(arrayOfArrays);
            // }

        //? 7. -> In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
                //* ['Finland','Ireland', 'Iceland']

                // let countriesLand = [];
                // let otherCountries = [];

                // for (let i = 0; i < countries.length; i++) {
                //     if ( countries[i].includes('land') ) {
                //         countriesLand.push( countries[i] )
                //     } else if ( !countries[i].includes('land') ) {
                //         otherCountries.push( countries[i] )
                //     }
                // }
                // console.log(countriesLand) // -> (3) ['Finland', 'Ireland', 'Iceland']
                // console.log(otherCountries); // -> (9) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Germany', 'Hungary', 'Japan', 'Kenya']

        //? 8. -> In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

                //* ['Albania', 'Bolivia','Ethiopia']

                // let countries_ia = [];
                // let without_ia = [];

                // for (let i = 0; i < countries.length; i++) {
                //     if ( countries[i].endsWith('ia') ) {
                //         countries_ia.push( countries[i] )
                //     } else if ( !countries[i].endsWith('ia') ) {
                //         without_ia.push( countries[i] )
                //     }
                // }
                // console.log( countries_ia ); // -> (3) ['Albania', 'Bolivia', 'Ethiopia']
                // console.log( 'These are countries ends without ia: ' + without_ia ); // -> These are countries ends without ia: Canada,Denmark,Finland,Germany,Hungary,Ireland,Japan,Kenya,Iceland

        //? 9. -> Using the above countries array, find the country containing the biggest number of characters.
                //* Ethiopia

                // let longestCountry = countries[0];
                // for (let i = 1; i < countries.length; i++) {
                //     if (countries[i].length > longestCountry.length) {
                //         longestCountry = countries[i];
                //     }
                // }
                // console.log(longestCountry); // -> "Ethiopia"

        //? 10. -> Using the above countries array, find the country containing only 5 characters.
                //* ['Japan', 'Kenya']

                // let onlyFiveChar = [];
                // for (let i = 0; i <= countries.length; i++) {
                //     if (5 == countries[i].length) {
                //         onlyFiveChar.push(countries[i]);
                //         console.log(onlyFiveChar); // -> (2) ['Japan', 'Kenya']
                //     }
                // }

        //? 11. -> Find the longest word in the webTechs array

                /*
                    webTechs = [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React',
                    'Redux',
                    'Node',
                    'MongoDB'
                    ]
                */

                // let longestWord = webTechs[0];
                // for (let i = 0; i < webTechs.length; i++) {
                //     if (longestWord.length < webTechs[i].length) {
                //         longestWord = webTechs[i];
                //         console.log(longestWord); // -> JavaScript
                //     }
                // }

        //? 12. -> Use the webTechs array to create the following array of arrays:
                // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
                
                // let arrayOfArrays = [];

                // for (let i = 0; i < webTechs.length; i++) {
                //     arrayOfArrays.push(webTechs[i] + ", " + (webTechs[i].length));
                // } console.log(arrayOfArrays);  // -> ['HTML, 4', 'CSS, 3', 'JavaScript, 10', 'React, 5', 'Redux, 5', 'Node, 4', 'MongoDB, 7']

        //? 13. -> An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

                // const mernStackArray = ["MongoDB", "Express", "React", "Node"];
                // let mern_stack = [];

                // for (let i = 0; i < mernStackArray.length; i++) {
                //     let initalLetters = mernStackArray[i].slice(0, 1)
                //     mern_stack += initalLetters;
                    
                // } console.log(`MERN stack app: ${mern_stack}`) // -> MERN stack app: MERN

        //? 14. -> Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

                // for (let items of webTechs) {
                //     console.log(items); 
                // }

        //? 15. -> This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

            // let fruits = ['banana', 'orange', 'mango', 'lemon'];
            // let reversedFruits = [];

            // for(let i = fruits.length -1; i >= 0; i--) {
            //     reversedFruits.push(fruits[i]);
            //     console.log(reversedFruits);
            // }
            // for (let each of reversedFruits) {
            //     console.log(each);
            // }

            /* Output:

                lemon
                mango
                orange
                banana
            */

        //? 16. -> Print all the elements of array as shown below.
                /*
                    const fullStack = [
                        ['HTML', 'CSS', 'JS', 'React'],
                        ['Node', 'Express', 'MongoDB']
                    ]
                    ````

                    ```sh
                    HTML
                    CSS
                    JS
                    REACT
                    NODE
                    EXPRESS
                    MONGODB
                */
                
                // const fullStack = [
                //     ['HTML', 'CSS', 'JS', 'React'],
                //     ['Node', 'Express', 'MongoDB']
                // ]
                // console.log(fullStack); // lengths: 4 + 3 = 7

                // const favTechs = [];

                // for (let i = 0; i < fullStack.length; i++) {
                //     for (let j = 0; j < fullStack[i].length; j++) {
                //         favTechs.push(fullStack[i][j]);
                //         favTechs[i][j].replace();
                //         console.log(favTechs)
                //     }
                // }

                // for (let each of favTechs) {
                //     console.log(each.toUpperCase());
                // } 

                /*  Output:

                HTML
                CSS
                JS
                REACT
                NODE
                EXPRESS
                MONGODB
                */

    // todo Exercises: Level 3

        //? 1. -> Copy countries array(Avoid mutation)

            // Expected copy solution is not like this!

            // const copyCountriesArray = countries;
            // console.log(copyCountriesArray); // -> Expected copy solution is not like this!

            // const newCountriesArray = []

            // for (let eachCountry of countries) {
            //     newCountriesArray.push(eachCountry);
            // } console.log(newCountriesArray); // -> (12) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'Iceland']

        //? 2. -> Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

            // let sortedCountries = newCountriesArray.sort();
            // console.log(sortedCountries); // -> (12) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Iceland', 'Ireland', 'Japan', 'Kenya']

        //? 3. -> Sort the webTechs array and mernStack array

        // console.log( webTechs.sort() ); // -> (7) ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']
        // console.log( mernStack.sort() ); // -> (4) ['Express', 'MongoDB', 'Node', 'React']

        //? 4. -> Extract all the countries contain the word 'land' from the countries array and print it as array

        // const land = [];

        // for (let i = 0; i < countries.length; i++) {
        //     if ( countries[i].includes('land') ) {
        //         land.push(countries[i])
        //     }
        // }   console.log(land); // -> (3) ['Finland', 'Ireland', 'Iceland']

        //? 5. -> Find the country containing the hightest number of characters in the countries array

            // let charNumber = countries[0];

            // for (let i = 0; i < countries.length; i++) {
            //     if ( charNumber.length < countries[i].length) {
            //         console.log(countries[i]); // -> Ethiopia
            //     }
            // }

        //? 6. -> Extract all the countries containing only four characters from the countries array and print it as array

            // const fourCharCountry = [];

            // for (const eachCountry of countries) {
            //     if (eachCountry.length -1 == 4) {
            //         fourCharCountry.push(eachCountry);
            //     }
            // }   console.log(fourCharCountry); // -> (2) ['Japan', 'Kenya']

        //? 7. -> Reverse the countries array and capitalize each country and stored it as an array

            const reverseCountries = countries.reverse();
            const capitalizeCountries = [];

            for (const eachCountry of reverseCountries) {
                capitalizeCountries.push( eachCountry.toUpperCase() );
            } console.log(capitalizeCountries); // -> (12) ['ICELAND', 'KENYA', 'JAPAN', 'IRELAND', 'HUNGARY', 'GERMANY', 'FINLAND', 'ETHIOPIA', 'DENMARK', 'CANADA', 'BOLIVIA', 'ALBANIA']

//! 🎉 CONGRATULATIONS ! 🎉

