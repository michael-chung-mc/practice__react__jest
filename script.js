const board = (() => {
    let grid = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    function getBoard () {
        return grid;
    }
    function setValue (value, x, y) {
        grid[x][y] = value;
    }
    return {
        getBoard,
        setValue
    }
})();

const playerFactory = () => {

};

const manager = (() => {
    function updateScreen() {
        let gameboard = board.getBoard();
        let contentDiv = document.getElementById("content_container");
        for (let i = 0; i < gameboard.length; i++) {
            let rowDiv = document.createElement("div");
            rowDiv.setAttribute("id", "board_row");
            for (let j = 0; j < gameboard[i].length; j++) {
                let cell = document.createElement("div");
                cell.setAttribute("id", "board_cell");
                cell.innerHTML = gameboard[i][j];
                rowDiv.appendChild(cell);
            }
            contentDiv.appendChild(rowDiv);
        }
    }
    return {
        updateScreen
    }
})();

manager.updateScreen();