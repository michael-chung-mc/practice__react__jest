const Gameboard = require('./GameBoard.js')

describe('Test Gameboard', () =>
{
    let gb = new Gameboard(10,10);
    test('test gb', () => {
        expect(gb.getWidth()).toBe(10);
        expect(gb.getHeight()).toBe(10);
    })
});