document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    const numberOfRows = 4; // 1 header row + 3 content rows
    const numberOfCells = 3; // 3 cells per row

    for (let row = 0; row < numberOfRows; row++) {
        for (let cell = 0; cell < numberOfCells; cell++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'cell';
            cellDiv.textContent = row === 0 ? `Header ${cell + 1}` : `Row ${row}`;

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = `Tooltip ${row * numberOfCells + cell + 1}`;
            cellDiv.appendChild(tooltip);

            tableContainer.appendChild(cellDiv);
        }
    }
});