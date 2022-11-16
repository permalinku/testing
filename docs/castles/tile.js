function aTile() {
	 // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  
  this.update = function() {
	  print("tile update");
  };
  
  this.draw = function() {
	  print("tile draw");
  };
}