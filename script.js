const grid = document.createElement('div');
grid.classList.add('grid');
document.getElementById('blank').appendChild(grid);

let box; 
let boxCount = 'box'
let count = 1;
let currentBox = ""; 

for (let i = 0; i<4096; i++){
    box = document.createElement('div');
    box.classList.add('box');
    currentBox = boxCount + count;
    box.setAttribute('id',currentBox);
    count++;
    grid.appendChild(box);
    let temp = document.getElementById(currentBox);

    console.log(temp);
    temp.addEventListener('mouseover', function () {
        temp.style.cssText = 'background-color: black;';  })
   

}
