// INPUT SECTION
const FIRST_NAME_INPUT = document.getElementById('first-name-input')
const LAST_NAME_INPUT = document.getElementById('last-name-input')
const COUNTRY_INPUT = document.getElementById('country-input')
const SCORE_INPUT = document.getElementById('score-input')
const ADD_BTN = document.getElementById('add-btn')

const WARNING_SECTION = document.getElementById('warning-section')
const LIST_SECTION = document.getElementById('list-section')

ADD_BTN.addEventListener(('click'), () => {
    const FIRST_NAME = FIRST_NAME_INPUT.value;
    const LAST_NAME = LAST_NAME_INPUT.value;
    const COUNTRY = COUNTRY_INPUT.value;
    const SCORE = SCORE_INPUT.value;
    if (SCORE < 0 || SCORE > 100) {
        WARNING_SECTION.textContent = 'You can enter a score between zero and one hundred.'
        WARNING_SECTION.style.display = 'block';
        return false;
    } else if (isFirstIndexCharacter(FIRST_NAME) != false
        && LAST_NAME.length != 0 
        && isFirstIndexCharacter(COUNTRY) != false
        && SCORE.length != 0) {
        WARNING_SECTION.style.display = 'none';
        createListOutput(FIRST_NAME, LAST_NAME, COUNTRY, SCORE)
        sortListItems()
    } else {
        WARNING_SECTION.style.display = 'block';
    }
});

// Helper Functions

function createListOutput (firstName, lastName, country, score) {
    score = Number(score);
    const NEW_LINE = document.createElement('ol')
    NEW_LINE.className = 'new-line'
        const NAME_DATE_AREA = document.createElement('ul')
        NAME_DATE_AREA.className = 'name-date-area'
        NEW_LINE.appendChild(NAME_DATE_AREA)
            const NAME = document.createElement('li')
            NAME.className = 'name'
            NAME.textContent = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
            NAME_DATE_AREA.appendChild(NAME)
            const DATE = document.createElement('li')
            DATE.className = 'date'
            DATE.textContent = getCurrentDate()
            NAME_DATE_AREA.appendChild(DATE)
        const COUNTRY = document.createElement('li')
        COUNTRY.className = 'country'
        COUNTRY.textContent = country.toUpperCase()
        NEW_LINE.appendChild(COUNTRY)
        const SCORE = document.createElement('li')
        SCORE.className = 'score'
        SCORE.textContent = Number(score)
        NEW_LINE.appendChild(SCORE)
        const OPTIONS_AREA = document.createElement('ul')
        OPTIONS_AREA.className = 'options'
        NEW_LINE.appendChild(OPTIONS_AREA)
            const DELETE = document.createElement('li')
            DELETE.className = 'delete'
            OPTIONS_AREA.appendChild(DELETE)
            DELETE.addEventListener('click', () => NEW_LINE.remove())
                const DELETE_ICON = document.createElement('img')
                DELETE_ICON.src = './images/delete-icon.svg'
                DELETE_ICON.alt = 'delete'
                DELETE.appendChild(DELETE_ICON)
            const INCREASE = document.createElement('li')
            INCREASE.className = 'increase'
            INCREASE.textContent = '+5'
            OPTIONS_AREA.appendChild(INCREASE)
            INCREASE.addEventListener('click', () =>  {
                if (score > 95) {
                    score = 100;
                } else {
                    score += 5;
                }
                SCORE.textContent = score
                sortListItems()
            } );
            const DECREASE = document.createElement('li')
            DECREASE.textContent = '-5'
            DECREASE.className = 'decrease'
            OPTIONS_AREA.appendChild(DECREASE)
            DECREASE.addEventListener('click', () => {
                if (score < 5) {
                    score = 0;
                } else {
                    score -= 5;
                }
                SCORE.textContent = score
                sortListItems()
            } );
    LIST_SECTION.appendChild(NEW_LINE)
    return NEW_LINE
}

function getCurrentDate () {
    const date = new Date();
    let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes()

    if (day < 10) {
        day = '0' + day;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ]
      const CURRENT_TIME = `${months[month]} ${day}, ${year} ${hours}:${minutes}`
      return CURRENT_TIME;
}

function sortListItems () {
    const LIST_ITEMS = document.querySelectorAll('.new-line')
    const LI_ARRAY = [];
    LIST_ITEMS.forEach(li => LI_ARRAY.push(li));
    const SORTED_LIST_ITEMS = LI_ARRAY.map(li => {return li}).sort((a,b)=> {
        const SCORE_INDEX = 2
        const NUM_A = parseInt(a.children[SCORE_INDEX].textContent),
              NUM_B = parseInt(b.children[SCORE_INDEX].textContent)
        if (NUM_A > NUM_B) return -1
        if (NUM_A < NUM_B) return 1
        return 0
    })
    SORTED_LIST_ITEMS.forEach(li => {
        LIST_SECTION.appendChild(li)
    })
}
// -> The first character will not be a space and the text will not contain numbers.
function isFirstIndexCharacter(str){
    return /^(?![\d\s]).*$/.test(str); 
}