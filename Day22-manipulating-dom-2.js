/*** Day 22 = Manipulating Document Object Model (DOM) -2
 *? https://30dayjavascript.js.org/22-day/
 *? https://tr.javascript.info/document
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 22:

    Creating an Element

    Creating elements

    Appending child to a parent element

    Removing a child element from a parent node
*/

//!  Creating an Element | Element Oluşturma

    /* 
        HTML element oluşturmak için etiket adını kullanırız. 
        JavaScript kullanarak HTML element oluşturmak oldukça basittir. 
        document.createElement() metodunu kullanırız. 
        Bu metod bir HTML element etiket adını string olarak alır.

        syntax: document.createElement('tagname');
    */

        // let title = document.createElement('h1');
        // title.className = 'title';
        // title.style.fontSize = '24px';
        // title.textContent = 'Heading';
        // console.log(title);
        /*
            <h1 class="title" style="font-size: 24px;">Heading</h1>
        */

//!  Creating elements | Elemetler Oluşturma

    /*
        Birden fazla element oluşturmak için döngü kullanmalıyız. Döngü kullanarak istediğimiz kadar HTML elementi oluşturabiliriz. Element oluşturduktan sonra, HTML nesnenin farklı özelliklerine değer atayabiliriz.
    */

        // let subTitle;
        // for (let i = 0; i < 3; i++) {
        //     subTitle = document.createElement('h2');
        //     subTitle.className = 'sub-title';
        //     subTitle.style.fontSize = '20px';
        //     subTitle.textContent = 'Alt Başlık - ' + i;
        // }
        // console.log(subTitle);

//!  Appending child to a parent element | Bir üst elemente alt element ekleme

    /*
        Oluşturduğumuz elementi HTML'de görmek için, üst element olarak child olarak eklememiz gerekir. HTML'de body'sine document.body ile erişebiliriz. document.body appendChild() metodunu destekler.
    */

        // let subTitle;
        // for (let i = 0; i < 3; i++) {
        //     subTitle = document.createElement('h2');
        //     subTitle.className = 'sub-title';
        //     subTitle.style.fontSize = '20px';
        //     subTitle.textContent = 'Alt Başlık - ' + i;
        //     document.body.appendChild(subTitle);
        // }
        // console.log(subTitle);

//!  Removing a child element from a parent node | Bir üst elementten alt element kaldırma

    /*
        HTML oluşturduktan sonra, element veya elementleri kaldırmak isteyebiliriz ve removeChild() metodunu kullanabiliriz.
    */

        // const ulDOM = document.querySelector('ul');
        // const liDOM = document.querySelectorAll('li');

        // for (let list of liDOM) {
        //     ulDOM.removeChild(list);
        // }
        // console.log(liDOM);

        //? Bir üst elementin tüm iç HTML elementlerini veya child elementleri innerHTML metodu ve özelliklerini kullanarak ortadan kaldırmak için daha iyi bir yol mevcut.

            // ulDOM.innerHTML = '';

//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div. 

            //? 1.1. -> Even numbers background is green.
            //? 1.2. -> Odd numbers background is yellow.
            //? 1.3. -> Prime numbers background is red.

            // const isPrime = (number) => {
                
            //     if (number < 2) {
            //         return false;
            //     } if (number == 2) {
            //         return true;
            //     } else {
            //         for (let i = 2; i <= 10; i++) {
            //             if (number === i) {
            //                 continue;
            //             }
            //             else if (number % i == 0) {
            //                 return false;
            //             }
            //         }
            //         return true;
            //     }
            // }
            
            // const header = document.createElement('header');
            // document.body.appendChild(header);
            // const data = document.createElement('p');
            // document.body.appendChild(data);

            // const container = document.createElement('div');
            // container.width = '100vw';
            // container.style.display = 'flex';
            // container.style.flexWrap = 'wrap';
            // container.style.marginBottom = '20px';
            // document.body.appendChild(container);
            
            // for (let i = 0; i <= 101; i++) {
            //     let num;
            //     num = document.createElement('span');
                
            //     num.className = 'number';
            //     num.style.fontSize = '30px';
            //     num.style.height = '30px';
            //     num.style.width = '55px';
            //     num.style.textAlign = 'center';
            //     num.style.border = '1px solid black';
            //     num.style.padding = '10px';
            //     num.textContent = i;
            //     if (i % 2 === 0) {
            //         num.style.backgroundColor = 'green';
            //     } else if (i % 2 === 1) {
            //         num.style.backgroundColor = 'yellow';
            //     }
            //     if (isPrime(i)) {
            //         num.style.backgroundColor = 'red';
            //     }
            //     container.appendChild(num);
            // }

    // Exercises: Level 2

        //? 1. -> Use the countries array to display all the countries.
            
            // header.style.display = 'flex';
            // header.style.flexDirection = 'column'
            // const heading = document.createElement('h1');
            // heading.textContent = 'WORLD COUNTRIES LIST'
            // heading.style.fontSize = '30px';
            // heading.style.textAlign = 'center';
            // header.appendChild(heading);

            // data.style.fontSize = '20px';
            // data.style.textAlign = 'center';
            // data.textContent = `Total number of countries: ${allCountries.length}`
            // header.appendChild(data);

            // allCountries.forEach( country => {
            //     const countryName = document.createElement('span');
            //     countryName.fontSize = '20px';
            //     countryName.style.height = '100px';
            //     countryName.style.width = '100px';
            //     countryName.style.margin = '10px';
            //     countryName.style.display = 'flex';
            //     countryName.style.justifyContent = 'center';
            //     countryName.style.alignItems = 'center';
            //     countryName.style.border = '1px solid gray';
            //     countryName.style.borderRadius = '10px';
            //     countryName.style.padding = '10px';
            //     countryName.textContent = country.name;
            //     container.appendChild(countryName);
            // });
            
    // Exercises: Level 3

        //? 1. -> Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

//! 🎉 CONGRATULATIONS ! 🎉