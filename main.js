createSquare(16, 16);

const clearBtn = document.getElementById('clearBtn')
clearBtn.addEventListener('click', resetCanvas);

function createCanvas() {
    let parent = document.createElement('div');
    parent.id = "canvasGrid";

    document.body.appendChild(parent);
}

function createSquare(row, col) {
    let root = document.querySelector(':root');
    root.style.setProperty('--grid-row', row);
    root.style.setProperty('--grid-col', col);
    for(i = 0; i < (row * col); i++){
        let list = document.getElementById('canvasGrid');
        let entry = document.createElement('div');
        entry.classList.add('canvas-sqr')
        entry.addEventListener('mouseover', changeColor);
        list.appendChild(entry);    
    }
}

function changeColor(e) {
    const isRGB = document.getElementById('rgbcheck').checked;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    switch(isRGB) {
        case true: 
            e.target.style.backgroundColor = '#' + randomColor;
            break;
        case false: 
            e.target.style.backgroundColor = "#000000";
            break;
    }
}

function resetCanvas() {
    const canvas = document.getElementById('canvasGrid')
    while (canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    };
    
    let newSize = prompt("Enter Size: (Max 64)");
    if (parseInt(newSize) > 64 || parseInt(newSize) <= 0){
        alert("Sorry, please try again");
        resetCanvas();
    }
    else if (newSize == ""){
        createSquare(16, 16)
    }
    else {
        createSquare(newSize, newSize);
    }
}


