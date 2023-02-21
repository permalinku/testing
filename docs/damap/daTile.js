function daTile() {
	 // initialize coordinates
  this.posX = 0;
  this.posY = 0;
  this.myImage = null;
  
  this.tileW = 0;
  this.tileH = 0;
  /*
  this.update = function() {
	  print("tile update");
  };
  */
  this.draw = function() {
	  //print("tile draw");
	  //image(this.myImage, this.posX, this.posY);
	  push();
	  translate(this.posX, this.posY);
	  //rotateY(frameCount * 0.01);
	  texture(this.myImage);
	  plane(this.tileW, this.tileH);
	  pop();
  };
  
  this.setPos = function(daNewX, daNewY) {
	 this.posX = daNewX;
	 this.posY = daNewY;
	 //print("setPos posX:" + this.posX + " posY:" + this.posY);
  };
  
  this.setDims = function(daNewW, daNewH) {
	  this.tileW = daNewW;
	  this.tileH = daNewH;
	  //print("setDims tileW:" + this.tileW + " tileH:" + this.tileH);
  };
  
  this.setTileImage = function(daTile) {	  
	  
	  this.myImage = daTile;
	  //print("setTileImage: myImage:" + this.myImage);
  };
  
  
}