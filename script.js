let table = document.getElementById("grid");

function addRow() {
  let columns = table.rows[0].cells.length;
  let row = table.insertRow();
  for (let i = 0; i < columns; i++) {
    let cell = row.insertCell();
    cell.innerHTML = "";
  }
}

function addColumn() {
  let rows = table.rows.length;
  for (let i = 0; i < rows; i++) {
    let row = table.rows[i];
    let cell = row.insertCell();
    cell.innerHTML = "";
  }
}

function removeRow() {
  let rows = table.rows.length;
  if (rows > 1) {
    table.deleteRow(rows - 1);
  }
}

function removeCol() {
  let rows = table.rows.length;
  if (rows > 0) {
    let columns = table.rows[0].cells.length;
    for (let i = 0; i < rows; i++) {
      table.rows[i].deleteCell(columns - 1);
    }
  }
}

function selectColor() {
  let dropdown = document.getElementById("dropdown");
  // Public variable
  newColor = dropdown.value;

  return newColor;
}

table.addEventListener("click", (event) => {
  let cell = event.target;

  if (cell.tagName === "TD") {
    cell.style.backgroundColor = selectColor().toLowerCase();
  }
});

let uncolorbtn = document.getElementById("colorUncolorCells");
uncolorbtn.addEventListener("click", () => {
  let cells = table.getElementsByTagName("TD");

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];

    if (!cell.style.backgroundColor) {
      cell.style.backgroundColor = selectColor().toLowerCase();
    }
  }
});

let colorAllbtn = document.getElementById("colorAllCells");
colorAllbtn.addEventListener("click", () => {
  let cells = table.getElementsByTagName("TD");

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.style.backgroundColor = selectColor().toLowerCase();
  }
});

let clearAllbtn = document.getElementById("clearAllCells");
clearAllbtn.addEventListener("click", () => {
  let cells = table.getElementsByTagName("TD");

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.style.backgroundColor = "#f2f2f2";
  }
});
