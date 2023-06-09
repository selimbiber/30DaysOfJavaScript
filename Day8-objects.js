/*** Day 8 = Objects (Nesneler)
 *? https://30dayjavascript.js.org/08-day/
 *? https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/08_Day_Objects/08_day_objects.md
 *? https://tr.javascript.info/object
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
 *  ***/

/*  Topics of Objects

    8. Gün Konuları:
        Scope - Kapsam Alanları
            Window Global Object
            Global Scope
            Local Scope
        📔 Object - Nesne
            Boş Nesne Oluşturmak
            Değerlerle Birlikte Bir Nesne Oluşturmak
            Nesneden Değerleri Alabilmek
            Object - Nesne Methodu Oluşturma
            Object İçin Yeni Bir key Oluşturma
            Object Methodları
                Object.keys() Metodu
                Object.values() Methodu
                Object.entries() Methodu
                hasOwnProperty() Methodu
        💻 Exercises
            Exercises: Level 1
            Exercises: Level 2
            Exercises: Level 3
*/

//! Scope - Kapsam Alanları: 

    // Bu konu değişken tanımlamanın temel kısmını oluşturur. Farklı veri türlerini depolamak için değişken tanımlarız. Bir değişkeni tanımlamak için var, let veya const anahtar sözcüklerini kullanırız. Bir değişken farklı kapsam alanlarında tanımlanabilir.

    /* Değişken scope'ları şu şekilde olabilir.

    Global
    Local

    var, let veya const olmadan tanımlanan her değişken global scope olarak geçerlidir. */

    //! Window Global Object: Geçerli dosya içerisinde global scope da diyebiliriz.

        a = 'JavaScript' // bir değişkeni let veya const anahtar kelimeleri olmadan tanımlamak değişkeni global hale getirir ve geçerli dosya içerisinde her yerden erişilebilir.

        b = 10 // bu global scope olarak tanımlanmıştır ve dosya içerisinde her yerden erişilebilir.
        function letsLearnScope() {
            console.log(a, b)
            if (true) {
                console.log(a, b)
            }
        }
        // console.log(a, b) // erişilebilir.

    //! Global scope: Aynı dosyanın her yerinde global olarak tanımlanan bir değişkene erişilebilir. Global olma durumu iki şekilde olabilir Dosyanın direkt kendisinde global olabilir veya bazı kod bloklarına göre global olabilir.

    //! Yerel olarak tanımlanan bir değişkene yalnızca belirli kod bloğunda erişilebilir.

        // -> Block Scope

        // -> Function Scope

        /*
            var anahtar kelimesi ile tanımlanan bir değişken fonksiyon scope'u içerisinde geçerlidir. 
            
            Ancak let veya const anahtar kelimeleri ile tanımlanan değişkenler block scope'unda geçerlidir. (fonksiyon, if veya diğer dönggü blokları). 
            
            Block kapsamını biraz daha netleştirmek gerekirse Javascript ve diğer çoğu yazılım dili için süslü parantezler arası demek olur. {  }
        */

            // for(var i = 0; i < 3; i++){
            //     console.log(i) // 0, 1, 2
            // }
            // console.log(i) // 3

        /*
            Basitçe açıklamak gerekirse const ile tanımlanan bir değişkenin değerini daha sonraki satırlarda değiştiremeyiz ancak let ile tanımlanan değişkenin değerini değiştirebiliriz.

            Temel kural olarak, herhangi bir değişken değer için let ve sabit değer, dizi, nesne, ok fonksiyonu ve fonksiyon ifadesi için const özelliğini kullanabiliriz.
        */

