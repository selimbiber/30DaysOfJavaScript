// Input 

    const input = document.querySelector('input')

// Select

    const select = document.querySelector('select')

// Button

    const button = document.querySelector('button')

// Output

    const outputArea = document.getElementById('info-show-area')
    
// Default

    const defaultImage = document.querySelector('img')

// Info

    const space = {
        mercury:{
            gravity: 3.7,
            image: "./assets/mercury.png"
        },
        venus:{
            gravity: 8.90,
            image: "./assets/venus.png"
        },
        earth:{
            gravity: 9.80,
            image: "./assets/earth.png"
        },
        mars:{
            gravity: 3.70,
            image: "./assets/mars.png"
        },
        jupiter:{
            gravity: 23.10,
            image: "./assets/jupiter.png"
        },
        saturn:{
            gravity: 9,
            image: "./assets/saturn.png"
        },
        uranus:{
            gravity: 8.70,
            image: "./assets/uranus.png"
        },
        neptune:{
            gravity: 11,
            image: "./assets/neptune.png"
        },
        pluto:{
            gravity: 0.70,
            image: "./assets/pluto.png"
        },
        moon:{
            gravity: 1.60,
            image: "./assets/moon.png"
        }
    }

// Warning

    const warningInfo = document.createElement('div')
    warningInfo.setAttribute('id', 'warning-info')

// Events

    button.addEventListener('click', () => {
        let inputValue = input.value;
        let selectValue = select.value;
        let weightOfTheObject;

        // Butona her tıklandığında önceki değerleri sıfırla
        while (outputArea.firstChild) {
            outputArea.removeChild(outputArea.firstChild);
        }

        if (inputValue === '' && select.value === 'selected') { // Hem inputValue boş ve selectValue selected ise

            defaultImage.remove()
            warningInfo.textContent = 'Mass is required'
            outputArea.appendChild(warningInfo)

        } else if (inputValue === '') { // Sadece inputValue boş ise

            defaultImage.remove()
            warningInfo.textContent = 'Mass is required'
            outputArea.appendChild(warningInfo)

        } else if (select.value === 'selected') { // Sadece selectValue boş ise

            defaultImage.remove()
            warningInfo.textContent = 'You did not choose a planet yet'
            outputArea.appendChild(warningInfo)

        } else { // Hem inputValue hem de selectValue değerleri doğru girilmiş ise

            for ( let planet of Object.keys(space) ) {
                if (selectValue === planet) {

                    weightOfTheObject = inputValue * Number(space[planet].gravity);

                    defaultImage.remove()
                    const outputImg = document.createElement('img')
                    outputImg.setAttribute('id', 'planet-image')
                    outputImg.alt = planet
                    outputImg.src = './assets/earth.png'
                    outputArea.appendChild(outputImg)

                    outputImg.src = space[planet].image
                    outputImg.style.marginRight = 'auto'

                    const planetWeightInfo = document.createElement('div')
                    planetWeightInfo.setAttribute('id', 'planet-weight-info')
                    outputArea.appendChild(planetWeightInfo)

                    const planetWeightInfoHeading = document.createElement('h2')
                    planetWeightInfoHeading.setAttribute('id', 'planet-weight-info_heading')
                    planetWeightInfo.appendChild(planetWeightInfoHeading)

                    planetWeightInfoHeading.innerHTML = `The weight of the object on 
                    <span style="color:white; font-weight: bold">${planet.toUpperCase()}</span>` 
                    
                    const planetWeightInfoCircle = document.createElement('div')
                    planetWeightInfoCircle.setAttribute('id', 'planet-weight-info_circle')
                    planetWeightInfoCircle.innerHTML = `${weightOfTheObject.toPrecision(5)} &nbsp
                    <span style="color:white; font-weight: bold">N</span>`
                    planetWeightInfo.appendChild(planetWeightInfoCircle)

                }
            }
        }
    });