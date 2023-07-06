/*** Day 23 = Manipulating Document Object Model (DOM) -3
 *? https://30dayjavascript.js.org/23-day/
 *? https://tr.javascript.info/events
 *! Not: Kod bloklarını yorum satırından çıkarmak için (ctrl + k + u) kısayolunu kullanabilirsin.
***/

/*  Topics of Day 23:

    Event Listeners
        Click
        Double Click
        Mouse enter
    Getting value from an input element
    input value
        input event and change
        blur event
        keypress, keydow and keyup
*/

document.body.innerHTML = ""; // -> Page Cleared.

//! Event Listeners

    /* 
        Ortak HTML olayları: tıklama, değişiklik, fare üzerine gelme, fareyi elementin üzerinden çıkarma, tuşa basma, tuştan el çekme, yükleme.

        Herhangi bir DOM nesnesine olay dinleyici yöntemi ekleyebiliriz. HTML öğelerinde farklı olay türlerini dinlemek için addEventListener() yöntemini kullanırız. addEventListener() yöntemi, bir olay dinleyicisi ve geri çağırma işlevi olmak üzere iki argüman alır.
    */

        // selectedElement.addEventListener("eventlistener", function (e) {
        //     // olaydan sonra olmasını istediğimiz aktivite burada olacak
        // });
        // // OR
        // selectedElement.addEventListener("eventlistener", (e) => {
        //     // olaydan sonra olmasını istediğimiz aktivite burada olacak
        // });

    // Click | Tıklama

        /*
            Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçer, ardından addEventListener() yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.

            Aşağıdaki örnek tıklama türü olayın bir örneğidir.

            <body>
                <button>Click Me</button>

                <script>
                    const button = document.querySelector("button");
                    button.addEventListener("click", (e) => {
                        console.log("e gives the event listener object:", e);
                        console.log("e.target gives the selected element: ", e.target);
                        console.log(
                            "e.target.textContent gives content of selected element: ",
                            e.target.textContent
                        );
                    });
                </script>
            </body>

            Bir olay, doğrudan HTML öğesine satır içi komut dosyası olarak da eklenebilir.

            Örnek: onclick

                <body>
                    <button onclick="clickMe()">Click Me</button>
                    <script>
                        const clickMe = () => {
                            alert("We can attach event on HTML element");
                        };
                    </script>
                </body>
        */

    // Double Click | Çift Tıklama

        /*
            Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçeriz, ardından addEventListener() yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.

            Aşağıdaki örnek, çift tıklama (dblclick) türü olayın bir örneğidir.

             <body>
                <button>Click Me</button>
                <script>
                    const button = document.querySelector("button");
                    button.addEventListener("dblclick", (e) => {
                        console.log("e gives the event listener object:", e);
                        console.log("e.target gives the selected element: ", e.target);
                        console.log(
                            "e.target.textContent gives content of selected element: ",
                            e.target.textContent
                        );
                    });
                </script>
            </body>
        */

    // Mouse enter | Fare tıklaması

        /*
            Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçeriz, ardından addEventListener() yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.

            Aşağıdaki örnek, fare tıklaması (mouseenter) türündeki bir olayın örneğidir.

                <body>
                    <button>Click Me</button>
                    <script>
                        const button = document.querySelector("button");
                        button.addEventListener("mouseenter", (e) => {
                            console.log("e gives the event listener object:", e);
                            console.log("e.target gives the selected element: ", e.target);
                            console.log(
                                "e.target.textContent gives content of selected element: ",
                                e.target.textContent
                            );
                        });
                    </script>
                </body>
        */

