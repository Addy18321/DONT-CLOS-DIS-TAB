var leftEye, rightEye;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(200);  
  drawSprites();
  //alert("Hello")
  fill(0, 230, 255)
  ellipse(windowWidth/2.45, windowHeight/2, windowWidth/8, windowHeight/8);
  ellipse(windowWidth/1.65, windowHeight/2, windowWidth/8, windowHeight/8);
  fill(20, 0, 20);
  leftEye = ellipse(windowWidth/2.70 + mouseX/14, windowHeight/2.075 + mouseY/28, windowWidth/20, windowHeight/12);
  rightEye = ellipse(windowWidth/1.75 + mouseX/14, windowHeight/2.075 + mouseY/28, windowWidth/20, windowHeight/12);
  fill("red")
  line(windowWidth/1.15, windowHeight/3, windowWidth/1.75, windowHeight/1.5)
  ellipse(windowWidth/2, windowHeight/1.5, windowWidth/6, windowHeight/10)
  fill("white")
  ellipse(windowWidth/1.15, windowHeight/3, windowWidth/5, windowHeight/4)
  textSize(20)
  text("Hi", windowWidth/1.15, windowHeight/3)
  if(mouseY<20) {
    window.open('http://127.0.0.1:8886/', '_Blank')
  }
}
function myFunction() {
  setInterval(function(){ alert("Hello"); }, 2000);
}