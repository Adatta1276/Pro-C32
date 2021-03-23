class Rectangle {
    constructor(x,y,w,h,cedge,color,stroke,strokeWeight) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.cedge = cedge;
        this.color = color;
        this.stroke = stroke;
        this.strokeWeight = strokeWeight;
    }

    display() {
        fill(this.color);
        strokeWeight(this.strokeWeight);
        stroke(this.stroke);
        rect(this.x,this.y,this.w,this.h,this.cedge);
    }
}