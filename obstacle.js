class Obstacle{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
        this.c = c;
    }

    show(){
        push();
        fill(this.c);
        ellipse(this.x, this.y, this.w, this.h);
        pop();
        this.x -= vx;
        this.y -= vy;
    }
}