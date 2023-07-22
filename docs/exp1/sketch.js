

let daTilePath = 'https://permalinku.github.io/testing/damap/images/hexagon.png' ;

function preload() {

  daTileImg = loadImage('https://permalinku.github.io/testing/damap/images/hexagon.png');
}
function setup() {
  
  createCanvas(710, 400, WEBGL);
  
  
}

function draw() {
  
  background(255);


    noFill();
	stroke(255, 102, 0);
	curve(5, 26, 5, 26, 73, 24, 73, 61);
	/*
	stroke(0);
	curve(5, 26, 73, 24, 73, 61, 15, 65);
	stroke(255, 102, 0);
	curve(73, 24, 73, 61, 15, 65, 15, 65);
	*/
}
