var canvas = document.getElementById('pixelCanvas');
var color = document.getElementById('colorPicker');
var sizePicker = document.getElementById('sizePicker');

// add listener to select color
color.addEventListener('click', function () { });
// add listener to select the grid size
sizePicker.addEventListener('submit', gridLayout);

// reset and prevent page refresh on submit
function gridLayout(event) {
    event.preventDefault();
    makeGrid();

}

// The grid structure
function makeGrid() {
    var height = document.getElementById('inputHeight');
    var width = document.getElementById('inputWidth');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    // Creates rows and cells
    for (var r = 0; r < height.value; r++) {
        var row = canvas.insertRow(r);
        for (var c = 0; c < width.value; c++) {
            var cell = row.insertCell(c);
            // add listener to fill the selected cell
            cell.addEventListener('click', fillSquare);
        }
    }
    
}
// default layout grid
makeGrid(25, 25);

// fills the background with selected color
function fillSquare() {
    this.setAttribute('style', `background-color: ${color.value}`);
}


