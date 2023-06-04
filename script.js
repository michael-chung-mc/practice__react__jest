const board = (() => {
    let marks = [" ", "O", "X"];
    let grid = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    function getBoard () {
        return grid;
    }
    function getPlayerOneMark () {
        return marks[1];
    }
    function getPlayerTwoMark () {
        return marks[2];
    }
    function setValue (mark, x, y) {
        console.log("Setting Value:");
        console.log(grid);
        console.log(mark);
        console.log(x);
        console.log(y);
        console.log(marks);
        if (grid[x][y] == marks[0])
        {
            console.log("position" + x + "," + y + " is marked");
            grid[x][y] = mark;
            return true;
        }
        else {
            console.log("position" + x + "," + y + " is occupied");
            return false;
        }
    }
    return {
        getBoard,
        getPlayerOneMark,
        getPlayerTwoMark,
        setValue
    }
})();

const playerFactory = () => {

};

const manager = (() => {
    let currentPlayer = 1;
    function placeMarker (x, y) {
        return () => {
            console.log("Placing Mark:");
            console.log(x);
            console.log(y);
            console.log(currentPlayer);
            if (currentPlayer == 1) {
                board.setValue(board.getPlayerOneMark(), x, y);
                currentPlayer = 2;
            }
            else {
                board.setValue(board.getPlayerTwoMark(), x, y);
                currentPlayer = 1;
            }
            updateScreen();
        }
    }
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
                // cell.setAttribute("class", "x" + i);
                // cell.setAttribute("class", "y" + j);
                cell.innerHTML = gameboard[i][j];
                cell.addEventListener("click", placeMarker(i, j));
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