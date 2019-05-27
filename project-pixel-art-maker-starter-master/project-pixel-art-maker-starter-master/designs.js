// Select color input
// Select size input
const color = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const width = document.getElementById('inputWidth').value;
const height = document.getElementById('inputHeight').value;

makeGrid(height, width);

sizePicker.addEventListener('click', (event) => {
    event.preventDefault();
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    table.firstElementChild.remove();
    makeGrid(height, width);
});

function makeGrid(height, width) {

// Your code goes here!
for (var a = 0; a < height; a++) {
    const row = table.insertRow(a);
    for (var b = 0; b < width; b++) {
        const cell = row.insertCell(b);
        cell.addEventListener('click', (event) => {
            cell.style.backgroundColor = color.value;
        });
    }
}
}
