// Batch DOM updates to make the slider perform faster
const divContainer = document.querySelector(".grid-container");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const drawBtn = document.getElementById("draw");
const rainbowBtn = document.getElementById("rainbow");
const shadowBtn = document.getElementById("darken");
const gridSize = document.getElementById("grid-size");
const gridSizeDisplay = document.querySelector(".grid-size-display");
let size = parseInt(gridSize.value)

const clearSketch = () => {
    document.querySelectorAll(".grid-element-background").forEach((element) => element.classList.remove("grid-element-background"));
}

//Changes the size of the grid
const createGrid = () => {
    size = parseInt(gridSize.value)
    divContainer.innerHTML = "";
    for (let i = 1; i <= size; i++) {  
        for (let j = 1; j <= size; j++) {
            createGridElement();
        };
    };
    gridSizeDisplay.innerHTML = `<span>${size}x${size}</span>`
}

// Creates the grid element. Changes should be made to make the DOM update in batches
const createGridElement = () => {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    divContainer.appendChild(gridElement);
    gridElement.style.height = `${(660/(size).toFixed(2))}px`
    gridElement.style.width = `${(660/(size).toFixed(2))}px`
}

// Changes the grid size value display
const gridSizeValue = () => {
    gridSizeDisplay.innerHTML = `<span>${gridSize.value}x${gridSize.value}</span>`
}

// If .grid-element is added to the DOM dynamically after the initial page load, the click event listener won’t attach. You can use event delegation for elements that are added later:

// Should have and embedded templates that changes the color of the grid selected X-Y coordinate 
document.addEventListener("mouseover", (event) => {
    if (event.target.matches(".grid-element")) {
        // event.target matches the div .grid-element mouseover
        event.target.classList.add("grid-element-background");
        // console.log("you clicked bro");
    }
});

eraserBtn.addEventListener("click", () => {
    document.addEventListener("mouseover", (event) => {
        if (event.target.matches(".grid-element")) {
            // event.target matches the div .grid-element mouseover
            event.target.classList.remove("grid-element-background");
            // console.log("you clicked bro");
        }
    });
});

drawBtn.addEventListener("click", () => {
    document.addEventListener("mouseover", (event) => {
        if (event.target.matches(".grid-element")) {
            // event.target matches the div .grid-element mouseover
            event.target.classList.add("grid-element-background");
            // console.log("you clicked bro");
        }
    });
});


clearBtn.addEventListener("click", clearSketch);
createGrid();