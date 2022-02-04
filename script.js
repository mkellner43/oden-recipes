const container = document.querySelector('.container');
const btnContainer = document.querySelector('.buttons');
const blackBtn = document.createElement('button');
const grayBtn = document.createElement('button');
const rgbBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const resizeBtn = document.createElement('button');


function createGrid (column, row) {
  for (let i = 0; i < column * row; i++) {
    const div = document.createElement('div');
    container.appendChild(div).classList.add('box');
    container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
  }
};
  

  function blackColor() {
    const boxes = document.querySelectorAll('.box');
    blackBtn.textContent = 'Black';
    btnContainer.appendChild(blackBtn).classList.add('btn');

    blackBtn.addEventListener('click', () => {
      boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black';
      }))
    })
    
  };

  

  function grayColor() {
    const boxes = document.querySelectorAll('.box');
    grayBtn.textContent = 'Gray';
    btnContainer.appendChild(grayBtn).classList.add('btn');
    grayBtn.addEventListener('click', () => {
      boxes.forEach(box => box.addEventListener('mouseover', () => {
        let rgb = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${rgb},${rgb},${rgb})`;
      }))
    })
  };
  
  

  function rgbColor() {
    const boxes = document.querySelectorAll('.box');
    rgbBtn.textContent = 'RGB';
    btnContainer.appendChild(rgbBtn).classList.add('btn');
    rgbBtn.addEventListener('click', () => {
      boxes.forEach(box => box.addEventListener('mouseover', () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${r},${g},${b})`;
      }))
    })
  };
  
 

  function createResetBtn() {
    const boxes = document.querySelectorAll('.box');
    resetBtn.textContent = 'Reset';
    btnContainer.appendChild(resetBtn).classList.add('btn');
  };


  

  function reset() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
  };
    

  function forceReset(user) {
    resetBtn.addEventListener('click', () => {
      if(user) {
      reset();
      createGrid(user,user);
      loadButtons();
      }else {
      reset();
      createGrid(16,16);
      loadButtons();
      }
    })
  };

  function createResizeBtn() {
  resizeBtn.textContent = 'Resize';
  btnContainer.appendChild(resizeBtn).classList.add('btn');
  }
  
  
  
function createNewGrid() {
  resizeBtn.addEventListener('click', () => {
    let user = prompt('What would you like your new grid size to be? Enter a number from 1 to 100:');
    if(user >= 1 && user <= 100) {
      reset();
      createGrid(user, user);
      loadButtons();
    } else if(user > 100){
      reset();
      createGrid(100, 100);
      loadButtons();
    } else {
      reset();
      createGrid(16,16);
      loadButtons();
    }
    forceReset(user);
    console.log(user);
  });
  
};

function loadButtons() {
  blackColor();
  grayColor();
  rgbColor();
  createResetBtn();
  createResizeBtn();
};

function defaultGrid() {
  createGrid(16,16);
  loadButtons();
  forceReset();
  createNewGrid();
};

document.onload = defaultGrid();



