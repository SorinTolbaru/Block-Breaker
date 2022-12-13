let score = 0;
let scoreBoard = document.getElementById("score");

export function checkCollisions(ball,enemy){

    if(ball.position.y < enemy.position.y + enemy.height && ball.position.y + ball.height > enemy.position.y + enemy.height && ball.position.x < enemy.position.x + enemy.width
        &&  ball.position.x + ball.width > enemy.position.x){
        console.log("lower");
        enemy.position.y = 1000;
        ball.velocity.y = 5;
        score += 100;
        scoreBoard.innerHTML = `SCORE:${score}`;

    }
    else if(ball.position.y + ball.height > enemy.position.y && ball.position.x < enemy.position.x + enemy.width
        &&  ball.position.x + ball.width > enemy.position.x && ball.position.y < enemy.position.y)
        {
        console.log("higher");
        enemy.position.y = 1000;
        ball.velocity.y = -5;
        score += 100;
        scoreBoard.innerHTML = `SCORE:${score}`;

        }
    else if(ball.position.x + ball.width > enemy.position.x && ball.position.x < enemy.position.x + enemy.width / 2 && ball.position.y > enemy.position.y && ball.position.y + ball.height < enemy.position.y + enemy.height){
        console.log("left");
        enemy.position.y = 1000;
        score += 100;
        scoreBoard.innerHTML = `SCORE:${score}`;

    } else if(ball.position.x + ball.width > enemy.position.x && ball.position.x < enemy.position.x + enemy.width && ball.position.y > enemy.position.y && ball.position.y + ball.height < enemy.position.y + enemy.height)
    {
        console.log("right");
        enemy.position.y = 1000;
        score += 100;
        scoreBoard.innerHTML = `SCORE:${score}`;

    }      

}