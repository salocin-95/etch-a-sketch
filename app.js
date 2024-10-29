const divContainer = document.querySelector(".grid-container");
const clearBtn = document.getElementById("clear");
const gridSize = document.getElementById("grid-size");
const gridSizeDisplay = document.querySelector(".grid-size-display");

const gridSizeValue = () => {
    console.log(gridSize.value);
    gridSizeDisplay.innerHTML = `<span>${gridSize.value}x${gridSize.value}</span>`
}

const createGridElement = () => {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    divContainer.appendChild(gridElement);
}

const clearSketch = () => {
    document.querySelectorAll(".grid-element-background").forEach((element) => element.classList.remove("grid-element-background"));
}

// For every gridElement it should have a class that matches with an X and Y number so when the mouse is over the it changes the color according to its coordinates

/*const createGrid = () => {
    for (i = 1; i <= 16; i++) {  
        for (j = 1; j <= 16;j++) {
            createGridElement();
        };
    };
};*/


console.log("imlinked");
console.log(divContainer);
//createGrid();//

const gridElement = document.querySelector(".grid-element");

console.log(gridElement);
console.log(document.querySelector(".grid-element"))

// If .grid-element is added to the DOM dynamically after the initial page load, the click event listener won’t attach. You can use event delegation for elements that are added later:

// Should have and embedded templates that changes the color of the grid selected X-Y coordinate 
document.addEventListener("mouseover", (event) => {
    if (event.target.matches(".grid-element")) {
        // event.target matches the div .grid-element mouseover
        event.target.classList.add("grid-element-background");
        // console.log("you clicked bro");
    }
});

//clearBtn.addEventListener("click", clearSketch);

// Targets mouse poisiton
// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
