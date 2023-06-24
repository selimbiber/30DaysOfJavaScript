/*** Day 12 = Regular Expressions (RegEx)
 *? https://30dayjavascript.js.org/12-day/
 *? https://tr.javascript.info/regular-expressions
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 12:

    Regular Expressions
        RegExp parameters
            Pattern
            Flags
        Creating a pattern with RegExp Constructor
        Creating a pattern without RegExp Constructor
        RegExp Object Methods
            Testing for a match
            Array containing all of the match
            Replacing a substring
        Square Bracket
        Escape character(\) in RegExp
        One or more times(+)
        Period(.)
        Zero or more times
        Zero or one times(?)
        Quantifier in RegExp
        Cart ^
        Exact match
*/

//! Regular Expressions | Düzenli İfadeler

    /*
        *Düzenli İfadeler veya RegExp, verilerde kalıp bulmaya yardımcı olan küçük bir programlama dilidir. 
        *Bir RegExp, farklı veri tiplerinde bir desenin var olup olmadığına bakmak için kullanılabilir. *JavaScript'te RegExp kullanmak için, ya RegExp yapıcısını kullanırız ya da iki eğik çizgi (//) takip eden bir bayrakla bir RegExp deseni bildirebiliriz. 
            !İki şekilde bir kalıp oluşturabiliriz.

        *Bir dize bildirmek için tek tırnak, çift tırnak veya ters tırnak kullanırız; düzenli bir ifade bildirmek için iki eğik çizgi (//) ve isteğe bağlı bir bayrak kullanırız. 
            !Bayrak g, i, m, s, u veya y olabilir.
    */

    //! RegExp parameters:

        /*
            *Bir düzenli ifade iki parametre alır. Biri gereken arama deseni ve diğeri isteğe bağlı bir bayraktır.
        */

            //! Pattern:

                /*
                    *Pattern(Kalıp/Desen) bir metin veya benzerliği olan herhangi bir desen olabilir. Örneğin, bir e-postadaki "spam" kelimesi, aramak istediğimiz bir kalıp olabilir veya bir telefon numarası formatındaki numara, aramak istediğimiz bir ilgi alanı olabilir.
                */

            //! Flags:

                /*
                    *Flags(Bayraklar) bir düzenli ifadedeki isteğe bağlı parametrelerdir ve arama türünü belirler.      
                        !Bazı bayraklara bakalım:

                            g: bütün metinde bir kalıp aramak için global bir bayrak
                            i: case insensitive bayrağı (hem küçük harfleri hem de büyük harfleri arar)
                            m: çoklu satır
                */

    //! Creating a pattern with RegExp Constructor | RegExp Yapıcısı ile düzenli ifade kalıbı oluşturmak.

        /* Genel işaret ve büyük/küçük harfe duyarsız işaret olmadan düzenli ifade bildirmek. */

            // bayraksız desen örneği:

                // let pattern = 'kod';
                // let regEx = new RegExp(pattern);

        /* Genel işaret ve büyük/küçük harf duyarsız işaret ile düzenli ifade bildirmek. */

            // bayraklı desen örneği:

                // let flag = 'gi';
                // let regEx = new RegExp(pattern, flag);

        /* RegExp nesnesini kullanarak bir normal ifade kalıbı (desen) bildirmek. 
        Deseni ve bayrağı RegExp yapıcısının içine yazmak. */

            // let regEx = new RegExp('code', 'gi');

    //! Creating a pattern without RegExp Constructor | RegExp Yapıcısı olmadan düzenli ifade kalıbı oluşturmak.

        /* Genel işaret ve büyük/küçük harf duyarsız işaret ile düzenli ifade bildirmek. */

            // let regEx = /love/gi

            /* Yukarıdaki düzenli ifade, RegExp yapıcısı ile oluşturduğumuz düzenli ifadeyle aynıdır. */

                // let regEx = new RegExp('love','gi');

    //! RegExp Object Methods | RegExp Nesne Yöntemleri

        //* Testing for a match: Bir dizide eşleşme olup olmadığını test eder. True veya false döndürür.

            // const str = 'I love JavaScript';
            // const pattern = /love/
            // const result = pattern.test(str);
            // console.log(result); // -> true
        
        //* Array containing all of the match: Yakalama grupları da dahil olmak üzere tüm eşleşmeleri içeren bir dizi veya eşleşme bulunamazsa null döndürür. Global bir bayrak kullanmıyorsak, match() düzenli ifade kalıbı, indeks, girdi ve grubu içeren bir dizi döndürür.

            // const str = 'I love JavaScript';
            // const pattern = /love/
            // const result = str.match(pattern);
            // console.log(result); // -> ['love', index: 2, input: 'I love JavaScript', groups: undefined]

            // global bayrakla ile arama yapmak:

                // const str = 'I love JavaScript';
                // const pattern = /love/g
                // const result = str.match(pattern);
                // console.log(result); // -> ['love']

            //* search(): Bir dizide eşleşme olup olmadığını test eder. Eşleşmenin dizinini veya arama başarısız olursa -1'i döndürür.

                // const str = 'I love JavaScript';
                // const pattern = /love/g
                // const result = str.search(pattern);
                // console.log(result); // -> 2
        
        //* Replacing a substring:

            //* replace(): Bir dizede bir eşleşme için arama yürütür ve eşleşen alt dizeyi yeni bir alt dizeyle değiştirir.

            // const txt = 'Python is the most beautiful language that a human begin has ever created.\
            // I recommend python for a first programming language';

            // let matchReplaced = txt.replace(/Python|python/g, 'JavaScript');
            // console.log(matchReplaced);

                /* OUTPUT:

                    JavaScript is the most beautiful language that a human begin has ever created.            
                    I recommend JavaScript for a first programming language
                */

            // const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
            // T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
            // p%e%o%ple.\
            // I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
            // D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';

            // let matches = txt.replace(/%/g, "");
            // console.log(matches);

                /* OUTPUT:

                    I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.
                */

