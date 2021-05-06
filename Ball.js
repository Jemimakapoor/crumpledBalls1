class Ball{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.5
        }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(x,y,r,options)
     World.add(world, this.body);
    }
display(){
    var paperpos=this.body.position;

    
    ellipseMode(RADIUS)
    strokeWeight(3);
    stroke("purple")
    fill(255,0,255)
    ellipse(paperpos.x,paperpos.y,this.r,this.r)
}
}