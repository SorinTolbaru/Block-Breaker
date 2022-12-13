const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

export class Enemy{
    constructor({position}){
        this.width = 80;
        this.height = 40
        this.position=position;

    }
    draw(){
        c.fillStyle = "grey";
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.draw()


    }
}