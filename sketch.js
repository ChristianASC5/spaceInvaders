let score = 0;
let HighScore;
let eLocationX = 1;
let eLocationY = 100;
let eSpeed;
let velocity = 40;
let vCount = 1;
let count = 1;
let tick = 1;



function setup(){
    createCanvas(1000,800);
}

function draw(){
    background(0)
    eMove();
}

//EnemyShooting
function eShoot(){

}

//UserMovement
function eMove(){
    fill("white")
    rect(eLocationX,eLocationY,50,50);
    

    if(tick % 15 == 0){
        if(eLocationX <= 1){
            eSpeed = velocity;
        }
        else if(eLocationX >= 950){
            eSpeed = velocity * -1;
        }
        console.log(eLocationX)
        eLocationX += eSpeed;
        console.log(eLocationX)
        tick = 0
    }


        if(eLocationX <= 1 && tick % 15 == 0){
            count += 1;
            vCount += 1;
            eLocationX += 1;
        }
        if(vCount%2 == 0){
            velocity += 10
            vCount = 1
        }
        if(count%2 == 0){
            console.log(count);
            eLocationY += 50
            count = 1
        }

    tick++
    // console.log(tick);
}