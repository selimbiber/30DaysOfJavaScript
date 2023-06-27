/*** Day 16 = JSON
 *? https://30dayjavascript.js.org/16-day/
 *? https://tr.javascript.info/json
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 16:

    Converting JSON to JavaScript Object
        JSON.parse()
    Using a reviver function with JSON.parse()
    Converting Object to JSON
    Using a Filter Array with JSON.stringify
*/

//! JSON, javascript nesne kavramı anlamına gelir. JSON syntaxı(sözdizim), JavaScript nesne gösterimi sözdiziminden türetilmiştir, ancak JSON biçimi yalnızca metin veya dizedir. JSON, depolama ve taşıma için hafif bir veri formatıdır. JSON, çoğunlukla bir sunucudan bir istemciye veri gönderildiğinde kullanılır. JSON, XML'e göre kullanımı daha kolay bir alternatiftir.

    /* Example for Syntax of JSON:

        {
            "users":[
                {
                    "firstName":"Asabeneh",
                    "lastName":"Yetayeh",
                    "age":250,
                    "email":"asab@asb.com"
                },
                {
                    "firstName":"Alex",
                    "lastName":"James",
                    "age":25,
                    "email":"alex@alex.com"
                },
                {
                "firstName":"Lidiya",
                "lastName":"Tekle",
                "age":28,
                "email":"lidiya@lidiya.com"
                }
            ]
        }

        Yukarıdaki JSON örneğinin normal bir JavaScript nesnesinden farkı JSON nesnesi anahtarının "" tırnaklı olması veya bir dize şeklinde olması gerektiğidir. 

        Yukarıdaki örneği daha detaylı görelim, küme paranteziyle başlıyor. Kıvrımlı parantez içinde bir değer dizisine sahip "users" anahtarı vardır. Dizinin içinde farklı nesnelerimiz var ve her nesnenin anahtarı var, her anahtarın çift tırnak işareti olması gerekiyor. Örneğin, sadece firstName yerine "firstNaMe" kullanıyoruz, ancak nesnede anahtarları çift tırnak işaretleri olmadan kullanıyoruz. Bu, bir nesne ile bir JSON arasındaki en büyük farktır.
    */

    //! Converting JSON to JavaScript Object | JSON'u JavaScript Nesnesine Dönüştürme
        /* 
            Çoğunlukla JSON verilerini HTTP yanıtından veya bir dosyadan alırız, ancak JSON'u bir dize olarak   saklayabiliriz ve gösterim amacıyla Object olarak değiştirebiliriz. JavaScript'te JSON anahtar sözcüğü parse () ve stringify() yöntemlerine sahiptir. JSON'u bir nesneye dönüştürmek istediğimizde, JSON.parse() kullanarak JSON'u ayrıştırırız. Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız.
        */

        //* JSON.parse() 

            // JSON.parse(json[, reviver])
            // json or text , the data
            // reviver opsiyonel callback fonksiyonudur
            /* JSON.parse(json, (key, value) => {
            
            }) */

            // const usersText = `{
            //     "users":[
            //       {
            //         "firstName":"Asabeneh",
            //         "lastName":"Yetayeh",
            //         "age":250,
            //         "email":"asab@asb.com"
            //       },
            //       {
            //         "firstName":"Alex",
            //         "lastName":"James",
            //         "age":25,
            //         "email":"alex@alex.com"
            //       },
            //       {
            //       "firstName":"Lidiya",
            //       "lastName":"Tekle",
            //       "age":28,
            //       "email":"lidiya@lidiya.com"
            //       }
            //     ]
            // }`

            // const userObj = JSON.parse(usersText, undefined, 4);
            // console.log(userObj);

    //! Using a reviver function with JSON.parse() | JSON.parse() ile bir reviver fonksiyonu kullanma

        /* Reviver fonksiyonunu formatlayıcı olarak kullanmak için isim ve soyadı değerini formatlamak istediğimiz tuşları koyuyoruz. Diyelim ki, JSON verilerinin ad ve soyadını biçimlendirmekle ilgileniyoruz. */

        // const usersText = `{
        //     "users":[
        //       {
        //         "firstName":"Asabeneh",
        //         "lastName":"Yetayeh",
        //         "age":250,
        //         "email":"asab@asb.com"
        //       },
        //       {
        //         "firstName":"Alex",
        //         "lastName":"James",
        //         "age":25,
        //         "email":"alex@alex.com"
        //       },
        //       {
        //       "firstName":"Lidiya",
        //       "lastName":"Tekle",
        //       "age":28,
        //       "email":"lidiya@lidiya.com"
        //       }
        //     ]
        // }`

        // const userObj = JSON.parse(usersText, (key, value) => {
        //     let newValue = 
        //         typeof value == 'string' && key !== 'email' ? value.toUpperCase() : value;
        //     return newValue;
        // }   );
        // console.log(userObj);

    //! Converting Object to JSON | Nesneyi JSON'a Dönüştürme
    
        /* 
            Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız. stringify yöntemi, bir gerekli parametre ve iki isteğe bağlı parametre alır. Değiştirici filtre olarak kullanılır ve boşluk bir girintidir. Nesnedeki anahtarlardan herhangi birini filtrelemek istemiyorsak, tanımsız olarak geçebiliriz.
        */

        // Syntax of JSON.tringify() : JSON.stringify(obj, replacer, space)

        // const users = {
        //     Alex: {
        //       email: 'alex@alex.com',
        //       skills: ['HTML', 'CSS', 'JavaScript'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 30
        //     },
        //     Asab: {
        //       email: 'asab@asab.com',
        //       skills: [
        //         'HTML',
        //         'CSS',
        //         'JavaScript',
        //         'Redux',
        //         'MongoDB',
        //         'Express',
        //         'React',
        //         'Node'
        //       ],
        //       age: 25,
        //       isLoggedIn: false,
        //       points: 50
        //     },
        //     Brook: {
        //       email: 'daniel@daniel.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        //       age: 30,
        //       isLoggedIn: true,
        //       points: 50
        //     },
        //     Daniel: {
        //       email: 'daniel@alex.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 40
        //     },
        //     John: {
        //       email: 'john@john.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        //       age: 20,
        //       isLoggedIn: true,
        //       points: 50
        //     },
        //     Thomas: {
        //       email: 'thomas@thomas.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 40
        //     },
        //     Paul: {
        //       email: 'paul@paul.com',
        //       skills: [
        //         'HTML',
        //         'CSS',
        //         'JavaScript',
        //         'MongoDB',
        //         'Express',
        //         'React',
        //         'Node'
        //       ],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 40
        //     }
        // }

        // const txt = JSON.stringify(users, undefined, 4);
        // console.log(txt) // text, JSON- anlamına gelir, çünkü json bir nesnenin string biçimidir.

        /* OUTPUT:

            {
                "Alex": {
                    "email": "alex@alex.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript"
                    ],
                    "age": 20,
                    "isLoggedIn": false,
                    "points": 30
                },
                "Asab": {
                    "email": "asab@asab.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Redux",
                        "MongoDB",
                        "Express",
                        "React",
                        "Node"
                    ],
                    "age": 25,
                    "isLoggedIn": false,
                    "points": 50
                },
                "Brook": {
                    "email": "daniel@daniel.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Redux"
                    ],
                    "age": 30,
                    "isLoggedIn": true,
                    "points": 50
                },
                "Daniel": {
                    "email": "daniel@alex.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Python"
                    ],
                    "age": 20,
                    "isLoggedIn": false,
                    "points": 40
                },
                "John": {
                    "email": "john@john.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Redux",
                        "Node.js"
                    ],
                    "age": 20,
                    "isLoggedIn": true,
                    "points": 50
                },
                "Thomas": {
                    "email": "thomas@thomas.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React"
                    ],
                    "age": 20,
                    "isLoggedIn": false,
                    "points": 40
                },
                "Paul": {
                    "email": "paul@paul.com",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "MongoDB",
                        "Express",
                        "React",
                        "Node"
                    ],
                    "age": 20,
                    "isLoggedIn": false,
                    "points": 40
                }
            }
        */
    
    //! Using a Filter Array with JSON.stringify | JSON.stringify ile Filtre Dizisi Kullanma

        /*
            Şimdi, replacerı filtre olarak kullanalım. Kullanıcı nesnesinin uzun bir anahtar listesi var ama biz sadece birkaçıyla ilgileniyoruz. Örnekte gösterildiği gibi dizide tutmak istediğimiz anahtarları koyuyoruz ve replacer yerine kullanıyoruz.
        */

            // const firstUser = {
            //     firstName: 'Asabeneh',
            //     lastName: 'Yetayeh',
            //     country: 'Finland',
            //     city: 'Helsinki',
            //     email: 'alex@alex.com',
            //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
            //     age: 250,
            //     isLoggedIn: false,
            //     points: 30
            // }

            // const text = JSON.stringify(firstUser, ['firstName', 'lastName', 'country', 'city', 'age'], 4);
            // console.log(text);

            /* OUTPUT: 

                {
                    "firstName": "Asabeneh",
                    "lastName": "Yetayeh",
                    "country": "Finland",
                    "city": "Helsinki",
                    "age": 250
                }
            */

