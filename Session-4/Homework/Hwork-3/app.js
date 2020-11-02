class Vector {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
    }
}

function checkCollinear(pos1, pos2, pos3) {
    let isCollinear = false;
    let a = (pos2.y - pos1.y) / (pos2.x - pos1.x);
    if (((pos3.y - pos2.y) / (pos3.x - pos2.x)) == a) {
        isCollinear = true;
    }
    return isCollinear;
}

let pos1 = new Vector(1, 7);
let pos2 = new Vector(2, 10);
let pos3 = new Vector(3, 13);

console.log(checkCollinear(pos1, pos2, pos3));