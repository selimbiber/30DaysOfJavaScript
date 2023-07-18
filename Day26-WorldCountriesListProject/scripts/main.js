const topContainer = document.getElementById('top-container')
    const searchPanel = document.getElementById('search-panel')
    const heading = document.getElementById('heading')
    const totalNumberOfCountriesInfo = document.getElementById('country-count')
    const searchingInfo = document.getElementById('searching-info')
    const initialLetterBtn = document.getElementById('initial-letter-btn')
    const anyWordBtn = document.getElementById('any-word-btn')
    const alphaSortingBtn = document.getElementById('alpha-sorting-btn')
    const searchInputArea = document.getElementById('search-input-area')
    const searchCountryInput = document.getElementById('search-country-input')
const boxContainer = document.getElementById('box-container')
const subContainer = document.getElementById('sub-container')

let activeButton;

// Helper Functions

const updateTotalNumberOfCountriesInfo = () => {
    totalNumberOfCountriesInfo.textContent = `Currently, we have ${dataForAllCountries.length} countries.`;
}; 
updateTotalNumberOfCountriesInfo();

const pullUpSearchPanel = () => {
    topContainer.style.height = '50vh'
    topContainer.style.marginBottom = 'auto'

    searchPanel.style.height = '50vh'
    searchPanel.style.backgroundSize = '70vw 70vh'
}

const activateResultArea = () => {
    boxContainer.style.display = 'flex'
    heading.style.marginTop = '0'
}

const createFooterArea = () => {
    const existingFooterArea = document.getElementById('sub-container');
    if (existingFooterArea) {
      document.body.removeChild(existingFooterArea);
    }
    const footerArea = document.createElement('footer')
    footerArea.setAttribute('id', 'sub-container')
        const githubLink = document.createElement('a')
        githubLink.href = 'https://github.com/selimbiber/30DaysOfJavaScriptChallenge'
        githubLink.title = 'GitHub: selimbiber'
        githubLink.target = '_blank'
        githubLink.textContent = 'Selim Biber'
        footerArea.appendChild(githubLink)

            const githubLogo = document.createElement('img')
            githubLogo.src = './assets/github-icon.svg'
            githubLogo.alt = 'github logo'
            githubLogo.setAttribute('id', 'github-logo')
            githubLink.appendChild(githubLogo)

    document.body.appendChild(footerArea)
    return footerArea
}

const createCountryBox = (country) => {    // const countryInfo = document.createElement('article')
    const countryBox = document.createElement('figure')
    countryBox.classList.add('country-box')

    const countryFlag = document.createElement('img')
    countryFlag.classList.add('country-flag')
    countryFlag.src = country.flag
    countryFlag.alt = country.name
    countryBox.appendChild(countryFlag)

    const countryName = document.createElement('figcaption')
    countryName.classList.add('country-name')
    countryName.textContent = country.name
    countryBox.appendChild(countryName)

    boxContainer.appendChild(countryBox)
}

const createAlertBox = () => {  
    if (boxContainer.innerHTML === '') {
        searchingInfo.innerHTML = ``
        const countryBox = document.createElement('figure')
        countryBox.classList.add('country-box')

            const countryFlag = document.createElement('img')
            countryFlag.classList.add('country-flag')
            countryFlag.src = './assets/peace.png'
            countryFlag.alt = 'no-country'
            countryBox.appendChild(countryFlag)
            
            const countryName = document.createElement('figcaption')
            countryName.classList.add('country-name')
            countryName.textContent = 'No matching country found!'
            countryName.style.color = 'red'
            countryBox.appendChild(countryName)

        boxContainer.appendChild(countryBox)
    }
}

const setActiveButton = (lastClickedButton) => {
    activeButton = lastClickedButton;

    if (activeButton === 'initialLetterBtn') {
    initialLetterBtn.classList.add('active-btn')

    anyWordBtn.classList.remove('active-btn');
    alphaSortingBtn.classList.remove('active-btn');

    } else if (activeButton === 'anyWordBtn') {
    anyWordBtn.classList.add('active-btn')

    initialLetterBtn.classList.remove('active-btn');
    alphaSortingBtn.classList.remove('active-btn');
    
    } else if (activeButton === 'alphaSortingBtn') {
    alphaSortingBtn.classList.add('active-btn')

    initialLetterBtn.classList.remove('active-btn');
    anyWordBtn.classList.remove('active-btn');
    }
}

// Events

initialLetterBtn.addEventListener('click', () => {
    searchCountryInput.value = '';
    searchingInfo.innerHTML = '';
    // activate the button
    setActiveButton('initialLetterBtn')
});

anyWordBtn.addEventListener('click', () => {
    searchCountryInput.value = '';
    searchingInfo.innerHTML = '';
    // activate the button
    setActiveButton('anyWordBtn');
});

alphaSortingBtn.addEventListener('click', () => {
    searchCountryInput.value = '';
    searchingInfo.innerHTML = '';
    boxContainer.innerHTML = '';
    // activate the button
    setActiveButton('alphaSortingBtn');

    // change the button background image
    if ( alphaSortingBtn.classList.contains('arrow-down') ) {
        alphaSortingBtn.classList.remove('arrow-down')
        alphaSortingBtn.classList.add('arrow-up')
    } else {
        alphaSortingBtn.classList.remove('arrow-up')
        alphaSortingBtn.classList.add('arrow-down')
    }
    showAllCountryBoxes();
});

searchCountryInput.addEventListener('click', () => {
    pullUpSearchPanel();
    activateResultArea();
    createFooterArea();
    showAllCountryBoxes();
})

searchCountryInput.addEventListener('input', (input) => {
    if (activeButton === 'initialLetterBtn') {
        filterByInitials(input.target.value)
    }
    else {
        filterByAnyWord(input.target.value)
    }
    createAlertBox();
})

// Main Functions

function showAllCountryBoxes () {
    if (boxContainer.childElementCount === 0) {
        if ( activeButton === 'alphaSortingBtn' && alphaSortingBtn.classList.contains('arrow-up') ) {
            const reversedCountryData = dataForAllCountries.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            });
            reversedCountryData.map(country => {
                createCountryBox(country);
            });
        } else {
            const sortedCountryData = dataForAllCountries.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            sortedCountryData.map(country => {
                createCountryBox(country);
            });
        }
    }
}

function filterByInitials (letter) {
    boxContainer.innerHTML = '';
    countriesWithMatchingInitials = [];
    for (let i = 0; i < dataForAllCountries.length; i++) {
        const country = dataForAllCountries[i];

        if ( country.name.startsWith(letter.toUpperCase()) ) {
            countriesWithMatchingInitials.push(country.name)
            if (countriesWithMatchingInitials.length === 248) {
                searchingInfo.innerHTML = '';
            } else {
                searchingInfo.innerHTML = `Countries start with <span id='letter'>${letter}</span> are <span id='count'>${countriesWithMatchingInitials.length}</span>.`
            }
            createCountryBox(country);
        }
    }
}

function filterByAnyWord (word) {
    boxContainer.innerHTML = '';
    countriesWithMatchingWord = [];
    for (let i = 0; i < dataForAllCountries.length; i++) {
        const country = dataForAllCountries[i];

        if ( country.name.includes(word) ) {
            countriesWithMatchingWord.push(country.name)
            if (countriesWithMatchingWord.length === 248) {
                searchingInfo.innerHTML = '';
            } else {
                searchingInfo.innerHTML = `Countries containing <span id='letter'>${word}</span> are <span id='count'>${countriesWithMatchingWord.length}</span>.`
            }
            createCountryBox(country);
        }
    }
}