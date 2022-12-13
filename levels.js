export function levels(enemies,level,enemyNr){
    switch (level){
        case 1:
            for(let i = 1; i <= enemyNr;i+=2){enemies[i].position.y = 1000}
            break;  
        case 2:
            for(let i = 1; i <= enemyNr;i+=4){enemies[i].position.y = 1000}
            break;
        case 3:
            for(let i = 1; i <= enemyNr;i+=9){enemies[i].position.y = 1000}
            break;
        case 4:
            for(let i = 1; i <= enemyNr;i+=10){enemies[i].position.y = 1000}
            break;
        case 5:
            
            break;        
    }

}