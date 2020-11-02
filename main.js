const game = document.querySelector('#game');

const computedStyle = getComputedStyle(game)
const height = computedStyle.height;
const width = computedStyle.width;
game.width = parseInt(width);
game.height = parseInt(height);

const ctx = game.getContext('2d');

class Column {
    constructor (x) {
        this.spaceZero = null
        this.spaceOne = null
        this.spaceTwo = null
        this.spaceThree = null
        this.spaceFour = null
        this.spaceFive = null
        this.x = x
    }
}

const columnOne = new Column (50);
const columnTwo = new Column (160);
const columnThree = new Column (270);
const columnFour = new Column (380);
const columnFive = new Column (490);
const columnSix = new Column (600);
const columnSeven = new Column (710);

let gameCounter = 1;

function renderGrey (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "grey"
    ctx.strokeStyle = "rgb(15, 15, 83)"
    ctx.arc(x, y, 45, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function renderGamePiece (x, y, columnSpace) {
    if (gameCounter % 2 === 0) {
        ctx.beginPath();
        ctx.fillStyle = "rgb(111, 12, 32)"
        ctx.arc(x, y, 45, 0, 2 * Math.PI);
        ctx.fill();
        columnSpace = "red";
        gameCounter++
    } else {
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.arc(x, y, 45, 0, 2 * Math.PI);
        ctx.fill();
        columnSpace = "black";
        gameCounter++
    }
}

function yValue (column) {
    if (column.spaceZero === null) {
        renderGamePiece (column.x, 550, column.spaceZero);
    } else if (column.spaceOne === null) {
        renderGamePiece (column.x, 450, column.spaceOne);
    } else if (column.spaceTwo === null) {
        renderGamePiece (column.x, 350, column.spaceTwo);
    } else if (column.spaceThree === null) {
        renderGamePiece (column.x, 250, column.spaceThree);
    } else if (column.spaceFour === null) {
        renderGamePiece (column.x, 150, column.spaceFour);
    } else if (column.spaceFive === null) {
        renderGamePiece (column.x, 50, column.spaceFive);
    } 
}

// function renderBlack (x, y) {
//     ctx.beginPath();
//     ctx.fillStyle = "black"
//     ctx.arc(x, y, 45, 0, 2 * Math.PI);
//     ctx.fill();
// }

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

function getMousePosition(canvas, event) { 
    let rect = canvas.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    if (x > 0 && x < 100) {
        yValue (columnOne);
    } else if (x > 110 && x < 210) {
        yValue (columnTwo);
    } else if (x > 220 && x < 320) {
        yValue (columnThree);
    } else if (x > 330 && x < 430) {
        yValue (columnFour);
    } else if (x > 440 && x < 540) {
        yValue (columnFive);
    } else if (x > 550 && x < 650) {
        yValue (columnSix);
    } else if (x > 660 && x < 760) {
        yValue (columnSeven);
    }
} 

let canvasElem = document.querySelector("canvas"); 
  
canvasElem.addEventListener("mousedown", function(e) { 
    let x =
    getMousePosition(canvasElem, e);

}); 