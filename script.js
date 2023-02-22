

let box; 
let boxCount = 'box'
let count = 1;
let currentBox = "";
let size = 64;
let squareSize;


createGrid(size);

function createGrid(size){
    squareSize = 960/size;
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.id ='boxes';
    
    document.getElementById('blank').appendChild(grid);
    
    grid.style.cssText = "display: grid;"
    grid.style.cssText = "grid-template-columns: repeat("+size + ", " + squareSize + "px [col-start]);"
    // let B = document.getElementById('layout');
    // let text = document.createTextNode = 'Current Layout: ' + size+ ' X ' + size;
    // B.appendChild(text);

    for (let i = 0; i< (size * size); i++){
        box = document.createElement('div');
        box.classList.add('box');
        
        currentBox = boxCount + count;
        box.setAttribute('id',currentBox);
        count++;
        grid.appendChild(box);
        let temp = document.getElementById(currentBox);
    
        
        temp.addEventListener('mouseover', function () {
            temp.style.cssText = 'background-color: black;';  })
       
    
    }
}

function clearGrid(){
    let A = document.querySelector('#boxes');
    A.remove();
}


const resetBlockSize = document.getElementById('size');
resetBlockSize.addEventListener('click', ()=>{
    size = Number(prompt());
    console.log(typeof size)
    clearGrid();
    createGrid(size);
});
