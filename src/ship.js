function Ship (length) {
    this.length = length;
    this.health = length;
    this.sunk = false;
    this.getLength = function () { return this.length; }
    this.getHealth = function () { return this.health; }
    this.getSunk = function () { return this.sunk; }
    this.hit = function () {
        this.health - 1 < 0 ? this.health = 0 : this.health -= 1;
        this.isSunk();
    }
    this.isSunk = function () {
        if (this.health == 0)
        {
            this.sunk = true;
        }
        return this.sunk;
    }
}

module.exports = Ship;