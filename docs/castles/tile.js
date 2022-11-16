function aTile() {
	 // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.myImage;
  
  this.update = function() {
	  print("tile update");
  };
  
  this.draw = function() {
	  print("tile draw");
  };
  
   this.loadImg = function(daPath) {
	  print("tile loadImg:" + daPath);
  };
}