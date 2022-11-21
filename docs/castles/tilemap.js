function aTilemap() {
  // initialize coordinates
  this.rootX = 0;
  this.rootY = 0;  
  this.posX = 0;
  this.posY = 0;
  this.defaultTilePath;
  this.defaultTile;
  this.wInTiles;
  this.hInTiles;
  
  this.daTiles = [];
  
  this.update = function() {
	  print("tile update");
  };
  
  this.draw = function() {
	  //print("tile draw");
	  //image(this.myImage, this.posX, this.posY);
  };
  
  this.setDefault = function(tilePath) {
	  this.defaultTilePath = tilePath;
	  print("setDefault:" + tilePath);
	  //this.defaultTile = image(tilePath, 0, 0);
  };
  
  this.setWorld = function(widthInTiles, heightInTiles) {
	  this.wInTiles = widthInTiles;
	  this.hInTiles = heightInTiles;
	  this.defaultTile = loadImage(this.defaultTilePath);
	  
	  print("setWorld:" + this.wInTiles + "x" + this.hInTiles);
	  
	  let w = 0;
	  
	  for(let r = 0; r < this.hInTiles; r++) {
		  
		  for(let c = 0; c < this.wInTiles; c++) {
			  w = ((r * this.wInTiles) + c);
			  
			  this.daTiles[w] = 0;
			  //print("r:" + r + " x c:" + c + " i:" + ((r * this.wInTiles) + c) );		

              //print(this.getDaTile(r,c));			  
		  }		  
	  }
	  
	  print(this.daTiles);
	  
	  
	  
	  
  };
  
  this.getDaTile = function(rowOfTile, heightOfTile) {
	  let q = ((rowOfTile * this.wInTiles) + heightOfTile);
	  return this.daTiles[q];
	  //print(rowOfTile + " x " + heightInTiles + " = "q + " tile:" + this.daTiles[q]);
  };
  
  
  
}