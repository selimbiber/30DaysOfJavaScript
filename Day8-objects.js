/*** Day 8 = Objects (Nesneler)
 *? https://30dayjavascript.js.org/08-day/
 *? https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Turkish/08_Day_Objects/08_day_objects.md
 *? https://tr.javascript.info/object
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

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

    //! Virgül: Her özellikten sonra virgül konulmalıdır. Son özellikten sonra virgül ile bitirilebilir.

        // NOT: Bu sön özellikten sonra gelen virgüle “bekletme” virgülü denir. Böylece yeni özellik ekleme veya silme daha kolay olur. Çünkü tüm satırlar aynıdır.

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

            // örneğin, phone number özellik anahtarına erişebilmek için yalnızca köşeli parantez [] yöntemini kullanabiliriz çünkü özellik anahtarı birkaç kelimeden oluşuyorsa nokta ile bu özelliğe erişilemez:
                //! Dipnot: Nokta yazımı köşeli parantez kadar etkin değildir. Köşeli parantez esneklik sağlar.

                // console.log(person['phone number']);

            // let key = prompt("Kullanıcı hakkında ne bilmek istiyorsun?", "age");

            // değişkene göre değer alınır.
            // alert( person[key] ) // -> 24 (eğer "age" girerse bu değer alınır.)

            //! Dipnot: Değişken tanımlarken boşluk ve başka sınırlamalar aynen . yazımı için de geçerlidir.

    //! Nesnelerde Hesaplanmış Özellikler: Obje tanımında da köşeli parantez kullanabiliriz. Buna Hesaplanmış Özellikler ( Computed Properties ) denir.

        // let meyve = prompt("Hangi meyveyi istersin?", "elma");

        // let poset = {
        //     [meyve]: 5, // meyve değişkeninden objenin anahtarı alınıyor.
        // };
        
        // alert( poset.elma ); // eğer meyve "elma" girildiyse 5 değeri döner.

        // Hesaplanmış özelliklerin anlamı basittir: [meyve], özellik isminin meyve değişkeninden alınması gerektiğini bildirir.

        // Öyleyse eğer kullanıcı "elma" değerini girerse poset {elma:5} olacaktır.

        // Aslında aşağıdaki ile aynı şekilde çalışacaktır:

            // let sebze = prompt("Hangi sebzeyi istersin?", "marul");
            // let sepet = {};
            
            // sebze değişkeninden objenin anahtarı alınıyor.
            // sepet[sebze] = 5;

        //! Köşeli parantez içerisinde daha karmaşık ifadeler de kullanabiliriz:
            
            let meyve = 'elma';
            let poset = {
            [meyve + 'Yedim']: 5 // poset.elmaYedim = 5
            };

            // Köşeli parantez nokta yazımına göre çok daha güçlüdür. Her türlü özellik ismini ve değişkeni desteklerler. Fakat yazımı biraz gariptir.

            // Eğer özellik isimleri tek kelime ise çoğunlukla nokta yazımı kullanılır. Eğer daha karmaşık ise bu durumda köşeli parantez kullanılır.

        //! JavaScript dili için ayrılmış anahtar ifadeler nesne içerisinde kullanılabilir.

            // Değişken ismi for,let,return gibi dil için ayrılmış anahtar ifadelerden oluşamazken nesne özellikleri için böyle bir sınırlama yoktur yani nesne özellikleri bu ifadelerle de adlandırılabilir.

            let obj = {
                for: 1,
                let: 2,
                return: 3
            }
            
            // alert( obj.for + obj.let + obj.return );  // -> 6
            
            // Temelde tüm isimlere izin verilir, fakat bir tane özel isim vardır "__proto__" bu özel bir davranış sergiler. Örneğin nesne olmayan bir değeri atayamayız:

                // let nesne = {};
                // nesne.__proto__ = 5;
                // alert(nesne.__proto__); // -> [object Object], beklendiği gibi çalışmadı.

                // Kodda görüldüğü üzere, 5, ilkel bir tip olduğundan dolayı atanamadı ve görmezden gelindi.

                // Bundan dolayı eğer kullanıcıya bir anahtar tanımlattırılırsa bu aslında hatalara ve güvenlik açıklarına neden olabilir.

                // Böyle bir durumda kullanıcı “proto” seçerse tüm mantık yukarıdaki gibi çalışmaz hale gelir.

                //! __proto__'yu normal özellik olarak tanıtma yöntemi de bulunmaktadır, bu yöntem ilerleyen zamanlarda işlenecektir.

        //! Özellik değeri kısaltması: Kod yazarken genelde var olan değişkenleri özelliklere isim olarak atarız.

            // function kullaniciOlustur(isim, cinsiyet) {
            //     return {
            //         isim: isim,
            //         cinsiyet: cinsiyet
            //     };
            // }

            // let kullanici = kullaniciOlustur("Selim", "Erkek");
            // console.log( kullanici ); // -> {isim: 'Selim', cinsiyet: 'Erkek'}

            //! Dipnot: Yukarıdaki örnekte özellikler değişkenler ile aynı isme sahipler. Bu çeşit kullanım çok yaygındır.

        //! Varlık kontrolü: Bir nesnedeki her özellik erişilebilirdir, erişilmek istenen o özellik nesnenin içinde yoksa bile kendinden sonraki kodların çalışmasını durdurmaz sadece "undefined" değer döner. Bu da kolayca o özelliğin olup olmadığını kontrol etmemizi sağlar.

            // let yeniKullanici = {};

            // alert( yeniKullanici.olmayanOzellik === undefined ); // -> true "böyle bir özellik yok" demektir.

            //! Ayrıca bunu kontrol için "in" operatörü de kullanılabilir.

                // "anahtar" in yeniKullanici

            //? Eğer özellik undefined döndürüyorsa nasıl kontrol edilmelidir?

                /*
                    Genelde sıkı karşılaştırma "=== undefined" doğru çalışır. Fakat burada özel bir durum mevcuttur ve o durumda sıkı karşılaştırma da başarısız olur. Fakat bu durumda bile "in" doğru çalışır.

                    Bu olay nesnede o özelliğinin var olduğu fakat undefined döndürdüğü durumlarda meydana gelir.
                */

                    let obje = {
                        test: undefined
                    };
                      
                    // console.log( obje.test ); // undefined - yani böyle bir özellik yok mu?
                    
                    // console.log( "test" in obje ); // true, özellik mevcut!

                    /* 
                    Yukarıdaki örnekte obje.test teknik olarak mevcut. Bundan dolayı in operatörü doğru bir şekilde çalışır.

                    Bu türde olaylar çok nadir yaşanır, çünkü bir özelliğe neredeyse kimse undefined atamaz. Genelde bilinmeyen için null veya boş değer kullanılır. Bundan dolayı in operatörü kodda yabancı görünür.
                    */

        //! Nesne sıralaması: Objeler sıralı mıdır? Diğer bir deyişle; eğer döngü içerisinde obje yazdırılırsa bu objeye yerleştirme sırasına göre mi yazılır?
                
            // Kısa cevap: “özel bir şekilde sıralanır”. Eğer tam sayı ise değerlerine göre, tam sayı değil ise türlü objeye eklenme sırasına göre sıralanır.

            // Örneğin telefon kodları:

            let kodlar = {
                "49": "Almanya",
                "41": "İsveç",
                "44": "İngiltere",
                // ..,
                "1": "Amerika Birleşik Devletleri"
            };
            
            for(let kod in kodlar) {
                // console.log(kod); // 1, 41, 44, 49
            } // -> Almanya birinci sıraya konulmuş fakat gördüğünüz üzere anahtar 49 olduğundan ilk değil de sonuncu sırada.
                //! Dipnot: Telefon kodları tam sayı olduğundan dolayı bu sıraya göre dizilmişlerdir.
                    //? Özellik anahtarları nasıl tam sayı olabilir ?
                        /*
                            Burada “tam sayı” aslında sayı tipinde değil de karakter tipinde sayı olmakta. Sıralama yapılacağı sırada sayısal olarak çevriliyor ve buna göre sıralanıyor.
                        */
                
                //! Peki telefon kodları (tam sayı değerleri) nasıl eklenme sırasına göre kullanılabilir? Bunun için her koddan önce "+" işaretini kullanmak yeterli olacaktır.

                    // Şu şekilde:

                        let telefonKodlari = {
                            "+49": "Almanya",
                            "+41": "İsveç",
                            "+44": "İngiltere",
                            // ..,
                            "+1": "Amerika Birleşik Devletleri"
                        };
                        
                        for (let kod in telefonKodlari) {
                            // console.log( +kod ); // > 49, 41, 44, 1 şeklinde istediğimiz gibi çalışır.
                        }

                //! Diğer yandan, eğer anahtarlar tam sayı değilse bu durumda zaten objeye eklenme sırasına göre çıktı alınır.

    //! Referans ile kopyalama: 

        /*
            Objeler ile ilkel tipler (karakter dizisi, sayı, boolean vs.) arasındaki temel fark objelerin saklanması ve kopyalanması “referans” ile olur.

            Fakat ilkel tipler tamamen kopyalanır.

            Örneğin:
        */

            let mesaj = "Merhaba!";
            let karsilama = mesaj;
            // -> Sonuç olarak birbirinden bağımsız iki değişken de "Merhaba!" değerini tutar.

            //! Nesneler ise bu şekilde çalışmaz: Nesne değişkeni nesnenin kendisini değil hafızadaki adresini tutar. Diğer bir deyişle referansını tutar. Nesne değişkeni kopyalandığında aslında nesnenin referansı kopyalanır, hafızadaki nesne kopyalanmaz. 

                // Nesne bir dolap olarak düşünürsek değişken bu dolabın anahtarıdır. Kopyaladığımız zaman dolabı değil de anahtarı kopyalamış olursunuz.

                let user = { isim: "Selim" };

                let admin = user; // referansı kopyalar.

                // Yani artık iki tane değişken var ve ikisi de aynı nesneye referans oldu: Bu iki değişkenden birini kullanarak nesnenin içeriği değiştirilebilir:

                    admin.isim = "Yavuz"; // -> Admin referansı kullanılarak değiştirildi.
                    // console.log(user); // -> {isim: 'Yavuz'}', admin referansı kullanılarak yapılan değişiklik user referansında da etkili oldu ve `Selim` değişerek `Yavuz` oldu.

        //! Referansların karşılaştırılması: İki nesne anca aynı nesneler ise eşittir.

            // Örneğin iki değişken aynı nesneyi referans alırsa bu durumda eşit olurlar:
            //! Dipnot: Eşitlik == ve sıkı eşitlik === operatörleri aynı şekilde çalışmaktadır.

            let c = {};
            let d = c; // referansı kopyala

            // console.log( c == d ); // true, iki değişken de aynı nesneyi referans almaktadır.
            // console.log( c === d ); // true

            // İki tane farklı nesnenin nasıl davrandığına bakılırsa:

                let e = {};
                let f = {}; // iki tane bağımsız nesne
                
                // console.log( e == f ); // false
    //! Object methodları oluşturma:

        /*
            Şimdi, person nesnesinin getFullName özellikleri vardır. getFullName, person nesnesinin içindeki fonksiyondur ve biz ona nesne methodu diyoruz. this anahtar sözcüğü, nesnenin kendisine atıfta bulunur. Nesnenin farklı özelliklerinin değerlerine erişmek için this kelimesini kullanabiliriz. Bir ok fonksiyonunu (arrow function) nesne methodu olarak kullanamayız çünkü bu sözcüğü nesnenin kendisi yerine bir ok fonksiyonunun içindeki pencereyi ifade eder. Örnek olarak:
        */
            
            console.log( person.getFullName() ); // -> Selim Biber

    //! Object için yeni bir anahtar değer (key) oluşturma:

        /*
            Nesne, eşlenebilen bir veri yapısıdır ve oluşturulduktan sonra nesnenin içeriğini değiştirebiliriz.

            Nesnede yeni key'ler oluşturabilme:
        */

            person.title = 'Student'
            person.skills.push('React')

            // console.log(person.title); // -> Student
            // console.log(person.skills); // -> (7) ['HTML5', 'CSS3', 'Bootstrap', 'Git', 'JavaScript', 'jQuery', 'React']

    //! Delete operatörü ile nesneden bir özellik silinebilir:

        // console.log(person); 
        // -> {firstName: 'Selim', lastName: 'Biber', age: 24, country: 'Turkiye', city: 'Rize', …}

        delete person.city;
        // console.log(person); 
        // -> {firstName: 'Selim', lastName: 'Biber', age: 24, country: 'Turkiye', skills: Array(7), …}

    //! Object methodları: Bir nesneyi manipüle etmek için farklı yöntemler vardır.

        //! Object.assign: Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır.

            const copyPerson = Object.assign({}, person);
            // console.log(copyPerson);

        //! Object.keys() methodu: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır.

            const keys = Object.keys(copyPerson);
            // console.log(keys); 
            // -> (10) ['firstName', 'lastName', 'age', 'country', 'city', 'skills', 'isMarried', 'getFullName', 'phone number', 'title']

            const skills = Object.keys(copyPerson.skills);
            // console.log(skills); // -> (7) ['0', '1', '2', '3', '4', '5', '6']

        //! Object.values() methodu: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır.

            const values = Object.values(copyPerson);
            // console.log(values); // -> (10) ['Selim', 'Biber', 24, 'Turkiye', 'Rize', Array(7), false, ƒ, '+90 550 472 58 86', 'Student']

        //! Object.entries() methodu: Bir dizideki key ve value değerlerini almak için kullanılır.

            const entries = Object.entries(copyPerson);
            // console.log(entries); 
            // -> (10) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

        //! hasOwnProperty() methodu: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır.

            // console.log( copyPerson.hasOwnProperty('name') ); // -> false
            // console.log( copyPerson.hasOwnProperty('age') ); // -> true

