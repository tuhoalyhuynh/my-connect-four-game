const game = document.querySelector('#game');

const computedStyle = getComputedStyle(game)
const height = computedStyle.height;
const width = computedStyle.width;
game.width = parseInt(width);
game.height = parseInt(height);

const ctx = game.getContext('2d');

function renderGrey (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "grey"
    ctx.strokeStyle = "rgb(15, 15, 83)"
    ctx.arc(x, y, 45, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function renderRed (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(111, 12, 32)"
    ctx.arc(x, y, 45, 0, 2 * Math.PI);
    ctx.fill();
}

function renderBlack (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.arc(x, y, 45, 0, 2 * Math.PI);
    ctx.fill();
}

function renderBorder (x) {
    ctx.fillStyle = 'rgb(15, 15, 83)'
    ctx.fillRect(x, 0, 10, 600);
}

function initialState () {
    var x = 50;
    for (let a = 0; a < 7; a++) {
        var y = 50;
        for (let b = 0; b < 6; b++) {
            renderGrey (x, y);
            y += 100;
        }
        x += 110
    }
    var z = 100
    for (let c = 0; c < 6; c++) {
        renderBorder (z);
        z += 110;
    }
}

initialState();

renderRed(50, 550);
renderBlack(160, 550);
