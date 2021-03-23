class Ground {
constructor(x,y,parts,partW,partH) {

    var options = {
        'isStatic' :true,
        'restitution' : 0,
        'friction' : 0.23,
        'density' : 0.3

    }
  this.x = x;
  this.y = y;
  this.parts = parts;
  this.partW = partW;
  this.partH = partH;
  this.image = loadImage('gradient1.jpg');
  this.body = Bodies.rectangle(this.x,this.y,this.partW,this.partH,options);

  World.add(world, this.body);
}


display() {
    if(1>3) {
        World.remove(world, this.body);
        
       }
}


}