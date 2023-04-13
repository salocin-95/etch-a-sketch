const grid = document.querySelector('.grid');
const gridElement = document.querySelector('.grid-element');
const colorPicker = document.querySelector('.color-picker');
const brush = document.querySelector('.brush-mode');
const rainbow = document.querySelector('.rainbow-mode');
const eraser = document.querySelector('.eraser-mode');
const clear = document.querySelector('.clear');
const sizeValue = document.querySelector('.size-value')

// Get the slider element
const slider = document.getElementById("sizeSlider");

// Listen for the input event on the slider
slider.addEventListener("input", function () {
    // Get the value of the slider
    const value = slider.value;
    sizeValue.textContent(`${value}x${value}`)

    // Do something with the value (e.g. update a display)
    console.log("Slider value: " + value);
});

//Add to create grid
/*grid-template-columns: repeat(62, 1fr);
grid-template-rows: repeat(62, 1fr);*/

const div = document.createElement('div');
div.classList.add('grid-element')
grid.appendChild(div)