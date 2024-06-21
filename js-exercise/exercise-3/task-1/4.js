function createTable(numRows, numCols) {
    let table = document.getElementById("myTable");

    // Clear existing table rows (if any)
    table.innerHTML = '';

    // Create table headers (optional)
    let headerRow = table.createTHead().insertRow();
    for (let j = 0; j < numCols; j++) {
        let headerCell = headerRow.insertCell();
        headerCell.textContent = 'Header ' + (j + 1);
    }

    // Create table rows and cells
    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            let cell = row.insertCell();
            cell.textContent = 'Row ' + (i + 1) + ', Col ' + (j + 1);
        }
    }
}


createTable(10, 5);