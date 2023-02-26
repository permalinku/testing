let daTileImg;
let testTile;
let testTile2;

function preload() {

  daTileImg = loadImage('https://permalinku.github.io/testing/damap/images/hexagon.png');
}
function setup() {
  
  createCanvas(710, 400, WEBGL);
  
  testTile = new daTile();  
  testTile.setPos(-300, 0);  
  testTile.setDims(100, 100);  
  testTile.setTileImage(daTileImg);
  
  testTile2 = new daTile();  
  testTile2.setPos(0, 0);  
  testTile2.setDims(100, 100);  
  testTile2.setTileImage(daTileImg);
  
}

function draw() {
  
  background(0);

/*
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  
  ambientLight(128);
  directionalLight(0, 255, 0, 0.25, 0.25, 0);
  
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();  

  translate(width / 4, 0, 0);
  ambientMaterial(250);
  sphere(120, 64);
  */
  noStroke();
  
  
  /*
  push();
  translate(-200, 0);
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  texture(daTileImg);
  plane(100, 100);
  pop();
  
  push();
  translate(-100, 0);
  //rotateY(frameCount * 0.01);
  texture(daTileImg);
  plane(100, 100);
  pop();
  
  testTile.draw();
  testTile2.draw();
  */
  
  testTile.draw();

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}