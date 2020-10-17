const gridContainer = document.querySelector("#gridContainer");
let content;

let gridGeneration = () => {
    for (i = 0; i<16; i++){
        content = document.createElement('div');
        content.classList.add("node");
        content.textContent = "test";
        gridContainer.appendChild(content);
    }
}

gridGeneration();

content.onmouseover = function () {
    content.classList.add("fill")
};