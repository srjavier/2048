import Game from "/engine/game.js"

let game = new Game(4);


game.setupNewGame();
const board = document.querySelector('.grid')
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function() {
    game.setupNewGame();
    updateWindow();
})

function createBoard() {
    for (let i=0; i < game.width*game.width; i++) {
        let square = document.createElement('div')
        square.innerHTML = game.board[i];
        board.appendChild(square)
        game.board.push(square);
    }
}

createBoard();
updateWindow();

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        game.move('up');
        updateWindow()
    }
    else if (e.keyCode == '40') {
        game.move('down');
        updateWindow()
    }
    else if (e.keyCode == '37') {
        game.move('left');
        updateWindow()
    }
    else if (e.keyCode == '39') {
        game.move('right');
        updateWindow()
    }
}


function updateWindow() {    
    if (game.over) {
        updateWindow();
        alert("game over!")
    }

    while (board.firstChild) board.removeChild(board.firstChild);

    for (let i=0; i < game.width*game.width; i++) {
        let square = document.createElement('div')
        square.className="cell"
        square.innerHTML = game.board[i];

        if (game.board[i] != 0) {
            console.log('#c5b796')
            square.setAttribute("style", "background-color: " + '#c5b796')
        } else {
            square.innerHTML = "";
        }
        
        board.appendChild(square)
        }

    let score = document.getElementById('score');
    score.innerHTML = game.score
}

