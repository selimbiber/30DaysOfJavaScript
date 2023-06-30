/*** Day 18 = Promises
 *? https://30dayjavascript.js.org/18-day/
 *? https://tr.javascript.info/async
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 18:
    
    Promise
    Callbacks

        Promise constructor

    Fetch API
    Async and Await
*/

//! Promise

    /*
        Bir promise, JavaScript'te asynchronous işlemleri işlemenin bir yoludur. Asynchronous bir eylemin nihai başarı değeri veya başarısızlık nedeni ile işleyicilere izin verir. Bu, asynchronous yöntemlerin synchronous yöntemler gibi değerler döndürmesine olanak tanır: asynchronous yöntem, nihai değeri hemen döndürmek yerine, gelecekte bir noktada değeri sağlama sözü verir.

        Bir Promise şu durumlardan birindedir:

            pending: başlangıç ​​durumunda, ne tamamlandı ne de reddedildi.
            fulfilled: işlemin başarıyla tamamlandığı anlamına gelir.
            rejected: işlemin başarısız olduğu anlamına gelir.

            Bekleyen bir promise ya bir değerle yerine getirilebilir(fulfilled) ya da bir sebeple (error) rejected olabilir. Bu seçeneklerden herhangi biri gerçekleştiğinde, bir sözün o zaman yöntemiyle sıraya alınan ilişkili işleyiciler çağrılır. (Karşılık gelen bir işleyici(handler) eklendiğinde promise zaten fulfilled veya rejected ise, işleyici(handler) çağrılır, bu nedenle asynchronous bir işlemin tamamlanması ile işleyicilerinin eklenmesi arasında bir yarış koşulu yoktur.)

            Promise.prototype.then() ve Promise.prototype.catch() yöntemleri vaatleri döndürdüğü için zincirlenebilirler.
    */

//! Callbacks

    /*
        Promise çok iyi anlamak için önce callback mantığını anlayalım. Aşağıdaki callback örneklerini görelim. Aşağıdaki kod bloklarında, callback ve promise arasındaki farkları fark edeceğiz.
    */

        //Callback
        // const doSomething = callback => {
        //     setTimeout(() => {
        //     const skills = ['HTML', 'CSS', 'JS']
        //     callback('It did not go well', skills)
        //     }, 2000)
        // }
        
        // const callback = (err, result) => {
        //     if (err) {
        //     return console.log(err)
        //     }
        //     return console.log(result)
        // }
        // doSomething(callback) // -> Bu durumda hata yanlıştır ve sonuç olan else bloğunu döndürür.

        // const doSomething = callback => {
        //     setTimeout(() => {
        //       const skills = ['HTML', 'CSS', 'JS']
        //       callback(false, skills)
        //     }, 2000)
        // }
          
        // doSomething((err, result) => {
        //     if (err) {
        //       return console.log(err)
        //     }
        //     return console.log(result)
        // })

    // Promise constructor | Promise yapıcısı

        /*
            Promise yapıcısını kullanarak bir promise oluşturabiliriz. new anahtar kelimesini, ardından Promise kelimesini ve ardından bir parantez kullanarak yeni bir promise oluşturabiliriz. Parantez içinde bir callback işlevi alır. Promise callback fonksiyonu, resolve ve reject fonksiyonları olmak üzere iki parametreye sahiptir.
        */

            // // syntax
            // const promise = new Promise( (resolve, reject) => {
            //     resolve('success')
            //     reject('failure')
            // } );

            // // promise 
            // const doPromise = new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         const skills = ['HTML', 'CSS', 'JS'];
            //         if (skills.length > 0) {
            //             resolve(skills)
            //         } else {
            //             reject('Something wrong has happened')
            //         }
            //     }, 2000)
            // } );

            // doPromise
            //     .then(result => {
            //         console.log(result)
            //     })
            //     .catch(error => console.log(error));
            // -> ["HTML", "CSS", "JS"]

            // Yukarıdaki promise kararlılıkla yerine getirilmiştir. Promise'ın reject ile kararlaştırıldığı başka bir örnek verelim.

            // const doPromise = new Promise((resolve, reject) => {
            //     setTimeout( () => {
            //         const skills = ['HTML', 'CSS', 'JS'];
            //         if (skills.includes('Node')) {
            //             resolve('FullStack Developer')
            //         } else {
            //             reject('Something wrong has happened')
            //         }
            //     }, 2000)
            // } )

            // doPromise
            //     .then(result => {
            //         console.log(result)
            //     })
            //     .catch(error => console.log(error));
            // -> Something wrong has happened

//! Fetch API

    /*
        Fetch API'si, kaynakları (ağ genelindekiler dahil) almak için bir interface sağlar. XMLHttpRequest kullanan herkese tanıdık gelecektir, ancak yeni API daha güçlü ve esnek bir özellik seti sağlar. Bu görevde, url ve APIS istemek için fetch kullanacağız. Buna ek olarak, fetch API'sini kullanarak ağ kaynaklarına erişimde promise kullanım durumunu görelim.
    */

        // const url = 'https://restcountries.com/v2/all' // countries api
        // fetch(url)
        //     .then(response => response.JSON()) // API verilerine JSON olarak erişme
        //     .then(data => {
        //         // verileri almak
        //         console.log(data)
        //     })
        //     .catch(error => console.log(error)); // yanlış bir şey olursa işleme hatası

