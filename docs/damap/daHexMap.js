function daHexMap() {

  this.widthInTiles = 0;
  this.heightInTiles = 0;
  this.tileWidthInPx = 0;
  this.tileHeightInPx = 0;
  this.defaultTileImgPath = "";
  
  this.origPosX = 0;
  this.origPosY = 0;
  
  this.daTiles = [];
  
  this.setDims = function(daWinTiles, daHinTiles) {
	  print("SetDims");
	  
	  this.widthInTiles = daWinTiles;
	  this.heightInTiles = daHinTiles;	 
  };
  
  this.setDefaultTile = function(daTileImgPath, daWinPx, daHinPx) {
	 print("setDefaultTile:" + daTileImgPath);
	  
	// print("daTileImg:" + JSON.stringify(daTileImg));
	 this.tileWidthInPx = daWinPx;
     this.tileHeightInPx = daHinPx;
     this.defaultTileImgPath = daTileImgPath;
	 
	 //print("this.defaultTileImg:" + JSON.stringify(this.defaultTileImg));
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
			  ht.posX = this.origPosX + (c * this.tileWidthInPx);
			  ht.posY = this.origPosY + (r * this.tileHeightInPx);
			  
			  //this.tileW
			  ht.tileW = this.tileWidthInPx;
			  ht.tileH = this.tileHeightInPx;
			  
			  ht.setTileImageByPath(this.defaultTileImgPath);
			  
			  this.daTiles[w] = ht;
			  //print("JSON.stringify(ht):" + JSON.stringify(ht));
			  //print("runInit w:" + w + " this.daTiles[w]:" + daTile(this.daTiles[w]).debugPrint());
			  
			  if((r % 2) != 0){
			      ht.posX += Math.round(this.tileWidthInPx / 2);
				  ht.posY -= Math.round(this.tileHeightInPx / 2);
			  }
		 }
	  }
	 
  };
  
  this.draw = function() {
	  //print("draw");
	 let ht;
	 let w;
	  
	  /*
	 w = 0;
	 ht = this.daTiles[w];
	 print("w:" + w + " ht:" + ht.debugPrint());
	 ht.draw();
	  */
	  
	 for(let r = 0; r < this.heightInTiles; r++) {
		  
		for(let c = 0; c < this.widthInTiles; c++) {
			 
			w = ((r * this.widthInTiles) + c);
			ht = this.daTiles[w];
			print("w:" + w + " ht:" + ht.debugPrint());
			ht.draw();
			
			
		 }
	  }
	  
	 
  };
}