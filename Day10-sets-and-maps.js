/*** Day 10 = Sets and Maps (Kümeler ve Haritalar)
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

//! Map: 

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

            for (const country of countriesMap) {
                console.log(country);
            };
            /* OUTPUT:
                (2) [Finland, Helsinki]
                (2) [Sweden, Stockholm]
                (2) [Norway, Oslo]
            */

            for (const [country, city] of countriesMap) {
                console.log(country, city);
            }
            /* OUTPUT:
                Finland Helsinki
                Sweden Stockholm
                Norway Oslo
            */  

//! 💻 Exercises

    //* Exercises: Level 1

        /*
            const a = [4, 5, 8, 9]
            const b = [3, 4, 5, 7]
            const countries = ['Finland', 'Sweden', 'Norway']
        */

        //? 1. -> create an empty set

        //? 2. -> Create a set containing 0 to 10 using loop

        //? 3. -> Remove an element from a set

        //? 4. -> Clear a set

        //? 5. -> Create a set of 5 string elements from array

        //? 6. -> Create a map of countries and number of characters of a country

    //* Exercises: Level 2

        //? 1. -> Find a union b

        //? 2. -> Find a intersection b

        //? 3. -> Find a with b

    //* Exercises: Level 3

        //? 1. -> How many languages are there in the countries object file.

        //? 2. -> Use the countries data to find the 10 most spoken languages:

            //! Your output should look like this:
                /*
                    console.log(mostSpokenLanguages(countries, 10))
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
                
                    console.log(mostSpokenLanguages(countries, 3))
                    [
                        {English:91},
                        {French:45},
                        {Arabic:25}
                    ]
                */