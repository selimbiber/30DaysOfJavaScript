/*** Day 5 = Arrays 
 *  https://30dayjavascript.js.org/05-day/
 *  https://tr.javascript.info/array
 *  Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
 * ***/

//! Arrays (Diziler): 

/*
    Objeler değerlerin anahtarlı bir şekilde koleksiyon halinde tutulmasını sağlar.
    Fakat bazı durumlarda sıralı koleksiyon tutmak gerekebilir, 1., 2. ve 3. elemente ihtiyaç olabilir. Örneğin kullanıcıların, ürünlerin, HTML elementlerinin liste halinde tutulmasını istediğinizde;

    Obje kullanmak mantıklı değildir, çünkü elemanların sırasını tutmaz bu objeler. Var olanların “arasına” yeni bir özellik girilemez. Objeler böyle kullanımlara uygun değildir.

    Bunun için özel bir veri yapısı olan diziler (arrays) vardır. 

    Değişkenlerin aksine, diziler Çoklu değerleri depolayabilirler. Dizi'deki her bir değer index'e sahiptir, ve her index bellek adresindeki bir referans'ı işaret eder. Bu index'ler kullanılarak her bir değere ulaşım sağlanabilir. Bir dizinin index'i sıfır'dan başlar ve dizinin son elemanının index'i, dizinin uzunluğundan bir eksiktir. 
    Bir dizi, sıralı ve değiştirilebilirdir. Farklı veri türlerinin bir koleksiyonudur. Bir dizi (array), tekrar edilen elemanların ve farklı veri türlerinin depolanmasına izin verir. Bir dizi (array) boş olabilir veya farklı veri türü değerlerine sahip olabilir.
*/

// Boş bir dizi nasıl oluşturulur?
/*
    Bir dizi değişkeni tanımlamak için let yerine const kullanmak çok yaygındır. Const kullanırsak, bu değişken adını bir daha kullanmayacağımız anlamına gelir.
*/
    //* Array constructor'ı ( yapıcı metot ) kullanmak

    // syntax
    // const  arr = Array()

    // ya da

    // let arr = new Array()
    // console.log(arr) // []

    //* Köşeli parantez kullanmak([])

    // syntax

// Bu boş bir dizi oluşturmak için en çok tavsiye edilen yöntemdir
    // const arr = []
    // console.log(arr)

// Değerlere sahip bir dizi nasıl oluşturulur?

    // const  numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi

    // const  fruits = ['banana', 'orange', 'mango', 'lemon'] // string dizisi, meyveler

    // const  vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // string dizisi, sebzeler

    // const  animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // string dizisi, ürünler

    // const  webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // string dizisi, web teknolojileri

    // const  countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // string dizisi, ülkeler

    //* Diziyi ve dizinin uzunluğunu yazdırmak:

        // console.log('Numbers:', numbers)
        // console.log('Number of numbers:', numbers.length) // -> 6

        // console.log('Fruits:', fruits)
        // console.log('Number of fruits:', fruits.length) // -> 4

        // console.log('Vegetables:', vegetables)
        // console.log('Number of vegetables:', vegetables.length) // -> 5


        // console.log('Animal products:', animalProducts)
        // console.log('Number of animal products:', animalProducts.length) // -> 4

        // console.log('Web technologies:', webTechs)
        // console.log('Number of web technologies:', webTechs.length) // -> 7

        // console.log('Countries:', countries)
        // console.log('Number of countries:', countries.length) // -> 5

    //* Dizinin farklı veri tiplerinde elemanları olabilir.

        // const person = [
        //     'Selim',
        //     23,
        //     true,
        //     { country: 'Turkiye', City: 'Rize' },
        //     { skills: ['HTML5', 'CSS3', 'Bootstrap5', 'GIT', 'JS'] }
        // ]
        // console.log(person);

