class Paper  {
constructor (x,y,r ){
    var options={
        isStatic:false,
        restitutio:0.3,
        friction:0.5,
        density:1.2
    

    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x , this.y , this.r/2 , options);
    this.image = loadImage("paperimage.png");
   World.add(world, this.body);
}
display(){
    var Paperpos =this.body.position; 
    push();
    translate(Paperpos.x , Paperpos.y);
    imageMode(CENTER);
    fill("white");
    stroke("white")
    strokeWeight("0");
    ellipse(0,0,this.r, this.r);
    image(this.image,0,0,100,100);
    pop();
   

}

}