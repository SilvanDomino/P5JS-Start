function setup() {
    createCanvas(800, 600);
    for(let i = 0; i < 100; i++){
        fill(
            random(0, 155), 
            100, 
            random(0, 255)
        );
        let x = random(0, 800);
        let y = random(0, 800)
        triangle(
            x, y,
            x+random(-100, 100), 
            y+random(-50, 50), 
            x+random(-100, 100),
            y+random(-50, 50)
        );
    }
}

function draw() {
    background("rgba(0, 0, 0, 0.1)");
    for(let i = 0; i < 100; i++){
        fill(
            random(0, 155), 
            100, 
            random(0, 255)
        );
        let x = random(0, 800);
        let y = random(0, 800)
        triangle(
            x, y,
            x+random(-100, 100), 
            y+random(-50, 50), 
            x+random(-100, 100),
            y+random(-50, 50)
        );
    }
    
}