//! 📔 Object - Nesne: 

    /*
        Daha önceden hatırlanacağı üzere, JavaScript’te yedi tane farklı tip olduğundan bahsedilmişti. Altı tanesi “basit” tipler, değerleri sadece tek bir şeye eşit olabilir. ( karakter dizisi, sayı vs.)

        Buna karşın objeler anahtar bilgileri ile değerlerini tutar ve daha karmaşık veri yapıları oluşturabilirler. JavaScript’te bu objeler dilin neredeyse her alanına etki etmiş durumdadır. Bundan dolayı daha derinlere inmeden nesnelerin nasıl çalıştıklarının öğrenilmesi gerekmektedir.

        Obje {...} işareti ile yaratılabilir. Objenin kendine has özellikleri mevcuttur. Bir özellik anahtar:değer ikilisinden oluşur. key( anahtar) genelde karakter dizisi olur ve “özellik ismi” olarak adlandırılır. Değer ise herhangi bir tip olabilir.

        Obje bir dolap gibi düşünülebilir. Bu dolabın içindeki her klasörün bir ismi var ve bu isme göre içinde değerler mevcut. Bu key(anahtar) değerine göre dosyayı bulmak, eklemek ve silmek daha kolay olacaktır.
    */

    //! Boş nesne oluşturmak: Boş obje (“boş dolap”) iki türlü oluşturulabilir.

        /*
            let person = new Object();
            let person = {};

            Genelde {...} kullanılmaktadır. Bu şekilde tanımlamaya obje kelimesi (object literal) denir.
        */

    //! Değerle birlikte nesne oluşturmak: Şimdi oluşturacağımız person nesnesinin firstName, lastName, age, country, city ve skills gibi bazı özellikleri olacak şekilde oluşturalım.

        // const person = {
        //     firstName: "Selim",
        //     lastName: "Biber",
        //     age: 24,
        //     country: "Turkiye",
        //     city: "Rize",
        //     skills: [
        //         "HTML5", "CSS3", "Bootstrap", "Git", "JavaScript", "jQuery"
        //     ],
        //     isMarried: false
        // }; 
        // console.log(person);

    //! Nesneden değerleri alabilmek: 

        /*
            Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:

            . operatörünü kullanarak erişebiliriz
            köşeli parantez kullanarak erişebiliriz
        */

            const person = {
                firstName: "Selim",
                lastName: "Biber",
                age: 24,
                country: "Turkiye",
                city: "Rize",
                skills: [
                    "HTML5", "CSS3", "Bootstrap", "Git", "JavaScript", "jQuery"
                ],
                isMarried: false,
                getFullName: function() {
                    return `${this.firstName} ${this.lastName}`
                }, 
                'phone number': '+90 550 472 58 86'
            }; 

            // "." operatörü kullanarak

                // console.log(person.firstName);
                // console.log(person.lastName);
                // console.log(person.age);
                // console.log(person.skills);

            // köşeli parantez kullanarak

                // console.log(person['firstName']); // -> çift tırnak ile olmaz.
                // console.log(person['lastName']);
                // console.log(person['age']);
                // console.log(person['skills']);
            //

            // örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanabiliriz

                // console.log(person['phone number']);

    //! Object methodları oluşturma:

        /*
            Şimdi, person nesnesinin getFullName özellikleri vardır. getFullName, kişi nesnesinin içindeki fonksiyondur ve biz ona nesne methodu diyoruz. this anahtar sözcüğü, nesnenin kendisine atıfta bulunur. Nesnenin farklı özelliklerinin değerlerine erişmek için this kelimesini kullanabiliriz. Bir ok fonksiyonunu (arrow function) nesne methodu olarak kullanamayız çünkü bu sözcüğü nesnenin kendisi yerine bir ok fonksiyonunun içindeki pencereyi ifade eder. Örnek olarak:
        */
            
            console.log( person.getFullName() ); // -> Selim Biber

    //! Object için yeni bir anahtar değer (key) oluşturma:

        /*
            Nesne, eşlenebilen bir veri yapısıdır ve oluşturulduktan sonra nesnenin içeriğini değiştirebiliriz.

            nesnede yeni key'ler oluşturabilme:
        */

            person.title = 'Student'
            person.skills.push('React')

            console.log(person.title); // -> Student
            console.log(person.skills); // -> (7) ['HTML5', 'CSS3', 'Bootstrap', 'Git', 'JavaScript', 'jQuery', 'React']

    //! Object methodları: Bir nesneyi manipüle etmek için farklı yöntemler vardır.

        //! Object.assign: Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır.

            const copyPerson = Object.assign({}, person);
            console.log(copyPerson);

        //! Object.keys() methodu: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır.

            const keys = Object.keys(copyPerson);
            console.log(keys); 
            // -> (10) ['firstName', 'lastName', 'age', 'country', 'city', 'skills', 'isMarried', 'getFullName', 'phone number', 'title']

            const skills = Object.keys(copyPerson.skills);
            console.log(skills); // -> (7) ['0', '1', '2', '3', '4', '5', '6']

        //! Object.values() methodu: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır.

            const values = Object.values(copyPerson);
            console.log(values); // -> (10) ['Selim', 'Biber', 24, 'Turkiye', 'Rize', Array(7), false, ƒ, '+90 550 472 58 86', 'Student']

        //! Object.entries() methodu: Bir dizideki key ve value değerlerini almak için kullanılır.

            const entries = Object.entries(copyPerson);
            console.log(entries); 
            // -> (10) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

        //! hasOwnProperty() methodu: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır.

            console.log( copyPerson.hasOwnProperty('name') ); // -> false
            console.log( copyPerson.hasOwnProperty('age') ); // -> true

/*  ChatGPT'nin Konu Özeti: 

    Kapsam (Scope), bir JavaScript programında değişkenlerin ve fonksiyonların erişebileceği alanları ifade eder. JavaScript'te üç tür kapsam vardır: global, fonksiyonel ve blok.

    Global kapsam, programın tüm kısmında geçerli olan kapsam olarak adlandırılır. Global kapsamda tanımlanan değişkenler programın her yerinde erişilebilir.

    Fonksiyonel kapsam, bir fonksiyonun içinde tanımlanan değişkenlerin erişebileceği kapsamı ifade eder. Fonksiyonun içinde tanımlanan değişkenlerin kapsamı, fonksiyonun çağrıldığı esnada oluşur.

    Blok kapsamı, bir blok içinde tanımlanan değişkenlerin erişebileceği kapsamı ifade eder. Blok kapsamı, if, for, while, switch gibi blok yapıları içinde tanımlanan değişkenlerin erişimini sınırlar.

    Nesneler (Objects), verileri ve işlevleri birleştiren karmaşık, yapısal veri tipleridir. Nesneler, anahtar-değer çiftleri olarak da bilinen özellikleri tutar. Nesneler, açık veya özel olarak tanımlanan yöntemlerin yanı sıra işlevsellik sunar.

    Nesneler JavaScript'te çok önemlidir. JavaScript her şeyin bir nesne olduğu bir dil olduğu için, nesnelerin kullanımı oldukça yaygındır. DOM, Ajax ve jQuery gibi web geliştirme kütüphaneleri, nesnelerin verimli kullanımına dayanır.

    JavaScript nesneleri, anahtar-değer çiftleri olarak tanımlanır ve her nesnenin kendine özgü özellikleri vardır. Nesneler, kendilerine ait özellik ve yöntemlerle birlikte diğer nesneler ile etkileşim kurabilirler ve karmaşık uygulamaların oluşturulmasına olanak tanırlar.
*/

