// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

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
        }
        numCols++;
    }
}
// Remove a row
function removeR() {
    const table = document.getElementById("grid");
    table.deleteRow(-1);
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}