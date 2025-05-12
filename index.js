const sudoku = document.querySelector(".sudoku");
function random()
{
    return Math.trunc(Math.random() * 8);
}

document.getElementById("start").addEventListener("click", () =>{ 
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
    const inputs = document.querySelectorAll("input");
    const boxGrid = [[]];

    for(let i = 0; i < inputs.length; i++)
    {
        let linha = 0;
        if (i == 9 || i == 18 || i =)
    }
    document.querySelectorAll("tr").forEach((_, index) =>
    {
        for (let i = 0; i < 9; i++)
        {
            inputs[index].value = random();
        }
    })
})

