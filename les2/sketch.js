const vertices = 32;
function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    beginShape();
    for(let i = 0; i< vertices; i++){
        let x = Math.sin(PI *2 * i / vertices) * 200 + 400 + Math.cos(i*PI + millis() * 0.005) * 20;
        let y = Math.cos(PI *2 * i / vertices) * 200 + 300 + Math.sin(i*PI + millis() * 0.005) * 20;
        vertex(x, y);
        // circle(x, y, 10);
    }
    endShape(CLOSE);
}
