/*** Day 10 = Sets and Maps (Collections)
 *? https://30dayjavascript.js.org/10-day/
 *? https://tr.javascript.info/map-set-weakmap-weakset
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 10:

    Set
        Creating an empty set
        Creating set from array
        Adding an element to a set
        Deleting an element a set
        Checking an element in the set
        Clearing the set
        Union of sets
        Intersection of sets
        Difference of sets
    Map
        Creating an empty Map
        Creating an Map from array
        Adding values to the Map
        Getting a value from Map
        Checking key in Map
    Exercises
        Exercises:Level 1
        Exercises:Level 2
        Exercises:Level 3
*/

//! Set: Set, elemanlar topluluğudur. Set yalnızca benzersiz öğeler içerebilir. 

    /*
        Ana fonksiyonları şu şekildedir:

        new Set(iterable) – set oluşturur, isteğe bağlı olarak değerler içeren diziden de oluşturulabilir.
        set.add(value) – bir değer ekler, set’in kendisini döndürür
        set.delete(value) – değeri siler. Eğer öyle bir değer varsa true yoksa false döndürür.
        set.has(value) – Eğer öyle bir değer varsa true yoksa false döndürür.
        set.clear() – set’in içindeki her şeyi siler.
        set.size – eleman sayısını döndürür.
    */

    // -> Creating an empty set | Boş bir set oluşturma

        const companies = new Set();
        console.log(companies); // -> set(0) {size: 0}

    // -> Creating set from array | Diziden set oluşturma

        const languages = [
            'English',
            'Finnish',
            'English',
            'French',
            'Spanish',
            'English',
            'French',
        ]

        const setOfLangs = new Set(languages);
        console.log(setOfLangs); // -> Set(4) {'English', 'Finnish', 'French', 'Spanish'}

        //! Dipnot: Set iterable (yinelenebilir) bir nesnedir ve her öğeye iterable işlemi uygulanabilir.

            for (let lang of setOfLangs) {
                console.log(lang);
            } //-> English Finnish French Spanish

    // -> Adding an element to a set | Bir set'e eleman ekleme

        companies.add('Google');
        companies.add('Facebook');
        companies.add('Amazon');
        companies.add('Oracle');
        companies.add('Microsoft');
        companies.add('Apple');
        console.log('The number of (unique) elements in Set: ' + companies.size); 
        // -> The number of (unique) elements in Set: 6

        //! Dipnot: Bir set'e eleman eklemek için döngülerde kullanabiliriz.

            const setOfCompanies = new Set();
            for (let company of companies) {
                setOfCompanies.add(company);
            }
            console.log(setOfCompanies.size); // -> 6

    // -> Deleting an element a set | Bir elemanı set'den silme

        //! Set'den delete methodunu kullanarak bir elemanı silebiliriz.

            setOfCompanies.delete('Facebook');
            console.log(setOfCompanies.size); // -> 5

    // -> Checking an element in the set | Set'deki bir elemanı kontrol etme

        //! Has methodu bir set'de belirli bir elemanı olup olmadığını kontrol eder true veya false döndürür.

            console.log( setOfCompanies.has('Google') ); // -> true
            console.log( setOfCompanies.has('Facebook') ); // -> false

    // -> Clearing the set | Set'i temizleme
        
        //! Clear methodu set'deki bütün elemanları temizler.

            setOfCompanies.clear();
            console.log(setOfCompanies); // -> Set(0) {size: 0}

    //! Dizideki benzersiz öğeyi saymak için set() kullanmak:

        const randomNumbers = [1, 3, 5, 1, 3, 5, 7]
        const setOfNumbers = new Set(randomNumbers);
        console.log(setOfNumbers); // -> Set(4) {1, 3, 5, 7}

    // -> Union of sets | Set'lerin birleşimi

        //! iki set nesnesini birleştirmek yayılma operatörü kullanılarak elde edilebilir A ve B set'lerinin birleşimini (A U B) bulmak için aşağıdaki kodlara göz atalım.

            let a = [1, 2, 3, 4, 5]
            let b = [3, 4, 5, 6]
            let c = [...a, ...b]

            let cSet = new Set(c);
            console.log(cSet); // -> Set(6) {1, 2, 3, 4, 5, 6}

    // -> Intersection of sets | Set'lerin kesişimi

        //! iki set nesnesinin kesişimini bulmak için filter methodu kullanılması gerekir. A ve B setlerinin kesişimi (A ∩ B) bulmak için aşağıdaki kodlara göz atalım.

            let A = new Set(a)
            let B = new Set(b)

            let d = a.filter( (num) => B.has(num) );
            let D = new Set(d);
            console.log(D); // -> Set(3) {3, 4, 5}
    
    // -> Difference of sets | Set'lerin farkı

        //! iki set nesnesinin farkını bulmak için filter methodu kullanılması gerekir. A ve B setlerinin farkını (A B) bulmak için aşağıdaki kodlara göz atalım.

            let e = a.filter( (num) => !B.has(num) );
            let E = new Set(e);
            console.log(E); // -> Set(2) {1, 2}

