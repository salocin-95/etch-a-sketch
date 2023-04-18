const grid = document.querySelector('#grid');
const gridElement = document.querySelector('.grid-element');
const colorPicker = document.querySelector('.color-picker');
const brush = document.querySelector('.brush-mode');
const rainbow = document.querySelector('.rainbow-mode');
const eraser = document.querySelector('.eraser-mode');
const clear = document.querySelector('.clear');
const sizeBar = document.querySelector('#sizeSlider')

let size = 16;

// Add grid-element to grid
function createGrid() {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-element');
        grid.appendChild(div);
    }
}

// This paints the grid.
grid.addEventListener('mouseover', (event) => {
    if (event.target.matches('.grid-element')) {
        event.target.style.backgroundColor = 'black';
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
});

//Changes size of the grid
sizeBar.addEventListener('input', (event) => {
    size = event.target.value;
    createGrid();
})
