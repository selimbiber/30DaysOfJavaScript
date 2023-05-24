/*** Day 6 = Loops (Döngüler)
 *? https://30dayjavascript.js.org/06-day/
 *? https://tr.javascript.info/while-for
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
 *  ***/

/*   Döngüler:

Çoğu zaman aynı bir sıra ile tekrar yapma ihtiyacı duyulabiliriz.

Örneğin bir listede bulunan ürünlerin sıra ile çıktısını almak. Veya aynı kodu 1-10’a kadar olan sayılar için çalıştırmak.

Döngü aynı kod parçacığının birden fazla defa çalıştırılmasına denir.

Tekrar eden görevleri gerçekleştirmek için programlama dillerinde farklı döngü türleri kullanırız. Aşağıdaki örnekler, JavaScript ve diğer programlama dillerinde yaygın olarak kullanılan döngülerdir.

*/

//! for Loop - for Döngüsü: for döngüsü en fazla kullanılan döngüdür.

    // For Döngüsünün yapısı
    for(başlangıç_değeri, şart, arttırma/azaltma){
        // uygulamak istediğimiz kod
    }

    for(let i = 0; i <= 5; i++){
        console.log(i)
    }
    
    // 0 1 2 3 4 5

    for(let i = 5; i >= 0; i--){
        console.log(i)
    }
    
    // 5 4 3 2 1 0

    for(let i = 0; i <= 5; i++){
        console.log(`${i} * ${i} = ${i * i}`)
    }

    /* Output:

    0 * 0 = 0
    1 * 1 = 1
    2 * 2 = 4
    3 * 3 = 9
    4 * 4 = 16
    5 * 5 = 25
    */

    //? Satır arasında değişken tanımlama:

        // Sayaç değişkeni olan i döngüye girdiğinde oluşturulur. Buna “satır arası” değişken tanımlama denir. Bu değişken sadece döngü içerisinde kullanılabilir.

            // for (let i = 0; i < 3; i++) {
            //     console.log(i); // -> 0, 1, 2
            // }
            // console.log(i); // -> hata! böyle bir değişken bulunamadı.

        // Değişken tanımlamak yerine var olan da kullanılabilir:

            // let i = 0;

            // for (i = 0; i < 3; i++) { // var olan değişkeni kullan
            // console.log(i); // -> 0, 1, 2
            // }

            // console.log(i); // -> 3, görünür halde çünkü değişken döngünün dışında tanımlandı.

    // Bazı bölümlerin pas geçilmesi

        // for döngüsünün her bölümü pas geçilebilir.
        
        // Örneğin başlangıç bölümüne ihtiyaç yoksa pas geçilebilir.
        
        // Örneğin:

            // let i = 0; // -> i'yi tanımlanıp 0 değeri atandı

            // for (; i < 3; i++) { // "başlangıç"'a ihtiyaç yok
            //     console.log( i ); // -> 0, 1, 2
            // }

        // basamak bilgisini silmek de mümkün:

            // let i = 0;

            // for (; i < 3;) {
            //     console.log( i++ );
            // }

        //! NOT: Dikkat edersek for döngüsü yazarken noktalı virgüller ; yazılmalıdır, aksi halde yazım hatası verir.

        //* Dizideki tüm elemanları toplama:
    
        // const numbers = [1, 2, 3, 4, 5]
        // let sum = 0
        // for(let i = 0; i < numbers.length; i++){
        //     sum  = sum + numbers[i] // daha pratik kullanım için, sum += numbers[i]
        // }
        // console.log(sum)  // -> 15

        //* Mevcut diziyi temel alan yeni bir dizi oluşturma

        // const numbers = [1, 2, 3, 4, 5]
        // const newArr = []
        // let sum = 0
        // for(let i = 0; i < numbers.length; i++){
        // newArr.push( numbers[i] ** 2)
        // }
        // console.log(newArr)  // -> [1, 4, 9, 16, 25]

    //! while loop - while Döngüsü

    // while anahtar kelimesinin yanında belirtilen şarta doğru olduğu sürece çalışan bir döngü türüdür. Eğer koşul sürekli doğru çıkacak şekilde ayarlanırsa while döngüsü uygulama kasten kesilmediği sürece sonsuza kadar devam edebilir. Bu yüzden buraya dikkat etmek gerekebilir.

    // while döngüsü aşağıdaki gibi bir yazıma sahiptir:

        while (koşul) {
            // kod
            // veya döngünün gövdesi
        }

        // koşul doğru iken(while), döngü gövdesinde bulunan kod çalıştırılır.

        // Örneğin, aşağıdaki kod i < 3 iken çalışır.

            // let i = 0;
            // while (i < 3) { // önce 0, sonra 1, sonra 2
            //   console.log( i );
            //   i++;
            // }

        /* NOTLAR

        Döngünün gövdesinde bulunan kodun her çalışmasına tekrar(iteration) denir. Yukarıdaki örnekte gövde 3 defa tekrar etmiştir.

        Eğer i++ gibi bir kod olmasaydı, teoride kod sonsuza kadar devam ederdi. Pratikte ise tarayıcınız bu kodun uzun süre çalışmasını engeller, sunucu tabanlı JavaScript yazdığınızda ise bu işlem durdurulur.

        Sadece karşılaştırma değil, bir ifade veya değişken koşul olabilir. While döngüsü tarafından alınan tüm ifadeler boolean’a dönüştürülür.

        */

        // Tek satır gövde varsa süslü paranteze gerek kalmaz.

            // let i = 3;
            // while (i) console.log(i--);

        
    //! do while loop do while döngüsü: 

    // do while döngüsü Koşul ile belirtilen alanın doğru olup olmadığına bakmadan kod bloğunu bir kez çalıştırır ve daha sonra Koşul ile belirtilen alan doğru (true) olduğu sürece kod bloğunun çalışması için kullanılır.

        // do {
             // döngü gövdesi
        // } while (condition);

        //! Döngü önce gövdeyi çalıştırır, sonra koşul kontrolü yapar ve eğer doğruysa tekrar döngü gövdesini çalıştırır.

        // let i = 0
        // do {
        //     console.log(i)
        //     i++
        // } while (i <= 4)

        // 0 1 2 3 4

        // Not: Bu şekilde döngü yazımı çok nadir olarak kullanılır. Kullanılmasının en önemli amacı en azından bir defa ne olursa olsun gövdenin çalıştırılma istenmesidir. Genelde while(..){} şekli tercih edilir.


    //! for of loop - for of döngüsü:

    /*
        ES6, geleneksel bir döngüden daha basit olan bir döngü olan yeni bir döngü yöntemi sunar ve her tür için ve giriş döngülerinin eksikliklerini telafi eder.

        for..of Deyimi, yinelenen nesneler üzerinde yinelemek için bir döngü oluşturur. ES6'da tanıtılan for..of döngü , yeni yinelemeli protokollerin yerini alır. for..in ve forEach() destekler. for..of Array (Diziler), String (Metinler), Map (Haritalar), Set (Kümeler), Array benzeri nesneler (örneğin arguments veya NodeList), ve diğer yinelenen veri yapıları arasında yineleme yapmanızı sağlar.
    */

        for (const element of arr) {
            // uygulamak istediğimiz kod
        }

        // array içindeki tüm nsayıları toplama

        // let sum = 0
        // for (const num of numbers) {
            // sum = sum + num  
        //! daha pratik kullanım için, sum += num
        //! bundan sonra pratik olan bu syntax türünün kullanacağız(+=, -=, *=, /= etc)
        // }
        // console.log(sum) // 15

    //! break: Break, bir döngüyü kesmek için kullanılır.

        /*
            Normalde döngüler koşul yanlış olduğunda biter.

            Fakat bazı durumlarda bu döngü kırılabilir ( break ).

            Örneğin, kullanıcıdan bir dizi sayı girmesini istediniz eğer boş bir değer girerse döngüyü kırabilirsiniz.
        */

            // for(let i = 0; i <= 5; i++){
            //     if(i == 3){
            //       break;
            //     }
            //     console.log(i)
            // }
              
            // -> 0 1 2 (i değeri 3 sayısına eşit olduğunda döngüyü durdurur)

    //! continue: Belirli bir döngü aşamasını atlamak için continue anahtar kelimesi kullanılır.

        /*
            continue, break'in daha hafif versiyonudur. Döngüyü tamamen kırmaz da zorla bir sonraki tekrara geçer(tabi koşul sağlanıyorsa)

            O anda tekrar eden değer ile işimiz bitti ve bir sonraki tekrar geçmek istendiğinde continue kullanılır.
        */

            for(let i = 0; i <= 5; i++){
                if(i == 3){
                  continue
                }
                console.log(i)
            }
              
            // -> 0 1 2 4 5 (3'e geldiğinde döngü durdu ve bir sonraki sayıdan devam etti)

            //! continue talimatı döngü sayısının azalmasına yardımcı olur.

            // Tek değerler gösteren döngü aşağıdaki gibi de yazılabilir:

                for (let i = 0; i < 10; i++) {
                    if (i % 2) {
                        console.log( i );
                    }
                }

                /*
                    Teknik açısından birbiri ile aynıdırlar. Her zaman continue bloğunun yerine if kullanabiliriz.

                    Tabi bunun yan etkisi döngü gövdesi içinde bir tane daha if kullanarak okunabilirliği düşürmektir.
                */

            //!  ‘if’ yerine ‘?’ kullanılıyorsa sağ tarafa ‘continue/break’ yazılmaz.

            // break/continute talimatları '?' ile kullanılamazlar

            // Örneğin:

            if (i > 5) {
                console.log(i);
              } else {
                continue;
            }

            // Yukarıdaki döngü ? ile yazılacak olursa:

            // (i > 5) ? alert(i) : continue; // `continue` burada kullanılamaz! Böyle kodlar yazım hatası verir.
            // Bu da '?' işaretini if yerine kullanmamak için ayrı bir neden.

//! Exercises:Day 6 (Loops-Döngüler)

    //! Exercises: Level 1

    //! Exercises: Level 2

    //! Exercises: Level 3