//! Map: Map, anahtar değere sahip veriler tutan bir yapıdır (collection). Tıpkı Object gibi. Fakat aralarındaki en önemli farklardan biri Mapler anahtar değer olarak herhangi bir tipte olabilirler.
    //!Dipnot: Map’ler ayrıca anahtar olarak Obje de kullanabilir.
    /*
        Ana fonksiyonları şu şekildedir:

        new Map() – map yaratır.
        map.set(key, value) – Anahtara değer atar.
        map.get(key) – Anahtarın değerini döndürür. Eğer öyle bir anahtar yoksa undefined döndürür.
        map.has(key) – Eğer öyle bir anahtar varsa true yoksa false döndürür.
        map.delete(key) – Verilen anahtara ait değeri siler.
        map.clear() – Mapin içini temizler.
        map.size – anlık eleman sayısını döndürür.
    */

    // Creating an empty Map | Boş map oluşturma

        const map = new Map();
        console.log(map); // -> Map(0) {size: 0}

    // Creating an Map from array | Bir diziden map oluşturma

        const someCountries = [
            ['Finland', 'Helsinki'],
            ['Sweden', 'Stockholm'],
            ['Norway', 'Oslo'],
        ]

        const mapOfCountries = new Map(someCountries);
        console.log(mapOfCountries); 
        // -> Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
        console.log(mapOfCountries.size); // -> 3
    
    // Adding values to the Map | Map'e değerler ekleme

        const countriesMap = new Map()
        console.log(countriesMap.size) // -> 0

        countriesMap.set('Finland', 'Helsinki');
        countriesMap.set('Sweden', 'Stockholm');
        countriesMap.set('Norway', 'Oslo');
        console.log(countriesMap); 
        // -> Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
        console.log(countriesMap.size); // -> 3
    
    // Getting a value from Map | Map'ten değer alma

        console.log( countriesMap.get('Finland') ); // -> Helsinki
    
    // Checking key in Map | Map içindeki anahtarı kontrol etme

        //! Eğer Map içinde bir anahtarın olup olmadığını kontrol etmek istiyorsak has methodunu kullanabiliriz bu method bize true veya false döndürür.

            console.log( countriesMap.has('Norway') ); // -> true
            console.log( countriesMap.has('Denmark') ); // -> false

        //! Map içindeki bütün değerleri döngü kullanarak almak:

            /*
                Map üzerinde döngü yapmak için 3 metod vardır:

                map.keys() – anahtarlar için bir yinelenebilir döndürür.
                map.values() – değerler için bir yinelenebilir döndürür.
                map.entries() – [key, value] girişleri için bir yinelenebilir döndürür, for..of içinde varsayılan olarak kullanılır.
            */

            // for (const country of countriesMap) {
            //     console.log(country);
            // };

            /* OUTPUT:
                (2) [Finland, Helsinki]
                (2) [Sweden, Stockholm]
                (2) [Norway, Oslo]
            */

            // for (const [country, city] of countriesMap) {
            //     console.log(country, city);
            // }

            /* OUTPUT:
                Finland Helsinki
                Sweden Stockholm
                Norway Oslo
            */  

/*
    !Özet

    Map – anahtarlı değerler tutan bir yapıdır.(collection)

    normal Objeden farkları:
        Herhangi bir anahtar için objeler anahtar olabilir.
        Yinelemeler eklenme sırasıyla yapılır.
        Ek olarak kullanışlı metodlar, size özelliği.

    Set – eşsiz değerler tutan bir yapı.(collection)
        Bir dizi aksine elemanların tekrar sıralanmasına izin vermez.
        Eklenme sırasıyla tutar.

    WeakMap – anahtar olarak sadece obje alan ve başka yolla ulaşılamaz hale geldiklerinde onları silen Mapin farklı bir biçimi.
        Bir bütün olarak yapı üzerinde yapılan işlemleri desteklemez: size yok, clear() yok, yineleme yok.

    WeakSet – sadece obje tutan ve başka yolla ulaşılamaz hale geldiklerinde onları silen Setin farklı bir biçimi.
        Aynı şekilde size/clear() ve yinelemeleri desteklemez.

    WeakMap ve WeakSet, “ana” nesne depolama alanına ek olarak “ikincil” veri yapıları olarak kullanılır. Nesne, ana depolama alanından kaldırıldığında, yalnızca WeakMap / WeakSet içinde kalır, otomatik olarak temizlenir.
*/

