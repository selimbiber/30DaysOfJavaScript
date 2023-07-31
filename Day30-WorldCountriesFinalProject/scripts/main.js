const topContainer = document.getElementById('top-container')
    const searchPanel = document.getElementById('search-panel')
    const heading = document.getElementById('heading')
    const totalNumberOfCountriesInfo = document.getElementById('country-count')
    const searchingInfo = document.getElementById('searching-info')
    const searchCountryInput = document.getElementById('search-country-input')
    const nameBtn = document.getElementById('name-btn')
    const capitalBtn = document.getElementById('capital-btn')
    const populationBtn = document.getElementById('population-btn')
    const currencyBtn = document.getElementById('currency-btn')
    const chartbarBtn = document.getElementById('chartbar-btn')
const mainContainer = document.getElementById('main-container')
    const boxContainer = document.getElementById('box-container')
    const chartbarContainer = document.getElementById('chartbar-container')
        const chartbarButtonsArea = document.getElementById('chartbar-buttons-area')
            const populationChartbarBtn = document.getElementById('population-chartbar-btn');
            const langsChartbarBtn = document.getElementById('languages-chartbar-btn');
            const currencyChartbarBtn = document.getElementById('currency-chartbar-btn')
const subContainer = document.getElementById('sub-container')

const countriesWithMatchingInput = new Set(dataForAllCountries);

let activeButton;
let currentSortOption = 'arrow-down'; // -> default option

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

    heading.style.fontSize = '2rem'
}

const activateResultArea = () => {
    mainContainer.style.display = 'flex'
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
            githubLogo.src = './images/github-icon.svg'
            githubLogo.alt = 'github logo'
            githubLogo.setAttribute('id', 'github-logo')
            githubLink.appendChild(githubLogo)

            const goUp = document.createElement('img')
            goUp.src = './images/arrow-up.svg'
            goUp.alt = 'Go Up'
            goUp.setAttribute('id', 'go-up')                
            footerArea.appendChild(goUp);

            goUp.addEventListener( 'click', () => topFunction() );

    document.body.appendChild(footerArea)
    return footerArea
}

const createCountryBox = (country) => {
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

        const countryInfo = document.createElement('ul')
        countryInfo.classList.add('country-info')
            countryCapital = document.createElement('li')
            countryCapital.innerHTML = `<h4>Capital:</h4> ${country.capital}`
            countryInfo.appendChild(countryCapital)
            countryLanguages = document.createElement('li')
            countryLanguages.innerHTML = `<h4>Languages:</h4> ${country.languages}`
            countryInfo.appendChild(countryLanguages)
            countryPopulation = document.createElement('li')
            countryPopulation.innerHTML = `<h4>Population:</h4> ${country.population.toLocaleString()}`
            countryInfo.appendChild(countryPopulation)
            countryCurrency = document.createElement('li')
            countryCurrency.innerHTML = `<h4>Currency:</h4> ${country.currency}`
            countryInfo.appendChild(countryCurrency)
        countryBox.appendChild(countryInfo)

    boxContainer.appendChild(countryBox)
}

