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

    Bunun için özel bir veri yapısı vardır. Array sıralı koleksiyonları tutar.
*/

// Boş bir dizi nasıl oluşturulur?

// Değerlere sahip bir dizi nasıl oluşturulur?

// Split kullanarak dizi oluşturmak:

// index kullanarak dizi elemanlarına ulaşmak:

// Dizi elemanlarını düzenlemek:

// Dizileri manipüle edebilecek metotlar nelerdir?

    // Array Constructor = Bir dizi yaratmak için kullanılır.

    // fill ile statik değerler yaratmak: fill = Bütün dizi elemanlarını statik değerle doldurur.

    // Concat kullanarak dizileri birleştirmek: Concat = İki diziyi birbiri ile birleştirir.
        //! Dipnot: concat sadece iki diziyi birleştirmez. ikiden fazla sayıda diziyi birleştirmenize izin verir.

    // Dizi uzunluğuna ulaşmak: length = Dizi uzunluğunu bildirir.

    // Arr[] dizisinin içindeki indexe ulaşmak: = indexOf = O elemanın dizide olup olmadığını kontrol eder.Eğer o eleman dizide mevcutsa index numarasını, mevcut değilse -1 döner.

    // Dizinin içindeki son indexe ulaşmak: lastIndexOf = Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.

    // Diziyi kontrol etmek: Array.isArray = Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

    // Diziyi stringe çevirmek: toString = Diziyi string bir ifadeye çevirir.

    // Dizi elemanlarını Joinlemek: join = Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir dizi olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek farklı dizi parametreleri iletebiliriz.

    // Dizi elemanlarını slice etmek: Slice = Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.

    // Dizilerde splice metodu: Splice = üç parametre alır :başlangıç konumu, kaldırılması gereken eleman sayısı ve eklenmesi gereken eleman sayısı.

    // push kullanarak diziye eleman eklemek: Push = Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.

    // pop kullanarak diziden eleman çıkarmak: pop = Dizinin sonundaki elemanı siler.,

    // Dizinin en başından eleman kaldırmak: shift = Dizinin en başındaki elemanı siler.

    // Dizinin en başına eleman eklemek: unshift = Dizinin başına dizi elemanı ekler.

    // Dizi sırasını terse çevirmek: reverse = Dizi sıralamasını terse çevirir.

    // Dizi elemanlarını sıralamak: sort = Dizi elemanlarını alfabetik sırada düzenleyin.Sort call back fonksyonu alır, sort'un call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.

    // Dizi içinde diziler: Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de depolayabilirler. Şimdi dizi içinde bir dizi tanımlayalım.

//! Exercise: Level 1

//! Exercise: Level 2

//! Exercise: Level 3