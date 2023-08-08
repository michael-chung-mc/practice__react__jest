const gb = require('./gameBoard.js');

function playerFactory () {
    let player = {
        board : gb(10,10),
        opponent : gb(10,10),
        makeMove : function () {
            return false;
        },
    }
    return player;
}

module.exports = playerFactory;