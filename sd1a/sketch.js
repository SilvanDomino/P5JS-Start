let yPositions = [
    50, 100, 20, 90, 34, 58, 50, 100, 20, 90, 34, 58,50, 100, 20, 90, 34, 58,50, 100, 20, 90, 34, 58,50, 100, 20, 90, 34, 58
];
let xPositions = [];
let speeds = [];
function setup() {
    createCanvas(800, 600);
    for(let i = 0; i< yPositions.length; i++){
        xPositions[i] =100+ i *20;
        speeds[i] = {x: random(0.1, 3), y:random(0.1,3)}
    }
    console.log(yPositions.length);
}

function draw(){
    for(let i = 0; i< yPositions.length; i++){
        yPositions[i] += random(-2, 2) + speeds[i].y;
        xPositions[i] += random(-2, 2)+ speeds[i].x;
        // strokeWeight(0);
        stroke(`rgba(0, 0, 0, 0.2)`);
        fill(`hsl(${noise(0.008 * frameCount,i*20)*560}, 50%, 50%`);
        circle(xPositions[i], yPositions[i], 5+ noise(0.005 * frameCount,i)*120);
        if(xPositions[i] > width || xPositions[i] < 0){
            speeds[i].x *= -1;
        }
        if(yPositions[i] > height || yPositions[i] < 0){
            speeds[i].y *= -1;
        }
    }
}