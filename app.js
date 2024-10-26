const divContainer = document.querySelector(".container");


const createGridElement = () => {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element")
    divContainer.appendChild(gridElement);
    gridElement.innerHTML = `IM A DIV ${j} times ${i}`;
}

const createGrid = () => {
    for (i = 1; i <= 16; i++) {  
        for (j = 1; j <= 16;j++) {
            createGridElement();
        }
    }
}


console.log("imlinked")
console.log(divContainer)
createGrid()