//! 💻 Exercises

    const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
    let age = 250;
    let isMarried = true
    const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
    }
    const txt = `{
        "Alex": {
            "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }
    `

    // Exercises: Level 1

        //? 1. -> Change skills array to JSON using JSON.stringify()

            // const text = JSON.stringify(skills, undefined, 3);
            // console.log(text);

            /*
                [
                    "HTML",
                    "CSS",
                    "JS",
                    "React",
                    "Node",
                    "Python"
                ]
            */

        //? 2. -> Stringify the age variable

            // const text = JSON.stringify(age);
            // console.log(text); // -> 250

        //? 3. -> Stringify the isMarried variable

            // const text = JSON.stringify(isMarried);
            // console.log(text); // -> true

        //? 4. -> Stringify the student object

            // const text = JSON.stringify(student, undefined, 3);
            // console.log(text);
            /*
                {
                    "firstName": "Asabeneh",
                    "lastName": "Yetayehe",
                    "age": 250,
                    "isMarried": true,
                    "skills": [
                        "HTML",
                        "CSS",
                        "JS",
                        "React",
                        "Node",
                        "Python"
                    ]
                }
            */

    // Exercises: Level 2

        //? 1. -> Stringify the students object with only firstName, lastName and skills properties

            // const text = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3);
            // console.log(text);
            /*
                {
                    "firstName": "Asabeneh",
                    "lastName": "Yetayehe",
                    "skills": [
                        "HTML",
                        "CSS",
                        "JS",
                        "React",
                        "Node",
                        "Python"
                    ]
                }
            */

    // Exercises: Level 3

        //? 1. -> Parse the txt JSON to object.

            // const jsonToObject = JSON.parse(txt, undefined, 3);
            // console.log(jsonToObject);

        //? 2. -> Find the user who has many skills from the variable stored in txt.
            
            // for (const user of Object.entries(jsonToObject) ) {
            //     console.log(user[0] + ": " + user[1].skills.length)
            // }
            /*
                Alex: 3
                Asab: 8
                Brook: 5
                Daniel: 4
                John: 6
                Thomas: 4
                Paul: 7
            */

//! 🎉 CONGRATULATIONS ! 🎉