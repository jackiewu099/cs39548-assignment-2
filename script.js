// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// helper: make a cell clickable
function cellClick(cell) {
    cell.onclick = function () {
        if (colorSelected && colorSelected !== "SELECT") {
            this.style.backgroundColor = colorSelected;
        }
    };
}

// Add a row
function addR() {
    const table = document.getElementById("grid");
    const newRow = table.insertRow();

    if (numCols == 0) {
        numCols = 1;
    }

    for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell();
        newCell.textContent = ""; 
        cellClick(newCell);
    }

    numRows++;  
}

// Add a column
function addC() {
    const table = document.getElementById("grid");

    if (numRows === 0) {
        addR();
    } else {
        for (let i = 0; i < table.rows.length; i++) {
            const newCell = table.rows[i].insertCell();
            newCell.textContent = "";
            cellClick(newCell); 
        }
        numCols++;
    }
}
// Remove a row
function removeR() {
    const table = document.getElementById("grid");

    if (table.rows.length === 0) return;
    table.deleteRow(-1);

    numRows--;
    if (numRows < 0) numRows = 0; 
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");

    if (table.rows.length === 0) return;

    const colCount = table.rows[0].cells.length;

    if (colCount === 0) return;

    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(colCount - 1);
    }

    numCols--;
    if (numCols < 0) numCols = 0;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const table = document.getElementById("grid");
    if (!colorSelected || colorSelected === "SELECT") return;

    for (let r = 0; r < table.rows.length; r++) {
        for (let c = 0; c < table.rows[r].cells.length; c++) {
            const cell = table.rows[r].cells[c];
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}