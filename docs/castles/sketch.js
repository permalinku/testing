let cnv;

let myT;

function setup() {
  cnv = createCanvas(720, 400);
  
  myT = new aTilemap();
  myT.setDefault('https://permalinku.github.io/testing/castles/images/aTile.png');
  myT.setWorld(3, 3);

/*
  myT = new aTile();
  myT.loadImg('https://permalinku.github.io/testing/castles/images/aTile.png');
  myT.setPos(1, 90);
  */
  // put setup code here
  print("all good! " + myT);
}

function draw() {
   background(15);
  // put drawing code here
  
  //myT.draw();
}