const createAlertBox = () => {  
    if (boxContainer.innerHTML === '') {
        searchingInfo.innerHTML = ``
        const countryBox = document.createElement('figure')
        countryBox.classList.add('country-box')

            const countryFlag = document.createElement('img')
            countryFlag.classList.add('country-flag')
            countryFlag.src = './images/peace.png'
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
    removeActiveButton();
    activeButton = lastClickedButton;

    activeButton === 'nameBtn' ? nameBtn.classList.add('active-btn') : activeButton;
    activeButton === 'capitalBtn' ? capitalBtn.classList.add('active-btn') : activeButton;
    activeButton === 'populationBtn' ? populationBtn.classList.add('active-btn') : activeButton;
    activeButton === 'currencyBtn' ? currencyBtn.classList.add('active-btn') : activeButton;
}

const removeActiveButton = () => {
    Array.from(searchPanel.getElementsByTagName('button')).forEach(button => {
        button.classList.remove('active-btn')
    });
}

const updateCurrentSortOption = (lastSortOption) => {
    Array.from(searchPanel.getElementsByTagName('button')).forEach(button => {
        button.classList.remove('arrow-down')
        button.classList.remove('arrow-up')
    });
    boxContainer.innerHTML = '';
    currentSortOption = lastSortOption;
}

const createDataList = () => {
    const existingDataList = document.getElementById('data-list');
    if (existingDataList) {
      chartbarContainer.removeChild(existingDataList);
    }
  
    const dataList = document.createElement('ul');
    dataList.setAttribute('id', 'data-list');
    chartbarContainer.appendChild(dataList);
  
    return dataList;
};
  
const createDataArea = (dataList) => {
    const leftArea = document.createElement('li')
    leftArea.setAttribute('id', 'left-area');
    const midArea = document.createElement('li')
    midArea.setAttribute('id', 'mid-area');
    const rightArea = document.createElement('li')
    rightArea.setAttribute('id', 'right-area');
  
    dataList.appendChild(leftArea)
    dataList.appendChild(midArea)
    dataList.appendChild(rightArea)
  
    return {
      leftArea,
      midArea,
      rightArea
    };
};
  
const populatePopulationData = () => {
  
    const dataList = createDataList();
    const {leftArea, midArea, rightArea} = createDataArea(dataList);
    
    const sortedPopulations = [...countriesWithMatchingInput].sort( (a, b) => b.population - a.population )

    for (let country of sortedPopulations.slice(0, 10)) {

        const countryName = document.createElement('div'); 
        countryName.setAttribute('class', 'country-lang-data');
        countryName.textContent = country.name;
    
        const countryBar = document.createElement('div');
        countryBar.setAttribute('class', 'chartBar')
        const percentage = (country.population / sortedPopulations[0].population) * 100;
        countryBar.style.width = percentage + '%';
    
        const countryPopulation = document.createElement('div');
        countryPopulation.setAttribute('class', 'numberData');
        countryPopulation.textContent = country.population.toLocaleString();
    
        leftArea.appendChild(countryName);
        midArea.appendChild(countryBar);
        rightArea.appendChild(countryPopulation);
    }
};

const showMostSpokenLanguages = () => {
    
    const dataList = createDataList();
    const languageMap = new Map();
  
    [...countriesWithMatchingInput].forEach(country => {
      country.languages.map(language => {
        if (languageMap.has(language)) {
          languageMap.set(language, languageMap.get(language) + 1);
        } else {
          languageMap.set(language, 1);
        }
      });
    });
  
    const { leftArea, midArea, rightArea } = createDataArea(dataList);
    const sortedLanguages = [...languageMap.entries()].sort( (a, b) => b[1] - a[1]) ;
  
    sortedLanguages.slice(0, 10).forEach((language) => {
      const languageName = document.createElement('div');
      languageName.setAttribute('class', 'country-lang-data');
      languageName.textContent = language[0];
  
      const languageBar = document.createElement('div');
      languageBar.setAttribute('class', 'chartBar')
      const percentage = (language[1] / sortedLanguages[0][1]) * 100;
      languageBar.style.width = percentage + '%';
  
      const languageCount = document.createElement('div');
      languageCount.setAttribute('class', 'numberData');
      languageCount.textContent = language[1];
  
      leftArea.appendChild(languageName);
      midArea.appendChild(languageBar);
      rightArea.appendChild(languageCount);
    });
};

const showMostUsedCurrencies = () => {
    
    const dataList = createDataList();
    const currencyMap = new Map();

    [...countriesWithMatchingInput].forEach(country => {
        if (currencyMap.has(country.currency)) {
        currencyMap.set(country.currency, currencyMap.get(country.currency) + 1);
        } else {
        currencyMap.set(country.currency, 1);
        };
    });

    const {leftArea, midArea, rightArea} = createDataArea(dataList);
    const sortedCurrencies = [...currencyMap.entries()].sort( (a, b) => b[1] - a[1] );

    sortedCurrencies.slice(0, 10).forEach( currency => {
        const currencyName = document.createElement('div'); 
        currencyName.setAttribute('class', 'country-lang-data');
        currencyName.textContent = currency[0];
    
        const currencyBar = document.createElement('div');
        currencyBar.setAttribute('class', 'chartBar')
        const percentage = (currency[1] / sortedCurrencies[0][1]) * 100;
        currencyBar.style.width = percentage + '%';
    
        const currencyCount = document.createElement('div');
        currencyCount.setAttribute('class', 'numberData');
        currencyCount.textContent = currency[1];
    
        leftArea.appendChild(currencyName);
        midArea.appendChild(currencyBar);
        rightArea.appendChild(currencyCount);
    });
};

// Events

nameBtn.addEventListener('click', () => {
    // activate the button
    setActiveButton('nameBtn')

    // change the button background image
    if ( nameBtn.classList.contains('arrow-down') ) {
        updateCurrentSortOption('arrow-up');
        nameBtn.classList.add('arrow-up')
    } else {
        updateCurrentSortOption('arrow-down');
        nameBtn.classList.add('arrow-down')
    }
    showSortedAvailableCountryBoxes('name')
});

capitalBtn.addEventListener('click', () => {
    // activate the button
    setActiveButton('capitalBtn');

    // change the button background image
    if ( capitalBtn.classList.contains('arrow-down') ) {
        updateCurrentSortOption('arrow-up');
        capitalBtn.classList.add('arrow-up')
    } else {
        updateCurrentSortOption('arrow-down');
        capitalBtn.classList.add('arrow-down')
    }
    showSortedAvailableCountryBoxes('capital')
});

populationBtn.addEventListener('click', () => {
    // activate the button
    setActiveButton('populationBtn');

    // change the button background image
    if ( populationBtn.classList.contains('arrow-down') ) {
        updateCurrentSortOption('arrow-up');
        populationBtn.classList.add('arrow-up')
    } else {
        updateCurrentSortOption('arrow-down');
        populationBtn.classList.add('arrow-down')
    }
    showSortedAvailableCountryBoxes('population')
});

currencyBtn.addEventListener('click', () => {
    // activate the button
    setActiveButton('currencyBtn');

    // change the button background image
    if ( currencyBtn.classList.contains('arrow-down') ) {
        updateCurrentSortOption('arrow-up');
        currencyBtn.classList.add('arrow-up')
    } else {
        updateCurrentSortOption('arrow-down');
        currencyBtn.classList.add('arrow-down')
    }
    showSortedAvailableCountryBoxes('currency')
});

chartbarBtn.addEventListener('click', () => {
    // activate the button
    setActiveButton('chartbarBtn');
    chartbarContainer.style.display = 'flex'
    document.body.scrollTop = chartbarContainer.offsetTop; // For Safari
    document.documentElement.scrollTop = chartbarContainer.offsetTop; // For Chrome, Firefox, IE and Opera
});

searchCountryInput.addEventListener('click', () => {
    pullUpSearchPanel();
    activateResultArea();
    createFooterArea();
    showSortedAvailableCountryBoxes('name');
});

searchCountryInput.addEventListener('input', (input) => {
    filterCountriesByInput(input.target.value)
    createAlertBox();
});

populationChartbarBtn.addEventListener('click', populatePopulationData);
langsChartbarBtn.addEventListener('click', showMostSpokenLanguages);
currencyChartbarBtn.addEventListener('click', showMostUsedCurrencies);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = searchCountryInput.offsetTop; // For Safari
    document.documentElement.scrollTop = searchCountryInput.offsetTop; // For Chrome, Firefox, IE and Opera
}

