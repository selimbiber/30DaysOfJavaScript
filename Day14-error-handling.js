/*** Day 14 = Error Handling
 *? https://30dayjavascript.js.org/14-day/
 *? https://tr.javascript.info/error-handling
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

//! Error Handling

    /*
        try {
            // hata verilebilicek kod
        } catch (err) {
            // bir hata oluşursa çalıştırılacak kod
        } finally {
            // bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
        }
    */

        //* try: try bloğunda hata oluşturabilecek kodu yazın. try ifadesi, yürütülürken hatalar için test edilecek bir kod bloğu tanımlamamızı sağlar.

        //* catch: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

        //* finally: finally bloğu, bir hata oluşmasından bağımsız olarak her zaman yürütülür. finally bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.

        // try {
        //     let lastName = 'Biber'
        //     let fullName = fistName + ' ' + lastName
        // } catch (error) {
        //     console.log(error)
        // }; // -> ReferenceError: fistName is not defined

        // try {
        //     let lastName = 'Biber'
        //     let fullName = fistName + ' ' + lastName
        // } catch (error) {
        //     console.error(error) // console.log() veya console.error() kullanabiliriz.
        // } finally {
        //     console.log('In any case I will be executed')
        // }

        /* Catch bloğu bir parametre alır. Catch bloğuna parametre olarak e veya error iletmek yaygındır. Bu parametre bir nesnedir ve isim ve mesaj anahtarlarına sahiptir. Adı ve mesajı kullanalım. */

        // try {
        //     let lastName = 'Biber'
        //     let fullName = fistName + ' ' + lastName
        // } catch (error) {
        //     console.log('Name of the error: ', error.name)
        //     console.log('Error message: ', error.message)
        // } finally {
        //     console.log('In any case I will be executed')
        // }

        /* OUTPUT: 

            Name of the error: ReferenceError
            Error message: fistName is not defined
        */

        //* throw: throw ifadesi özel bir hata oluşturmamıza izin verir. Bir dize, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. Bir istisna atmak için throw ifadesini kullanabiliriz. Bir throw exception yazdığımızda, expression specifies değerini belirtir. Aşağıdakilerin her biri "throw exception" atar:

            // throw "Error";
            // throw 53;
            // throw true;
            // throw new Error('Required');

        // const throwErrorExampleFun = () => {
        //     let message;
        //     let x = prompt('Enter a number: ');
        //     try {
        //         if (x == '') throw 'Empty';
        //         if (isNaN(x)) throw 'Not a Number'
        //         x = Number(x);
        //         if (x < 5) throw 'too low';
        //         if (x > 10) throw 'too high';
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }; throwErrorExampleFun();

    // Error Types

        //* ReferenceError: Geçersiz bir referans oluşturur. Tanımlanmamış bir değişken kullanırsak bir ReferenceError atılır.

            // let firstName = 'Selim'
            // let fullName = firstName + ' ' + lastName
            
            // console.log(fullName); // -> Uncaught ReferenceError: lastName is not defined

        //* SyntaxError: Bir syntax(sözdizim) hatası oluşturur.

            // let square = 2 x 2
            // console.log(square)
            
            // console.log("Hello, world"); // -> Uncaught SyntaxError: Unexpected identifier 'x'

        //* TypeError: Bir type hatası oluşturur.

            // let num = 10
            // console.log(num.toLowerCase()); // -> Uncaught TypeError: num.toLowerCase is not a function

//! 🎉 CONGRATULATIONS ! 🎉