//! Async and Await

    // Async ve Await, promise yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

        // const square = async function (n) {
        //     return n * n;
        // }
        // console.info(square(2)); // -> Promise {<fulfilled>: 4}

        /*
            Bir fonksiyonun önündeki async kelimesi, fonksiyonun bir promise vereceği anlamına gelir. Yukarıdaki kare fonksiyonu bir değer yerine bir promise verir.

            Promise gelen değere nasıl erişiriz? Promise verilen değere erişmek için, await anahtar sözcüğünü kullanacağız.
        */

            // const square = async function (n) {
            //     return n * n
            // }
            // const value = await square(2)
            // console.log(value);

            /*
                Şimdi, yukarıdaki örnekte de görebileceğiniz gibi, bir fonksiyonun önüne async yazarak bir promise oluşturun ve bir promise değer almak için bekliyoruz. Async ve await birlikte çalışır, biri olmadan diğeri olamaz.

                API verilerini hem promise yöntemini kullanarak hem de async ve await yöntemini kullanarak getirelim.
            */

                // promise
                // const url = 'https://restcountries.com/v2/all'
                // fetch(url)
                //     .then(response => response.json())
                //     .then(data => {
                //         console.log(data)
                //     })
                //     .catch(error => console.log(error));

                // // async ve await
                // const fetchData = async () => {
                //     try {
                //         const response = await fetch(url)
                //         const countries = await response.json()
                //         console.log(countries);
                //     } catch (error) {
                //         console.log(error)
                //     }
                // }
                // console.log('===== async and await')
                // fetchData();


//! 💻 Exercises

    const countriesAPI = 'https://restcountries.com/v2/all'
    const catsAPI = 'https://api.thecatapi.com/v1/breeds'

    // Exercises: Level 1

        //? 1. -> Read the countries API using fetch and print the name of country, capital, languages, population and area.

            // const fetchCountriesData = async () => {
            //     try {
            //         const response = await fetch(countriesAPI)
            //         const countries = await response.json()
            //         for (const country of Object.entries(countries) ) {
            //             console.log(`
            //                 Name: ${country[1].name}
            //                 Capital: ${country[1].capital}
            //                 Languages: ${country[1].languages[0].name}
            //                 Population: ${country[1].population}
            //                 Area: ${country[1].area}
            //             `)
            //         }
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
            // fetchCountriesData();
            /* OUTPUT:

                Name: Turkey
                Capital: Ankara
                Languages: Turkish
                Population: 84339067
                Area: 783562
            */

    // Exercises: Level 2

        //? 1. -> Print out all the cat names in to catNames variable.

            // fetchCatApiData = async () => {
            //     try {
            //         const response = await fetch(catsAPI);
            //         const catsNames  = await response.json();
            //         for (const cat of Object.entries(catsNames)) {
            //         console.log(cat[1].name)
            //         }
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
            // fetchCatApiData(); // -> Turkish Van etc.

    // Exercises: Level 3

        //? 1. -> Read the cats api and find the average weight of cat in metric unit.

            // fetchCatApiData = async () => {
            //     try {
            //         const response = await fetch(catsAPI);
            //         const cats = await response.json();
                    
            //         const catsWeightFirstMetrics = [];
            //         const catsWeightSecondMetrics = [];
            //         const avgMetrics = [];

            //         for (const cat of Object.entries(cats)) {
            //             catsWeightFirstMetrics.push(parseInt(cat[1].weight.metric[0]));
            //             catsWeightSecondMetrics.push(parseInt(cat[1].weight.metric[4]));
            //         }

            //         for (let i = 0; i < 67; i++) {
            //             avgMetrics.push(Math.floor((catsWeightFirstMetrics[i] + catsWeightSecondMetrics[i]) / 2));
            //         }

            //         console.log(avgMetrics.reduce( (sum, num) => sum + num, 0)/avgMetrics.length-1);

            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
            // fetchCatApiData(); // -> 3.4029850746268657

        //? 2. -> Read the countries api and find out the 10 largest countries.

        // const fetchCountriesData = async () => {
        //     try {
        //         const response = await fetch(countriesAPI);
        //         const countries = await response.json();

        //         const countriesAreas = [];
        //         for (let i = 0; i < countries.length; i++) {
        //             if (typeof countries[i].area === 'number') {
        //                 countriesAreas.push(countries[i].area);
        //             }
        //         }
        //         countriesAreas.sort( function (a, b) {
        //             return b - a;
        //         } );
        //         const mostLargestCountries = countriesAreas.slice(0, 10);
        //         console.log(mostLargestCountries);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // fetchCountriesData();
        /*
            (10) [17124442, 14000000, 9984670, 9640011, 9629091, 8515767, 7692024, 3287590, 2780400, 2724900]
        */

        //? 3. -> Read the countries api and count total number of languages in the world used as officials.

            // const fetchCountriesData = async () => {
            //     try {
            //         const response = await fetch(countriesAPI);
            //         const countries = await response.json();
            //         let worldLangs = [];
            //         countries.map( (country) => {
            //             country.languages.forEach( (lang) => {
            //                 worldLangs.push(lang.name);
            //             })
            //         });
            //         const setOfWorldLanguages = new Set(worldLangs);
            //         console.log(setOfWorldLanguages.size);
            //     } catch (error) {
            //         console.log(error)
            //     }
            // }
            // fetchCountriesData(); // -> 123

//! 🎉 CONGRATULATIONS ! 🎉