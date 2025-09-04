function toggleRow(el) {
    const row = el.parentElement;
    row.classList.toggle('expanded');
}

function sortTable(colIndex) {
    const table = document.getElementById("tableBody");
    const rows = Array.from(table.querySelectorAll("tr")).filter(r => !r.classList.contains('expandable-content'));
    const expandedRows = Array.from(table.querySelectorAll("tr.expandable-content"));

    const asc = table.getAttribute("data-sort") !== "asc";
    table.setAttribute("data-sort", asc ? "asc" : "desc");

    rows.sort((a, b) => {
        let valA = a.cells[colIndex].innerText;
        let valB = b.cells[colIndex].innerText;

        if (!isNaN(valA) && !isNaN(valB)) {
            return asc ? valA - valB : valB - valA;
        }
        return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

    // Clear table
    table.innerHTML = "";

    // Append sorted rows with their expandable rows
    rows.forEach(r => {
        table.appendChild(r);
        const idx = Array.from(r.parentElement.children).indexOf(r);
        if (expandedRows[idx]) {
            table.appendChild(expandedRows[idx]);
        }
    });
}