// Split kullanarak dizi oluşturmak: Önceki bölümlerde gördüğümüz gibi, bir diziyi farklı şekillerde bölebilir ve diziyi değiştirebiliriz. Aşağıdaki örneklere bir göz atalım.

    // let  js = 'JavaScript'
    // const charsInJavaScript = js.split('')
    // console.log(charsInJavaScript) // -> ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

    // let  companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    // const  companies = companiesString.split(',')
    // console.log(companies) // -> ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

    // let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    // const words = txt.split(' ')
    // console.log(words) // -> // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// index kullanarak dizi elemanlarına ulaşmak: Dizide elemanların indexlerini kullanarak o elemana ulaşabiliriz. Dizinin index'i 0'dan başlar.

    // const favFruits = ['banana', 'orange', 'mango', 'lemon']
    // let  firstFruit = favFruits[0] // -> favFruits'e ait 1. eleman'a o elemanın indexini kullanarak erişiyoruz ve firstFruit değişkenine atıyoruz.
    // console.log(firstFruit) // -> banana 

    // secondFruit = favFruits[1] 
    // console.log(secondFruit) // -> orange

    // let lastFruit = fruits[3]
    // console.log(lastFruit) // -> lemon

    //* Dizinin son elemanı ise devam eden örnekteki gibi hesaplanabilir:

        // let lastIndex = favFruits.length - 1
        // lastFruit = favFruits[lastIndex]
        // console.log(lastFruit) // -> lemon

// Dizi elemanlarını düzenlemek: Bir dizi değiştirilebilir. Dizi yaratıldıktan sonra, elemanların içeriklerini değiştirebilir, modifiye edebiliriz.

    // const firstNumbers = [1, 2, 3, 4]
    // firstNumbers[0] = 10  // index 0'daki 1 elemanını 10 elemanı olarak değiştirdik
    // firstNumbers[1] = 20  // index 2'deki 2 elemanını 20 elemanı olarak değiştirdik
    // console.log(firstNumbers) // [10, 20, 3, 4]