/*  ChatGPT'nin Konu Özeti: 

    Kapsam (Scope), bir JavaScript programında değişkenlerin ve fonksiyonların erişebileceği alanları ifade eder. JavaScript'te üç tür kapsam vardır: global, fonksiyonel ve blok.

    Global kapsam, programın tüm kısmında geçerli olan kapsam olarak adlandırılır. Global kapsamda tanımlanan değişkenler programın her yerinde erişilebilir.

    Fonksiyonel kapsam, bir fonksiyonun içinde tanımlanan değişkenlerin erişebileceği kapsamı ifade eder. Fonksiyonun içinde tanımlanan değişkenlerin kapsamı, fonksiyonun çağrıldığı esnada oluşur.

    Blok kapsamı, bir blok içinde tanımlanan değişkenlerin erişebileceği kapsamı ifade eder. Blok kapsamı, if, for, while, switch gibi blok yapıları içinde tanımlanan değişkenlerin erişimini sınırlar.

    Nesneler (Objects), verileri ve işlevleri birleştiren karmaşık, yapısal veri tipleridir. Nesneler, anahtar-değer çiftleri olarak da bilinen özellikleri tutar. Nesneler, açık veya özel olarak tanımlanan yöntemlerin yanı sıra işlevsellik sunar.

    Nesneler JavaScript'te çok önemlidir. JavaScript her şeyin bir nesne olduğu bir dil olduğu için, nesnelerin kullanımı oldukça yaygındır. DOM, Ajax ve jQuery gibi web geliştirme kütüphaneleri, nesnelerin verimli kullanımına dayanır.

    JavaScript nesneleri, anahtar-değer çiftleri olarak tanımlanır ve her nesnenin kendine özgü özellikleri vardır. Nesneler, kendilerine ait özellik ve yöntemlerle birlikte diğer nesneler ile etkileşim kurabilirler ve karmaşık uygulamaların oluşturulmasına olanak tanırlar.

    javascript.info Özeti: 

    Özelliğe erişebilmek için :

        Nokta yazımı:obj.ozellik
        Köşeli parantez yazımı: obj["özellik"]. Köşeli parantez ayrıca değişkenden anahtar değerini de alabilir. Örn:obj[varWithKey]

    Ek operatörler:

        Özelliği silmek için: delete obj.ozellik
        Varlığını kontrol etmek için "anahtar" in obj
        Döngüde kullanmak için for(let anahtar in obj) kullanılır.

    Objeler değer değil de referans tutarlar, yani verilerin hafızadaki adresini. Bundan dolayı Obje değişkenini kopyalamak, veya bir parametreye göndermek demek aslında onun referansını kopyalamak veya referansını bir parametreye göndermek demektir. Tüm olaylar aslında aynı veri üzerinde olur. Bunlar özelliklerin eklenmesi veya silinmesi olabilir.

    Eğer objenin “gerçek kopyası” , veya diğer bir deyişle klonu yapılmak istenirse Object.assign veya _.cloneDeep(obj) kullanılabilir.

    Bu bölümde “basit obje” veya Obje konusunu işlendi.

    JavaScript’te birçok çeşit obje bulunmaktadır:

    Dizi sıralı olarak verileri tutar.,
    Date Tarih ve saat bilgilerini tutar.,
    Error Hata hakkındaki bilgileri tutar…
    …ve daha bir çoğu.

    JavaScript dilinde objeler çok güçlüdür. Şu ana kadar anlatılanlar sadece başlangıç seviyesindedir. Objelere daha yakından bakılacak ve ilerleyen bölümlerde daha fazla örnek verilecektir.
*/

