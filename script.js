const container = document.querySelector('#container');
for (let i = 0; i <16; i++) {
    const minorContent = document.createElement('div')
    const minorContentId = 'minorContainer' + i;
    minorContent.setAttribute('id', minorContentId)
    container.appendChild(minorContent);
        for (let j=0; j<16; j++) {
            const content = document.createElement('div');
            content.classList.add('boxes')
            minorContent.appendChild(content);
        }
}

const hovers = document.querySelectorAll('.boxes')

hovers.forEach(hover => {
    hover.addEventListener('mouseover', transitionYellow)
})

hovers.forEach(hover =>{
    hover.addEventListener('click',removeYellow)
})

function transitionYellow () {
    this.classList.add('hovered')
}

function removeYellow () {
    this.classList.remove('hovered')
}