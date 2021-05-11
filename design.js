var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");

color.addEventListener("click", function () { });
sizePicker.addEventListener("submit", gridLayout);

function gridLayout(event) {
    event.preventDefault();
    makeGrid();

}


function makeGrid() {
    var height = document.getElementById("inputHeight");
    var width = document.getElementById("inputWidth");
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    for (var r = 0; r < height.value; r++) {
        var row = canvas.insertRow(r);
        for (var c = 0; c < width.value; c++) {
            var cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
    
}

makeGrid(25, 25);

function fillSquare() {
    this.setAttribute("style", `background-color: ${color.value}`);
}


