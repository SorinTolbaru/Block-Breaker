const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

export class Ball{
    constructor(){
        this.width = 20;
        this.height = 20
        this.position={
            x:190,
            y:canvas.height - 50 
        }
        this.velocity={
            x:0,
            y:0
        }
        this.locked = true
    }

    draw(){
        c.fillStyle = "blue";
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.draw()

        //y movement and collision
        this.position.y += this.velocity.y
        if(this.position.y < 0 ){
            this.velocity.y = 5
        }
        
        //x movement and  wall collision
            this.position.x += this.velocity.x
        //wall
        if(this.position.x < 0){
            this.velocity.x = 5
        }
        if(this.position.x + this.width >= canvas.width + 10){
            this.velocity.x = -5
        }

    }
}