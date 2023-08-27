
let gridSize = 16
let totalGrid = gridSize * gridSize
let boxHeight = (500 / gridSize);
let boxWidth =  (500/gridSize);
let isToggled = false;
let erase = document.getElementById('delete')
const container = document.querySelector('#container');
createGrid(totalGrid, boxHeight, boxWidth)



erase.addEventListener('click', function() {
    if (isToggled ===false) {
        isToggled = true;
        this.classList.add('delete')
    } else if (isToggled=== true) {
        isToggled = false;
        this.classList.remove('delete')
    }
})


function transitionYellow () {
    if (isToggled ===false) {
        if (mouseIsDown) {
        this.classList.remove('white')
        this.classList.add('hovered')
        }
    } else if (isToggled ===true) {
        if (mouseIsDown) {
            this.classList.remove('hovered')
            this.classList.add('white')
        }
    }
}

function click() {
    if (isToggled ===false) {
        this.classList.remove('white')
        this.classList.add('hovered')
    
    } else if (isToggled ===true) {
        this.classList.remove('hovered')
        this.classList.add('white')

    }
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
        content.addEventListener('click', click);
        
    }
}


