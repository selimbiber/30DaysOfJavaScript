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

        document.body.innerHTML = ""; // -> Clearing

        const asabenehChallenges2023 = {
            description: 'Asabeneh Yetayeh challenges',
            challengeTitle: 'Asabeneh Yetayeh challenges',
            challengeSubtitle: '30DaysOfJavaScript Challenge',
            keywords: [
              'HTML',
              'HTML5',
              'CSS',
              'CSS3',
              'JS',
              'JavaScript',
              'ES6',
              'Promise',
              'async await',
              'Database',
              'React',
              'React Hooks',
              'Context API',
              'React Router',
              'Web Storage',
              'localStorage',
              'sessionStorage',
              'Redux',
              'Node',
              'MongoDB',
              'SQL',
              'API',
              'DOM',
              'data science',
              'MERN',
              'Python',
              'Flask',
              'Statistics',
              'Linear Algebra',
              'Numpy',
              'Pandas',
              'Scipy',
              'Scikit-learn',
              'Visualization',
              'D3.js'
            ],
            author: {
              firstName: 'Asabeneh',
              lastName: 'Yetayeh',
              titles: [
                ['🌱', 'Educator'],
                ['💻', 'Programmer'],
                ['🌐', 'Developer'],
                ['🔥', 'Motivator'],
                ['📔', 'Content Creator']
              ],
              qualifications: [
                'MSc. Computer Science Ongoing',
                'BSc. Information and Communication Eng.',
                'MSc. Food Technology',
                'BSc.Food Technology'
              ],
              socialLinks: [
                {
                  social: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/asabeneh/',
                  fontawesomeIcon: '<i class="fab fa-linkedin">'
                },
                {
                  social: 'Twitter',
                  url: 'https://twitter.com/Asabeneh',
                  fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
                },
                {
                  social: 'Github',
                  fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                  url: 'https://github.com/Asabeneh'
                },
                {
                  social: 'DEV.to',
                  fontawesomeIcon: '',
                  url: 'https://dev.to/asabeneh'
                }
              ],
              skills: [
                'Web Development',
                'Data Analysis',
                'Data Visualization',
                'Programming',
                'Databases',
                'Developing API'
              ],
              bio:
                'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
            },
            challenges: [
              {
                name: '30 Days Of Python',
                topics: [
                  'Python',
                  'Flask',
                  'Numpy',
                  'Pandas',
                  'Statistics',
                  'API',
                  'MongoDB'
                ],
                days: 30,
                status: 'Done',
                questions: 'Above 500',
                projects: 'Two',
                interviewQns: '',
                githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
              },
              {
                name: '30 Days Of JavaScript',
                topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
                days: 30,
                status: 'Ongoing',
                questions: 'Above 500',
                projects: 'About 30',
                interviewQns: '',
                githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
              },
              {
                name: '30 Days Of HTML & CSS',
                topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
                days: 30,
                status: 'Coming',
                questions: 'Above 500',
                projects: 'Two',
                interviewQns: '',
                githubUrl: ''
              },
              {
                name: '30 Days Of React',
                topics: [
                  'React',
                  'React Router',
                  'Redux',
                  'Context API',
                  'React Hooks',
                  'MERN'
                ],
                days: 30,
                status: 'Coming',
                questions: '',
                projects: '',
                interviewQns: '',
                githubUrl: ''
              },
              {
                name: '30 Days Of ReactNative',
                topics: ['ReactNative', 'Redux'],
                days: 30,
                status: 'Coming',
                questions: '',
                projects: 'Two',
                interviewQns: '',
                githubUrl: ''
              },
              {
                name: '30 Days Of Fullstack',
                topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
                days: 30,
                status: 'Coming',
                questions: '',
                projects: '',
                interviewQns: '',
                githubUrl: ''
              },
              {
                name: '30 Days Of Data Analysis',
                topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
                days: 30,
                status: 'Coming',
                questions: '',
                projects: '',
                interviewQns: '',
                githubUrl: ''
              },
              {
                name: '30 Days Of Machine Learning',
                topics: [
                  'Python',
                  'Numpy',
                  'Pandas',
                  'Scikit-learn',
                  'Scipy',
                  'Linear Algebra',
                  'Statistics',
                  'Visualization'
                ],
                days: 30,
                status: 'Coming',
                questions: '',
                projects: '',
                interviewQns: '',
                githubUrl: ''
              }
            ]
          }

          function getHumanReadableDate() {
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
            return human_readable_date;
          }

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

        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.boxSizing = "border-box";
        document.body.style.minHeight = "100vh";
        document.body.style.maxWidth = "100vw";

        const container = document.createElement('div');
        container.style.padding = '1rem';
        document.body.appendChild(container);

        const challengesHeader = document.createElement('header');
        container.appendChild(challengesHeader);

        const challengesHeading = document.createElement('h1');
        challengesHeading.style.display = 'inline';
        challengesHeading.innerHTML = asabenehChallenges2023.challengeTitle + ' in ';
        container.appendChild(challengesHeading);

        const date = new Date 
        const currentYear = document.createElement('h1');
        currentYear.style.display = 'inline';
        currentYear.style.fontSize = '5rem'
        currentYear.innerHTML = date.getFullYear();
        container.appendChild(currentYear);

        setInterval(() => {
            currentYear.style.color = generateHexaColor()
        }, 1000)

        const challengesName = document.createElement('h2')
        challengesName.innerHTML = asabenehChallenges2023.challengeSubtitle;
        challengesName.style.textDecoration = 'underline';
        challengesName.style.textAlign = 'center';
        container.appendChild(challengesName);

        const currentTime = document.createElement('h3');
        currentTime.innerHTML = getHumanReadableDate();
        currentTime.style.textAlign = 'center';
        setInterval(() => { 
            currentTime.style.backgroundColor = generateHexaColor() 
        }, 1000);
        container.appendChild(currentTime);

        const ulDOM = document.createElement('ul');
        ulDOM.style.paddingRight = '2rem'
        ulDOM.style.margin = 'auto';

        container.appendChild(ulDOM);

        asabenehChallenges2023.challenges.forEach( challenge => {
            const liDOM = document.createElement('li');

            liDOM.style.listStyle = 'none'
            liDOM.style.minHeight = '3rem'
            liDOM.style.display = 'flex'
            liDOM.style.alignItems = 'center'
            liDOM.style.paddingLeft = '1rem'
            liDOM.style.marginBottom = '.2rem'
            liDOM.style.backgroundColor = 'red';

            const challengeName = document.createElement('span')
            const name = document.createTextNode(challenge.name)
            challengeName.appendChild(name)

            const dropDown = document.createElement('details')
            const dropDownSpan = document.createElement('span')
            dropDownSpan.appendChild(dropDown)
            dropDownSpan.style.margin = 'auto'

            const summary = document.createElement('summary')
            summary.textContent = challenge.name.split(' ')[challenge.name.split(' ').length -1]

            const topics = document.createElement('ul')

            challenge.topics.forEach( topic => {
                const listItem = document.createElement('li')
                listItem.textContent = topic

                topics.appendChild(listItem)

                listItem.style.padding='5px';
                listItem.style.width = '90%';
                listItem.style.marginTop ='3px';
                listItem.style.marginBottom = '3px';
            })

            topics.style.listStyleType = 'none';
            topics.style.width = '80%';
            topics.style.margin = 'auto';

            const status = document.createTextNode(challenge.status)
            const statusSpan = document.createElement('span')
            statusSpan.appendChild(status)
            statusSpan.style.marginLeft = 'auto'
            statusSpan.style.paddingRight = '1rem'

            if (challenge.status === 'Done') {
                liDOM.style.backgroundColor = 'green';
            }
            if (challenge.status === 'Ongoing') {
                liDOM.style.backgroundColor = 'yellow';
            }
            liDOM.appendChild(challengeName)
            dropDown.appendChild(summary)
            dropDown.appendChild(topics)
            liDOM.appendChild(dropDownSpan)
            liDOM.appendChild(statusSpan)
            ulDOM.appendChild(liDOM)
        });
        
//! 🎉 CONGRATULATIONS ! 🎉