const divContainer = document.querySelector(".grid-container");
const clearBtn = document.getElementById("clear");
const gridSize = document.getElementById("grid-size");
const gridSizeDisplay = document.querySelector(".grid-size-display");

const clearSketch = () => {
    document.querySelectorAll(".grid-element-background").forEach((element) => element.classList.remove("grid-element-background"));
}

// For every gridElement it should have a class that matches with an X and Y number so when the mouse is over the it changes the color according to its coordinates
const createGrid = () => {
    for (i = 1; i <= parseInt(gridSize.value); i++) {  
        for (j = 1; j <= parseInt(gridSize.value);j++) {
            createGridElement();
        };
    };
}

const createGridElement = () => {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    divContainer.appendChild(gridElement);
    gridElement.style.height = `${(660/(parseInt(gridSize.value)).toFixed(2))}px`
    gridElement.style.width = `${(660/(parseInt(gridSize.value)).toFixed(2))}px`
}

    /*gridElement.style.height = `${gridSize.value}px`
    gridElement.style.width = `${gridSize.value}px`*/

const gridSizeValue = () => {
    console.log(gridSize.value);
    gridSizeDisplay.innerHTML = `<span>${gridSize.value}x${gridSize.value}</span>`
    console.log(660/(parseInt(gridSize.value)).toFixed(2))
}

createGrid();

const gridElement = document.querySelector(".grid-element");


// If .grid-element is added to the DOM dynamically after the initial page load, the click event listener won’t attach. You can use event delegation for elements that are added later:

// Should have and embedded templates that changes the color of the grid selected X-Y coordinate 
document.addEventListener("mouseover", (event) => {
    if (event.target.matches(".grid-element")) {
        // event.target matches the div .grid-element mouseover
        event.target.classList.add("grid-element-background");
        // console.log("you clicked bro");
    }
});

clearBtn.addEventListener("click", clearSketch);

// Targets mouse poisition
// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
