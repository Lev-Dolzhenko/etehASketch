/*-----vars-----*/

const mainBlock = document.querySelector('.app-block');
const choseSize = document.querySelector('.choseSize');
const choseColor = document.querySelector('.choseColor');

const buttonClear = document.querySelector('.button-clear');
const colorBlocks = [];



const table = document.createElement('table');
table.classList.add('map')

let currentTable = buildMap(16);
mainBlock.appendChild(currentTable);

/*-----/vars-----*/



function buildMap(size) {
    for (let i = 0; i < Math.sqrt(size); i++) {
        let tableRow = document.createElement('tr');
        for (let j = 0; j < Math.sqrt(size); j++) {
            let tableData = document.createElement('td');
            colorBlocks.push(tableData)
            tableRow.appendChild(tableData);

        }
        table.appendChild(tableRow);
    }
    return table
}

choseSize.addEventListener('change', function() {
    if (currentTable) {
        currentTable.innerHTML = '';
    }
    currentTable = buildMap(choseSize.value);
    mainBlock.appendChild(currentTable);
});

choseColor.addEventListener('change', function() {
    drawBlocks(choseColor.value);
});


function drawBlocks(color) {
    for (let colorBlock of colorBlocks) {
        colorBlock.addEventListener('click', function () {
            colorBlock.classList.add(color);
        })
    }
}

buttonClear.addEventListener('click', function () {
    for (let colorBlock of colorBlocks) {
        colorBlock.className = '';
    }
})


