const gameboard = require('./gameBoard.js')

describe('Test Gameboard', () =>
{
    let gb = new gameboard(10,10);
    test('test gb', () => {
        expect(gb.getWidth()).toBe(10);
        expect(gb.getHeight()).toBe(10);
    })
    test('place destroyer', () => {
        gb.setShip(0,0,2,0);
        expect(gb.getShip(0,0)).not.toBe(null);
        expect(gb.getShip(0,0).getLength()).toBe(2);
    })
    test('attack destroyer', () => {
        gb.receiveAttack(0,0);
        expect(gb.battleReport()).toBe(false);
        gb.receiveAttack(0,0);
        expect(gb.battleReport()).toBe(false);
        gb.receiveAttack(1,0);
        expect(gb.battleReport()).toBe(true);
    })
});