import {Player} from "./player.js"
import {Ball} from "./ball.js"
import {Enemy} from "./enemy.js"
import {checkCollisions} from "./enemycollisions.js"
import { levels } from "./levels.js"

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;


const player1 = new Player();
const ball1 = new Ball();

let level = 1;
let levelBoard = document.getElementById("level")

let enemyNr = 60;
let enemies = []
let xDir = 5
let yDir = 5

function reset(){
    enemyNr = 60;
    enemies = []
    xDir = 5
    yDir = 5
}

function createEnemies(){
for(let i = 1; i<= enemyNr;i++){
    enemies[i] = new Enemy({position:{x:xDir,y:yDir}});
    xDir += 85;
    if(xDir > canvas.width - 80){
        yDir += 45
        xDir = 5;
    }
    }
    levels(enemies,level,enemyNr);

}


function resetBall(){
    ball1.velocity.y = 0
    ball1.velocity.x = 0
    ball1.position.x = player1.position.x + 90;
    ball1.position.y = player1.position.y - ball1.height
    ball1.locked = true;
}

function localCollisions(){

    //platform.width = 200

    //left
    if(ball1.position.y + ball1.height >= player1.position.y && ball1.locked == false &&
         ball1.position.x + ball1.width > player1.position.x &&
         ball1.position.x <  player1.position.x + 60)
    {
        ball1.velocity.y = -ball1.velocity.y
        ball1.velocity.x = -5
        console.log("left");
    }

    //right
    if(ball1.position.y + ball1.height >= player1.position.y && ball1.locked == false &&
        ball1.position.x  > player1.position.x + 140 &&
        ball1.position.x <  player1.position.x + player1.width)
   {
       ball1.velocity.y = -ball1.velocity.y
       ball1.velocity.x = 5
       console.log("right");
   }

    //middle
    if(ball1.position.y + ball1.height >= player1.position.y && ball1.locked == false &&
        ball1.position.x > player1.position.x + 60 &&
        ball1.position.x <  player1.position.x + 140)
   {
       ball1.velocity.y = -ball1.velocity.y  - 1
       ball1.velocity.x = 0
       console.log("middle");
   }
   
   //fall
    if(ball1.position.y + ball1.width > canvas.height){
        ball1.velocity.y = 0
        ball1.velocity.x = 0
        ball1.position.x = player1.position.x + 90;
        ball1.position.y = player1.position.y - ball1.height
        ball1.locked = true;
        
    }


}

function checkWin(){
    let win = 0
    enemies.forEach(element =>{
        if(element.position.y == 1000){
            win += 1
        }
    })
    if(win == enemyNr){
        console.log("You won");
        level++;
        levelBoard.innerHTML = `Level ${level}`;
        win = 0
        reset()
        resetBall()
        createEnemies();
    }
}

function update(){
    requestAnimationFrame(update)

    //main screen
    c.fillStyle = "white";
    c.fillRect(0,0,canvas.width,canvas.height);

    //objects
    player1.update()
    ball1.update()
    enemies.forEach(element =>{
        element.update()
        checkCollisions(ball1,element)
    })
    localCollisions()
    checkWin()
}

createEnemies()
update()


document.addEventListener("keydown",(ev)=>{
    let speed = 10;
    switch (ev.key) {
        case "a":
            player1.velocity.x = -speed
            if(ball1.locked == true){ball1.velocity.x = -speed}
            break;
    
        case "d":
            player1.velocity.x = speed
            if(ball1.locked == true){ball1.velocity.x = speed}
            break;
        case " ":

            ball1.velocity.y = -5;
            ball1.locked = false;
    }
})

document.addEventListener("keyup",()=>{
    player1.velocity.x = 0;
    if(ball1.locked == true){ball1.velocity.x = 0;}
    
})


//for collision test
// document.querySelector("div").addEventListener("mousemove",(event)=>{
//     ball1.position.x = event.clientX - 295
//     ball1.position.y = event.clientY - 210
//     })