function showSortedAvailableCountryBoxes (criterion) {
    if (boxContainer.childElementCount === 0 && criterion === 'name') {
        if ( currentSortOption === 'arrow-up' ) {
            const reversedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            });
            reversedCountryData.map(country => {
                createCountryBox(country);
            });
        } else if ( currentSortOption === 'arrow-down' ) {
            const sortedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            sortedCountryData.map(country => {
                createCountryBox(country);
            });
        }
    }
    if (boxContainer.childElementCount === 0 && criterion === 'capital') {
        if ( currentSortOption === 'arrow-up' ) {
            const reversedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.capital > b.capital) return -1;
                if (a.capital < b.capital) return 1;
                return 0;
            });
            reversedCountryData.map(country => {
                createCountryBox(country);
            });
        } else if ( currentSortOption === 'arrow-down' ) {
            const sortedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.capital < b.capital) return -1;
                if (a.capital > b.capital) return 1;
                return 0;
            });
            sortedCountryData.map(country => {
                createCountryBox(country);
            });
        }
    }
    if (boxContainer.childElementCount === 0 && criterion === 'population') {
        if ( currentSortOption === 'arrow-up' ) {
            const reversedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.population > b.population) return -1;
                if (a.population < b.population) return 1;
                return 0;
            });
            reversedCountryData.map(country => {
                createCountryBox(country);
            });
        } else if ( currentSortOption === 'arrow-down' ) {
            const sortedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.population < b.population) return -1;
                if (a.population > b.population) return 1;
                return 0;
            });
            sortedCountryData.map(country => {
                createCountryBox(country);
            });
        }
    }
    if (boxContainer.childElementCount === 0 && criterion === 'currency') {
        if ( currentSortOption === 'arrow-up' ) {
            const reversedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.currency > b.currency) return -1;
                if (a.currency < b.currency) return 1;
                return 0;
            });
            reversedCountryData.map(country => {
                createCountryBox(country);
            });
        } else if ( currentSortOption === 'arrow-down' ) {
            const sortedCountryData = [...countriesWithMatchingInput].sort((a, b) => {
                if (a.currency < b.currency) return -1;
                if (a.currency > b.currency) return 1;
                return 0;
            });
            sortedCountryData.map(country => {
                createCountryBox(country);
            });
        }
    }
}

function filterCountriesByInput (input) {
    countriesWithMatchingInput.clear();
    boxContainer.innerHTML = '';
    const noMatchingCountryFound = 248;
    for (let i = 0; i < dataForAllCountries.length; i++) {
        const country = dataForAllCountries[i];
        if ( country.name.includes(input) || country.capital.includes(input) || country.languages.includes(input) ) {
            countriesWithMatchingInput.add(country)
                writeSearchingInfo()
                createCountryBox(country)
                createDataList()
        }
    }
    function writeSearchingInfo () {
        if (countriesWithMatchingInput.size === noMatchingCountryFound) {
            searchingInfo.innerHTML = '';
        } else {
            searchingInfo.innerHTML = `<span id='count'>${countriesWithMatchingInput.size}</span> countries satisfied the search input.`
        }
    }
}