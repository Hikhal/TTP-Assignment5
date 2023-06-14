function addRow(){
    let table = document.getElementById("grid")
    let columns = table.rows[0].cells.length
    let row = table.insertRow()
    for(let i = 0; i< columns; i++){
        let cell = row.insertCell()
        cell.innerHTML = "row"
    }
}