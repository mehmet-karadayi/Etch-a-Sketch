// Declare global variables
let box; 
let boxCount = 'box'
let count = 1;
let currentBox = "";
let size = 64;
let squareSize;
let colorCode = "black";

// Call createGrid function to create the initial grid
createGrid(size);

// Function to create a grid with the specified number of squares per side
function createGrid(size){
    // Calculate the size of each square
    squareSize = 960/size;
    
    // Create a new div element to hold the grid
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.id ='boxes';
    
    // Append the grid to the blank div in the HTML
    document.getElementById('top').appendChild(grid);
    
    // Set the grid display and column size properties
    grid.style.cssText = "display: grid;"
    grid.style.cssText = "grid-template-columns: repeat("+size + ", " + squareSize + "px [col-start]);"
    
    // Update the layout information in the HTML
    document.getElementById('layout').innerText = 'Current Layout: ' + size + ' X ' + size;

    // Loop through each box in the grid and add a mouseover event listener to change its color
    for (let i = 0; i< (size * size); i++){
        box = document.createElement('div');
        box.classList.add('box');
        
        currentBox = boxCount + count;
        box.setAttribute('id',currentBox);
        count++;
        grid.appendChild(box);
        
        let temp = document.getElementById(currentBox);
        temp.addEventListener('mouseover', function () {
            temp.style.cssText = 'background-color:'+colorCode+';';  })
       
    
    }

    // Reset count and currentBox variables
    count = 1;
    curretBox = "";
}

// Get the color picker input element and all box elements
const colorPicker = document.getElementById("color-picker");
const boxes = document.querySelectorAll(".box");

// Add an event listener to the color picker input to change the box color when the color is changed
colorPicker.addEventListener("input", function() {
    colorCode = colorPicker.value;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', function () {
            boxes[i].style.cssText = 'background-color:'+colorCode+';';  })
    }
});

// Function to clear the grid
function clearGrid(){
    let A = document.querySelector('#boxes');
    A.remove();
}

// Get the size button element and add an event listener to reset the grid with the new size
const resetBlockSize = document.getElementById('size');
resetBlockSize.addEventListener('click', ()=>{
    size = Number(prompt("Please enter a number between 1-100 inclusive."));
    if(size > 0 && size <=100){
        clearGrid();
        createGrid(size);
    }
    else alert("Please try again with a number between 1 - 100 inclusive.");
});

// Get the reset button element and add an event listener to reset the grid with the current size
const resetGrid = document.getElementById('reset');
resetGrid.addEventListener('click', () =>{
    clearGrid();
    createGrid(size);
});