//! 💻 Exercises:

    // todo Exercises: Level 1:

        //? 1. -> Create an empty object called dog.

        //? 2. -> Print the the dog object on the console.

        //? 3. -> Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.

        //? 4. -> Get name, legs, color, age and bark value from the dog object.

        //? 5. -> Set new properties the dog object: breed, getDogInfo.

    // todo Exercises: Level 2:

        //? 1. -> Find the person who has many skills in the users object.

        //? 2. -> Count logged in users, count users having greater than equal to 50 points from the following object.

            /*
                const users = {
                    Alex: {
                        email: 'alex@alex.com',
                        skills: ['HTML', 'CSS', 'JavaScript'],
                        age: 20,
                        isLoggedIn: false,
                        points: 30
                    },
                    Asab: {
                        email: 'asab@asab.com',
                        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
                        age: 25,
                        isLoggedIn: false,
                        points: 50
                    },
                    Brook: {
                        email: 'daniel@daniel.com',
                        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
                        age: 30,
                        isLoggedIn: true,
                        points: 50
                    },
                    Daniel: {
                        email: 'daniel@alex.com',
                        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
                        age: 20,
                        isLoggedIn: false,
                        points: 40
                    },
                    John: {
                        email: 'john@john.com',
                        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
                        age: 20,
                        isLoggedIn: true,
                        points: 50
                    },
                    Thomas: {
                        email: 'thomas@thomas.com',
                        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
                        age: 20,
                        isLoggedIn: false,
                        points: 40
                    },
                    Paul: {
                        email: 'paul@paul.com',
                        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
                        age: 20,
                        isLoggedIn: false,
                        points: 40
                    }
                }
            */
        
        //? 3. -> Find people who are MERN stack developer from the users object.

        //? 4. -> Set your name in the users object without modifying the original users object.

        //? 5. -> Get all keys or properties of users object.

        //? 6. -> Get all the values of users object.

        //? 7. -> Use the countries object to print a country name, capital, populations and languages.

    // todo Exercises: Level 3

        //? 1. -> Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

        //? 2. -> **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

                /*
                const users = [
                {
                    _id: 'ab12ex',
                    username: 'Alex',
                    email: 'alex@alex.com',
                    password: '123123',
                    createdAt:'08/01/2020 9:00 AM',
                    isLoggedIn: false
                },
                {
                    _id: 'fg12cy',
                    username: 'Asab',
                    email: 'asab@asab.com',
                    password: '123456',
                    createdAt:'08/01/2020 9:30 AM',
                    isLoggedIn: true
                },
                {
                    _id: 'zwf8md',
                    username: 'Brook',
                    email: 'brook@brook.com',
                    password: '123111',
                    createdAt:'08/01/2020 9:45 AM',
                    isLoggedIn: true
                },
                {
                    _id: 'eefamr',
                    username: 'Martha',
                    email: 'martha@martha.com',
                    password: '123222',
                    createdAt:'08/01/2020 9:50 AM',
                    isLoggedIn: false
                },
                {
                    _id: 'ghderc',
                    username: 'Thomas',
                    email: 'thomas@thomas.com',
                    password: '123333',
                    createdAt:'08/01/2020 10:00 AM',
                    isLoggedIn: false
                }
                ];

                const products = [
            {
                _id: 'eedfcf',
                name: 'mobile phone',
                description: 'Huawei Honor',
                price: 200,
                ratings: [
                { userId: 'fg12cy', rate: 5 },
                { userId: 'zwf8md', rate: 4.5 }
                ],
                likes: []
            },
            {
                _id: 'aegfal',
                name: 'Laptop',
                description: 'MacPro: System Darwin',
                price: 2500,
                ratings: [],
                likes: ['fg12cy']
            },
            {
                _id: 'hedfcg',
                name: 'TV',
                description: 'Smart TV:Procaster',
                price: 400,
                ratings: [{ userId: 'fg12cy', rate: 5 }],
                likes: ['fg12cy']
            }
        ]
                */

            /*
            Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
            b. Create a function called signIn which allows user to sign in to the application
        */

        //? 3. -> The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product.

        //? 4. ->  Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

//! 🎉 CONGRATULATIONS ! 🎉