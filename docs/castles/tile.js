function aTile() {
	 // initialize coordinates
  this.posX = 0;
  this.posY = 0;
  this.myImage;
  
  this.update = function() {
	  print("tile update");
  };
  
  this.draw = function() {
	  //print("tile draw");
	  image(this.myImage, this.posX, this.posY);
  };
  
  this.setPos = function(daNewX, daNewY) {
	 this.posX = daNewX;
	 this.posY = daNewY;
  };
  
   this.loadImg = function(daPath) {
	  print("tile loadImg:" + daPath);
	  this.myImage = loadImage(daPath);
  };
}