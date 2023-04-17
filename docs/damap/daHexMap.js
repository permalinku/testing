function daHexMap() {

  this.widthInTiles = 0;
  this.heightInTiles = 0;
  this.tileWidthInPx = 0;
  this.tileHeightInPx = 0;
  this.defaultTileImg = null;
  
  this.origPosX = 0;
  this.origPosY = 0;
  
  this.daTiles = [];
  
  this.setDims = function(daWinTiles, daHinTiles) {
	  print("SetDims");
	  
	  this.widthInTiles = daWinTiles;
	  this.heightInTiles = daHinTiles;	 
  };
  
  this.setDefaultTile = function(daTileImg, daWinPx, daHinPx) {
	  print("setDefaultTile");
	  
	 this.tileWidthInPx = daWinPx;
     this.tileHeightInPx = daHinPx;
     this.defaultTileImg = daTileImg;
  };
  
  this.setPos = function(boardPosX, boardPosY) {
	  print("setPos " + boardPosX + " x " + boardPosY);
	  this.origPosX = boardPosX;
	  this.origPosY = boardPosY;
	 
  };
  
  // runInit se corre cuando todos los parametros fueron seteados ahi se inicializa el tablero
  this.runInit = function() {
	 print("runInit");
	 
	 let w = 0;
	 let ht;
	
	 
	 for(let r = 0; r < this.heightInTiles; r++) {
		  
		 for(let c = 0; c < this.widthInTiles; c++) {
			 
			  w = ((r * this.widthInTiles) + c);
			  print(w);
			  
			  
			  ht = new daTile();
			  this.daTiles[w] = ht;
			  print("JSON.stringify(ht):" + JSON.stringify(ht));
			  //print("runInit w:" + w + " this.daTiles[w]:" + daTile(this.daTiles[w]).debugPrint());
		 }
	  }
	 
  };
  
  this.draw = function() {
	 
  };
}