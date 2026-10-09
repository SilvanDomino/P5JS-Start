
let yPos = 190;
let ySpeed = 1;
let yAccel = 0.1;

let obstacle = {
    x: 600,
    y: 300,
    size: 150
}
function setup() {
    createCanvas(800, 600);
    obstacle = {
        x: 600,
        y: Math.random() * 600,
        size: 150
    }
}

function draw() {
    background(220);

    rect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
    obstacle.x -= 2;

    let dist = Math.sqrt((200-obstacle.x - obstacle.size*0.5)**2 + (yPos-obstacle.y- obstacle.size*0.5)**2);
    if(dist < obstacle.size/2){
        alert("HIT");
    }


    ySpeed = ySpeed + yAccel;
    yPos = yPos + ySpeed;
    circle(200, yPos, 50);
    if(keyIsDown('ArrowUp')){
        console.log("key pressed");
        ySpeed = -3;
    }
}
