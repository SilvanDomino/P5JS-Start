function setup() {
    createCanvas(800, 600);
}

let speed = 2;
let y  = 100;
let cloudX = 0;
function draw() {
    background(150-y/3, 200-y/3, 255-y/3);

    fill(255, 255, 30);
    stroke(230, 180,10);
    circle(600, y, 80 + y * 0.1);

    fill(20, 200, 20);
    strokeWeight(3);
    stroke(0, 150, 0);
    rect(0, 300, 800, 600);
    
    textSize(120);
    text("☁️", cloudX, 150);
    text("☁️", cloudX+100, 130);
    cloudX += 1;
    if(cloudX > 900){
        cloudX = -150;
    }
    

    y = y + speed;
    if(y > 600){
        speed = speed *-1;
    }
    if(y < 0){
        speed = speed *=-1;
    }
    textSize(250);
    text("🏡", 50, 350);

    let darkness = 0.2 + y / 600 * 0.4;
    fill(`rgba(10, 10, 30, ${darkness})`);
    strokeWeight(0);
    rect(0, 0, 800, 600)
}
