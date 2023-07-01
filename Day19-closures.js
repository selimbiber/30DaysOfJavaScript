/*** Day 19 = Closures
 *? https://30dayjavascript.js.org/19-day/
 *? https://tr.javascript.info/closure
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

//! Closure

    /*
        JavaScript, bir outer(dış) fonksiyonu içine yazma fonksiyonu izni verir. İstediğimiz kadar inner(iç) fonksiyon yazabiliriz. Inner fonksiyon, outer fonksiyonun değişkenlerine erişiyorsa, buna closure(kapatma) denir.
    */

        // function outerFunction() {
        //     let count = 0;
        //     function innerFunction() {
        //         count++;
        //         return count
        //     }
        //     return innerFunction
        // }
        // const innerFunc = outerFunction();

        // console.log( innerFunc() ); // -> 1 
        // console.log( innerFunc() ); // -> 2
        // console.log( innerFunc() ); // -> 3

    // Inner(iç) fonksiyonlara daha fazla örnek vermek gerekirse:

        // function outerFunction() {
        //     let count = 0;
        //     function plusOne() {
        //         count++;
        //         return count;
        //     }
        //     function minusOne() {
        //         count--;
        //         return count;
        //     }
        //     return {
        //         plus1: plusOne,
        //         minus1: minusOne
        //     }
        // }
        // const innerFuncs = outerFunction();

        // console.log(innerFuncs.plus1()); // -> 1
        // console.log(innerFuncs.plus1()); // -> 2
        // console.log(innerFuncs.plus1()); // -> 3 

        // console.log(innerFuncs.minus1()); // -> 2
        // console.log(innerFuncs.minus1()); // -> 1
        // console.log(innerFuncs.minus1()); // -> 0
        

//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Create a closure which has one inner function

            // function isimYazdir() {
            //     let isim;

            //     function isimOlustur() {
            //         isim = 'Selim';
            //         return isim;
            //     }
            //     return isimOlustur()
            // }
            // console.log(isimYazdir());

    // Exercises: Level 2

        //? 1. -> Create a closure which has three inner functions

            function tamAdVeYasYazdir() {
                let adim;
                let soyadim;
                let yasim;

                function adimiOlustur() {
                    adim = 'Selim';
                    return "Benim Adım: " + adim;
                }
                function tamAdimiOlustur() {
                    soyadim = 'Biber';
                    return "Adım: " + adim + ", Soyadım: " + soyadim;
                }
                function tadmAdimVeYasimiOlustur() {
                    yasim = 24;
                    return "Adım: " + adim + ", Soyadım: " + soyadim + " ve Yaşım: " + yasim;
                }
                return {
                    adim: adimiOlustur,
                    tamAdim: tamAdimiOlustur,
                    yasim: tadmAdimVeYasimiOlustur
                }
            }

            const adSoyadYasFuncs = tamAdVeYasYazdir();
            console.log(adSoyadYasFuncs.adim()); // -> Benim Adım: Selim
            console.log(adSoyadYasFuncs.tamAdim()); // -> Adım: Selim, Soyadım: Biber
            console.log(adSoyadYasFuncs.yasim()); // -> Adım: Selim, Soyadım: Biber ve Yaşım: 24

    // Exercises: Level 3

        //? 1. -> Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

            function personAccount() {
                let firstName = 'No';
                let lastName = 'Body';
                let incomes = [];
                let expenses = [];

                function totalIncome() {
                    return incomes.reduce( (sum, cur) => sum+cur, 0);
                }
                function totalExpense() {
                    return expenses.reduce( (sum, cur) => sum+cur, 0);
                }
                function accountInfo() {
                    return `
                    Name: ${firstName} ${lastName},
                    Total Income: ${totalIncome()},
                    Total Expense: ${totalExpense()},
                    Account Balance: ${accountBalance()}.`
                }
                function addIncome(income) {
                    if (income > 0) {
                        incomes.push(income);
                    }
                }
                function addExpense(expense) {
                    if (expense > 0) {
                        expenses.push(expense);
                    }
                }
                function accountBalance() {
                    return totalIncome() - totalExpense();
                }
                return {
                    totalIncome,
                    totalExpense,
                    accountInfo,
                    addIncome,
                    addExpense,
                    accountBalance
                }
            }

            const outerFunc = personAccount();
            outerFunc.addIncome(250);
            outerFunc.addExpense(370);
            console.log(outerFunc.accountBalance()); // -> -120
            console.log(outerFunc.accountInfo()); // ->
            /*
                Name: No Body,
                Total Income: 250,
                Total Expense: 370,
                Account Balance: -120.
            */

//! 🎉 CONGRATULATIONS ! 🎉