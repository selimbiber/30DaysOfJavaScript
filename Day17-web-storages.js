/*** Day 17 = Web Storages
 *? https://30dayjavascript.js.org/17-day/
 *? https://tr.javascript.info/localstorage
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 17:
    
    HTML5 Web Storage

        sessionStorage
        localStorage
        Use case of Web Storages

    HTML5 Web Storage Objects

        Setting item to the localStorage
        Getting item from localStorage
        Clearing the localStorage
*/

//! HTML5 Web Storage (Depolama):

    /*
        Web Depolama (sessionStorage ve localStorage), geleneksel tanımlama bilgilerine göre önemli avantajlar sunan yeni bir HTML5 API'sidir. 
        HTML5'ten önce, uygulama verilerinin her sunucu isteğine dahil olan çerezlerde saklanması gerekiyordu. 
        Web depolaması daha güvenlidir ve büyük miktarda veri web sitesi performansını etkilemeden local(yerel) olarak depolanabilir. 
        Çerezlerin birçok web tarayıcısında veri depolama sınırı, çerez başına yaklaşık 4 KB'dir. 
        Web Storage çok daha büyük verileri (en az 5MB) depolayabiliriz ve asla sunucuya aktarılmaz. Aynı veya bir kaynaktan gelen tüm siteler aynı verileri depolayabilir ve bunlara erişebilir.

        Depolanan verilere JavaScript kullanılarak erişilebilir; bu, geleneksel olarak sunucu tarafı programlama ve ilişkisel veritabanlarını içeren birçok şeyi yapmak için istemci tarafı komut dosyası oluşturma yeteneğinden yararlanmamızı sağlar. İki Web Depolama nesnesi vardır:

        
        sessionStorage
        localStorage

        localStorage, sessionStorage'a benzer, ancak localStorage'da depolanan verilerin sona erme süresi olmamasına rağmen, sessionStorage'da depolanan verilerin sayfa oturumu sona erdiğinde, yani sayfa kapatıldığında silinmesi dışında.

        localStorage veya sessionStorage'da depolanan verilerin sayfanın protokolüne özel olduğuna dikkat edilmelidir.

        Anahtarlar ve değerler her zaman dizelerdir (nesnelerde olduğu gibi tamsayı anahtarlarının otomatik olarak dizelere dönüştürüleceğini unutmayın).
    */

    // sessionStorage: 
    
        /* sessionStorage: Yalnızca tarayıcı sekmesinde veya pencere oturumunda kullanılabilir. Verileri tek bir web sayfası oturumunda depolamak için tasarlanmıştır. 
        !Bu, pencere kapatılırsa oturum verilerinin kaldırılacağı anlamına gelir. 
        sessionStorage ve localStorage benzer yöntemlere sahip olduğundan, sadece localStorage'a odaklanacağız. */

    // localStorage: 

        /* HTML5 localStorage, son kullanma verisi olmadan tarayıcıda veri depolamak için kullanılan web depolama API'sinin bir diğer mekanizmasıdır. Veriler, tarayıcı kapatıldıktan sonra bile tarayıcıda mevcut olacaktır. localStorage, tarayıcı oturumları arasında bile tutulur. Bu, tarayıcı kapatılıp yeniden açıldığında ve ayrıca sekmeler ve pencereler arasında anında verilerin hala mevcut olduğu anlamına gelir.

        !Web Depolama verileri, her iki durumda da farklı tarayıcılar arasında mevcut değildir. Örneğin, Firefox'ta oluşturulan depolama nesnelerine tıpkı çerezler gibi Internet Explorer'da erişilemez. 
        
        !Yerel depolama üzerinde çalışmak için beş yöntem vardır: setItem(), getItem(), removeItem(), clear(), key() */

        
    // Use case of Web Storages | Web Storages Kullanım Durumları

        /*
            *verileri geçici olarak depolamak

            *kullanıcının alışveriş sepetine koyduğu ürünleri kaydetme

            *veriler, sayfa istekleri, birden çok tarayıcı sekmesi arasında ve ayrıca localStorage kullanılarak tarayıcı oturumları arasında kullanılabilir hale getirilebilir

            *localStorage kullanılarak tamamen çevrimdışı olarak kullanılabilir

            *Web Depolama, sonraki isteklerin sayısını en aza indirmek için istemcide bazı statik veriler depolandığında harika bir performans kazancı olabilir. Görüntüler bile Base64 kodlaması kullanılarak dizelerde saklanabilir.

            *kullanıcı kimlik doğrulama yöntemi için kullanılabilir

            !Yukarıda bahsedilen örnekler için localStorage kullanmak mantıklıdır.

            Bazı durumlarda, pencere kapanır kapanmaz verilerden kurtulmak istiyoruz. Ya da uygulamanın başka bir pencerede açık olan aynı uygulamaya müdahale etmesini istemiyorsak. Bu senaryolar en iyi şekilde sessionStorage ile sunulur.
        */

