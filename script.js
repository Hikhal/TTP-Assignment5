let table = document.getElementById("grid")

function addRow() {
    let columns = table.rows[0].cells.length
    let row = table.insertRow()
    for (let i = 0; i < columns; i++) {
        let cell = row.insertCell()
        cell.innerHTML = ""
    }
}

function addColumn() {
    let rows = table.rows.length
    for (let i = 0; i < rows; i++) {
        let row = table.rows[i]
        let cell = row.insertCell()
        cell.innerHTML = ""
    }
}


function removeRow() {
    let rows = table.rows.length
    if (rows > 1) {
        table.deleteRow(rows - 1)
    }
}

function selectColor() {
    let dropdown = document.getElementById("dropdown");
    // Public variable
    newColor = dropdown.value;
}