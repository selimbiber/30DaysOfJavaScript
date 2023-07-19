const personData = {
    titles: [
        ['./images/open-book-icon.png', 'Instructor'], 
        ['./images/fire-icon.png' ,'Motivational Speaker'], 
        ['./images/laptop-icon.png', 'Programmer'], 
        ['./images/content-icon.png', 'Content Creator'], 
        ['./images/plant-icon.png','Educator'], 
    ],
    techs: ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX', 'NODE', 'PYTHON', 'MONGODB', 'PANDAS', 'NUMPY']
}

const SLIDER_ICON = document.getElementById('slider-icon')
const SLIDER_TITLE = document.getElementById('slider-title')
const TAUGHT_TECHS = document.getElementById('tech')

let indexForSlides = 0,
    indexForTechs = 0;

setInterval(() => {
    const currentSlide = personData.titles[indexForSlides]
    const currentSlideIcon = 0;
    const currentSlideTitle = 1;
    SLIDER_ICON.src = currentSlide[currentSlideIcon]
    SLIDER_TITLE.textContent = currentSlide[currentSlideTitle]
    indexForSlides++;

    if (indexForSlides === personData.titles.length -1) {
        indexForSlides = 0;
    }

    const currentTech = personData.techs[indexForTechs]
    TAUGHT_TECHS.textContent = currentTech
    indexForTechs++;

    if (indexForTechs === personData.titles.length -1) {
        indexForTechs = 0;
    }
},3000)