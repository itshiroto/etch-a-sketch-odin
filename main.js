createSquare(16, 16);

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
        list.appendChild(entry);    
    }
}

const canvas = document.querySelectorAll('#canvasGrid > div')
canvas.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        e.target.classList.add('canvas-sqr-hover');
    })
});

const clearBtn = document.getElementById('clearBtn')
clearBtn.addEventListener('click', e => {
    canvas.forEach((item => item.classList.remove('canvas-sqr-hover')));
})