/*
    Birçok olay dinleyicisi türü vardır ancak burada en önemli ve sık kullanılan olaylara odaklanacağız.

    Olay listesi:

    click - eleman tıklandığında
    dblclick - eleman çift tıklandığında
    mouseenter - fare noktası öğeye girdiğinde
    mouseleave - fare işaretçisi öğeden ayrıldığında
    mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
    mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
    mouseout - fare işaretçisi öğeden dışarı çıktığında
    input - değer giriş alanına girildiğinde
    change - giriş alanında değer değiştiğinde
    blur - öğe odaklanmadığında
    keydown - bir tuş düştüğünde
    keyup - bir anahtar bittiğinde
    keypress - herhangi bir tuşa bastığımızda
    onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde
*/

// Getting value from an input element | Bir input öğesinden değer alma

    /*
        Genellikle form doldururuz ve formlar verileri işler. Form alanları, girdi HTML öğesi kullanılarak oluşturulur. İki girdi alanı, bir düğme ve bir p etiketi kullanarak bir kişinin vücut kitle indeksini hesaplamamıza izin veren küçük bir uygulama oluşturalım.
    */
    
// input value

    // Body Styles

        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.boxSizing = "border-box";
        document.body.style.minHeight = "100vh";
        document.body.style.maxWidth = "100vw";

    // Container

        const container = document.createElement('div');
        document.body.appendChild(container);

    // Heading

        // const heading = document.createElement('h1');
        // heading.textContent = "Body Mass Index Calculator";
        // heading.style.textAlign = "center";
        // container.appendChild(heading);

    // Inputs 

        // const mass = document.createElement('input');
        // mass.setAttribute('type', 'text');
        // mass.setAttribute('placeholder', 'Mass in Kilogram');
        // mass.style.display = 'block'
        // mass.style.marginBottom = '1rem';
        // container.appendChild(mass);

        // const height = document.createElement('input');
        // height.setAttribute('type', 'text');
        // height.setAttribute('placeholder', 'Height in meters');
        // height.style.display = 'block'
        // height.style.marginBottom = '1rem';
        // container.appendChild(height);

        // const button = document.createElement('input');
        // button.setAttribute('type', 'submit');
        // button.textContent = 'Calculate BMI';
        // container.appendChild(button);

    // Event Listener

        // let bmi;
        // button.addEventListener('click', () => {
        //     bmi = mass.value / height.value ** 2;
        //     alert(`your bmi is ${bmi.toFixed()}`);
        //     console.log(bmi);
        // })

    // input event and change | input olayı ve change olayı

        /*
            Yukarıdaki örnekte, iki girdi alanından verileri düğmeye tıklayarak almayı başardık. Ancak, düğmeye tıklamadan değer almak istersek, girdi alanına odaklandığında verileri hemen almak için change veya input olay türünü kullanabiliriz. Bunu nasıl ele alacağımızı görelim.
        */

            // const textInput = document.createElement('input');
            // textInput.setAttribute('type', 'text');
            // textInput.setAttribute('placeholder', 'say something');
            // container.appendChild(textInput);

            // const textLine = document.createElement('p');
            // container.appendChild(textLine);

            // textInput.addEventListener('input', (event) => {
            //     textLine.textContent = event.target.value;
            // });

    // blur event

        /*
            Input veya change olaylarının aksine, blur olayı girdi alanına odaklı değilken meydana gelir.
        */

            const heading = document.createElement('h1');
            // heading.textContent = 'Giving feedback using blur event';
            // container.appendChild(heading);

            // const textInput = document.createElement('input');
            // textInput.setAttribute('type', 'text');
            // textInput.setAttribute('placeholder', 'say something');
            // container.appendChild(textInput);

            // const textLine = document.createElement('p');
            // container.appendChild(textLine);

            // textInput.addEventListener('blur', (event) => {
            //     textLine.textContent = 'Field is required'
            //     textLine.style.color = 'red'
            // });

    // keypress, keydow and keyup

        /*
            Farklı olay dinleyici türlerini kullanarak klavyenin tüm tuş numaralarına erişebiliriz. KeyPress'i kullanalım ve her klavye tuşunun keyCode'unu alalım.
        */

            // heading.textContent = 'Key events: Press any key';
            // container.appendChild(heading);

            // document.body.addEventListener('keypress', (event) => {
            //     alert(event.keyCode);
            // })

