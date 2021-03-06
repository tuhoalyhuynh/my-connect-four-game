const game = document.querySelector('#game');

const computedStyle = getComputedStyle(game)
const height = computedStyle.height;
const width = computedStyle.width;
game.width = parseInt(width);
game.height = parseInt(height);
const ctx = game.getContext('2d');

let canvasElem = document.querySelector("canvas"); 
let gameMessage = document.querySelector("#game-message")

const startScreen = document.querySelector("#start")
const resetButton = document.querySelector("#reset")
const twoPlayerButton = document.querySelector("#twoPlayer")
const onePlayerBlackButton = document.querySelector("#onePlayerBlack")
const onePlayerRedButton = document.querySelector("#onePlayerRed")

let isLive = false;
let gameCounter = 1;
let playerOne = ["black", "Player One", "black"]
let playerTwo = ["red", "Player Two", "rgb(111, 12, 32)"]
let onePlayerBlack = false;
let onePlayerRed = false;

class Column {
    constructor (x) {
        this.spaceZero = ""
        this.spaceOne = ""
        this.spaceTwo = ""
        this.spaceThree = ""
        this.spaceFour = ""
        this.spaceFive = ""
        this.x = x
    }    
}    

let columnOne = new Column (50);
let columnTwo = new Column (160);
let columnThree = new Column (270);
let columnFour = new Column (380);
let columnFive = new Column (490);
let columnSix = new Column (600);
let columnSeven = new Column (710);

let columnArray = [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven]

function columnReset (array) {
    for (let i = 0; i < array.length; i++) {
        array[i].spaceZero = "";
        array[i].spaceOne = "";
        array[i].spaceTwo = "";
        array[i].spaceThree = "";
        array[i].spaceFour = "";
        array[i].spaceFive = "";
    }
}

function renderGrey (x, y) {
    ctx.beginPath();
    ctx.fillStyle = "grey"
    ctx.strokeStyle = "rgb(15, 15, 83)"
    ctx.arc(x, y, 45, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function renderGamePiece (x, y) {
    if (gameCounter % 2 === 0) {
        ctx.beginPath();
        ctx.fillStyle = "rgb(111, 12, 32)"
        ctx.arc(x, y, 45, 0, 2 * Math.PI);
        ctx.fill();
        gameCounter++
    } else {
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.arc(x, y, 45, 0, 2 * Math.PI);
        ctx.fill();
        gameCounter++
    }
}

function yValue (column) {
    if (column.spaceZero === "") {
        renderGamePiece (column.x, 550);
        if (gameCounter % 2 === 0) {
            column.spaceZero = "black"
        } else {
            column.spaceZero = "red"
        }
    } else if (column.spaceOne === "") {
        renderGamePiece (column.x, 450);
        if (gameCounter % 2 === 0) {
            column.spaceOne = "black"
        } else {
            column.spaceOne = "red"
        }
    } else if (column.spaceTwo === "") {
        renderGamePiece (column.x, 350);
        if (gameCounter % 2 === 0) {
            column.spaceTwo = "black"
        } else {
            column.spaceTwo = "red"
        }
    } else if (column.spaceThree === "") {
        renderGamePiece (column.x, 250);
        if (gameCounter % 2 === 0) {
            column.spaceThree = "black"
        } else {
            column.spaceThree = "red"
        }
    } else if (column.spaceFour === "") {
        renderGamePiece (column.x, 150);
        if (gameCounter % 2 === 0) {
            column.spaceFour = "black"
        } else {
            column.spaceFour = "red"
        }
    } else if (column.spaceFive === "") {
        renderGamePiece (column.x, 50);
        if (gameCounter % 2 === 0) {
            column.spaceFive = "black"
        } else {
            column.spaceFive = "red"
        }
    } else if (columnFive !== "") {
        gameMessage.innerText = "Please select a different column"
    }
    setTimeout (playerTurn, 250)
}

function randomColumn (column) {
    let i = Math.floor(Math.random() * 6)
    return column[i]
}

function onePlayerMode () {
    if (onePlayerRed && gameCounter % 2 !== 0) {
        yValue(randomColumn(columnArray));
    } else if (onePlayerBlack && gameCounter % 2 === 0) {
        yValue(randomColumn(columnArray))
    }
}

function drawCondition () {
    if (gameCounter === 43) {
        gameMessage.innerText = "It's a Draw!";
        isLive = false;
    }
}

function winStatus (array) {
    gameMessage.style.color = array[2];
    gameMessage.innerText = `${array[1]} is the Winner`;
    isLive = false;
}

function gameCondition () {
    drawCondition ();
    winCondition (playerOne);
    winCondition (playerTwo);
    setTimeout(onePlayerMode, 250);
}

function renderBorder (x) {
    ctx.fillStyle = 'rgb(15, 15, 83)'
    ctx.fillRect(x, 0, 10, 600);
}

function playerTurn () {
    if (gameCounter % 2 === 0) {
        gameMessage.style.color = playerTwo[2]
        gameMessage.innerText = `${playerTwo[1]}'s Turn`
    } else {
        gameMessage.style.color = playerOne[2]
        gameMessage.innerText = `${playerOne[1]}'s Turn`
    }
}

function initialState () {
    gameCounter = 1
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
    playerTurn();
    columnReset(columnArray);
    isLive = true;
    onePlayerBlack = false;
    onePlayerRed = false;
    playerOne = []
    playerTwo = []
}

function getMousePosition(canvas, event) { 
    if (isLive) {
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
} 
  
canvasElem.addEventListener("mousedown", function(e) { 
    let x =
    getMousePosition(canvasElem, e);
})

resetButton.addEventListener("click", function () {
    ctx.clearRect(0, 0, game.width, game.height);
    isLive = false;
    startScreen.classList.remove("invisible")
})

twoPlayerButton.addEventListener("click", function () {
    startScreen.classList.add("invisible")
    initialState ();
    playerOne = ["black", "Player One", "black"]
    playerTwo = ["red", "Player Two", "rgb(111, 12, 32)"]
})

onePlayerBlackButton.addEventListener("click", function () {
    startScreen.classList.add("invisible")
    initialState ();
    onePlayerBlack = true;
    playerOne = ["black", "Player", "black"]
    playerTwo = ["red", "Computer", "rgb(111, 12, 32)"]
})

onePlayerRedButton.addEventListener("click", function () {
    startScreen.classList.add("invisible")
    initialState ();
    onePlayerRed = true;
    playerOne = ["black", "Computer", "black"]
    playerTwo = ["red", "Player", "rgb(111, 12, 32)"]
})

setInterval(gameCondition, 200)