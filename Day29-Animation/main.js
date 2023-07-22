const animation = document.getElementById('animation')

const paragraph = '30 Days Of JavaScript Challenge 2023 Selim Biber'

setInterval(() => {
    document.body.style.backgroundColor = generateRandomColor()
    animation.innerHTML = ''
    paragraph.toUpperCase().split('').forEach(char => {
        const spanElement = document.createElement('span')
        spanElement.innerText = char;
        spanElement.style.color = generateRandomColor();
        animation.appendChild(spanElement)
    });
}, 1000);

setInterval(() => {
    animation.style.fontSize = `${Math.floor(Math.random() * 7)+1}rem`
}, 1000);


function generateRandomColor() {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return `rgb(${randomR}, ${randomG}, ${randomB})`
}