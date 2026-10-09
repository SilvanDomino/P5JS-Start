function setup() {
    createCanvas(800, 600);
}
const tileSize = 50;
const columns = 10;
function draw() {
    background(220);
    for(let i = 0; i < 64; i++){
        if((i +(Math.floor(i / columns) %2)) % 2== 1){
            fill(10);
        } else{
            fill(250)
        }
        rect(i %columns * tileSize, tileSize * Math.floor(i / columns), tileSize, tileSize);
    }
    
}
