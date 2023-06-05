const board = (() => {
    let marks = [" ", "O", "X"];
    let grid = [[marks[0],marks[0],marks[0]],[marks[0],marks[0],marks[0]],[marks[0],marks[0],marks[0]]];
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
    function getCell (x,y) {
        if (x >= grid.length || y >= grid[0].length)
        {
            return false;
        }
        return grid[x][y];
    }
    function getColumnState() {
        if (getCell(0,0) == getCell(0,1) & getCell(0,1) == getCell(0,2))
        {
            console.log(grid[0][0] + " | " + grid[0][1] + " | " + grid[0][2]);
            return getCell(0,0);
        }
        else if (getCell(1,0) == getCell(1,1) & getCell(1,1) == getCell(1,2))
        {
            console.log(grid[1][0] + " | " + grid[1][1] + " | " + grid[1][2]);
            return getCell(1,0);
        }
        else if (getCell(2,0) == getCell(2,1) & getCell(2,1) == getCell(2,2))
        {
            console.log(grid[2][0] + " | " + grid[2][1] + " | " + grid[2][2]);
            return getCell(2,0);
        }
        return getEmptyMark();
    }
    function getRowState() {
        if (getCell(0,0) == getCell(1,0) & getCell(1,0) == getCell(2,0))
        {
            console.log(grid[0][0] + " | " + grid[1][0] + " | " + grid[2][0]);
            return getCell(0,0);
        }
        else if (getCell(0,1) == getCell(1,1) & getCell(1,1) == getCell(2,1))
        {
            console.log(grid[0][1] + " | " + grid[1][1] + " | " + grid[2][1]);
            return getCell(0,1);
        }
        else if (getCell(0,2) == getCell(1,2) & getCell(1,2) == getCell(2,2))
        {
            console.log(grid[0][2] + " | " + grid[1][2] + " | " + grid[2][2]);
            return getCell(0,2);
        }
        return getEmptyMark();
    }
    function getDiagonalState () {
        if (getCell(0,0) == getCell(1,1) & getCell(1,1) == getCell(2,2))
        {
            console.log(grid[0][0] + " | " + grid[1][1] + " | " + grid[2][2]);
            return getCell(0,0);
        }
        else if (getCell(0,2) == getCell(1,1) & getCell(1,1) == getCell(2,0))
        {
            console.log(grid[0][2] + " | " + grid[1][1] + " | " + grid[2][0]);
            return getCell(0,2);
        }
        return getEmptyMark();
    }
    function getState () {
        console.log(grid);
        let rowWin = getRowState();
        let columnWin = getColumnState();
        let diagonalWin = getDiagonalState();
        if (rowWin != getEmptyMark()) {
            console.log(rowWin + " won the row")
            return rowWin;
        }
        else if (columnWin != getEmptyMark()) {
            console.log(columnWin + " won the column")
            return columnWin;
        }
        else if (diagonalWin != getEmptyMark()) {
            console.log(diagonalWin + " won diagonally")
            return diagonalWin;
        }
        else {
            return getEmptyMark();
        }
    }
    function setValue (mark, x, y) {
        // console.log("Setting Value:");
        // console.log(grid);
        // console.log(mark);
        // console.log(x);
        // console.log(y);
        // console.log(marks);
        if (grid[x][y] == getEmptyMark())
        {
            // console.log("position" + x + "," + y + " is marked");
            grid[x][y] = mark;
            return true;
        }
        else {
            // console.log("position" + x + "," + y + " is occupied");
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
            // console.log("Placing Mark:");
            // console.log(x);
            // console.log(y);
            // console.log(currentPlayer);
            if (currentPlayer == 1) {
                if (board.setValue(board.getPlayerOneMark(), x, y))
                {
                    currentPlayer = 2;
                }
            }
            else {
                if (board.setValue(board.getPlayerTwoMark(), x, y))
                {
                    currentPlayer = 1;
                }
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