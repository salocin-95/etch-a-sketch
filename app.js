const divContainer = document.querySelector(".container");


const createGridElement = () => {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element")
    divContainer.appendChild(gridElement);
    gridElement.innerHTML = ""
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

// Need a for loop to iterate through gridELement because it is an array
// Need to change gridElement name because I've already used it

/*const gridElement = document.querySelectorAll(".grid-element")

const changeColor = () => {
    gridElement.classList.add("black");
}

gridElement.addEventListener('click', changeColor());*/