//! HTML5 Web Storage Objects | HTML5 Web Depolama Nesneleri

    /* HTML web depolama, istemcide veri depolamak için iki nesne sağlar:

        
        window.localStorage - son kullanma tarihi olmayan verileri depolar
        window.sessionStorage - bir oturum için veri depolar (tarayıcı sekmesi kapatıldığında veriler kaybolur) Çoğu modern tarayıcı Web Depolamayı destekler, ancak localStorage ve sessionStorage için tarayıcı desteğini kontrol etmek iyidir. 
        Web Depolama nesneleri için mevcut methodları (yöntemleri) görelim:
            
        !    localStorage - localStorage nesnesini görüntülemek için

        !    localStorage.clear() - localStrogedaki her şeyi kaldırmak için

        !    localStorage.setItem() - verileri localStorage'da depolamak için. Bir anahtar ve bir değer parametresi alır.

        !    localStorage.getItem() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak bir anahtar alır.

        !    localStorage.removeItem() - depolanan öğeyi localStorage'dan kaldırmak için. Parametre olarak bir anahtar alır.

        !    localStorage.key() - localStorage'da depolanan verileri görüntülemek için. Parametre olarak indeks alır.
    */

    // Setting item to the localStorage | Öğeyi localStorage'a ayarlama

        /*
            Bir localStorage'da saklanacak verileri ayarladığımızda, bir dize olarak saklanacaktır.

            Verileri localStorage'da localStorage.setItem yöntemini kullanarak depolarız.
        */

            // syntax:

                // localStorage.setITem('key', 'value');

            // String ifadeleri localStorage üzerinde saklama

                localStorage.setItem('firstName', 'Selim'); // -> // değer string olduğundan onu stringleştirmeyiz

            // Number ifadeleri localStorage üzerinde saklama

                localStorage.setItem('age', 23); 
                console.log(localStorage) // -> Storage {age: '23', firstName: 'Selim', length: 2}

            // Bir diziyi localStorage'da depolamak: Bir diziyi, nesneyi veya nesne dizisini depoluyorsak, önce nesneyi JSON'a dönüştürmemiz gerekir. Aşağıdaki örneğe bakalım:

                const skills = ['HTML', 'CSS', 'JS', 'React']
                //Biçimi korumak için önce skills dizisinin JSON nesnesine dönüşmesi gerekir.

                const skillsJSON = JSON.stringify(skills, undefined, 4);
                localStorage.setItem('skills', skillsJSON);
                console.log(localStorage.skills); //-> ["HTML", "CSS", "JS", "React"]

                let fullSkills = [
                    { tech: 'HTML', level: 10 },
                    { tech: 'CSS', level: 9 },
                    { tech: 'JS', level: 8 },
                    { tech: 'React', level: 9 },
                    { tech: 'Redux', level: 10 },
                    { tech: 'Node', level: 8 },
                    { tech: 'MongoDB', level: 8 }
                ]

                const fullSkillsJSON = JSON.stringify(fullSkills, undefined, 4);
                localStorage.setItem('fullSkills', fullSkillsJSON);
                console.log(localStorage.fullSkills);
                /*
                    [
                        {
                            "tech": "HTML",
                            "level": 10
                        },
                        {
                            "tech": "CSS",
                            "level": 9
                        },
                        {
                            "tech": "JS",
                            "level": 8
                        },
                        {
                            "tech": "React",
                            "level": 9
                        },
                        {
                            "tech": "Redux",
                            "level": 10
                        },
                        {
                            "tech": "Node",
                            "level": 8
                        },
                        {
                            "tech": "MongoDB",
                            "level": 8
                        }
                    ]
                */

                // Anahtarları almak/ayarlamak için basit bir nesne yolu da kullanabiliriz, bunun gibi:

                    console.log(localStorage.age); // -> 23
                    localStorage.age = 24;
                    console.log(localStorage.age); // -> 24
                    
                // Bir nesneyi localStorage'da depolamak: Nesneleri bir localStorage'a depolamadan önce, normal nesnenin JSON nesnesine dönüşmesi gerekir. 

                    const user = {
                        firstName: 'Selim',
                        lastName: 'Biber',
                        age: 24
                    }

                    const userJSON = JSON.stringify(user, undefined, 4);
                    localStorage.setItem('user', userJSON)
                    console.log(localStorage.user);

                    /*
                        {
                            "firstName": "Selim",
                            "lastName": "Biber",
                            "age": 24
                        }
                    */

    // Getting item from localStorage | Öğeyi localStorage'dan alma

        /* localStorage.getItem() yöntemini kullanarak yerel depodan veri alıyoruz. */

        // syntax: localStorage.getItem('key');

            let firstName = localStorage.getItem('firstName')
            let lastName = localStorage.getItem('lastName')
            let age = localStorage.getItem('age')
            console.log(firstName, lastName = 'Biber', age); // -> Selim Biber 24

            // JSON nesnesini normal diziye ayrıştırmak için JSON.parse() kullanalım.

                let mySkills = localStorage.getItem('fullSkillsJSON')
                let skillsObj = JSON.parse(fullSkillsJSON, undefined, 4);
                console.log(skillsObj); // -> (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

    // Clearing the localStorage : Clear yöntemi, yerel depolamada depolanan her şeyi temizleyecektir.

        localStorage.clear();


