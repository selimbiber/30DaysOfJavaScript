/*** Day 21 = Document Object Model (DOM) -1
 *? https://30dayjavascript.js.org/21-day/
 *? https://tr.javascript.info/document
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 21:

    Document Object Model (DOM) - Day 1

    Getting Element
        Getting elements by tag name
        Getting elements by class name
        Getting an element by id
        Getting elements by using querySelector methods
    Adding attribute
        Adding attribute using setAttribute
        Adding attribute without setAttribute
        Adding class using classList
        Removing class using remove
    Adding Text to HTML element
        Adding Text content using textContent
        Adding Text Content using innerHTML
            Text Content
            Inner HTML
    Adding style
        Adding Style Color
        Adding Style Background Color
        Adding Style Font Size
*/

//! Document Object Model (DOM | Belge Nesne Modeli)

    /*
        DOM Yapısı:

        Bir HTML belgesinin omurgası etiketlerdir.

        Document Object Model (DOM)’ a göre, her HTML etiketi JavaScript için bir nesnedir. İç içe geçmiş etiketlere, çevreleyen etiketin “alt öğeleri” denir.

        Bir etiketin içindeki metin de bir nesnedir.

        Her HTML elementi farklı özelliklere sahiptir ve bunları manipüle etmek için kullanılabilir. JavaScript kullanarak HTML elementlerini almak, oluşturmak, eklemek veya kaldırmak mümkündür.

        JavaScript ile HTML elementi seçmek, CSS ile seçmek ile benzerdir. HTML elementini seçmek için etiket adı, id, sınıf adı veya diğer öznitelikler kullanılır.

        document nesnesi sayfa içeriğine erişimi sağlar. Sayfada herhangi bir şeyi değiştirebilir ya da oluşturabiliriz.
        
        Bir HTML / XML belgesi tarayıcının içinde DOM ağacı olarak temsil edilir.

        Etiketler eleman düğümleri haline gelir ve yapıyı oluşturur.

        Metin, metin düğümleri haline gelir.

        HTML’deki her şey, hatta yorumlar da DOM’da vardır.

        Özetle: DOM, web geliştirme süreçlerinde büyük öneme sahiptir ve web sayfalarının dinamik fonksiyonlarının birçok yönünü kontrol etmek için kullanılabilir. DOM, programcılar için esnek bir arayüz sunarak, web sayfalarının görünümünü ve tepkisini yönetmelerine kolaylık sağlar.

        DOM’u incelemek ve manuel olarak değiştirmek için geliştirici araçlarını kullanabiliriz.
    */

        // console.log(window.innerHeight); //-> 651
        // alert(window.innerWidth); // -> 1366

    // Getting Element || Element Erişme

        /*
            JavaScript kullanarak zaten oluşturulmuş elementlere veya elementlere erişebiliriz. Elementlere erişmek veya almak için farklı metodlar kullanırız. Aşağıdaki kodda dört h1 elementi var. h1 elementlerine erişmek için farklı metodları inceleyelim.

            <!DOCTYPE html>
            <html lang="en">
                <head>
                <title>Document Object Model</title>
                </head>
                <body>

                <h1 class='title' id='first-title'>First Title</h1>
                <h1 class='title' id='second-title'>Second Title</h1>
                <h1 class='title' id='third-title'>Third Title</h1>
                <h1></h1>

                </body>
            </html>
        */

        // Getting elements by tag name | Etiket adına göre elementlere erişme

            /*
                getElementsByTagName(): bir etiket adını dize olarak alan bir parametre alır ve bu yöntem bir HTMLCollection nesnesi döndürür. 
                HTMLCollection bir HTML elementlerinin array benzeri bir nesnesidir. Uzunluk özelliği koleksiyonun boyutunu sağlar. 
                Bu yöntemi kullandığımızda, index kullanarak veya her bir öğeyi tek tek geçerek bireysel elementlere erişiriz. 
                HTMLCollection tüm dizi yöntemlerini desteklemez, bu yüzden forEach yerine düzenli for döngüsü kullanmalıyız.

                syntax: document.getElementsByTagName('tagname')
            */

                // const allTitles = document.getElementsByTagName('h1');
                // console.log(allTitles);
                /*
                    HTMLCollection(4) 0: h1#first-title.title 1: h1#second-title.title 2: h1#third-title.title 3: h1
                */
                // console.log(allTitles.length); // -> 4
                
                // for (let i = 0; i < allTitles.length; i++) {
                //     console.log(allTitles[i]);
                // }
                /*
                    <h1 class="title" id="first-title">First Title</h1>

                    <h1 class="title" id="second-title">Second Title</h1>

                    <h1 class="title" id="third-title">Third Title</h1>

                    <h1></h1>
                */

        // Getting elements by class name | Sınıf adına göre elementlere erişme

            /*
                getElementsByClassName() metodu bir HTMLCollection nesnesi döndürür. HTMLCollection, HTML elementlerinin dizi benzeri bir listesidir. Uzunluk özelliği koleksiyonun boyutunu sağlar. Tüm HTMLCollection elementlerini dolaşmak mümkündür. Örnek aşağıda gösterilmektedir.

                syntax: document.getElementsByClassName('classname')
            */

                // const allTitles = document.getElementsByClassName('title');
                // console.log(allTitles);
                /*
                first-title: h1#first-title.titlesecond-title: h1#second-title.titlethird-title: h1#third-title.title
                */
                // console.log(allTitles.length); // -> 3

                // for (let i = 0; i < allTitles.length; i++) {
                //     console.log(allTitles[i]);
                // }
                /*
                    <h1 class="title" id="first-title">First Title</h1>

                    <h1 class="title" id="second-title">Second Title</h1>

                    <h1 class="title" id="third-title">Third Title</h1>
                */

        // Getting an element by id | ID (Kimlik) bilgisine göre elemente erişme

            /* getElementsById() tek bir HTML elementine yönelir. Id'yi # olmadan bir argüman olarak geçiririz. */

            // const firstTitle = document.getElementById('first-title');
            // console.log(firstTitle); // -> <h1 class="title" id="first-title">First Title</h1>

            // const secondTitle = document.getElementById('second-title');
            // console.log(secondTitle); // -> <h1 class="title" id="second-title">Second Title</h1>

            // const thirdTitle = document.getElementById('third-title');
            // console.log(thirdTitle); // -> <h1 class="title" id="third-title">Third Title</h1>

        // Getting elements by using querySelector methods | querySelector yöntemleri kullanılarak elementlere erişme

            /*
                document.querySelector yöntemi etiket adı, kimlik veya sınıf adına göre HTML veya HTML elementlerini seçebilir.
            */

            /*
                querySelector: etiket adı, kimlik veya sınıf tarafından seçilen HTML elementini seçmek için kullanılabilir. 
                !Etiket adı kullanılırsa, yalnızca ilk element seçilir.
            */

                // let firstTitle = document.querySelector('h1');
                // console.log(firstTitle); // -> <h1 class="title" id="first-title">First Title</h1>
                // firstTitle = document.querySelector('#first-title');
                // console.log(firstTitle); // -> <h1 class="title" id="first-title">First Title</h1>
                // firstTitle = document.querySelector('.title');
                // console.log(firstTitle); // -> <h1 class="title" id="first-title">First Title</h1>

            /*
                querySelectorAll: etiket adı veya sınıf tarafından seçilen html elementlerini seçmek için kullanılabilir. 
                !Döndürülen nodeList bir dizi benzeri nesne olup, dizi yöntemlerini destekler. 
                !Her nodeList öğesini dolaşmak için for döngüsü veya forEach kullanabiliriz.
            */

                // const allTitles = document.querySelectorAll('h1');
                // console.log(allTitles);
                    /*
                        NodeList(4) [h1#first-title.title, h1#second-title.title, h1#third-title.title, h1]
                    */
                // for (let i = 0; i < allTitles.length; i++) {
                //     console.log(allTitles[i]);
                // }
                    /*
                        <h1 class="title" id="first-title">First Title</h1>

                        <h1 class="title" id="second-title">Second Title</h1>

                        <h1 class="title" id="third-title">Third Title</h1>

                        <h1></h1>
                    */

                // allTitles.forEach( title => console.log(title) );
                    /*
                        <h1 class="title" id="first-title">First Title</h1>

                        <h1 class="title" id="second-title">Second Title</h1>

                        <h1 class="title" id="third-title">Third Title</h1>

                        <h1></h1>
                    */

                // const allTitles = document.querySelectorAll('.title');
                // console.log(allTitles); // -> NodeList(3) [h1#first-title.title, h1#second-title.title, h1#third-title.title]

    //  Adding attribute | Öznitelik Ekleme

        /*
            HTML açılır etiketinde bir öznitelik eklenir ve element hakkında ek bilgi verir. Yaygın HTML öznitelikleri: id, class, src, style, href,disabled, title, alt. Dördüncü başlık için id ve class ekleyelim.
        */

            // const fourthTitle = document.querySelectorAll('h1');
            // fourthTitle[3].className = 'fourth-title';
            // console.log(fourthTitle[3]); // -> <h1 class="fourth-title"></h1>
            // fourthTitle[3].id = 'fourth-title';
            // console.log(fourthTitle[3]); // -> <h1 class="fourth-title" id="fourth-title"></h1>

        // Adding attribute using setAttribute | setAttribute() metodu kullanarak öznitelik ekleme

            /*
                setattribute() metodu, herhangi bir html öznitelik ekler. İki parametre alır: öznitelik türü ve öznitelik adı. Dördüncü başlık için class ve id özniteliği ekleyelim.
            */

                const titles = document.querySelectorAll('h1');
                // titles[3].setAttribute('class', 'title');
                // titles[3].setAttribute('id', 'fourth-title');
                // console.log(titles[3]); // -> <h1 class="title" id="fourth-title"></h1>

        // Adding attribute without setAttribute | setAttribute() olmadan öznitelik ekleme
        
            /*
                Normalde bir nitelik atamak için normal nesne atama yöntemini kullanabiliriz ancak bu tüm elemanlar için geçerli olmayabilir. Bazı nitelikler DOM nesnesi özellikleridir ve direk olarak atanabilirler. Örneğin, id ve class gibi.
            */

                // titles[3].className = 'title';
                // titles[3].id = 'fourth-title';
                // console.log(titles[3]); // -> <h1 class="title" id="fourth-title"></h1>

        // Adding class using classList | classList kullanarak sınıf ekleme

            // titles[3].classList.add('header-title');
            // console.log(titles[3]); // ->   <h1 class="title header-title" id="fourth-title"></h1>

        // Removing class using remove | remove kullanarak sınıfı kaldırma

            // titles[3].classList.remove('title');
            // console.log(titles[3]); // -> <h1 class="header-title" id="fourth-title"></h1>

    //  Adding Text to HTML element | HTML elementine metin ekleme

        /*
            HTML bir açılış etiketi, bir kapatma etiketi ve bir metin içeriğinden oluşur. Metin içeriğini textContent özelliği veya *innerHTML kullanarak ekleyebiliriz.
        */

        // Adding text content using textContent | textContent kullanarak metin içeriği ekleme: textContent özelliği HTML elemanına metin eklemek için kullanılır.

            // titles[3].textContent = 'Fourth Title';
            // console.log(titles[3]); // -> <h1 class="header-title" id="fourth-title">Fourth Title</h1>

        // Adding text content using innerHTML | innerHTML kullanarak metin içeriği ekleme

            /*
                Birçok insan textContent ve innerHTML arasında karışır. textContent bir HTML elemanına metin eklemek için tasarlanmıştır ancak innerHTML bir metin veya HTML elemanı veya elemanları bir çocuk olarak ekleyebilir.
            */

            // Text Content | Metin İçeriği

                // titles[3].textContent = 'Fourth Title';
                // console.log(titles[3]); // -> <h1 class="header-title" id="fourth-title">Fourth Title</h1>

            // Inner HTML | Dahili HTML

                /*
                    Bir ebeveyn elemana tamamen yeni bir child içeriği eklemek veya değiştirmek istediğimizde innerHTML özelliğini kullanırız. Atadığımız değer HTML elemanlarından oluşan bir dizi olacaktır.

                        <div class="wrapper">
                            <h1>Selim Biber challenges in 2023</h1>
                            <h2>30DaysOfJavaScript Challenge</h2>
                            <ul></ul>
                        </div>
                        <script>
                            const lists = `
                            <li>30DaysOfPython Challenge Done</li>
                                    <li>30DaysOfJavaScript Challenge Ongoing</li>
                                    <li>30DaysOfReact Challenge Coming</li>
                                    <li>30DaysOfFullStack Challenge Coming</li>
                                    <li>30DaysOfDataAnalysis Challenge Coming</li>
                                    <li>30DaysOfReactNative Challenge Coming</li>
                                    <li>30DaysOfMachineLearning Challenge Coming</li>`
                            const ul = document.querySelector('ul')
                            ul.innerHTML = lists
                        </script>

                    innerHTML özelliği, bir üst elemanın tüm çocuklarını kaldırmamıza da olanak tanır. removeChild() kullanmak yerine aşağıdaki yöntem tavsiye edilir.

                        <script>
                            const ul = document.querySelector('ul')
                            ul.innerHTML = ''
                        </script>
                */

                const ul = document.querySelector('ul');
                const lists = `<li>30DaysJavaScript Challenge Ongoing</li>
                    <li>30DaysOfPython Challenge Coming</li>
                    <li>30DaysOfReact Challenge Coming</li>
                    <li>30DaysOfFullStack Challenge Coming</li>
                    <li>30DaysOfDataAnalysis Challenge Coming</li>
                    <li>30DaysOfReactNative Challenge Coming</li>
                    <li>30DaysOfMachineLearning Challenge Coming</li>`
                ul.innerHTML = lists;

                ul.innerHTML = '';

    //  Adding style | Stil Ekleme

        // Adding Style Color | Stil Rengi Ekleme

            /*
                Başlıklarımıza biraz stil ekleyelim. Eğer elemanın indisi çift ise ona yeşil renk veririz, aksi halde kırmızı.
            */

                // titles.forEach( (title, index) => {
                //     if (index % 2 === 0) {
                //         title.style.color = 'green';
                //     } else {
                //         title.style.color = 'red';
                //     }
                // } );

        // Adding Style Background Color | Arkaplan Rengi Ekleme

            /*
                Başlıklarımıza biraz stil ekleyelim. Eğer elemanın indisi çift ise ona kırmızı arkaplan rengi veririz, aksi halde yeşil arkaplan rengi veririz.
            */

                // titles.forEach( (title, index) => {
                //     if (index % 2 === 0) {
                //         title.style.backgroundColor = 'red';
                //     } else {
                //         title.style.backgroundColor = 'green';
                //     }
                // } );

        // Adding Style Font Size | Yazı Tipi Boyutu Ekleme

            /*
                Başlıklarımıza biraz stil ekleyelim. Eğer elemanın indisi çift ise ona 20px veririz, aksi halde 30px veririz.
            */

                // titles.forEach( (title, index) => {
                //     if (index % 2 === 0) {
                //         title.style.fontSize = '20px';
                //     } else {
                //         title.style.fontSize = '30px';
                //     }
                // } );

