/*** Day 11 = Sets and Maps (Collections)
 *? https://30dayjavascript.js.org/11-day/
 *? https://tr.javascript.info/destructuring-assignment
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 11:

    Destructuring and Spread
        Destructing Arrays
        Destructuring during iteration
        Destructuring Object
        Renaming during structuring
        Object parameter without destructuring
        Object parameter with destructuring
        Destructuring object during iteration
        Spread or Rest Operator
        Spread operator to get the rest of array elements
        Spread operator to copy array
        Spread operator to copy object
            Spread operator with arrow function
*/

//! Destructing Arrays | Destructing ve Spread
    /*Destructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludur.*/

    // Destructing Arrays | Destructing Dizilerde Kullanımı

        const numbers = [1, 2, 3];

        // let [num1, num2, num3] = numbers;
        // console.log(num1, num2, num3); // -> 1 2 3

        const names = ['Ali', 'Veli', 'Hasan'];

        // let [name1, name2, name3] = names;
        // console.log(name1, name2, name3); // -> Ali Veli Hasan

        const fullStack = [
            ['HTML', 'CSS', 'JS', 'React'],
            ['Node', 'Express', 'MongoDB']
        ]

        // let [frontEnd, backEnd] = fullStack;
        // console.log("Front-end: " + frontEnd + "\nBack-end: " + backEnd);
        // -> Front-end: HTML,CSS,JS,React | Back-end: Node,Express,MongoDB

        //! Dipnot-1: Eğer dizideki bazı değerleri atlamak istiyorsak virgül(,) işareti kullanmak gerekir. Virgül söz konusu indisteki değeri atlamaya yardımcı olur.

            // let [num1, , num3] = numbers;
            // console.log(num1, num3) // -> 1 3 (2 atlandı)

            // let [name1, name2, ,] = names;
            // console.log(name1, name2); // -> Ali Veli

        //! Dipnot-2: Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.

            const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            let [num1, num2, num3, ...otherNums] = nums;
            console.log(num1, num2, num3); // -> 1 2 3
            console.log(otherNums); // -> (7) [4, 5, 6, 7, 8, 9, 10]

    // Destructuring during iteration | Iterasyon sırasında Destructuring

        const nordicCountries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

        for (const [country, capital] of nordicCountries) {
            console.log(country, capital);
        } // -> Finland Helsinki | Sweden Stockholm | Norway Oslo

        for (const [firstTech, secondTech, thirdTech] of fullStack) {
            console.log(firstTech, secondTech, thirdTech)
        } // -> HTML CSS JS | Node Express MongoDB
    
    // Destructuring Object | Objeye Destructuring işlemi yapma
        /* Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır */
        
        // const rectangle = {
        //     width: 20,
        //     height: 10,
        //     area: 200
        // }

        // let {width, height, area, perimeter} = rectangle;
        // console.log(width, height, area, perimeter); // -> 20 10 200 undefined

    // Renaming during structuring | Yapılandırma sırasında yeniden adlandırma

        // let {width: w, height: h, area: a, perimeter: p} = rectangle;
        // console.log(w, h, a, p); // -> 20 10 200 undefined

        //! Dipnot: Eğer anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Anahtar nesnede olmadığında bildirim sırasında varsayılan bir değer verilebilir. 

        // let {width, height, area, perimeter = 60} = rectangle;
        // console.log(width, height, area, perimeter); // -> 20 10 200 60

    // Object parameter without destructuring | Destructuring olmadan obje parametresi
        //! Bir dikdörtgen nesnesi alan ve bir dikdörtgenin çevresini döndüren bir fonksiyon oluşturalım.

            // Destructuring yok
            // const rect = {
            //     width: 20,
            //     height: 10
            // }

            // const calculatePerimeter = rectangle => {
            //     return 2 * (rectangle.width + rectangle.height)
            // }
            // console.log( calculatePerimeter(rect) ); // -> 60
    
    // Object parameter with destructuring | Destructuring ile obje parametresi
    
        // const calculatePerimeter = ( {width, height} ) => {
        //     return 2 * (width + height);
        // }; console.log( calculatePerimeter(rect) ); // -> 60

        //* person nesnesi hakkında destructuring kullanarak bilgi veren bir fonksiyon oluşturalım

            const person = {
                firstName: 'Selim',
                lastName: 'Biber',
                age: 24,
                country: 'Turkiye',
                job: 'Student',
                skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Django'],
                languages: ['Turkish', 'English', 'Arabic']
            }

            const getPersonInfo = ({
                firstName,
                lastName,
                age,
                country,
                job,
                skills,
                languages
            }) => {
                const formattedSkills = skills.slice(0, -1).join(', ')
                const formattedLanguages = languages.slice(0, -1).join(', ')
            
                personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaching ${formattedSkills} and ${
                skills[skills.length - 1]
                }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
            
                return personInfo
            }
            console.log(getPersonInfo(person))
            /*
            Selim Biber lives in Turkiye. He is 24 years old. He is an Student. He teaching HTML5, CSS3, JavaScript, React, Redux, Node, MongoDB, Python and Django. He speaks Turkish, English and a little bit of Arabic.
            */

    // Destructuring object during iteration | Iterasyon sırasında objeye destructuring işlemi uygulamak

        const todoList = [
            {
                task:'Prepare JS Test',
                time:'4/1/2020 8:30',
                completed:true
            },
            {
                task:'Give JS Test',
                time:'4/1/2020 10:00',
                completed:false
            },
            {
                task:'Assess Test Result',
                time:'4/1/2020 1:00',
                completed:false
            }
        ]

        for (const {task, time, completed} of todoList) {
            console.log(task, time, completed);
        }; // -> 
            /*
                Prepare JS Test 4/1/2020 8:30 true
                Give JS Test 4/1/2020 10:00 false
                Assess Test Result 4/1/2020 1:00 false
            */

    // Spread or Rest Operator | Spread veya Rest Operatörleri
        /*
            Bir diziye destructuring işlemi uygulandığında, kalan elemanları dizi olarak almak için yayılma operatörünü (...) kullanırız.Buna ek olarak, dizi öğelerini başka bir diziye yaymak için spread operatörünü kullanırız.
        */
    
    // Spread operator to get the rest of array elements | Dizi öğelerinin geri kalanını almak için spread operatörü
        const firstNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let [numOne, numTwo, ...rest] = firstNums;
        console.log(numOne, numTwo, rest); // -> 1 2 (8) [3, 4, 5, 6, 7, 8, 9, 10]
    
    // Spread operator to copy array | Diziyi kopyalamak için spread operatörü

        const evens = [0, 2, 4, 6, 8, 10]
        const evenNumbers = [...evens];

        const odds = [1, 3, 5, 7, 9]
        const oddNumbers = [...odds];

        const wholeNumbers = [...evenNumbers, ...oddNumbers];

        console.log(evenNumbers); // -> (6) [0, 2, 4, 6, 8, 10]
        console.log(oddNumbers); // -> (5) [1, 3, 5, 7, 9]
        console.log(wholeNumbers); // -> (11) [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

        const frontEnd = ['HTML', 'CSS', 'JS', 'React']
        const backEnd = ['Node', 'Express', 'MongoDB']
        const techsOfFullStack = [...frontEnd, ...backEnd];
        console.log(techsOfFullStack); // -> (7) ['HTML', 'CSS', 'JS', 'React', 'Node', 'Express', 'MongoDB']
    
    // Spread operator to copy object | Nesneyi kopyalamak için spread operatörü

        const user = {
            name: 'Selim',
            title: 'Programmer',
            country: 'Turkiye',
            city: 'Rize'
        }
        const copiedUser = {...user}
        console.log(copiedUser) // -> {name: 'Selim', title: 'Programmer', country: 'Turkiye', city: 'Rize'}

        //! Kopyalama sırasında nesneyi nitelendirme veya değiştirme:

            const newUser = {...user, title: 'Web Developer'};
            console.log(newUser); // -> {name: 'Selim', title: 'Web Developer', country: 'Turkiye', city: 'Rize'}
    
        //*Spread operator with arrow function | Ok fonksiyonu ve spread operatörü
            /* Sınırsız sayıda argüman alan bir ok fonksiyonu yazmak istersek, bir yayılma spread kullanırız. Parametre olarak bir spread işleci kullanırsak, bir işlevi çağırdığımızda iletilen bağımsız değişken bir diziye dönüşecektir. */

            const sumAllNums = (...args) => {
                let sum = 0;
                for (const num of args) {
                    sum += num;
                }
                return sum // ->
            }; console.log( sumAllNums(1, 2, 3, 4, 5) ) // -> 15

