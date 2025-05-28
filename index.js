const sudoku = document.querySelector(".sudoku");
const btnCheck = document.getElementById("check");
let AllRows;
let AllColumns;

function random()
{
    return Math.trunc(Math.random() * 9) + 1;
}

function isColumnValid(currentRow, currentColumn)
{
    const currentInput = currentRow.querySelectorAll("input")[currentColumn];

    for (let i = 0; i < AllRows.length; i++)
    {
        const input = AllRows[i].querySelectorAll("input")[currentColumn];
        if (input !== currentInput && input.value !== "" && input.value === currentInput.value)
        {
            return false;
        }
        
    }
    return true;
}

function isRowValid(currentRow, currentColumn)
{
    const currentInput = currentRow.querySelectorAll("input")[currentColumn];
    for (let i = 0; i < AllColumns.length; i++)
    {
        const input = currentRow.querySelectorAll("input")[i];
        if (input !== currentInput && input.value !== "" && input.value === currentInput.value)
        {
            return false;    
        } 
    }
    return true;
}

function isBlockValid(atualCell, rowIndex, columnIndex){
    const startRow = Math.trunc(rowIndex/3) * 3;
    const startColumn = Math.trunc(columnIndex/3) * 3;
    const cell = atualCell.querySelectorAll("input")[columnIndex];
    
    for(let i = startRow; i < (startRow + 3); i++)
    {
        for (let j = startColumn; j < (startColumn + 3); j++)
        {
            const input = AllRows[i].querySelectorAll("input")[j];
            
            if (input !== cell && input.value !== "" && input.value === cell.value)
            {
                return false;
            }
        }
    }
    return true;
}

function isAllValid(currentRow, rowIndex, colIndex)
{
    return isColumnValid(currentRow, colIndex) &&
           isRowValid(currentRow, colIndex) &&
           isBlockValid(currentRow, rowIndex, colIndex); 
}
    
document.getElementById("start").addEventListener("click", () =>{
    sudoku.innerHTML = "";
    for (let i = 0; i < 9; i++)
        {
        const row = document.createElement("tr");
        if (i == 2 || i == 5)
        {
            row.style.borderBottom = "3px solid black";
        }
        for (let j = 0 ; j < 9; j++)
        {
            const numberInput = document.createElement("input");
            numberInput.inputMode = "numeric";
            numberInput.maxLength = 1;
        
            const cell = document.createElement("td");
        
            if (j == 2 || j == 5)
            {
                cell.style.borderRight = "3px solid black";
            }
            
            cell.appendChild(numberInput);
            row.appendChild(cell);
        }
        sudoku.appendChild(row);
    }
    AllRows = document.querySelectorAll(".sudoku tr");
    
    AllRows.forEach((currentRow, rowIndex) => {
        AllColumns = currentRow.querySelectorAll("input");

        AllColumns.forEach((input, colIndex) => {
            const luckyBox = random();
            if (luckyBox <= 2)
            {
                input.value = random();

                while(!isAllValid(currentRow, rowIndex, colIndex))
                {
                    input.value = random();
                }
                
                input.style.backgroundColor = "rgba(136, 136, 136, 0.5)";
                input.style.pointerEvents = "none";
            }
            else{
                input.value = null;
            }
        })
    })

})

btnCheck.addEventListener("click", () => {
    AllRows.forEach((currentRow, rowIndex) => {
        AllColumns = currentRow.querySelectorAll("input")
        AllColumns.forEach((column, colIndex) => {
            const computedStyle = window.getComputedStyle(column)
            if (!isAllValid(currentRow, rowIndex, colIndex))
            {
                if (computedStyle.pointerEvents != "none")
                {
                    column.style.backgroundColor = "red";
                    column.style.color = "white";
                }
            }
            else{
                if (computedStyle.pointerEvents != "none" && column.value !== "")
                {
                    column.style.backgroundColor = "green";
                    column.style.color = "white";
                }
            }
        }) 
    })
})