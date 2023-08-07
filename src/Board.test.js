const BoardFactory = require('./Board.js')

describe('Test Board', () =>
{
    var b = BoardFactory(10,10);
    test('test board dimensions', () => {
        expect(b.getWidth()).toBe(10);
        expect(b.getHeight()).toBe(10);
    });
    test('test mark', () => {
        expect(b.setMark(0,0)).toBe(true);
        expect(b.getMarked(0,0)).toBe(true);
        expect(b.setMark(0,0)).toBe(true);
        expect(b.getMarked(0,0)).toBe(true);
        expect(b.setMarkToggle(0,0)).toBe(true);
        expect(b.getMarked(0,0)).toBe(false);
    });
});