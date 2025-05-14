const sudoku = document.querySelector(".sudoku");
function random()
{
    return Math.trunc(Math.random() * 9) + 1;
}

function validNumberAxisY(AllRows, currentInput, columnIndex, value)
{
    //currentInput = todas as colunas
    for (let i = 0; i < AllRows.length; i++)
    {
        const input = AllRows[i].querySelectorAll("input")[columnIndex];
        if (input !== currentInput[columnIndex] && input.value === value)
        {
            return false;
        }
    }
    return true;
}

function validNumberAxisX(Allcolumns, currentRow, columnIndex, value)
{
    for (let i = 0; i < Allcolumns.length; i++)
    {
        const input = currentRow.querySelectorAll("input")[i];
        const currentInput = currentRow.querySelectorAll("input")[columnIndex];
        if (input !== currentInput && input.value === value)
        {
            return false;    
        } 

    }
    return true;
}

document.getElementById("start").addEventListener("click", () =>{
    sudoku.innerHTML = "";
    for (let i = 0; i < 9; i++)
    {
        const row = document.createElement("tr");
        if (i == 2 || i == 5)
        {
            row.style.borderBottom = "4px solid black";
        }
        for (let j = 0 ; j < 9; j++)
        {
            const numberInput = document.createElement("input");
            numberInput.maxLength = 1;

            const cell = document.createElement("td");

            if (j == 2 || j == 5)
            {
                cell.style.borderRight = "4px solid black";
            }
            
            cell.appendChild(numberInput);
            row.appendChild(cell);
        }
        sudoku.appendChild(row);
    }

    const rows = document.querySelectorAll(".sudoku tr");

    rows.forEach((row, rowIndex) => {
        const inputs = row.querySelectorAll("input");

        inputs.forEach((input, colIndex) => {
            const luckyBox = random();
            if (luckyBox <= 2)
            {
                input.value = random();
                while(!validNumberAxisY(rows, inputs, colIndex, input.value) || !validNumberAxisX(inputs, row, colIndex, input.value))
                {
                    input.value = random();
                }
            }
            else{
                input.value = null;
            }
        })
    })
})