//! 💻 Exercises

    //*Exercises: Level 1

        const constants = [2.72, 3.14, 9.81, 37, 100]
        const norCountries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
        const theRectangle = {
            width: 20,
            height: 10,
            area: 200,
            perimeter: 60
        }
        const users = [
            {
                name:'Brook',
                scores:75,
                skills:['HTM', 'CSS', 'JS'],
                age:16
            },
            {
                name:'Alex',
                scores:80,
                skills:['HTM', 'CSS', 'JS'],
                age:18
            },
            {
                name:'David',
                scores:75,
                skills:['HTM', 'CSS'],
                age:22
            },
            {
                name:'John',
                scores:85,
                skills:['HTML'],
                age:25
            },
            {
                name:'Sara',
                scores:95,
                skills:['HTM', 'CSS', 'JS'],
                age: 26
            },
            {
                name:'Martha',
                scores:80,
                skills:['HTM', 'CSS', 'JS'],
                age:18
            },
            {
                name:'Thomas',
                scores:90,
                skills:['HTM', 'CSS', 'JS'],
                age:20
            }
        ]
    
        //? 1. -> Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

            const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
            console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp); // -> 2.72 3.14 9.81 37 100

        //? 2. -> Destructure and assign the elements of norCountries array to fin, est, sw, den, nor.

            const [fin, est, sw, den, nor] = norCountries;
            console.log(fin, est, sw, den, nor); // -> Finland Estonia Sweden Denmark Norway

        //? 3. -> Destructure the theRectangle object by its properties or keys.

            const {width, height, area, perimeter} = theRectangle;
            console.log(width, height, area, perimeter); // => 20 10 200 60

    //*Exercises: Level 2

        //? 1. -> Iterate through the users array and get all the keys of the object using destructuring.

            for (const {name, scores, skills, age} of users) {
                console.log(`
                Name: ${name}, 
                Scores: ${scores},
                Skills: ${skills}.
                Age: ${age}
                `);
            };

            /* OUTPUT:

                Name: Brook, 
                Scores: 75,
                Skills: HTM,CSS,JS.
                Age: 16

                Name: Alex, 
                Scores: 80,
                Skills: HTM,CSS,JS.
                Age: 18

                Name: David, 
                Scores: 75,
                Skills: HTM,CSS.
                Age: 22

                Name: John, 
                Scores: 85,
                Skills: HTML.
                Age: 25

                Name: Sara, 
                Scores: 95,
                Skills: HTM,CSS,JS.
                Age: 26

                Name: Martha, 
                Scores: 80,
                Skills: HTM,CSS,JS.
                Age: 18

                Name: Thomas, 
                Scores: 90,
                Skills: HTM,CSS,JS.
                Age: 20
            */

        //? 2. -> Find the persons who have less than two skills.

            const lessThanTwoSkills = users.filter((user) => {
                return user.skills.length < 2
            }); console.log(lessThanTwoSkills); // -> 0 {name: 'John', scores: 85, skills: Array(1), age: 25}
    
    //*Exercises: Level 3

        //? 1. -> Destructure the countries object print name, capital, population and languages of all countries.

            for (const {name, capital, population, languages} of allCountries) {
                console.log(`
                Name: ${name}
                Capital: ${capital}
                Population: ${population}
                Languages: ${languages}
                `);
            };

            /* An example from output:

                Name: Turkey
                Capital: Ankara
                Population: 78741053
                Languages: Turkish
            */

        //? 2. -> A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

            // const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [96, 85, 90, 95]]
            // console.log(name, skills, jsScore, reactScore); // -> David (4) ["HTML", "CSS", "JS", "React"] 90 95

                // const [ Name, Skills, [htmlScore, cssScore, jsScore, reactScore] ] = student;
                // console.log(`
                // Name: ${Name} 
                // Skills: ${Skills}
                // HTML Score: ${htmlScore}, CSS Score: ${cssScore}, JS Score: ${jsScore}, React Score: ${reactScore}`);

                /* OUTPUT:

                    Name: David 
                    Skills: HTML,CSS,JS,React
                    HTML Score: 96, CSS Score: 85, JS Score: 90, React Score: 95
                */

        //? 3. -> Write a function called convertArrayToObject which can convert the array to a structure object.

            const students = [
                    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
                    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
            ]
            
                // console.log(convertArrayToObject(students))
                // [
                //     {
                //         name: 'David',
                //         skills: ['HTM','CSS','JS','React'],
                //         scores: [98,85,90,95]
                //     },
                //     {
                //         name: 'John',
                //         skills: ['HTM','CSS','JS','React'],
                //         scores: [85, 80,85,80]
                //     }
                // ]

            function convertArrayToObject(array) {
                let convertedObjs = [];
                for (const [name, skills, scores] of array) {
                    convertedObjs.push({name, skills, scores});
                }
                return convertedObjs;
            }; console.log( convertArrayToObject(students) ); // -> (2) [{…}, {…}]

            //? 3.1. -> Copy the student object to newStudent without mutating the original object. In the new object add the following.

            const student = {
                name: 'David',
                age: 25,
                skills: {
                    frontEnd: [
                        { skill: 'HTML', level: 10 },
                        { skill: 'CSS', level: 8 },
                        { skill: 'JS', level: 8 },
                        { skill: 'React', level: 9 }
                    ],
                    backEnd: [
                        { skill: 'Node',level: 7 },
                        { skill: 'GraphQL', level: 8 },
                    ],
                    dataBase:[
                        { skill: 'MongoDB', level: 7.5 },
                    ],
                    dataScience:['Python', 'R', 'D3.js']
                }
            }

                const newStudent = {...student};
                console.log(newStudent); // -> {name: 'David', age: 25, skills: {…}}

            //? 3.2. -> Add Bootstrap with level 8 to the front end skill sets.
            //? 3.3. -> Add Express with level 9 to the back end skill sets.
            //? 3.4. -> Add SQL with level 8 to the data base skill sets.
            //? 3.5. -> Add SQL without level to the data science skill sets.

            // -> The copied object output should look like this:

                    // {
                    // name: 'David',
                    // age: 25,
                    // skills: {
                    // frontEnd: [
                    //         {skill: 'HTML',level: 10},
                    //         {skill: 'CSS',level: 8},
                    //         {skill: 'JS',level: 8},
                    //         {skill: 'React',level: 9},
                    //         {skill: 'BootStrap',level: 8}
                    //     ],
                    //     backEnd: [
                    //         {skill: 'Node',level: 7},
                    //         {skill: 'GraphQL',level: 8},
                    //         {skill: 'Express',level: 9}
                    //     ],
                    //     dataBase: [
                    //         { skill: 'MongoDB',level: 7.5},
                    //         { skill: 'SQL',level: 8}
                    //     ],
                    //     dataScience: ['Python','R','D3.js','SQL']
                    //     }
                    // }

                newStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 });
                newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
                newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
                newStudent.skills.dataScience.push('SQL');
                
                console.log(newStudent);

//! 🎉 CONGRATULATIONS ! 🎉