// Dizileri manipüle edebilecek metotlar nelerdir?
/*
  !  Diziyi manüple edebilmek için farklı metotlar vardır. Bunlar dizilerle uğraşmak için kullanışlı yöntemlerden bazılarıdır. 
  ! Bu yöntemler: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift
*/

    //* Array Constructor = Bir dizi yaratmak için kullanılır.

        // const arr = Array() // -> boş bir dizi yaratır
        // console.log(arr)

        // const eightEmptyValues = Array(8) // -> sekiz tane boş değer yaratır
        // console.log(eightEmptyValues) // -> [empty x 8]

    //* fill ile statik değerler yaratmak: fill = Bütün dizi elemanlarını statik değerle doldurur.

        // const eightXvalues = Array(8).fill('X') // -> 'X'değerine sahip 8 tane eleman oluşuturur.
        // console.log(eightXvalues) // -> ['X', 'X','X','X','X','X','X','X']

        // const four4values = Array(4).fill(4) // -> '4' değerine sahip 8 tane eleman oluşturur.
        // console.log(four4values) // -> [4, 4, 4, 4]

    //* Concat kullanarak dizileri birleştirmek: Concat = İki diziyi birbiri ile birleştirir.
        //! Dipnot: concat sadece iki diziyi birleştirmez. ikiden fazla sayıda diziyi birleştirmenize izin verir.

            // const firstList = [1, 2, 3]
            // const secondList = [4, 5, 6]
            // const thirdList = firstList.concat(secondList)
            // console.log(thirdList) // -> [1, 2, 3, 4, 5, 6]

            // const fruits = ['banana', 'orange', 'mango', 'lemon'] // -> meyveler dizisi
            // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // -> sebzeler dizisi
            // const fruitsAndVegetables = fruits.concat(vegetables) // -> iki diziyi birleştirdik
            // console.log(fruitsAndVegetables) // -> (9) ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

    //* Dizi uzunluğuna ulaşmak: length = Dizi uzunluğunu bildirir.

        // const numbers = [1, 2, 3]
        // console.log(numbers.length) // -> Dizinin uzunluğu 3'tür.


    //* Arr[] dizisinin içindeki indexe ulaşmak: = indexOf = O elemanın dizide olup olmadığını kontrol eder.Eğer o eleman dizide mevcutsa index numarasını, mevcut değilse -1 döner.

        // const numbers = [1, 2, 3]

        // console.log(numbers.indexOf(3)) // -> 2
        // console.log(numbers.indexOf(0)) // -> -1
        // console.log(numbers.indexOf(1)) // -> 0
        // console.log(numbers.indexOf(4)) // -> -1

        //! Bir dizide aranan elemanın mevcut olup olmadığını kontrol etmek:

            // Örneğin dizide bir "banana" olup olmadığını kontrol edelim.

            // const  fruits = ['banana', 'orange', 'mango', 'lemon']
            // let  index = fruits.indexOf('banana') // -> 0

            // if(index === -1){
            //     console.log('This fruit does not exist in the array')
            // } else {
            //     console.log('This fruit does exist in the array')
            // }

            // -> This fruit does exist in the array (Not: -1 olsaydı eğer eleman dizide yok anlamına gelecekti çünkü bir eleman mevcut olmadığı bir dizinde aranırsa -1 döner)

            //! Burada ayrıca kısa if kullanabiliriz.

            // index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')


    // Dizinin içindeki son indexe ulaşmak: 
    
        //! lastIndexOf = Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.

            // const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

            // console.log(numbers.lastIndexOf(2)) // -> 7
            // console.log(numbers.lastIndexOf(0)) // -> -1
            // console.log(numbers.lastIndexOf(1)) // -> 6
            // console.log(numbers.lastIndexOf(4)) // -> 3
            // console.log(numbers.lastIndexOf(6)) // -> -1

        //! includes:Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır.Mevcut ise, true değerini döndürür, aksi takdirde false değerini döndürür.

            // const numbers = [1, 2, 3, 4]

            // console.log(numbers.includes(4)) // true
            // console.log(numbers.includes(0)) // false
            // console.log(numbers.includes(1)) // true
            // console.log(numbers.includes(6)) // false

            // const webTechs = [
            //     'HTML',
            //     'CSS',
            //     'JavaScript',
            //     'React',
            //     'Redux',
            //     'Node',
            //     'MongoDB'
            // ] // -> Web teknolojileri dizisi

            // console.log(webTechs.includes('Node')) // -> true
            // console.log(webTechs.includes('C')) // -> false

    // Diziyi kontrol etmek: Array.isArray = Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

        // const numbers = [1, 2, 3, 4]
        // console.log(Array.isArray(numbers)) // -> true

        // const hundred = 100;
        // console.log(Array.isArray(hundred)) // -> false

    // Diziyi stringe çevirmek: toString = Diziyi string bir ifadeye çevirir.

        // const numbers = [1, 2, 3, 4]
        // console.log(numbers.toString()) // -> 1,2,3,4

        // const names = ['Selim', 'Biber']
        // console.log(names.toString()) // -> Selim,Biber

    // Dizi elemanlarını Joinlemek: join = Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir dizi olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek farklı dizi parametreleri iletebiliriz.

        // const numbers = [1, 2, 3, 4]
        // console.log(numbers.join()) // -> 1,2,3,4

        // const names = ['Selim', 'Biber']

        // console.log(names.join()) // -> Selim,Biber
        // console.log(names.join('')) // -> SelimBiber
        // console.log(names.join(' ')) // -> Selim Biber
        // console.log(names.join(', ')) // -> Selim, Biber
        // console.log(names.join(' ve ')) // -> Selim ve Biber

        // const  webTechs = [
        //     'HTML5',
        //     'CSS3',
        //     'JavaScript',
        //     'React',
        //     'Redux',
        //     'Node',
        //     'MongoDB'
        // ] // -> List of web technologies
        // console.log(webTechs.join(' # ')) // -> HTML5 # CSS3 # JavaScript # React # Redux # Node # MongoDB
 
    // Dizi elemanlarını slice etmek: Slice = Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.

        // const numbers = [1, 2, 3, 4]

        // console.log(numbers.slice()) // -> Bütün öğeyi kopyalar
        // console.log(numbers.slice(0)) // -> Bütün öğeyi kopyalar
        // console.log(numbers.slice(0, numbers.length)) // -> Bütün öğeyi kopyalar
        // console.log(numbers.slice(0, 3)) // -> Son öğeyi dahil etmez: 1, 2, 3

    // Dizilerde splice metodu: Splice = üç parametre alır :başlangıç konumu, kaldırılması gereken eleman sayısı ve eklenmesi gereken eleman sayısı.

        const numbers = [1, 2, 3, 4]

        // numbers.splice();
        // console.log(numbers) // -> // -> Bütün elemanları kaldırır.

        // numbers.splice(0, 1);
        // console.log(numbers) // -> İlk elemanı kaldırır.

        // numbers.splice(2, 2, 7, 8, 9);
        // console.log(numbers) // -> 2 eleman kaldırıp 3 tane eleman ekledi: (5) [1, 2, 7, 8, 9]

    // push kullanarak diziye eleman eklemek: Push = Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.

        // syntax

        // const  arr = ['item1', 'item2','item3']
        // arr.push('new item')
        // console.log(arr)

        // ['item1', 'item2','item3','new item']

        // numbers.push(5);
        // console.log(numbers) // -> 5 elemanı dizinin sonuna eklendi: (5) [1, 2, 3, 4, 5]

        // let fruits = ['banana', 'orange', 'mango', 'lemon']
        // fruits.push('apple')
        // console.log(fruits) // -> apple elemanı dizinin sonuna eklendi: ['banana', 'orange', 'mango', 'lemon', 'apple']

    // pop kullanarak diziden eleman çıkarmak: pop = Dizinin sonundaki elemanı siler.

        // numbers.pop();
        // console.log(numbers); // -> sondaki eleman diziden çıkartıldı: (3) [1, 2, 3]

    // Dizinin en başından eleman kaldırmak: shift = Dizinin en başındaki elemanı siler.

        // numbers.shift();
        // console.log(numbers); // -> en baştaki eleman diziden çıkartıldı: (3) [2, 3, 4]

    // Dizinin en başına eleman eklemek: unshift = Dizinin başına dizi elemanı ekler.

        // numbers.unshift(0);
        // console.log(numbers); // -> 0 elemanı dizinin en başına eklendi: (5) [0, 1, 2, 3, 4]

    // Dizi sırasını terse çevirmek: reverse = Dizi sıralamasını terse çevirir.

        numbers.reverse();
        console.log(numbers); // -> (4) [1, 2, 3, 4] dizisi tersine çevrildi: (4) [4, 3, 2, 1]

    // Dizi elemanlarını sıralamak: sort = Dizi elemanlarını alfabetik sırada düzenleyin.Sort call back fonksyonu alır, sort'un call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.

        const webTechs = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB'
            ]
            webTechs.sort();
            console.log(webTechs); // -> (7) ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']

            webTechs.reverse(); // -> sortladıktan sonra reverse edebiliriz.
            console.log(webTechs); // -> (7) ['Redux', 'React', 'Node', 'MongoDB', 'JavaScript', 'HTML', 'CSS']

    // Dizi içinde diziler: Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de depolayabilirler. Şimdi dizi içinde bir dizi tanımlayalım.

        const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
        console.log(arrayOfArray); // -> (2) [Array(3), Array(3)] 0 :  (3) [1, 2, 3] 1 :  (3) [1, 2, 3] length :  2      
        
        const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
        const  backEnd = ['Node','Express', 'MongoDB']
        const fullStack = [frontEnd, backEnd]

        console.log(fullStack); // -> [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
        console.log(fullStack.length); // -> 2
        console.log(fullStack[0]) // -> ["HTML", "CSS", "JS", "React", "Redux"]
        console.log(fullStack[1]) // -> ["Node", "Express", "MongoDB"]

//! Exercise: Level 1

//! Exercise: Level 2

//! Exercise: Level 3