/* https://30dayjavascript.js.org/images/regex.png */

//! A set of characters

//! [a-c] means, a or b or c

//! [a-z] means, any letter a to z

//! [A-Z] means, any character A to Z

//! [0-3] means, 0 or 1 or 2 or 3

//! [0-9] means any number 0 to 9

//! [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

//! \: uses to escape special characters

//! \d mean: match where the string contains digits (numbers from 0-9)

//! \D mean: match where the string does not contain digits

//! . : any character except new line character(\n)

//! ^: starts with

//! r'^substring' eg r'^love', a sentence which starts with a word love

//! r'[^abc] mean not a, not b, not c.

//! $: ends with

//! r'substring$' eg r'love$', sentence ends with a word love

//! *: zero or more times

//! r'[a]*' means a optional or it can occur many times.

//! +: one or more times

//! r'[a]+' means at least once or more times

//! ?: zero or one times

//! r'[a]?' means zero times or once

//! \b: word bounder, matches with the beginning or ending of a word

//! {3}: Exactly 3 characters

//! {3,}: At least 3 characters

//! {3,8}: 3 to 8 characters

//! |: Either or

//! r'apple|banana' mean either of an apple or a banana

//! (): Capture and group     
    
    // Square Bracket | Köşeli Ayraç

        // const pattern = '[Aa]pple' //! -> bu köşeli parantez A veya a anlamına gelir.
        // const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.';

        // const matches = txt.match(pattern); 
        // console.log(matches); // -> ['Apple', index: 0, input: 'Apple and banana are fruits. An old cliche says an… by a banana a day keeps the doctor far far away.', groups: undefined]

        // const pattern = /[Aa]pple|[Bb]anana/g //! -> bu köşeli parantezler A veya a ya da B veya b anlamına gelir.
        // const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
        // const matches = txt.match(pattern); 
        // console.log(matches); // -> (5) ['Apple', 'banana', 'apple', 'banana', 'Banana']

        /* Köşeli parantez [] ve veya | operatörünü kullanarak Elma, elma, Muz ve muzu cümlenin içinden çıkarmayı başarıyoruz. */

    // Escape character(\) in RegExp | RegExp'de Kaçış Karakteri ( \ )

        // const pattern = /\d/g //! -> d, rakam anlamına gelen özel bir karakterdir.
        // const txt = 'This regular expression example was made in January 12,  2020.'
        // const matches = txt.match(pattern); 
        // console.log(matches); // -> (6) ['1', '2', '2', '0', '2', '0'], (Bizim istediğimiz çıktı şekli bu değil)

    // One or more times (+) | Bir veya daha fazla kez (+)

        // const pattern = /\d+/g //! -> d, rakam anlamına gelen özel bir karakterdir.
        // const txt = 'This regular expression example was made in January 12,  2020.'
        // const matches = txt.match(pattern); 
        // console.log(matches); // -> (2) ['12', '2020'], (Bizim istediğimiz çıktı şekli budur çünkü düzenlidir)

    // Period (.) | Nokta (.)

        // const pattern = /[a]./g // -> Bu köşeli parantez a ve . ise yeni satır dışında herhangi bir karakter anlamına gelir.
        // const txt = 'Apple and banana are fruits';
        // const matches = txt.match(pattern);
        // console.log(matches); // -> ["an", "an", "an", "a ", "ar"]

        // const pattern = /[a].+/g // -> Bu köşeli parantez a ve . ise yeni satır dışında bir veya daha fazla herhangi bir karakter anlamına gelir.
        // const txt = 'Apple and banana are fruits';
        // const matches = txt.match(pattern);
        // console.log(matches); // -> ['and banana are fruits']

    // Zero or one times (?) | Sıfır veya bir kez (?)

        /* Sıfır veya bir kez, desen oluşabilir veya oluşmayabilir anlamına gelir. */

        // const txt = 'I am not sure if there is a convention how to write the word e-mail.\Some people write it email others may write it as Email or E-mail.';
        // const pattern = /[Ee]-?mail/g // -> ? işareti kendin önce gelen karakterin opsiyonel olduğunu belirtir.
        // const matches = txt.match(pattern); 
        // console.log(matches); // -> (4) ['e-mail', 'email', 'Email', 'E-mail']

    // Quantifier in RegExp | Düzenli ifadelerde nicelik niceleyicileri

        /* Bir metinde aradığımız alt metnin uzunluğunu süslü parantez kullanarak belirtebiliriz. */

        // const txt = 'This regular expression example was made in December 6,  2019.';
        // const pattern = /\b\w{4}\b/g // -> dört karakterli düzenli ifadeleri arıyoruz
        // const matches = txt.match(pattern);
        // console.log(matches);// -> ['This', 'made', '2019']

        // const txt = 'This regular expression example was made in December 6,  2019.';
        // const pattern = /\b[a-zA-Z]{4}\b/g // -> rakam olmaksızın dört karakterden oluşan düzenli ifadeleri arıyoruz
        // const matches = txt.match(pattern);
        // console.log(matches); // -> (2) ['This', 'made']

        // const txt = 'This regular expression example was made in December 6,  2019.';
        // const pattern = /\d{4}/g // -> 4 haneli rakamdan oluşan düzenli ifade arıyoruz
        // const matches = txt.match(pattern); 
        // console.log(matches); // -> ['2019']

        // const txt = 'This regular expression example was made in December 6,  2019.'
        // const pattern = /\d{1,4}/g // -> 1'den 4'e kadar haneye sahip olabilecek düzenli ifadeler arıyoruz
        // const matches = txt.match(pattern);
        // console.log(matches); // -> (2) ['6', '2019']

    // Cart ^
    
        // ile başlar

            // const txt = 'This regular expression example was made in December 6,  2019.';
            // const pattern = /^This/ // -> This ile başlayan düzenli ifade arıyoruz
            // const matches = txt.match(pattern);
            // console.log(matches); // -> ['This', index: 0, input: 'This regular expression example was made in December 6,  2019.', groups: undefined]

        // olumsuzlama

            // const txt = 'This regular expression example was made in December 6,  2019.'
            // const pattern = /[^A-Za-z,. ]+/g
            // const matches = txt.match(pattern);
            // console.log(matches); // -> (2) ['6', '2019']

    // Exact match | Tam eşleşme

        /* Başlangıcı ^ ve sonu $ olan olmalıdır. */

        // let pattern = /^[A-Z][a-z]{3,12}$/;
        // let name = 'Selim';
        // let result = pattern.test(name);
        // console.log(result); // -> true

