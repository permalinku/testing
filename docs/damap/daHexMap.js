function daHexMap() {

  this.widthInTiles = 0;
  this.heightInTiles = 0;
  this.tileWidthInPx = 0;
  this.tileHeightInPx = 0;
  this.defaultTile = null;
  
  this.daTiles = [];
  
  this.setDims = function(daWinTiles, daHinTiles) {
	  
	  this.widthInTiles = daWinTiles;
	  this.heightInTiles = daHinTiles;	 
  };
  
  this.setDefaultTile = function(daTileImg, daWinPx, daHinPx) {
	  
	 this.tileWidthInPx = daWinPx;
     this.tileHeightInPx = daHinPx;
     this.defaultTile = daTileImg;
  };
  
  // runInit se corre cuando todos los parametros fueron seteados ahi se inicializa el tablero
  this.runInit = function() {
	 
	 let w = 0;
	  
	 for(let r = 0; r < this.heightInTiles; r++) {
		  
		 for(let c = 0; c < this.widthInTiles; c++) {
			 
			  w = ((r * this.widthInTiles) + c);
			  
			  //this.daTiles[w] = 0;
		 }
	  }
	 
  };
  
  this.draw = function() {
	 
  };
}