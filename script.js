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
    let marks = [" ", "O", "X"];
    function updateScreen() {
        let gameboard = board.getBoard();
        let contentDiv = document.getElementById("content_container");
        // clear old
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        // set new
        for (let i = 0; i < gameboard.length; i++) {
            let columnDiv = document.createElement("div");
            columnDiv.setAttribute("id", "board_column");
            columnDiv.style.gridColumn = i + 1;
            for (let j = 0; j < gameboard[i].length; j++) {
                let cell = document.createElement("button");
                cell.setAttribute("type", "button");
                cell.setAttribute("id", "board_cell");
                cell.innerHTML = gameboard[i][j];
                columnDiv.appendChild(cell);
            }
            contentDiv.appendChild(columnDiv);
        }
    }
    return {
        updateScreen
    }
})();

manager.updateScreen();