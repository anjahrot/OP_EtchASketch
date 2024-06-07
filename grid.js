const container = document.querySelector("div");

let grid_dimension = 16;
const WIN_X = 960;
const WIN_Y = 960;

//Layout grid
function layOutGrid(grid_dimension){
    //Subtracting borders to allow for taking up the same space
    const sq_width = (WIN_X-grid_dimension)/grid_dimension;
    const sq_height = (WIN_Y-grid_dimension)/grid_dimension;
    for(let i=0;i<grid_dimension;i++){
        //create new row
        const row = document.createElement("div");
        row.className='row';
        for(let j=0;j<grid_dimension;j++){
            const square = document.createElement("div");
            square.className='square-div';
            square.style.width = sq_width + "px";
            square.style.height = sq_height + "px";
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    //Add eventhandler - mouseover changes class to change bg-color
    const squares = document.querySelectorAll(".square-div");

    squares.forEach(item => {
        item.addEventListener('mouseover', (event) => {
          //item.className='hover';
          let bgColor = getComputedStyle(item).backgroundColor;
          //Assign random background-color if white, else make darker
          if(bgColor === 'rgb(255, 255, 255)'){
                item.style.backgroundColor = getRandomRgb();
                item.style.opacity = 0.1;
            }
          else {
            let opacity = parseFloat(getComputedStyle(item).opacity);
            item.style.opacity = opacity + 0.1; 
          }
        });
    });
}

function getRandomRgb(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    //Return the RGB color in string
    return `rgb(${r}, ${g}, ${b})`;
}

layOutGrid(grid_dimension);



//Button top to change number of squares in grid
const btn = document.createElement("button");
btn.className='button';
btn.textContent='Change grid-dimension';

//Get rowdiv to insert button on top of page
const row = document.querySelector('.row');
container.insertBefore(btn,row);

//Event-handler for button to change number of squares
btn.addEventListener('click', (event) => {
    let size;
    do{
    size = prompt('Number of squares per side? (max. 100)');
    size = parseInt(size);
    }while(size > 100 || size <= 0 || !Number.isInteger(size))
    changeGrid(size);
})


function changeGrid(size) {
    console.log(`You want this grid-dimension: ${size}. `);
    const rows = document.querySelectorAll('.row');
    rows.forEach(item => {
        container.removeChild(item);
    })
    layOutGrid(size);
}




