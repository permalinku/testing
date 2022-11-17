function aTilemap() {
	 // initialize coordinates
  this.posX = 0;
  this.posY = 0;
  this.defaultTilePath;
  this.defaultTile;
  this.wInTiles;
  this.hInTiles;
  
  this.update = function() {
	  print("tile update");
  };
  
  this.draw = function() {
	  //print("tile draw");
	  image(this.myImage, this.posX, this.posY);
  };
  
  this.setDefault = function(tilePath) {
	  this.defaultTilePath = tilePath;
	  print("setDefault:" + tilePath);
	  //this.defaultTile = image(tilePath, 0, 0);
  };
  
  this.setWorld = function(widthInTiles, heightInTiles) {
	  this.wInTiles = widthInTiles;
	  this.hInTiles = heightInTiles;
	  print("setWorld:" + this.wInTiles + "x" + this.hInTiles);
	  //this.defaultTile = image(tilePath, 0, 0);
	  // continuar por aca, luego de las dimensiones hay que continuar con la creacion de tiles
	  
	  
  };
  
  
  
}