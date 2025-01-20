

export class Ball{
    constructor(stageWidth,stageHeight,radius,speed){
        this.stageWidth=stageWidth;
        this.stageHeight=stageHeight;
        this.radius=radius;
        this.speed=speed;
        this.x=radius*2+(Math.random()*(this.stageWidth-radius*2));
        this.y=radius*2+(Math.random()*(this.stageHeight-radius*8));
        
        this.fixedY=this.y;

        this.check=0;
        this.bounceratio=0;
        this.up=false;

        this.minX=radius;
        this.maxX=stageWidth-radius;
        this.minY=radius;
        this.maxY=stageHeight-radius;

        this.vx=3;
        this.vy=3;

        this.Vx=0;
        this.bounceRatio();

    }
    draw(ctx,x,y,fixedx,mouseclick){
        this.mouseclick=mouseclick;
        if(mouseclick==true){
            this.x=x;
            this.y=y;

            this.Vx=-(fixedx-this.x)*0.001;

            this.bounceRatio();
        }else{
            
        this.x += this.vx;
        this.y += this.vy;

        this.vy *=0.98;
        this.vy += this.bounceratio; 

        this.vx*=0.98;
        this.vx+=this.Vx;
        console.log(this.Vx)

        if (this.y + this.vy > this.maxY || this.y + this.vy< this.radius ) {
            this.vy = -this.vy;
            this.check++;
        }
        if (this.x + this.vx > this.maxX || this.x + this.vx < this.radius) {
            this.vx = -this.vx*0.5; //이건 그냥 원래 했던거
            this.Vx=-this.Vx/2;
        }

            if(this.bounceratio>=2&&this.check>1){
                this.bounceratio*=0.73;
                this.check=0;
            }else if(this.bounceratio<=1.4){
                this.vy*=0;
            }

        }   


        ctx.fillStyle='#666666';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fill();  

    }

    bounceRatio(){
        if(this.mouseclick===true){
            if(this.y>(this.stageHeight/2)-this.radius){
                this.bounceratio=2;
            }
            else{
                this.bounceratio=3;
                this.up=true;
            } 
        }else{
            if(this.fixedY>(this.stageHeight/2)-this.radius){
                this.bounceratio=2;
            }
            else{
                this.bounceratio=3;
                this.up=true;
            }
    }
        
    }
    
}