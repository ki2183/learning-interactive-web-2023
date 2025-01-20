import { Ball } from "./ball.js";
import { Ball2 } from "./ball2.js";
class App{
    constructor(){
        this.canvas=document.createElement('canvas');
        this.ctx=this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        window.addEventListener('resize', this.resize.bind(this),false);
        this.resize();

        // this.ball=new Ball(this.stageWidth,this.stageHeight,30,20);
        this.ball2=new Ball2(this.stageWidth,this.stageHeight,30,20);
        window.addEventListener('mousedown',this.mousedown.bind(this),false);
        window.addEventListener('mousemove',this.mousemove.bind(this),false);
        window.addEventListener('mouseup',this.mouseup.bind(this),false);

        window.requestAnimationFrame(this.animate.bind(this));
    }
    resize(){
        this.stageWidth=document.body.clientWidth;
        this.stageHeight=document.body.clientHeight;

        this.canvas.width=this.stageWidth*2;
        this.canvas.height=this.stageHeight*2;

        this.ctx.scale(2,2);
    }
    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
        // this.ball.draw(this.ctx,this.x,this.y,this.fixedx,this.moveon);
        this.ball2.draw(this.ctx,this.x,this.y,this.moveX,this.moveon)
        // console.log(this.moveX)
    }
    mousedown(e){
        this.moveX=0;
        this.x=e.clientX;
        this.y=e.clientY;
        this.fixedx=e.clientX;
        // this.fixedy=e.clientY;
        this.moveon=true;
    }
    mousemove(e){
        if(this.moveon==true){
            this.moveX=e.clientX-this.fixedx;
            this.fixedx=e.clientX;
            this.x=e.clientX;
            this.y=e.clientY;
            
           
        }
    }
    mouseup(e){
        this.moveon=false;
    }
}
window.onload=()=>{
    new App();
}