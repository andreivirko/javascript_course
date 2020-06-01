import transactionHistory from "./transactionHistory.js";
console.log(transactionHistory);

const table = document.querySelector(".transection-table");


function createTableRowMarkUp({type, amount, date, business}) {
    const row = `
    <tr>
        <td>${type}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
    </tr>`;
    
    return row;
};

function createTableRows(transections) {
    // return transections.map((transection) => createTableRowMarkUp(transection).join(""));
    return transections.reduce((markUp, transection) => (markUp += createTableRowMarkUp()), "");
};

const markUp = createTableRows(transactionHistory);
table.insertAdjacentHTML("beforeend", markUp);