//! 💻 Exercises:

    //? Exercises: Level 1:

        //? 1. -> Create an empty object called dog.

            // const dog = {};

        //? 2. -> Print the the dog object on the console.

            // console.log(dog);

        //? 3. -> Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.

            // dog.name = "Chiko";
            // dog.legs = "Quadrupedal";
            // dog.color = "Black";
            // dog.age = 6;
            // dog.bark = function () { return "woof woof"};

        //? 4. -> Get name, legs, color, age and bark value from the dog object.

            // console.log( dog.name ); // -> Chiko
            // console.log( dog.legs ); // -> Quadrupedal
            // console.log( dog.color ); // -> Black
            // console.log( dog.age ); // -> 6
            // console.log( dog.bark() ); // -> woof woof

            // console.log( dog ); // -> {name: 'Chiko', legs: '4', color: 'Black', age: 6, bark: ƒ}

        //? 5. -> Set new properties the dog object: breed, getDogInfo.

            // dog.breed = "Hound";

            // console.log( dog.breed ); // -> Hound

            // dog.getDogInfo = function () { return `Name: ${dog.name}, Legs: ${dog.legs}, Color: ${dog.color}, Age: ${dog.age}, Breed: ${dog.breed}.`}

            // console.log( dog.getDogInfo() ); 
            // -> Name: Chiko, Legs: Quadrupedal, Color: Black, Age: 6, Breed: Hound.

    //? Exercises: Level 2:

                
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
                skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node.js'],
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
                skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
                age: 20,
                isLoggedIn: false,
                points: 40
            }
        }
            

        //? 1. -> Find the person who has many skills in the users object.

            for ( const user of Object.keys(users) ) {
                let maxSkills = 0;
                let mostSkilledPerson;

                if ( users[user].skills.length > maxSkills ) {
                    maxSkills = users[user].skills.length;
                    mostSkilledPerson = Object.assign({}, users[user]);

                    // console.log(mostSkilledPerson.email, maxSkills); 
                    // -> asab@asab.com 8
                }
            }

        //? 2. -> Count logged in users, count users having greater than equal to 50 points from the following object.

            for ( const user of Object.keys(users) ) {
                let maxPoints = 0;
                let topUsers;

                if ( users[user].isLoggedIn == true ) {
                    if ( users[user].points >= 50 ) {
                        maxPoints = users[user].points;
                        topUsers = Object.assign({}, users[users]);

                        // console.log(maxPoints.length); // -> 2
                    }
                }
            }
        
        //? 3. -> Find people who are MERN stack developer from the users object.

            for ( const user of Object.keys(users) ) {
                let mernStackDeveloper;

                if ( users[user].skills.includes('MongoDB') &&  'Express' && 'React' && 'Node.js' ) {
                    mernStackDeveloper = Object.assign({}, users[user]);

                    // console.log(mernStackDeveloper);
                    /* -> {email: 'asab@asab.com', skills: Array(8), age: 25, isLoggedIn: false, points: 50}
                    -> {email: 'paul@paul.com', skills: Array(7), age: 20, isLoggedIn: false, points: 40} */
                }
            }

        //? 4. -> Set your name in the users object without modifying the original users object.

            const copyUsers = Object.assign({}, users);
            copyUsers['Selim'] = {};
            // console.log(copyUsers); // -> Selim: {}

        //? 5. -> Get all keys or properties of users object.

            const userKeys = Object.keys(users);
            // console.log(userKeys); // -> (7) ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul']

        //? 6. -> Get all the values of users object.

            const userValues = Object.values(users);
            // console.log(userValues); // -> (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

        //? 7. -> Use the countries object to print a country name, capital, populations and languages.

        const countries = [
            {
              name: 'Afghanistan',
              capital: 'Kabul',
              languages: ['Pashto', 'Uzbek', 'Turkmen'],
              population: 27657145,
              flag: 'https://restcountries.eu/data/afg.svg',
              currency: 'Afghan afghani'
            },
            {
              name: 'Belgium',
              capital: 'Brussels',
              languages: ['Dutch', 'French', 'German'],
              population: 11319511,
              flag: 'https://restcountries.eu/data/bel.svg',
              currency: 'Euro'
            },
            {
              name: 'China',
              capital: 'Beijing',
              languages: ['Chinese'],
              population: 1377422166,
              flag: 'https://restcountries.eu/data/chn.svg',
              currency: 'Chinese yuan'
            },
            {
              name: 'Germany',
              capital: 'Berlin',
              languages: ['German'],
              population: 81770900,
              flag: 'https://restcountries.eu/data/deu.svg',
              currency: 'Euro'
            },
            {
              name: 'Myanmar',
              capital: 'Naypyidaw',
              languages: ['Burmese'],
              population: 51419420,
              flag: 'https://restcountries.eu/data/mmr.svg',
              currency: 'Burmese kyat'
            },
            {
              name: 'Turkey',
              capital: 'Ankara',
              languages: ['Turkish'],
              population: 78741053,
              flag: 'https://restcountries.eu/data/tur.svg',
              currency: 'Turkish lira'
            },
        ]

            const myCountry = countries[Object.keys(countries)[5]];
            
            // console.log("Name: ", myCountry.name) // -> Name:  Turkey
            // console.log("Capital: ", myCountry.capital) // -> Capital:  Ankara
            // console.log("Population: ", myCountry.population); // -> Population:  78741053
            // console.log("Languages: ", myCountry.languages); // -> Languages:  ['Turkish']

    //? Exercises: Level 3

        //? 1. -> Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

            const personAccount = {
                firstName: 'Mark',
                lastName: 'Beeler',
                incomes: {
                    courses: 2000,
                    salary: 2300,
                    tutoring: 1800
                },
                expenses: {
                    rent: 1200,
                    bill: 400,
                    saloon: 150
                },
                // Methods of personAccount
                totalIncome: function () {
                    let totalIncomes = 0;
                    let values = Object.values(this.incomes)
                    for (let i = 0; i < values.length; i++) {
                        totalIncomes += values[i]
                    }
                    return totalIncomes;
                },
                totalExpense: function () {
                    let totalExpenses = 0;
                    let values = Object.values(this.expenses)
                    for (let i = 0; i < values.length; i++) {
                        totalExpenses += values[i];
                    }
                    return totalExpenses;
                },
                accountInfo: function () {
                    console.log( `Name: ${this.firstName} ${this.lastName}` );
                    console.log( `Account Balance: ${this.accountBalance()}` );
                },
                addIncome: function (type, amount) {
                    this.incomes[type] = amount;
                },
                addExpense: function (type, amount) {
                    this.expenses[type] = amount;
                },
                accountBalance: function () {
                    let balance = this.totalIncome() - this.totalExpense();
                    return balance;
                }
            }

            // console.log(personAccount.totalIncome()); // -> 6100
            // console.log(personAccount.totalExpense()); // -> 1750
            // personAccount.accountInfo(); // -> Name: Mark Beeler Account Balance: 4350
            // personAccount.addIncome('freelancing', 1200);
            // personAccount.addExpense('food', 330);
            // console.log(personAccount.totalIncome()); // -> 7300
            // console.log(personAccount.totalExpense()); // -> 2080
            // console.log(personAccount.accountBalance()); // -> 5220

        //**** Questions:2, 3 and 4 are based on the following two arrays:newUsers and products ()

                const newUsers = [
                    {
                        _id: 'ab12ex',
                        username: 'Alex',
                        email: 'alex@alex.com',
                        password: '123123',
                        createdAt: '08/01/2020 9:00 AM',
                        isLoggedIn: false
                    },
                    {
                        _id: 'fg12cy',
                        username: 'Asab',
                        email: 'asab@asab.com',
                        password: '123456',
                        createdAt: '08/01/2020 9:30 AM',
                        isLoggedIn: true
                    },
                    {
                        _id: 'zwf8md',
                        username: 'Brook',
                        email: 'brook@brook.com',
                        password: '123111',
                        createdAt: '08/01/2020 9:45 AM',
                        isLoggedIn: true
                    },
                    {
                        _id: 'eefamr',
                        username: 'Martha',
                        email: 'martha@martha.com',
                        password: '123222',
                        createdAt: '08/01/2020 9:50 AM',
                        isLoggedIn: false
                    },
                    {
                        _id: 'ghderc',
                        username: 'Thomas',
                        email: 'thomas@thomas.com',
                        password: '123333',
                        createdAt: '08/01/2020 10:00 AM',
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

        //? 2. -> Imagine you are getting the above users collection from a MongoDB database. 

            //? a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. 

                function signUp(user) {
                    const userCollection = {
                        Selim: {},
                    };
                    if ( userCollection.hasOwnProperty(user) ) {
                        return 'User already have an account!'
                    } else {
                        userCollection[user] = {};
                    }
                    return userCollection;
                }
                // console.log( signUp('Selim') ); // -> User already have an account!
                // console.log( signUp('Salim') ); // -> {Selim: {…}, Salim: {…}}

            //?  b. Create a function called signIn which allows user to sign in to the application.

                function signIn(user) {
                    const allowedUsers = {
                        Selim: {},
                        Salim: {},
                    };
                    if ( !allowedUsers.hasOwnProperty(user) ) {
                        return 'You are not allowed for the sign in to application!'
                    } else {
                        return 'You have successfully sign in into the application!'
                    }
                }
                // console.log( signIn('Halim') ); // -> You are not allowed for the sign in to application!
                // console.log( signIn('Selim') ); // -> You have successfully sign in into the application!

        //? 3. -> The products array has three elements and each of them has six properties. 
        
            //? a. Create a function called rateProduct which rates the product.

                function userIdGenerator() {
                    let randomUserId = []
                    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ';
                    const randomChar = letters.split("")
                    const randomNumber = Math.floor( Math.random() * (12345678) );
                    randomUserId = randomNumber.toString(36);
                    randomUserId += randomChar[parseInt(Math.random(10) * 51)]
                    if (randomUserId.length < 6) {
                        randomUserId += randomChar[parseInt(Math.random(10) * 51)]
                    }
                    return randomUserId
                }
                
                function rateProduct (name, rate) {
                    const proName = name.toLowerCase();
                    const newRating = { userId: userIdGenerator(), rate: rate };
                    const matchingProducts = [];
                    for (let i = 0; i < products.length; i++) {
                        if ( products[i].name.toLowerCase().includes(proName) && rate >= 1 && rate <= 5 ) {
                            matchingProducts.push(i);
                        }
                    }
                    if (matchingProducts.length === 0) {
                        return 'Product name not found or your rating is below 1 or above 5!';
                    }
                    for (let i = 0; i < matchingProducts.length; i++) {
                        products[matchingProducts].ratings.unshift(newRating);
                    }
                    return 'Rating added successfully';
                } 
                // console.log( rateProduct('mobile phone', 3) ); 
                // console.log( products[0].ratings[0] ); // -> {userId: 'olc4uE', rate: 3}
            
            //? b. Create a function called averageRating which calculate the average rating of a product.

                function averageRating(product) {
                    let sum = 0;
                    if (product.ratings.length === 0) {
                        return 0;
                    } else {
                        for (let i = 0; i < product.ratings.length; i++) {
                            sum += product.ratings[i].rate;
                        }
                        return sum / product.ratings.length;
                    }
                }
                // console.log(averageRating(products[0])); // -> 4.166666666666667

        //? 4. ->  Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
            
                function likeProduct(productId, userId) {
                    let productLiked = false;

                    for (let i = 0; i < products.length; i++) {
                        if (products[i]._id === productId) {
                            if (products[i].likes.includes(userId)) {
                                products[i].likes.splice(products[i].likes.indexOf(userId), 1);
                                productLiked = false;
                            } else {
                                products[i].likes.push(userId);
                                productLiked = true;
                            }
                            break;
                        }
                    }

                    if (productLiked) {
                        return 'Product liked.';
                    } else {
                        return 'Product unliked.';
                    }
                }
                // console.log( products[1].likes ) // -> ['fg12cy']
                // console.log( likeProduct( 'aegfal', 'fg12cy' ) ); // -> Product unliked.
                // console.log( products[1].likes ); // -> []
                // console.log( likeProduct( 'aegfal', userIdGenerator() ) ); // -> Product liked.
                // console.log( products[1].likes ) // -> ['5umg9T']

//! 🎉 CONGRATULATIONS ! 🎉