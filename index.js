
function setup() {
  createCanvas(1200, 800);                      //Maak een tekenveld van 1200x800 pixels groot
}

function draw() {
  background(0, 0, 0);                          //Iedere frame teken de achtergrond op zwart. (RGB)

  circle(                                       //We maken een cirkel
    600 +   Math.sin(millis() * 0.002) * 300,   //x positie van de cirkel. 
    400 +   Math.sin(millis() * 0.003) * 200,   //y positie van de cirkel. 
    20);                                        //grootte van de circkel
}