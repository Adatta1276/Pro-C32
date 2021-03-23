class BowlPin {
    constructor(x,y,color,w,h,velocityx,velocityy) {
        var options = {
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.18,
            'density' : 0.2

        }

        this.x = x;
        this.y = y;
        this.color = color;
        this.width = w;
        this.height = h;
        this.velocityx = velocityx;
        this.velocityy = velocityy;


        //colors = white,rose,black,yellow,lightblue,pink,orange,green,red,deepblue
        if(this.color = "white") {
            this.image = loadImage("bow1.png");
        }

        else if(this.color = "rose") {
            this.image = loadImage("bow2.png");
        }

        else if(this.color = "black") {
            this.image = loadImage("bow3.png");
        }

        else if(this.color = "yellow") {
            this.image = loadImage("bow4.png");
        }

        else if(this.color = "lightblue") {
            this.image = loadImage("bow5.png");
        }

        else if(this.color = "pink") {
            this.image = loadImage("bow6.png");
        }

        else if(this.color = "orange") {
            this.image = loadImage("bow7.png");
        }

        else if(this.color = "green") {
            this.image = loadImage("bow8.png");
        }

        else if(this.color = "red") {
            this.image = loadImage("bow9.png");
        }

        else if(this.color = "deepblue") {
            this.image = loadImage("bow10.png");
        }


        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);


        World.add(world, this.body);//this.body = Bodies.rectangle(params);
        
    }

    XVelocity() {
        this.x+=this.velocityy;
    }

    display() {
        //var pos = this.body.position;
        var angle = this.body.angle;
        push();
        //if there are problems with the x and y position specified in draw() != values according to mouseX & mouseY, disable translate();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

    }
}