//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Store you first name, last name, age, country, city in your browser localStorage.

            localStorage.setItem('firstName', 'Selim');
            console.log(localStorage.firstName); // -> Selim

            localStorage.setItem('lastName', 'Biber');
            console.log(localStorage.lastName); // -> Biber

            localStorage.setItem('age', 24);
            console.log(localStorage.age); // -> 24

            localStorage.setItem('country', 'Turkiye');
            console.log(localStorage.country); // -> Turkiye

            localStorage.setItem('city', 'Rize');
            console.log(localStorage.city); // -> Rize

    // Exercises: Level 2

        //? 1. -> Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

            const student = {
                firstName: 'Selim',
                lastName: 'Biber',
                age: 24,
                skills: ['HTML', 'CSS', 'JS', 'React'],
                country: 'Turkiye',
            }
            const studentJSON = JSON.stringify(student, undefined, 4);
            localStorage.setItem('student', studentJSON);
            console.log(localStorage.student);

            /*
                {
                    "firstName": "Selim",
                    "lastName": "Biber",
                    "age": 24,
                    "skills": [
                        "HTML",
                        "CSS",
                        "JS",
                        "React"
                    ],
                    "country": "Turkiye"
                }
            */

    // Exercises: Level 3

        //? 1. -> Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

            const personAccount = {
                firstName: 'Selim',
                lastName: 'Biber',
                incomes: [],
                expenses: [],
                totalIncome() {
                    return this.incomes.reduce( (sum, cur) => sum+cur, 0)
                },
                totalExpense() {
                    return this.expenses.reduce( (sum, cur) => sum+cur, 0)
                },
                accountInfo() {
                    return `
                Name: ${this.firstName} ${this.lastName},
                Total Income: ${this.totalIncome()},
                Total Expense: ${this.totalExpense()},
                Account Balance: ${this.accountBalance()}.`
                },
                set addIncome(income) {
                    if (income > 0) {
                        this.incomes.push(income);
                    }
                },
                set addExpense(expense) {
                    if (expense > 0) {
                        this.expenses.push(expense);
                    }
                },
                accountBalance() {
                    return this.totalIncome() - this.totalExpense();
                }
            }
            
            console.log(personAccount);
            personAccount.addIncome = 5000;
            personAccount.addIncome = 8000;
            personAccount.addExpense = 3000;
            console.log( personAccount.accountInfo() ); 
            /*
                Name: Selim Biber,
                Total Income: 13000,
                Total Expense: 3000,
                Account Balance: 10000.
            */

            const personAccountJSON = JSON.stringify(personAccount, undefined, 4);
            localStorage.setItem('personAccount', personAccountJSON);
            console.log(localStorage.personAccount);
            /*
                {
                    "firstName": "Selim",
                    "lastName": "Biber",
                    "incomes": [
                        5000,
                        8000
                    ],
                    "expenses": [
                        3000
                    ]
                }
            */
           
//! 🎉 CONGRATULATIONS ! 🎉