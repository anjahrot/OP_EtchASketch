const container = document.querySelector("div");

const GRID_DIMENSION = 16;

for(let i=0;i<GRID_DIMENSION;i++){
    //create new row
    const row = document.createElement("div");
    row.className='row';
    for(let j=0;j<GRID_DIMENSION;j++){
        const square = document.createElement("div");
        square.className='square-div';
        row.appendChild(square);
    }
    container.appendChild(row);
}

const squares = document.querySelectorAll(".square-div");

squares.forEach(item => {
    item.addEventListener('mouseover', (event) => {
       item.className='hover';
   });
});