/*
    JavaScript içinde kullandığımızda css özellikleri camelCase olarak kullanılır. 
    
    Aşağıdaki CSS özellikleri background-color'dan backgroundColor, font-size'dan fontSize, font-family'den fontFamily, margin-bottom'dan marginBottom şekilde değişir.
*/

//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name.

            // const firstParagraph = document.querySelector('p');
            // console.log(firstParagraph); // -> <p></p>

        //? 2. -> Get each of the the paragraph using document.querySelector('#id') and by their id.

            const firstParagraph = document.querySelector('#p-1');
            console.log(firstParagraph); // -> <p id="p-1"></p>

            const secondParagraph = document.querySelector('#p-2');
            console.log(secondParagraph); // -> <p id="p-2"></p>

            const thirdParagraph = document.querySelector('#p-3');
            console.log(thirdParagraph); // -> <p id="p-3"></p>

            const fourthParagraph = document.querySelector('#p-4');
            console.log(fourthParagraph); // -> <p id="p-4"></p>

        //? 3. -> Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name.

            const allParagraphs = document.querySelectorAll('p');
            console.log(allParagraphs); // -> NodeList(4) [p#p-1, p#p-2, p#p-3, p#p-4]

        //? 4. -> Loop through the nodeList and get the text content of each paragraph.

            allParagraphs.forEach( (p, i) => {
                p.textContent = 'Paragraph ' + '- ' + i;
            });

        //? 5. -> Set a text content to paragraph the fourth paragraph,Fourth Paragraph.

            fourthParagraph.textContent = 'Fourth Paragraph';

        //? 6. -> Set id and class attribute for all the paragraphs using different attribute setting methods.

            firstParagraph.className = 'first-p';
            console.log(firstParagraph); // -> <p id="p-1" class="first-p">Paragraph - 0</p>

            secondParagraph.setAttribute('class', 'second-p');
            console.log(secondParagraph); // -> <p id="p-2" class="second-p">Paragraph - 1</p>

            thirdParagraph.className = 'third-p';
            console.log(thirdParagraph); // -> <p id="p-3" class="third-p">Paragraph - 2</p>

            fourthParagraph.setAttribute('class', 'fourth-p');
            console.log(fourthParagraph); // -> <p id="p-4" class="fourth-p">Fourth Paragraph</p>

    // Exercises: Level 2

        //? 1. -> Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family).

            firstParagraph.style.color = 'blue'; 
            // -> <p id="p-1" class="first-p" style="color: blue;">Paragraph - 0</p>
            secondParagraph.style.backgroundColor = 'lightblue';
            // -> <p id="p-2" class="second-p" style="background-color: lightblue;">Paragraph - 1</p>
            thirdParagraph.style.border = '1px solid red';
            // -> <p id="p-3" class="third-p" style="border: 1px solid red;">Paragraph - 2</p>
            fourthParagraph.style.font = '30px Arial, sans-serif';
            // -> <p id="p-4" class="fourth-p" style="font: 30px Arial, sans-serif;">Fourth Paragraph</p>

        //? 2. -> Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color.

            allParagraphs.forEach( (p, i) => {
                if (i % 2 === 0) {
                    p.style.color = 'green';
                } else {
                    p.style.color = 'red';
                }
            } );
            /*
                <p id="p-1" class="first-p" style="color: green;">Paragraph - 0</p>

                <p id="p-2" class="second-p" style="background-color: lightblue; color: red;">Paragraph - 1</p>

                <p id="p-3" class="third-p" style="border: 1px solid red; color: green;">Paragraph - 2</p>

                <p id="p-4" class="fourth-p" style="font: 30px Arial, sans-serif; color: red;">Fourth Paragraph</p>
            */

        //? 3. -> Set text content, id and class to each paragraph.

            allParagraphs.forEach( (p, i) => {
                p.textContent = `Paragraph = ${i}`;
                p.id = `p-${i}`;
                p.className = `p-${i}`;
            } );
            /*
                <p id="p-0" class="p-0" style="color: green;">Paragraph = 0</p>

                <p id="p-1" class="p-1" style="background-color: lightblue; color: red;">Paragraph = 1</p>

                <p id="p-2" class="p-2" style="border: 1px solid red; color: green;">Paragraph = 2</p>

                <p id="p-3" class="p-3" style="font: 30px Arial, sans-serif; color: red;">Paragraph = 3</p>
            */

    // Exercises: Level 3

        //? DOM: Mini project 1

            //? 1. -> Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

                const unorderedList = document.querySelector('ul');
                const newListItems = `<li>30DaysJavaScript Challenge Done</li>
                    <li>30DaysOfReact Challenge Ongoing</li>
                    <li>30DaysOfPython Challenge Coming</li>
                    <li>30DaysOfFullStack Challenge Coming</li>
                    <li>30DaysOfDataAnalysis Challenge Coming</li>
                    <li>30DaysOfReactNative Challenge Coming</li>
                    <li>30DaysOfMachineLearning Challenge Coming</li>`
                    unorderedList.innerHTML = newListItems;

                    const date = new Date()

                    let year = date.getFullYear(),
                        month = date.getMonth(),
                        day = date.getDate(),
                        hour = date.getHours(),
                        minute = date.getMinutes(),
                        second = date.getSeconds(),
                        day_number = date.getDay()
                    
                    if (day < 10) {
                        day = '0' + day;
                    }

                    if (minute < 10) {
                        minute = '0' + minute;
                    }

                    if (second < 10) {
                        second = '0' + second;
                    }

                    let months = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]

                    let human_readable_date = `${months[month]} ${day}, ${year} ${hour}:${minute}:${second}`

                    function generateHexaColor() {
                        const str = '0123456789abcdef'
                        let hexa = '#'
                        let index;
                        for (let i = 0; i < 6; i++) {
                            index = Math.floor(Math.random() * str.length)
                            hexa += str[index]
                        }
                        return hexa
                    }

                    const challengesH1 = document.querySelector('div.wrapper > h1');
                    challengesH1.style.display = 'flex';
                    challengesH1.style.justifyContent = 'center';
                    challengesH1.style.alignItems = 'center';

                    const challengesH2 = document.querySelector('div.wrapper > h2');
                    challengesH2.style.display = 'flex';
                    challengesH2.style.justifyContent = 'center';
                    challengesH2.style.alignItems = 'center';
                    challengesH2.style.textDecoration = 'underline';

                //? 1.1. -> The year color is changing every 1 second.

                    const currentYear = document.getElementById('year');
                    currentYear.textContent = year;
                    currentYear.style.fontSize = '40px';
                    currentYear.style.paddingLeft = '10px';

                    setInterval(() => {
                        currentYear.style.color = generateHexaColor()
                    }, 1000)

                //? 1.2. -> The date and time background color is changing every on seconds.

                    const dateAndTime = document.querySelector('h3');
                    dateAndTime.style.display = 'flex';
                    dateAndTime.style.marginLeft = 'auto';
                    dateAndTime.style.marginRight = 'auto';
                    dateAndTime.style.justifyContent = 'center';
                    dateAndTime.style.width = '15%';

                    dateAndTime.textContent = human_readable_date;

                    setInterval(() => { 
                        dateAndTime.style.backgroundColor = generateHexaColor() 
                    }, 1000); //! setInterval doesn't work when I set it to 10000 milliseconds.

                //? 1.3. -> Completed challenge has background green.

                    const listItems = document.querySelectorAll('li');
                    console.log(listItems);

                    listItems[0].style.backgroundColor = 'green';

                //? 1.4. -> Ongoing challenge has background yellow.

                    listItems[1].style.backgroundColor = 'yellow';

                //? 1.5. -> Coming challenges have background red.

                    for (let i = 2; i < listItems.length; i++) {
                        listItems[i].style.backgroundColor = 'red';
                    }

                    listItems.forEach( (li) => {
                        li.style.height = '40px';
                        li.style.paddingLeft = '10px';
                        li.style.border = '1px solid white';
                        li.style.display = 'flex';
                        li.style.alignItems = 'center';
                    });

//! 🎉 CONGRATULATIONS ! 🎉