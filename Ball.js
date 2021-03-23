class Ball {
constructor(x,y) {
    var options = {
        'isStatic' :true,
        'restitution' : 0.3,
        'friction' : 0.23,
        'density' : 0.3

    }

    this.x = x;
    this.y = y;
    this.r = 150;

    this.image = loadImage('ball1use.png')

    this.body = Bodies.circle(this.x,this.y,this.r,options);

    World.add(world, this.body);

}

display() {
   
   //var pos = this.body.position;
    var angle = this.body.angle;
    push();
    //translate(this.body.position.x,this.body.position.y);

    rotate(angle);
    rectMode(CENTER);
    ellipseMode(CENTER);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
    pop();

    
}


}