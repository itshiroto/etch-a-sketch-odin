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

createCanvas();
createSquare(16, 16);

document.querySelectorAll('#canvasGrid > div').forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        e.target.classList.add('canvas-sqr-hover');
    })
});



