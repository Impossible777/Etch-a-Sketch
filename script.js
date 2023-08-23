
let gridSize = 16
let totalGrid = gridSize * gridSize
let boxHeight = (500 / gridSize);
let boxWidth =  (500/gridSize);
const container = document.querySelector('#container');
createGrid(totalGrid, boxHeight, boxWidth)

const hovers = document.querySelectorAll('.boxes')

hovers.forEach(hover => {
    hover.addEventListener('mouseover', transitionYellow)
})

hovers.forEach(hover =>{
    hover.addEventListener('click',removeYellow)
})

function transitionYellow () {
    if (mouseIsDown) {
    this.classList.add('hovered')
    }
}

function removeYellow () {
    this.classList.remove('hovered')
}

var mouseIsDown = false;
document.addEventListener('mousedown', function(){mouseIsDown = true});
document.addEventListener('mouseup', function(){mouseIsDown = false});

const changeGrid = document.getElementById("button")

changeGrid.addEventListener("click", function(){
    let userInput = prompt("How many squares would you like per side? 100 is the max.")
    if (userInput > 100) {
        userInput = 100;
    }
    let gridSize = parseInt(userInput);
    removeAllDivs();
    let totalGrid = gridSize * gridSize
    let boxHeight = (500 / gridSize);
    let boxWidth =  (500/gridSize);
    const container = document.querySelector('#container');
    createGrid(totalGrid, boxHeight, boxWidth);

            
})

function removeAllDivs() {
    container.innerHTML = '';
}

function createGrid(size, boxHeight, boxWidth) {
    for (let i = 0; i < size; i++) {
        const content = document.createElement('div');
        content.classList.add('boxes')
        container.appendChild(content);
        content.style.height = boxHeight + 'px';
        content.style.width = boxWidth + 'px'
        content.addEventListener('mouseover', transitionYellow);
        content.addEventListener('click', removeYellow);
    }
}
