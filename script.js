const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class 'price'
    const prices = document.querySelectorAll(".price");
    
    // Calculate total sum
    let total = Array.from(prices)
                     .map(price => parseFloat(price.textContent))
                     .reduce((sum, value) => sum + value, 0);

    // Check if a total row already exists, remove if present
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total price
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";  // Assign an ID for future reference

    // Create a cell that spans across both columns
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append the cell to the row, and row to the table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
