let tableContainer = document.getElementById("my-table")

let studentsTable = document.createElement("table")
tableContainer.append(studentsTable)

// let thead = document.createElement("thead")
// studentsTable.append(thead)
let thead = studentsTable.createTHead();

// let tableRow = document.createElement("tr")
// thead.append(tableRow)
let tableRow = thead.insertRow();

// let th1 = document.createElement("th")
// th1.innerText = "Name";
// tableRow.append(th1)
// let th2 = document.createElement("th")
// th2.innerText = "Age";
// tableRow.append(th2)
// let th3 = document.createElement("th")
// tableRow.append(th3)
// th3.innerText = "City";

let theadingArray = ["id", "Name", "City", "email"]
for (let t of theadingArray) {
    let th = document.createElement("th")
    th.innerText = t;
    tableRow.append(th)

}
let tbody = studentsTable.createTBody();
function addRow(studentsDetails) {
    let newRow = tbody.insertRow()
    for (let t of studentsDetails) {
        let newCell = newRow.insertCell();
        newCell.innerText = t;
    }
}


addRow([1, "Teena", "Mumbai", "teena@123"])
addRow([2, "Meena", "jaipur", "meena@123"])
addRow([3, "Reena", "delhi", "reena@123"])
addRow([4, "Heena", "up", "heena@123"])