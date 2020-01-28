/* DOM setup */
const gridContainer = document.getElementById('container');
gridContainer.setAttribute('style',
    'display: block; width: 960px; height: 960px; margin: 15px auto;');

const resetbtn = document.createElement('button');
const sizebtn = document.createElement('button');
gridContainer.appendChild(resetbtn);
gridContainer.appendChild(sizebtn);

resetbtn.classList.add('buttons');
resetbtn.id = 'reset';
resetbtn.innerHTML = 'Reset';

sizebtn.classList.add('buttons');
sizebtn.id = 'size';
sizebtn.innerHTML = 'Size';

const button = document.querySelectorAll('.buttons');
button.forEach(function (btn) {
    btn.setAttribute('style', 
    'height: 50px; width: 200px; margin-right: 20px;');
});


/* Create a grid of user defined size */
function GridGenerator(size) {
    for (var row = 0; row < size; row++) {
        const grid_row = document.createElement('div');
        grid_row.classList.add('grid-row');
        gridContainer.appendChild(grid_row);
        grid_row.style.marginTop = '10px';

        for (var i = 0; i < size; i++) {
            const row_divs = document.createElement('div');
            row_divs.classList.add('box');
            row_divs.style.float = 'left';
            row_divs.style.height = `${960 / size}px`;
            row_divs.style.width = `${960 / size}px`;
            row_divs.style.border = '1px solid black';
            row_divs.style.boxSizing = 'border-box';
            grid_row.appendChild(row_divs);
        }
    }
}
GridGenerator(10);

/* set boxes to black that have been mousedover */
const boxes = document.querySelectorAll('.box')
boxes.forEach(function (box) {
    box.addEventListener('mouseover', function () {
        box.style.backgroundColor = 'black';
    });
});
        
/* set desired size of grid for etching */
const size = document.querySelector('#size');
size.addEventListener('click', function () {
    var size = prompt('What size would you like?', 10);
    const grid_row = document.querySelectorAll('.grid-row')
    grid_row.forEach(function(box) {
        gridContainer.removeChild(box)
    })
    
    GridGenerator(size);
});

/* reset all squares to white */
const reset = document.querySelector('#reset');
reset.addEventListener('click', function () {
    boxes.forEach(function (box) {
        box.style.backgroundColor = 'white';
    });
});


