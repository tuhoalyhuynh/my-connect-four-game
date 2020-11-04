# Connect Four

## Installation

## Game Instructions

## Changelogs

### v0.00

Connect Four will be a two player turn-based game. Each player will take turns selecting a column. When a column is selected, it will fill from the bottom of the column up. Depending on the player, it will fill with red or black. Once a player has four matching color pieces (horizontally, verivally, or diagonally), win conditions are met.

![Connect Four UI](imgs/connect-four.jpg)

The above image shows what the general layout of the game will look like. The game will UI will be built out in CSS with a grid layout and HTML canvas crawler. Canvas crawler will be used to render game pieces.

### v0.01

Add base HTML for game and some basic CSS styling for game UI. HTML will incorporate Canvas. Basic CSS styling includes building out UI in grid format.

### v0.02

Add some core game functionality JS. Built out initial game state using Canvas.

![Connect Four Initial State](imgs/connect-four-initial.jpg)

### v0.03

Add 'event listeners' to canvas for placing game pieces. Add logic to determine x- and y-positions for game piece placement. Add logic to identify where each piece is placed. Add draw condition.

### v0.04

Add Game Message Disply to display player turns, draw, and winner. Add win conditions for game. Reorganized file structure, moved win conditions to separate file to de-clutter main.js.

### v1.00

Add Reset Button to reset game. Added functionality to not allow players to place game pieces once win/draw condtions are met. Game fully playable.

### v1.01

Add Start Screen. Game unplayable until game started. Screen disappears once game is started. On reset, start screen reappears and game is unplayable until started.

### v1.02

Add Single Player Mode. Player plays against "AI". The computer randomly chooses a column to place game piece. Additional coding for Game Message to display "Player/Computer" in Single and "Player One/Player Two" in Two Player mode.