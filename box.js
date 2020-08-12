class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.5
        //'friction' : 0,
        //'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    
    this.visibility=255;


  }

  score()
  { if(this.visibility<0 && this.visibility >-105)
    { score++; } 
  }

  
  display(){

    if(this.body.speed <  3){
      
   
    var pos =this.body.position;
    var angle =this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    //rectMode(CENTER);
    //fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
    }
    else if(this.body.speed >= 3){
      World.remove(world ,this.body)
     push();
      this.visibility=this.visibility -5;

      //tint (255,this.visibility)
      //image(this.body.position.x,this.body.position.y,50,50)
      pop();
    }
    
  }
  
}
