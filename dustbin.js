class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            resitution: 0.4
            }
            this.w=w;
            this.h=h;
            this.body = Bodies.rectangle(x,y,this.w,this.h,options);
            this.color = color(random(0,255), random(0,255), random(0,255));
            World.add(world, this.body)
            
            }
            
            display(){
            
            var pos = this.body.position;
            var angle = this.body.angle;
            
            push();
            noStroke();
            fill(this.color);
            rectMode(CENTER);
            rect(pos.x,pos.y,this.w,this.h);
            pop();
  }

}