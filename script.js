const board = (() => {
    let marks = [" ", "O", "X"];
    let grid = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    function getBoard () {
        return grid;
    }
    function getEmptyMark () {
        return marks[0];
    }
    function getPlayerOneMark () {
        return marks[1];
    }
    function getPlayerTwoMark () {
        return marks[2];
    }
    function getColumnState() {
        if (grid[0][0] == grid[0][1] == grid[0][2])
        {
            return grid[0][0];
        }
        else if (grid[1][0] == grid[1][1] == grid[1][2])
        {
            return grid[1][0];
        }
        else if (grid[2][0] == grid[2][1] == grid[2][2])
        {
            return grid[2][0];
        }
        return marks[0];
    }
    function getRowState() {
        if (grid[0][0] == grid[1][0] == grid[2][0])
        {
            return grid[0][0];
        }
        else if (grid[0][1] == grid[1][1] == grid[2][1])
        {
            return grid[0][1];
        }
        else if (grid[0][2] == grid[1][2] == grid[2][2])
        {
            return grid[0][2];
        }
        return marks[0];
    }
    function getDiagonalState () {
        if (grid[0][0] == grid[1][1] == grid [2][2])
        {
            return grid[0][0];
        }
        else if (grid[0][2] == grid[1][1] == grid [2][0])
        {
            return grid[0][2];
        }
        return marks[0];
    }
    function getState () {
        let rowWin = getRowState();
        let columnWin = getColumnState();
        let diagonalWin = getDiagonalState();
        if (rowWin != marks[0]) {
            console.log(rowWin + "won the row")
            return rowWin;
        }
        else if (columnWin != marks[0]) {
            console.log(columnWin + "won the column")
            return columnWin;
        }
        else if (diagonalWin != marks[0]) {
            console.log(diagonalWin + "won diagonally")
            return diagonalWin;
        }
        else {
            return marks[0];
        }
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
        getEmptyMark,
        getPlayerOneMark,
        getPlayerTwoMark,
        getState,
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
        let statusDiv = document.getElementById("status_header");
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
        // status of game
        let win = board.getState();
        if (win == board.getEmptyMark())
        {
            if (currentPlayer == 1) {
                statusDiv.innerHTML = "O's Turn";
            }
            else {
                statusDiv.innerHTML = "X's Turn";
            }
        }
        else
        {
            statusDiv.innerHTML = win + " won!";
        }
    }
    return {
        updateScreen
    }
})();

manager.updateScreen();