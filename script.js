function addRow(){
    let table = document.getElementById("grid")
    let columns = table.rows[0].cells.length
    let row = table.insertRow()
    for(let i = 0; i < columns; i++){
        let cell = row.insertCell()
        cell.innerHTML = ""
    }
}

function addColumn(){
    let table = document.getElementById("grid")
    let rows = table.rows.length
    //let row = table.insertRow()
    for(let i = 0; i< rows; i++){
        let row = table.rows[i]
        let cell = row.insertCell()
        cell.innerHTML = ""
    }
}