//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Calculate the total annual income of the person from the following text. 
        
            // const txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
            // const pattern = /\d{1,5}/g;
            // const matches = txt.match(pattern);
            // console.log(matches); // -> (3) ['4000', '10000', '5500']
            // let annualIncome = 0;
            // for (const income of matches) {
            //     annualIncome += Number(income);
            // }; console.log(annualIncome); // -> 19500

        //? 2. -> The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

            /*
                points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
                sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
                distance = 12
            */
                // points = ['201', '2', '-4', '-3', '-10', '0', '4', '8']
                // let pattern = new RegExp(/\-?[0-9]+/,'g');
                // let extractedPoints = points.map(x => parseFloat(x.match(pattern)[0])).sort((a,b) => a - b);

                // let distance = Math.abs(extractedPoints[0] - extractedPoints[extractedPoints.length - 1]);
                // console.log(distance); // -> 211 (The solution is not mine.)

        //? 3. -> Write a pattern which identify if a string is a valid JavaScript variable.

                // is_valid_variable('first_name') # True
                // is_valid_variable('first-name') # False
                // is_valid_variable('1first_name') # False
                // is_valid_variable('firstname') # True

                // const pattern = /^[a-zA-Z_$]*$/
                // const is_valid_variable = (str) => {
                //     return pattern.test(str);
                // }
                // console.log( is_valid_variable('first_name') ); // -> true
                // console.log( is_valid_variable('first-name') ); // -> false
                // console.log( is_valid_variable('1firstname') ); // -> false
                // console.log( is_valid_variable('firstname') ); // -> true

    // Exercises: Level 2

        //? 1. -> Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

        paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

        // console.log(tenMostFrequentWords(paragraph, 10));

        // [
        //     {word:'love', count:6},
        //     {word:'you', count:5},
        //     {word:'can', count:3},
        //     {word:'what', count:2},
        //     {word:'teaching', count:2},
        //     {word:'not', count:2},
        //     {word:'else', count:2},
        //     {word:'do', count:2},
        //     {word:'I', count:2},
        //     {word:'which', count:1}
        // ]

            //! ChatGPT Solution:

            // function tenMostFrequentWords(txt, top) {
            //     let wordsObj = {};
            //     let wordsArray = txt.match(/\b\w+\b/g);
            //     for (let i = 0; i < wordsArray.length; i++) {
            //         if (wordsObj.hasOwnProperty(wordsArray[i])) {
            //         wordsObj[wordsArray[i]]++;
            //         } else {
            //         wordsObj[wordsArray[i]] = 1;
            //         }
            //     }
            //     let sortedWords = [];
            //     for (let word in wordsObj) {
            //         sortedWords.push([word, wordsObj[word]]);
            //     }
            //     sortedWords.sort((a, b) => b[1] - a[1]);
            //     let result = [];
            //     for (let i = 0; i < top; i++) {
            //         if (sortedWords[i]) {
            //         result.push({word: sortedWords[i][0], count: sortedWords[i][1]});
            //         }
            //     }
            //     return result;
            // }; console.log( tenMostFrequentWords(paragraph,20) );

    // Exercises: Level 3

        //? 1. -> Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

            sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
            // console.log(cleanText(sentence));

            /* OUTPUT:

                I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
            */

                //! ChatGPT Solution:

                // function cleanAndCount(sentence) {
                //     sentence = sentence.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
                //     let words = sentence.split(' ');
                //     let wordCounts = {};
                //     for (let i = 0; i < words.length; i++) {
                //       let word = words[i];
                //       if (word in wordCounts) {
                //         wordCounts[word]++;
                //       } else {
                //         wordCounts[word] = 1;
                //       }
                //     }
                //     let sortedWords = Object.keys(wordCounts).sort(function(a, b) {
                //       return wordCounts[b] - wordCounts[a];
                //     });
                //     return sortedWords.slice(0, 3);
                // }; console.log( cleanAndCount(sentence) );

//! 🎉 CONGRATULATIONS ! 🎉
      