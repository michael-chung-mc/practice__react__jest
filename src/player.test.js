const player = require('./player.js')

describe ('test player', () => {
    let ai = player();
    test ('', () => {
        expect (ai.makeMove()).toBe(false);
    })
})