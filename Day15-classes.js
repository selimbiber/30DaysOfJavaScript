/*** Day 15 = Classes
 *? https://30dayjavascript.js.org/15-day/
 *? https://tr.javascript.info/classes
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 15:
 
    Classes
        Defining a classes
        Class Instantiation
        Class Constructor
        Default values with constructor
        Class methods
        Properties with initial value
        getter
        setter
        Static method
    Inheritance
        Overriding methods
*/

//! Classes | Sınıflar 

    /* 
    JavaScript nesne tabanlı progralama dilidir. JavaScript'teki her şey, özellikleri ve yöntemleriyle bir nesnedir. Nesne oluşturmak için sınıf oluşturutuz. Sınıflar nesne oluşturucu (constructor) gibidir yada nesne oluşturmak için taslak gibidir. Nesne oluşturmak için sınıf oluştururuz. Sınıf, nesnenin niteliklerini ve davranışını tanımlarken, nesne ise sınıfı temsil eder.

    Bir sınıf oluşturduğumuzda, istediğimiz zaman ondan nesne oluşturabiliriz. Bir sınıftan nesne oluşturmaya class instantiation(sınıf başlatma) denir.

    Nesne bölümünde, bir nesne değişmezinin nasıl oluşturulacağını gördük. Nesne değişmezi bir singleton'dur. Benzer bir nesne elde etmek istiyorsak, onu yazmalıyız. Ancak sınıf, birçok nesne oluşturmaya izin verir. Bu, kod miktarını ve kod tekrarını azaltmaya yardımcı olur.
    */

        // Sınıfın Tanımı (Instantiation)

            // // syntax
            // class ClassName {
            //     //  code goes here
            // }

            class Person {
                // code goes here
            } // -> Person sınıfı oluşturduk fakat içine bir şey yazmadık.

        // Sınıf Örneklemesi

            /* Örnekleme sınıfı, bir sınıftan bir nesne oluşturmak anlamına gelir. new anahtar kelimesine ihtiyacımız var ve sınıfın adını new kelimesinden sonra çağırıyoruz. */

            // const person = new Person();
            // console.log(person); // -> Person {} | Sınıfın henüz herhangi bir özelliği olmadığı için nesne boş.

            /* Sınıfta farklı özellikler iletmek için class constructor(sınıf yapıcısını) kullanalım. */

        // Sınıf Oluşturucu (Constructor)

            /*
                Constructor, nesnemiz için bir taslak oluşturmamıza izin veren yerleşik bir fonksiyondur. Constructor fonksiyonu, constructor anahtar sözcüğü ile başlar ve ardından bir parantez gelir. Parantez içinde nesnenin özelliklerini parametre olarak iletiyoruz. Bu anahtar sözcüğü, constructor parametrelerini sınıfa eklemek için kullanırız.

                Aşağıdaki Person sınıfı oluşturucusu firstName ve lastName özelliği oluşturur. Bu özellikler, this anahtar kelimesi kullanılarak Person sınıfına eklenir. this sınıfın kendinisi ifade eder.
            */

                // class NewPerson {
                //     constructor (firstName, lastName) {
                //         this.firstName = firstName,
                //         this.lastName = lastName
                //     }
                // };
                // const person_1 = new NewPerson();
                // console.log(person_1); // -> NewPerson {firstName: undefined, lastName: undefined}
                /* Nesnenin tüm anahtarları tanımsızdır(undefined). Ne zaman somutlaştırsak, özelliklerin değerini geçmeliyiz. */

                // const person_2 = new NewPerson('Selim', 'Biber');
                // console.log(person_2); // -> NewPerson {firstName: 'Selim', lastName: 'Biber'}

            //! Bir sınıf oluşturduğumuzda, sınıfı kullanarak birçok nesne oluşturabiliriz. Şimdi, Person sınıfını kullanarak birden fazla kişi nesnesi oluşturalım.

                // const person_3 = new NewPerson('Ali', 'Veli');
                // console.log(person_3); // -> NewPerson {firstName: 'Ali', lastName: 'Veli'}

                // const person_4 = new NewPerson('Hasan', 'Hüseyin');
                // console.log(person_4); // -> NewPerson {firstName: 'Hasan', lastName: 'Hüseyin'}

            // NewPerson sınıfımızın içersiine başka özellikler ekleyelim:

                // class NewPerson {
                //     constructor (firstName, lastName, age, country, city) {
                //         this.firstName = firstName,
                //         this.lastName = lastName,
                //         this.genger = gender,
                //         this.age = age,
                //         this.country = country,
                //         this.city = city
                //     }
                // };

                // const person_5 = new NewPerson('Selim', 'Biber', 'Erkek', 24, 'Turkiye', 'Rize');
                // console.log(person_5);
                // -> NewPerson {firstName: 'Selim', lastName: 'Biber', gender: 'Erkek' age: 24, country: 'Turkiye', city: 'Rize'}

        // Constructor ile varsayılan değerler

            /* Constructor fonksiyonun özellikleri,diğer normal fonksiyonlar gibi bir değere sahip olabilir. */

                // class NewPerson {
                //     constructor (
                //         firstName = 'Selim', 
                //         lastName = 'Biber', 
                //         gender = 'Erkek',
                //         age = 24, 
                //         country = 'Turkiye', 
                //         city = 'Rize'
                //     ) {
                //         this.firstName = firstName,
                //         this.lastName = lastName,
                //         this.gender = gender,
                //         this.age = age,
                //         this.country = country,
                //         this.city = city
                //     }
                // };
                // const person_6 = new NewPerson();
                // console.log(person_6); // -> NewPerson {firstName: 'Selim', lastName: 'Biber', age: 24, country: 'Turkiye', city: 'Rize'}

                // const person_7 = new NewPerson('Ali', 'Velioğlu', 'Erkek', 35, 'Turkiye', 'İzmir');
                // console.log(person_7); // -> 

        // Sınıf methodları:

            /* Bir sınıfın içindeki constructor, nesne için bir tasklak oluşturmamıza izin veren yerleşik bir fonksiyondur. Bir sınıfta sınıf methodları oluşturabiliriz. Methodlar, sınıf içindeki JavaScript fonksiyonlarıdır. Bazı sınıf methodları oluşturalım. */

            // class NewPerson {
            //     constructor (
            //         firstName = 'Selim', 
            //         lastName = 'Biber', 
            //         gender = 'Erkek',
            //         age = 24, 
            //         country = 'Turkiye', 
            //         city = 'Rize'
            //     ) {
            //         this.firstName = firstName,
            //         this.lastName = lastName,
            //         this.gender = gender,
            //         this.age = age,
            //         this.country = country,
            //         this.city = city
            //     }
            //     getFullName() {
            //         const fullName = this.firstName + ' ' + this.lastName;
            //         return fullName;
            //     }
            // };
            // const person_8 = new NewPerson('Selim', 'Biber', 'Erkek', 24, 'Turkiye', 'Rize');
            // console.log(person_8);
            // console.log( person_8.getFullName() ); // -> Selim Biber

        // Başlangıç ​​değeri olan özellikler

            // class NewPerson {
            //     constructor(firstName, lastName, age, country, city) {
            //         this.firstName = firstName,
            //         this.lastName = lastName,
            //         this.age = age,
            //         this.country = country,
            //         this.city = city
            //         this.score = 0,
            //         this.skills = []
            //     }
            //     getFullName() {
            //         const fullName = this.firstName + " " + this.lastName;
            //         return this.getFullName
            //     }
            // }
            // const person_9 = new NewPerson('Selim', 'Biber', 24, 'Turkiye', 'Rize');
            // console.log(person_9);

            //! NOT: Bir method regular , getter yada setter olabilir. getter ve setter yakından inceleyelim.

            // getter: get yöntemi, nesneden değere erişmemizi sağlar. Get anahtar sözcüğünü ve ardından bir fonksiyon kullanarak bir get methodu yazıyoruz. Özelliklere doğrudan nesneden erişmek yerine değeri almak için getter kullanırız. 
            
            // class NewPerson {
            //     constructor(firstName, lastName, age, country, city) {
            //         this.firstName = firstName,
            //         this.lastName = lastName,
            //         this.age = age,
            //         this.country = country,
            //         this.city = city
            //         this.score = 0,
            //         this.skills = []
            //     }
            //     getFullName() {
            //         const fullName = this.firstName + " " + this.lastName;
            //         return this.getFullName
            //     }
            //     get getScore() {
            //         return this.score
            //     }
            //     get getSkills() {
            //         return this.skills
            //     }
            // }
            // const person_10 = new NewPerson('Selim', 'Biber', 24, 'Turkiye', 'Rize');
            // console.log(person_10.getScore); // -> 0
            // console.log(person_10.getSkills); // -> []

            // setter: Setter yöntemi, belirli özelliklerin değerini değiştirmemize izin verir. set anahtar kelimesini kullanarak bir fonksiyon kullanarak bir setter methodu yazıyoruz.

            // class NewPerson {
            //     constructor(firstName, lastName, age, country, city) {
            //         this.firstName = firstName,
            //         this.lastName = lastName,
            //         this.age = age,
            //         this.country = country,
            //         this.city = city
            //         this.score = 0,
            //         this.skills = []
            //     }
            //     getFullName() {
            //         const fullName = this.firstName + " " + this.lastName;
            //         return this.getFullName
            //     }
            //     get getScore() {
            //         return this.score
            //     }
            //     get getSkills() {
            //         return this.skills
            //     }
            //     set setScore(score) {
            //         this.score += score
            //     }
            //     set setSkills(skills) {
            //         this.skills.push(skills)
            //     }
            // }
            // const person_11 = new NewPerson('Selim', 'Biber', 24, 'Turkiye', 'Rize')
            // person_11.setScore = 53;
            // person_11.setSkills = 'HTML'
            // person_11.setSkills = 'CSS'
            // person_11.setSkills = 'JS'
            // console.log(person_11.score); // -> 53
            // console.log(person_11.skills); // -> (3) ['HTML', 'CSS', 'JS']

            // NewPerson sınıfına getPersonInfo adlı normal method ekleyelim.

            // class NewPerson {
            //     constructor(firstName, lastName, age, country, city) {
            //         this.firstName = firstName,
            //         this.lastName = lastName,
            //         this.age = age,
            //         this.country = country,
            //         this.city = city
            //         this.score = 0,
            //         this.skills = []
            //     }
            //     getFullName() {
            //         const fullName = this.firstName + " " + this.lastName;
            //         return fullName
            //     }
            //     get getScore() {
            //         return this.score
            //     }
            //     get getSkills() {
            //         return this.skills
            //     }
            //     set setScore(score) {
            //         this.score += score
            //     }
            //     set setSkills(skills) {
            //         this.skills.push(skills)
            //     }
            //     getPersonInfo() {
            //         let fullName = this.getFullName()
            //         let skills = 
            //             this.skills.length > 0 &&
            //             this.skills.slice(0, this.skills.length - 1).join(', ') +
            //             ` and ${this.skills[this.skills.length - 1]}`
            //             let formattedSkills = skills ? `He knows ${skills}` : ''
            //             let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
            //             return info 
            //     }
            // }
            // const person_12 = new NewPerson('Selim', 'Biber', 24, 'Turkiye', 'Rize')
            // person_12.setScore = 53;
            // person_12.setSkills = 'HTML'
            // person_12.setSkills = 'CSS'
            // person_12.setSkills = 'JS'
            // console.log(person_12.score); // -> 53
            // console.log(person_12.skills); // -> (3) ['HTML', 'CSS', 'JS']
            // console.log( person_12.getPersonInfo() ); // -> Selim Biber is 24. He lives Rize, Turkiye. He knows HTML, CSS and JS

    // Statik method

        /* Statik anahtar kelime, bir sınıf için statik bir yöntem tanımlar. Statik methodlar, sınıfın örneklerinde(instance) çağrılmaz. Bunun yerine, sınıfın kendisinde çağrılırlar. Bunlar genellikle nesneler oluşturma veya klonlama fonskiyonları gibi yardımcı fonksiyonlardır. Statik methoda bir örnek Date.now()'dur. now yöntemi doğrudan sınıftan çağrılır. */

        class NewPerson {
            constructor(firstName, lastName, age, country, city) {
              this.firstName = firstName
              this.lastName = lastName
              this.age = age
              this.country = country
              this.city = city
              this.score = 0
              this.skills = []
            }
            getFullName() {
              const fullName = this.firstName + ' ' + this.lastName
              return fullName
            }
            get getScore() {
              return this.score
            }
            get getSkills() {
              return this.skills
            }
            set setScore(score) {
              this.score += score
            }
            set setSkill(skill) {
              this.skills.push(skill)
            }
            getPersonInfo() {
              let fullName = this.getFullName()
              let skills =
                this.skills.length > 0 &&
                this.skills.slice(0, this.skills.length - 1).join(', ') +
                  ` and ${this.skills[this.skills.length - 1]}`
          
              let formattedSkills = skills ? `He knows ${skills}` : ''
          
              let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
              return info
            }
            static favoriteSkill() {
              const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
              const index = Math.floor(Math.random() * skills.length)
              return skills[index]
            }
            static showDateTime() {
              let now = new Date()
              let year = now.getFullYear()
              let month = now.getMonth() + 1
              let date = now.getDate()
              let hours = now.getHours()
              let minutes = now.getMinutes()
              if (month < 10) {
                month = '0' + month
              }
              if (hours < 10) {
                hours = '0' + hours
              }
              if (minutes < 10) {
                minutes = '0' + minutes
              }
              let dateMonthYear = date + '.' + month + '.' + year
              let time = hours + ':' + minutes
              let fullTime = dateMonthYear + ' ' + time
              return fullTime
            }
        }
        console.log( NewPerson.favoriteSkill() ); // React | Node | JS etc.
        console.log( NewPerson.showDateTime() ); // -> 25.06.2023 22:05

        //! Dipnot: Statik methodlar, yardımcı fonksiyonlar olarak kullanılabilen yöntemlerdir.

    // Inheritance (Kalıtım)

        /* Inheritance kullanarak ana sınıfın tüm özelliklerine ve yöntemlerine erişebiliriz. Bu, kod tekrarını azaltır. Hatırlarsak, bir NewPerson ana sınıfımız var ve ondan alt sınıflar yaratacağız. Alt sınıfımız öğrenci, öğretmen vb. olabilir. */

        // syntax
        // class ChildClassName extends {
        //     // code goes here
        // }

        class student extends NewPerson {
            saySomething() {
               return 'I am a child of the newPerson class.'
            }
        }
        const student_1 = new student('Selim', 'Biber', 24, 'Turkiye', 'Rize')
        console.log(student_1);
        console.log( student_1.saySomething() ); // -> I am a child of the newPerson class.
        console.log( student_1.getFullName() ); // -> Selim Biber
        console.log( student_1.getPersonInfo() ); // -> Selim Biber is 24. He lives Rize, Turkiye. 

            // Overriding method

                /*
                    Gördüğümüz gibi NewPerson Class'taki tüm yöntemlere erişmeyi başardık ve Student alt sınıfında kullandık. Ana yöntemlerini özelleştirebiliriz, bir alt sınıfa ek özellikler ekleyebiliriz. Özelleştirmek istiyorsak, methodlar ve ekstra özellikler eklemek istiyorsak, alt sınıf için constructor fonksiyonu kullanmamız gerekir. Constructor işlevinin içinde, üst sınıftan tüm özelliklere erişmek için super() işlevini çağırırız. NewPerson sınıfının cinsiyeti yoktu ama şimdi öğrenci sınıfı için cinsiyet özelliğini verelim. Alt sınıfta aynı method adı kullanılıyorsa, üst yöntem geçersiz kılınır.
                */

                // class teacher extends NewPerson {
                //     constructor (firstName, lastName, age, country, city, gender) {
                //        super(firstName, lastName, age, country, city, gender)
                //     this.gender = gender 
                //     }
                //     saySomething() {
                //         return 'I am a child of the NewPerson class.'
                //     }
                //     getPersonInfo() {
                //     let fullName = this.getFullName()
                //     let skills =
                //         this.skills.length > 0 &&
                //         this.skills.slice(0, this.skills.length - 1).join(', ') +
                //         ` and ${this.skills[this.skills.length - 1]}`
                
                //     let formattedSkills = skills ? `He knows ${skills}` : ''
                //     let pronoun = this.gender == 'Male' ? 'He' : 'She'
                
                //     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
                //     return info
                //     }
                // }
                // const teacher_1 = new teacher(
                //     'Asabeneh',
                //     'Yetayeh',
                //     250,
                //     'Finland',
                //     'Helsinki',
                //     'Male'
                // )
                // console.log(teacher_1); 

                // console.log( teacher_1.saySomething() ); 
                // console.log( teacher_1.getFullName() ); 
                // console.log( teacher_1.getPersonInfo() ); 

