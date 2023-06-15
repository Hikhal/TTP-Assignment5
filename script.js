let table = document.getElementById("grid");

// The 'addRow' method adds a new row to a table that has already been defined. With 'table.rows[0].cells.length', it initially returns the number of cells (which stand for columns) in the table's first row.
// After that, it uses table.insertRow() to add a new row to the end of the table and stores a reference to it in the 'row' variable.
// The final step involves running a loop equal to the number of columns, inserting a new cell into the new row with 'row.insertCell()' for each iteration, and setting the innerHTML of that new cell to an empty string to show that the new cells are initially empty.

function addRow() {
  let columns = table.rows[0].cells.length;
  let row = table.insertRow();
  for (let i = 0; i < columns; i++) {
    let cell = row.insertCell();
    cell.innerHTML = "";
  }
}

// The 'addColumn' method is used to add a new column to a table that already has one. 'table.rows.length' is used to count the number of rows in the table, and the result is saved in the 'rows' variable.
// After that, the method starts a loop that iterates through each row of the table. It uses 'table.rows[i]' to get the current row for each iteration and stores the result in the 'row' variable. 
// Then, using the function "row.insertCell()," it adds a new cell at the end of the current row, storing a reference to it in the "cell" variable. //Finally, the function indicates that the new cells are initially empty by setting the innerHTML of the new cell to an empty string.

function addColumn() {
  let rows = table.rows.length;
  for (let i = 0; i < rows; i++) {
    let row = table.rows[i];
    let cell = row.insertCell();
    cell.innerHTML = "";
  }
}

// Remove last row
function removeRow() {
  let rows = table.rows.length;
  // If amount of rows is still higher than one
  if (rows > 1) {
    // Delete one row
    table.deleteRow(rows - 1);
  }
}

// Remove last column
function removeCol() {
  let rows = table.rows.length;
  // As long as theres at least one row
  if (rows > 0) {
    let columns = table.rows[0].cells.length;
    // For each row
    for (let i = 0; i < rows; i++) {
      // Delete last cell in the row
      table.rows[i].deleteCell(columns - 1);
    }
  }
}

// Returns selected color from dropdown
function selectColor() {
  let dropdown = document.getElementById("dropdown");
  newColor = dropdown.value;

  return newColor;
}

// Listens for click on cell
table.addEventListener("click", (event) => {
  let cell = event.target;

  // Sets color of cell to selected dropdown function color
  if (cell.tagName === "TD") {
    cell.style.backgroundColor = selectColor().toLowerCase();
  }
});

// Listens for colorUncolorCells button
let uncolorbtn = document.getElementById("colorUncolorCells");
uncolorbtn.addEventListener("click", () => {
  let cells = table.getElementsByTagName("TD");

  // Go through every cell
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];

    // If the cell doesnt have color then it changes to selected dropdown function color
    if (!cell.style.backgroundColor) {
      cell.style.backgroundColor = selectColor().toLowerCase();
    }
  }
});

// Listens for colorAllCells button
let colorAllbtn = document.getElementById("colorAllCells");
colorAllbtn.addEventListener("click", () => {
  let cells = table.getElementsByTagName("TD");

  // Every cell gets set to color selected from dropdown function
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.style.backgroundColor = selectColor().toLowerCase();
  }
});

// Listens for clearAllCells button
let clearAllbtn = document.getElementById("clearAllCells");
clearAllbtn.addEventListener("click", () => {
  let cells = table.getElementsByTagName("TD");

  // Set default color for every cell
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.style.backgroundColor = "#f2f2f2";
  }
});

let isDragging = false;

// Listens for mouseover 
table.addEventListener("mousedown", (event) => {
  // If its over the table
  if (event.target.tagName === "TD") {
    // It is being dragged, set the color of the selected cell
    isDragging = true;
    event.target.style.backgroundColor = selectColor();
  }
});

table.addEventListener("mouseover", (event) => {
  // If being dragged within target cell, set its color given from the function
  if (isDragging && event.target.tagName === "TD") {
    event.target.style.backgroundColor = selectColor();
  }
});

table.addEventListener("mouseup", () => {
  // No longer being dragged so set it to false
  isDragging = false;
});

// To stop coloring cells when the mouse is released outside of a cell
document.addEventListener("mouseup", () => {
  isDragging = false;
});
