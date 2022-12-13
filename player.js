const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

export class Player{
    constructor(){
        this.width = 200;
        this.height = 20
        this.position={
            x:100,
            y:canvas.height - 30 
        }
        this.velocity={
            x:0,
            y:0
        }
    }
    draw(){
        c.fillStyle = "red";
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        if(this.position.x < 0 || this.position.x + this.width > canvas.width + 10){
            this.position.x -= this.velocity.x
        }

    }
}