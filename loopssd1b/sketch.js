function setup() {
    createCanvas(800, 600);
}

function draw() {
    background('rgba(255, 255, 255, 0.05)');
    for(let i = 0; i < 90; i++){
        let pos = createVector(random(0, 800), random(0, 600));
        let dir = pos.copy().normalize();
        angleMode(DEGREES);
        stroke(`hsl(${dir.heading()*8}, ${random(40, 70)}%, ${random(40, 70)}%)`)
        line(400, 300, pos.x, pos.y);
    }
}
