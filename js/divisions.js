class Division {
    constructor(x, y, w, h) {
        let options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.w, this.h);
        pop();
    }
};