//! 💻 Exercises

    // Exercises: Level 1

        //? 1. -> Generating numbers and marking evens, odds and prime numbers with three different colors.
        /* https://30dayjavascript.js.org/images/projects/dom_min_project_number_generator_day_3.1.gif */

            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.justifyContent = 'center';
            container.style.flexWrap = 'wrap';

            heading.textContent = 'Number Generator';
            heading.style.color = 'green';
            heading.style.textAlign = 'center';
            container.appendChild(heading);

            const challengeName = document.createElement('h2');
            challengeName.textContent = '30DaysOfJavaScript: DOM Day 3';
            challengeName.style.textAlign = 'center';
            container.appendChild(challengeName);

            const authorName = document.createElement('h3');
            authorName.textContent = 'Asabeneh Yetayeh';
            authorName.style.textAlign = 'center';
            container.appendChild(authorName);

            const inputDiv = document.createElement('div');
            inputDiv.style.margin = '0 auto';
            container.appendChild(inputDiv);

            const numInput = document.createElement('input');
            numInput.setAttribute('type', 'number');
            numInput.style.border = '1px solid green'
            numInput.style.width = '30rem'
            numInput.style.marginRight = '1rem'
            numInput.style.height = '2rem'
            inputDiv.appendChild(numInput);

            const submitInput = document.createElement('input');
            submitInput.setAttribute('type', 'submit');
            submitInput.setAttribute('value', 'Generate Numbers');
            submitInput.style.width = '10rem'
            submitInput.style.height = '2.3rem'
            submitInput.style.backgroundColor = 'green'
            submitInput.style.color = 'white'
            submitInput.style.cursor = 'pointer'
            inputDiv.appendChild(submitInput);

            // Helper Funcs

            const isPrime = (number) => {

                if (number < 2) {
                    return false;
                } if (number == 2) {
                    return true;
                } else {
                    for (let i = 2; i <= 10; i++) {
                        if (number === i) {
                            continue;
                        }
                        else if (number % i == 0) {
                            return false;
                        }
                    }
                    return true;
                }
            }

            const table = document.createElement('table');
            container.appendChild(table);

            function generateNumbers (numCount) {
                let nums = 0;
                while (nums < numCount) {
                    const tableRow = document.createElement('tr');

                    let i = 1;
                    let iCount = numCount - nums > 6 ? 6 : numCount - nums;
                    while (i <= iCount) {
                        const tableData = document.createElement('td');
                        tableData.textContent = nums;
                        tableData.style.padding = '.5rem'
                        tableData.style.textAlign = 'center'

                        if (nums % 2 === 0) {
                            tableData.style.backgroundColor = 'green';
                        } else if (nums % 2 === 1) {
                            tableData.style.backgroundColor = 'yellow';
                        }
                        if (isPrime(nums)) {
                            tableData.style.backgroundColor = 'red';
                        }

                        tableRow.appendChild(tableData);
                        nums++;
                        i++;
                    }
                    table.appendChild(tableRow);
                }
            }

            // Events

            numInput.addEventListener('keypress', () => {
                let inputValue = parseInt(numInput.value);
                if (inputValue < 0 || inputValue > 999) {
                    alert('Please enter a number between 1-1000!');
                }
            })

            submitInput.addEventListener('click', () => {
                table.innerHTML = '';
                let inputValue = parseInt(numInput.value);

                if (inputValue < 0 || inputValue > 1000) {
                    alert('Please enter a number between 1-1000!');
                } else {
                    generateNumbers(inputValue);
                }
            })

        //? 2.-> Generating the keyboard code code using even listener. The image below.
        /* https://30dayjavascript.js.org/images/projects/dom_min_project_keycode_day_3.2.gif */

//! 🎉 CONGRATULATIONS ! 🎉