//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Create an Animal class. The class will have name, age, color, legs properties and create different methods.

          class animal {
            constructor(name, age, color, legs) {
              this.name = name,
              this.age = age,
              this.color = color,
              this.legs = legs 
            }
            bark() {
              return 'bark! bark! bark!'
            }
            meow() {
              return 'meow! meow! meow!'
            }
          };

        //? 2. -> Create a Dog and Cat child class from the Animal Class.

          const dog = new animal('Bobi', 5, 'Black', 4);
          console.log(dog); // -> animal {name: 'Bobi', age: 5, color: 'Black', legs: 4}
          console.log( dog.bark() ); // -> bark! bark! bark!
          const cat = new animal('Boncuk', 3, 'Yellow', 4);
          console.log(cat); // -> animal {name: 'Boncuk', age: 3, color: 'Yellow', legs: 4}
          console.log( cat.meow() ); // -> meow! meow! meow!

    // Exercises: Level 2

        //? 1. -> Override the method you create in Animal class.

          class NewAnimal extends animal {
            constructor (name, age, color, legs, gender, genre) {
              super (name, age, color,legs, gender, genre)
              this.gender = gender,
              this.genre = genre
            }
          };

          const bird = new NewAnimal('Bulut', 2, 'Light Blue', 2, 'Male', 'Parrot');
          console.log(bird);
          /* OUTPUT:
          NewAnimal {
            age: 2
            color: "Light Blue"
            gender: "Male"
            genre: "Parrot"
            legs: 2
            name: "Bulut"
            [[Prototype]]: animal
          }
          */

    // Exercises: Level 3

        //? 1. -> Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

          ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

        /*
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
            console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

            // you output should look like this
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

            class statistics {
              constructor(array) {
                this.array = array;
              }
              count() {
                return this.array.length;
              }
              sum() {
                 const total = this.array.reduce( (acc, cur) => acc+=cur, 0)
                 return total;
              }
              min() {
                this.array.sort( function (a, b) { return a-b } );
                return this.array[0];
              }
              max() {
                this.array.sort( function (a, b) { return b-a } );
                return this.array[0];
              }
              range() {
                let numRange = new Set(this.array);
                return numRange.size;
              }
              mean() {
                const total = this.array.reduce( (acc, cur) => acc+=cur, 0)
                return total / this.array.length;
              }
              describe() {
                return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\n`
              }
            }
            let nums = new statistics(ages);
            console.log(nums.count()); // -> 25
            console.log(nums.sum()); // -> 744
            console.log(nums.min()); // -> 24
            console.log(nums.max()); // -> 38
            console.log(nums.range()); // -> 11
            console.log(nums.mean()); // -> 29.76
            console.log(nums.describe());
              /*
                Count: 25
                Sum: 744
                Min: 24
                Max: 38
                Range: 11
                Mean: 29.76
              */

        //? 2. -> Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

            class PersonAccount {
              constructor(firstname, lastname, incomes, expenses) {
                this.firstName = firstname,
                this.lastName = lastname,
                this.incomes = [],
                this.expenses = []
              }
              totalIncome() {
                return this.incomes.reduce( (sum,cur) => sum+cur, 0);
              }
              totalExpense() {
                return this.expenses.reduce( (sum,cur) => sum+cur, 0);
              }
              accountInfo() {
                return `
                Name: ${this.firstName} ${this.lastName},
                Total Income: ${this.totalIncome()},
                Total Expense: ${this.totalExpense()},
                Account Balance: ${this.accountBalance()}.`
              }
              set addIncome(income) {
                if(income > 0) {
                  this.incomes.push(income);
                }
              }
              set addExpense(expense) {
                if(expense > 0) {
                  this.expenses.push(expense);
                }
              }
              accountBalance() {
                return this.totalIncome() - this.totalExpense();
              }
            }
            const Person_53 = new PersonAccount('Selim', 'Biber');
            console.log(Person_53);
            Person_53.addIncome = 5000;
            Person_53.addIncome = 8000;
            Person_53.addExpense = 3000;
            console.log(Person_53.accountInfo());
            /*
                Name: Selim Biber,
                Total Income: 13000,
                Total Expense: 3000,
                Account Balance: 10000.
            */

//! 🎉 CONGRATULATIONS ! 🎉