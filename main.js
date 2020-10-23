const gridContainer = document.querySelector("#gridContainer");
const resizeButton = document.querySelector("#resize");
const gridSizeInput = document.querySelector("#gridSizeInput");
let gridLength = 16;
let gridLengthSquared = 0;
let squareLength = 0;
//testing with 32 as input number. Will change to take the number in the input box. 
let inputNumber = 32;
//let resizePrompt = prompt("What size would you like the grid to be?")

let calculateValues = () => {
    gridLengthSquared = gridLength * gridLength;
    squareLength = 800/gridLength;
}

let gridGeneration = () => {
    calculateValues();
    for (i = 0; i < gridLengthSquared; i++){
        let content = document.createElement('div');
        content.classList.add("node");
        content.style.width = `${squareLength}px`;
        content.style.height = `${squareLength}px`;
        gridContainer.appendChild(content);
        content.onmouseover = function () {
            content.classList.add("fill");
    };
    }
}

let removeGrid = () => {
    for(let i = 0; i <= gridLengthSquared -1; i++){

        gridContainer.removeChild(gridContainer.childNodes[0]);    

    }
}

let resize = () => {
    gridLength = prompt("What size would you like the grid to be?");
    if (gridLength >= 100) {
        gridLength = prompt ("Please pick a number less than 100");
    }  
    removeGrid();
    gridGeneration();
}

gridGeneration();
resizeButton.addEventListener("click", resize);