//! 💻 Exercises

    //* Exercises: Level 1

        const g = [4, 5, 8, 9]
        const h = [3, 4, 5, 7]
        
        /*
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
                'Kenya'   
            ]
        */

        //? 1. -> create an empty set

            const newSet = new Set();
            console.log(newSet) // -> Set(0) {size: 0}

        //? 2. -> Create a set containing 0 to 10 using loop

            for (let i = 0; i <= 10; i++) {
                newSet.add(i);
            }; console.log(newSet); // -> Set(11) {0, 1, 2, 3, 4, …}

        //? 3. -> Remove an element from a set

            newSet.delete(0); 
            console.log(newSet); // -> Set(10) {1, 2, 3, 4, 5, …}

        //? 4. -> Clear a set
            
            newSet.clear();
            console.log(newSet); // -> Set(0) {size: 0}

        //? 5. -> Create a set of 5 string elements from array

            let istanbulTeams = ['Fenerbahçe', 'Galatasaray', 'Fenerbahçe', 'Beşiktaş', 'Fenerbahçe', 'Başakşehir'];
            let setOfIstanbulTeams = new Set(istanbulTeams);
            console.log(setOfIstanbulTeams); // -> Set(4) {'Fenerbahçe', 'Galatasaray', 'Beşiktaş', 'Başakşehir'}

        //? 6. -> Create a map of countries and number of characters of a country

            const mapOfCountriesLengths = new Map();
            for (const country of countries) {
                mapOfCountriesLengths.set(country, country.length);
            } console.log(mapOfCountriesLengths) 
            // -> Map(11) {'Albania' => 7, 'Bolivia' => 7, 'Canada' => 6, 'Denmark' => 7, 'Ethiopia' => 8, …}

    //* Exercises: Level 2

        //? 1. -> Find g union h

            const f = new Set([...g, ...h]);
            console.log(f); // -> Set(6) {4, 5, 8, 9, 3, …}

        //? 2. -> Find g intersection h

            const G = new Set(g);
            const H = new Set(h);
            console.log( h.filter( item => G.has(item) ) ); // -> (2) [4, 5]

        //? 3. -> Find g with h

            console.log( g.filter( item => H.has(item) + !H.has(item) ) ); // -> (4) [4, 5, 8, 9]

    //* Exercises: Level 3

        //? 1. -> How many languages are there in the countries object file.

            console.log( countries.length ) // -> 11

        //? 2. -> Use the allCountries data to find the 10 most spoken languages:

            //! Your output should look like this:
                /*
                    console.log(mostSpokenLanguages(allCountries, 10))
                    [
                        { English: 91 },
                        { French: 45 },
                        { Arabic: 25 },
                        { Spanish: 24 },
                        { Russian: 9 },
                        { Portuguese: 9 },
                        { Dutch: 8 },
                        { German: 7 },
                        { Chinese: 5 },
                        { Swahili: 4 },
                        { Serbian: 4 }
                    ]

            !Your output should look like this
                
                    console.log(mostSpokenLanguages(allCountries, 3))
                    [
                        {English:91},
                        {French:45},
                        {Arabic:25}
                    ]
                */

            function mostSpokenLanguages(countries, top) {

                const languageMap = new Map();

                countries.forEach(country => {
                            country.languages.forEach(language => {
                        if ( languageMap.has(language) ) {
                            languageMap.set(language, languageMap.get(language) + 1);
                        } else {
                            languageMap.set(language, 1);
                        }
                    });
                });
                const sortedLanguages = [...languageMap.entries()].sort((a, b) => b[1] - a[1]);
                    return sortedLanguages.slice(0, top).map(language => ({[language[0]]: language[1]}));
            }; console.log( mostSpokenLanguages(allCountries, 10) ); 
            // -> (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            /*
                {English: 91}
                {French: 45}
                {Arabic: 25}
                {Spanish: 24}
                {Portuguese: 9}
                {Russian: 9}
                {Dutch: 8}
                {German: 7}
                {Chinese: 5}
                {Serbian: 4}
                length: 10
            */