const gridContainer = document.querySelector("#gridContainer");

let gridGeneration = () => {
    for (i = 0; i<16; i++){
        let content = document.createElement('div');
        content.classList.add("node");
        content.textContent = "test";
        gridContainer.appendChild(content);
        content.onmouseover = function () {
            content.classList.add("fill");
    };
    }
}

gridGeneration();
