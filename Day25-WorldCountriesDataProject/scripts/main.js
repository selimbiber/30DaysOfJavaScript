// import {dataForAllCountries} from "./data.js";

const container = document.getElementById('container');

const numberOfCountriesInfo = document.querySelector('#number-of-countries-info');

const populationBtn = document.querySelector('#population-btn');
const langsBtn = document.querySelector('#languages-btn');

const most10 = document.querySelector('#most-10');

const updateNumberOfCountriesInfo = () => {
  numberOfCountriesInfo.textContent = `Currently, we have ${dataForAllCountries.length} countries.`;
}; 

const createDataSection = () => {
  const existingDataSection = document.getElementById('data-section');
  if (existingDataSection) {
    container.removeChild(existingDataSection);
  }

  const dataSection = document.createElement('section');
  dataSection.setAttribute('id', 'data-section');
  container.appendChild(dataSection);

  return dataSection;
};

const createDataArea = (dataSection) => {
  const leftArea = document.createElement('div')
  leftArea.setAttribute('id', 'left-area');
  const midArea = document.createElement('div')
  midArea.setAttribute('id', 'mid-area');
  const rightArea = document.createElement('div')
  rightArea.setAttribute('id', 'right-area');

  dataSection.appendChild(leftArea)
  dataSection.appendChild(midArea)
  dataSection.appendChild(rightArea)

  return {
    leftArea,
    midArea,
    rightArea
  };
};

const populatePopulationData = () => {

  most10.textContent = '10 Most populated countries in the World.'
  const dataSection = createDataSection();
  const {leftArea, midArea, rightArea} = createDataArea(dataSection);

  let sortedPopulations = [...dataForAllCountries].sort( (a, b) => b.population - a.population)

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

populationBtn.addEventListener('click', populatePopulationData);

const showMostSpokenLanguages = () => {

  most10.textContent = '10 Most spoken languages in the World.'
  const dataSection = createDataSection();
  const languageMap = new Map();

  dataForAllCountries.forEach(country => {
    country.languages.forEach(language => {
      if (languageMap.has(language)) {
        languageMap.set(language, languageMap.get(language) + 1);
      } else {
        languageMap.set(language, 1);
      }
    });
  });

  const { leftArea, midArea, rightArea } = createDataArea(dataSection);
  const sortedLanguages = [...languageMap.entries()].sort((a, b) => b[1] - a[1]);

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

langsBtn.addEventListener('click', showMostSpokenLanguages);

updateNumberOfCountriesInfo();