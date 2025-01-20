

export class Ball2{
    constructor(stageWidth,stageHeight,radius,speed){
        this.stageWidth=stageWidth;
        this.stageHeight=stageHeight;
        this.radius=radius;
        this.speed=speed;
        this.x=radius*2+(Math.random()*(this.stageWidth-radius*2));
        this.y=radius*2+(Math.random()*(this.stageHeight-radius*2));
        
        this.minX=radius;
        this.maxX=stageWidth-radius;
        this.minY=radius;
        this.maxY=stageHeight-radius;

        this.vx=3;
        this.vy=5;
    
        this.bounce_value=2;
        this.moveX=0;


    }
    draw(ctx,x,y,fixedx,moveon){

        this.animate(x,y,fixedx,moveon);

        ctx.fillStyle='#666666';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    animate(x,y,movex,moveon){
        console.log(y);
        if(moveon==true){
            this.x=x;
            this.y=y;
            this.moveX=movex*0.02
            this.bounce_value=2;
        }

        this.bounce_value*=0.998;

        this.x+=this.vx;
        this.y+=this.vy;

        this.vy*=0.98;
        this.vx*=0.98;
        this.vy*=1;
        this.vy+=this.bounce_value;
        this.vx*=1;
        this.vx+=this.moveX;
        
        if(this.x<this.minX||this.x>this.maxX){
            this.vx*=-1;
            this.moveX*=-0.8;
        }
        if(this.y<this.minY||this.y>this.maxY){
            this.vy*=-1;
        }
    }
    
}