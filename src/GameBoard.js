const Board = require('./Board.js');

function Gameboard (height, width) {
    this.b = new Board(height, width);
    this.getWidth = function () { return this.b.getWidth(); }
    this.getHeight = function () { return this.b.getHeight(); }
}

module.exports = Gameboard;