const vertices = 36;

function setup() {
  createCanvas(1200, 800);                      //Maak een tekenveld van 1200x800 pixels groot
  colorMode(HSL);
}

function draw() {
  background(0, 0, 0);                          //Iedere frame teken de achtergrond op zwart. (RGB)
  stroke(0, 0, 0);
  
  let pointsOut = [];
  for(let i = 0; i < vertices; i++){
    let x = 600 + Math.sin(
      i * Math.PI*2 / vertices +
      millis() * 0.0000
    ) * 250 + Math.sin(i * Math.PI*2 / vertices+ millis() * 0.000) * 100;
    let y = 400 + Math.cos(
      i * Math.PI*2 / vertices + 
      millis() * 0.0000
    ) * 250  ;
    let point = {x:x, y:y};
    pointsOut.push(point);
    circle(point.x, point.y, 10);
  }

  let pointsIn = [];
  for(let i = 0; i < vertices; i++){
    let x = 600 + Math.sin(
      i * Math.PI*2 / vertices +  //circle
      millis() * 0.000+          //movement
      Math.PI * 1/vertices        //half push place on circle
    ) * 350 + Math.sin(i * Math.PI*2 / vertices+millis() * 0.00) * 100;
    let y = 400 + Math.cos(
      i * Math.PI*2 / vertices + //circle
      millis() * 0.000 +       //movement
      Math.PI * 1/vertices        //half push place on circle
    ) * 350 + Math.cos(millis() * 0.00) * 30;
    let point = {x:x, y:y};
    pointsIn.push(point);
    circle(point.x, point.y, 10);
  }
  for(let i = 0; i < vertices; i++){
    strokeWeight(1);
    let a = pointsOut[i];
    let b = pointsIn[i];
    let c = pointsOut[i+1] || pointsOut[0];
    let d = pointsIn[i+1] || pointsIn[0];
    stroke(i/vertices*360, 60, 60);
    // stroke(255);
    line(a.x, a.y, b.x, b.y);
    line(b.x, b.y, c.x, c.y);
    line(c.x, c.y, a.x, a.y);
    line(b.x, b.y, d.x, d.y);
  }
}