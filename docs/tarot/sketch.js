
let snowflakes = []; // array to hold snowflake objects
let token;
let cnv;
let tokens = [];
let tokensCol = 7;
let tokensRow = 8;
let startPosX = 45;
let startPosY = 45;
let maso = [];
let debug = !true;
let startXI = 60;

let lastDragT = 0;
let isTokenSelected = false;
let selToken;
let selPath;



function setup() {
  cnv = createCanvas(720, 400);
  cnv.mouseClicked(onSelected);
  
  let posX = startPosX;
  let posY = startPosY;
  let tokenSep = 167;
  let tokenSepP = 267;
  
  let tokenRowSep = 70;
  //let tokenRowSep = 160;
  let startPosXI = 179;
  let posXI = startPosXI;
  let posXIInc = 266;
  
  createAndMix();
  
  //token = new tarotToken();
  //token.setCoords(101, 101, 83);
  for(let r = 0; r < tokensRow; r++) {
	  for(let c = 0; c < tokensCol; c++) {
	  
		  token = new tarotToken();
		  
		  if((r % 2) == 0)
		  {
			  token.setCoords(posX, posY, 83);
			  posX += tokenSepP;
		  }
		  else {
			  token.setCoords(posXI, posY, 83);
		      posXI += posXIInc;
		  }
		  /*
		  token.setCoords(posX, posY, 83);
		  posX += (tokenSep + 5);
		  */
		  token.shown = false;
		  tokens.push(token);
	  }
	  
	  if((r % 2) == 0)
	  {
		 posY += tokenRowSep;
		 posX = startPosX;
	  }
	  else {
		 posY += tokenRowSep * 1.25;
		 posX = startPosX;
		 posXI = startPosXI;
	  }
	  
  }
  
  applyDeck();
  
  let tok;
  // revert some
  for(let m = 0; m < 14; m++)  {
	  let i = int(random(0, 56));
	  tok = tokens[i];
	  tok.reversed = true;
  }
  
  //tokens.push(token);
  
  //fullscreen(true);
 
}

function draw() {
 
  background(102);
  
  
  for(let r = 0; r < tokensRow; r++) {
      for(let c = 0; c < tokensCol; c++) {
	  
		 // print((c * tokensCol) + r);
		 t = tokens[(r * tokensCol) + c];
		 t.update();
		 t.display();
	  }
  }
  
  if(isTokenSelected) {
	  //print("selToken:" + selToken + " JSON.stringify(selToken):" + JSON.stringify(selToken));
	  print("JSON.stringify(selToken):" + JSON.stringify(selToken));
	  if(selToken.reversed) {
		  print("reversed:" + selToken.cardR);
	  }
	  else {
		  print("normal:" + selToken.card);
	  }
	  /*
	  if(selToken != null) {
		 image(selToken, 0, 0);
	  }
	  */
	  
	  //card = loadImage(imgPath);
	  //print("selPath:" + selPath);
  }
  
}

function onSelected() {
	
	if(isTokenSelected) {
		
		return;
	}
	let timeDiff = millis() - lastDragT;
	
	if(timeDiff < 500) {
		return;
	}
	
	let curT;
	
	for(let c = 0; c < tokens.length; c++) {
			
		curT = tokens[c];
		//print("curT:" + curT + " tokens " + c + " = " + tokens[c] + "intersects:" + tokens[c].intersects(mouseX, mouseY) + " shown:" + tokens[c].shown + " reversed:" + tokens[c].reversed + " card:" + tokens[c].currentImg());
		
		if(curT.intersects(mouseX, mouseY)) {
			if(!curT.shown) {
				isTokenSelected = true;
				curT.shown = true;
				selPath = curT.currentImg();
				selToken = curT;
			}
		}
	}
	
	/*
	for(let e of tokens) {
		
		if(e.intersects(mouseX, mouseY)) {
			if(!e.shown) {
				isTokenSelected = true;
				e.shown = true;
				//this.selToken = e.currentImg();
				if(e.reversed) {
					this.selToken = e.cardR;
				}
				else {
					this.selToken = e.card;
				}
				print("path: " + e.debPathR);
								
				print("onSelected:" + JSON.stringify(e));
				
			}
		} else {
			//print("NOT");
		}
		
		
	}
	*/
	
}

function mouseDragged() {
	
	let d = dist(mouseX, mouseY, pmouseX, pmouseY);
	if(isTokenSelected) {
		return;
	}
	
	
	if(startPosX > 65) {
		startPosX = 65;		
	}
	else if(startPosX < -1176) {
		startPosX = -1176;
    }	
	else {
		startPosX -= (pmouseX - mouseX);
	}
	
	if(startPosY > 65) {
		startPosY = 65;
	}
	else if(startPosY < -313) {
		startPosY = -313;
	}
	else {
		startPosY -= (pmouseY - mouseY);
	}
	
	//startPosX -= (pmouseX - mouseX);
	//startPosY -= (pmouseY - mouseY);
	
	lastDragT = millis();
}

function createAndMix() {
	maso = [];
	maso.push("b01", "b02", "b03", "b04", "b05", "b06", "b07", "b08", "b09", "b10", "b11", "b12", "b13", "b14");
	maso.push("c01", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "c11", "c12", "c13", "c14");
	maso.push("e01", "e02", "e03", "e04", "e05", "e06", "e07", "e08", "e09", "e10", "e11", "e12", "e13", "e14");
	maso.push("o01", "o02", "o03", "o04", "o05", "o06", "o07", "o08", "o09", "o10", "o11", "o12", "o13", "o14");
	
	let otherIx = 0;
	let otherCard;
	
	for(let i = 0; i < maso.length; i++) {
		otherIx = int(random(0, maso.length));
		otherCard = maso[otherIx];
		maso[otherIx] = maso[i];
		maso[i] = otherCard;
	}
	
}

function applyDeck() {
	
	for(let i = 0; i < maso.length; i++) {
		tokens[i].applyCard(maso[i]);
	}
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function tarotToken() {
	let coordX = 0;
	let coordY = 0;
	let ratio = 83;
	
	let r = 0;
	let g = 255;
	let b = 0;
	let card;
	let cardR;
	let shown = false;
	let reversed = false;
	
	let debPathR;
	let debPath;
	
	this.update = function() {
	
	};
	
	this.display = function() {
		
		//this.reversed = true;
	  let finalCard;
	
	  push();
	  translate(startPosX + this.coordX, startPosY + this.coordY);
	  //fill(this.r, this.g, this.b);
	  //fill(0, 255, 255);
	  if(this.shown)
		  fill(255, 255, 0);
	  else
		  fill(0, 255, 0);
	  
	  polygon(0, 0, this.ratio, 6);
	  pop();
	  
	  if(this.shown) {
		  if(!this.reversed) {
			 image(card, startPosX + this.coordX - 41, startPosY + this.coordY - 71, 83, 143);
			 finalCard = card;
		  } 
		  else {
			 print(debPathR);
			 image(cardR, startPosX + this.coordX - 41, startPosY + this.coordY - 71, 83, 143);
			 finalCard = cardR;
			  
		  }
		  
		  if(isTokenSelected) {
			  image(finalCard, startPosX + this.coordX - 41, startPosY + this.coordY - 71, 83, 143);
		  }
	  }
	  
	  if(debug) {
		  circle(startPosX + this.coordX, startPosY + this.coordY, this.ratio);
	  }
	
	};
	
	this.setCoords = function(newX, newY, ratio) {
		this.coordX = newX;
		this.coordY = newY;
		this.ratio = ratio;
		
		this.r = 255;
		this.g = 0;
		this.b = 0;
		
		this.reversed = false;
		//this.selToken = null;
		
		//https://permalinku.github.io/testing/tarot/cards/carta-bastos-1.jpg
		//card = loadImage('cards/carta-bastos-1.jpg');
		//card = loadImage('https://permalinku.github.io/testing/tarot/cards/carta-bastos-1.jpg');
	
	};
	
	this.intersects = function(clicX, clicY) {
		var d = dist(startPosX + this.coordX, startPosY + this.coordY, clicX, clicY);
		if(d < this.ratio ) {
			return true;
		} else {
			return false;
		}
	};
	
	this.currentCard = function() {
		if(this.reversed) {
			return this.cardR;
		}
		else {
			return this.card;
		}
		return this.card;
	};
	
	this.currentImg = function() {
		if(this.reversed) {
			return this.debPathR;
		}
		else {
			return this.debPath;
		}
		return this.debPath;
	};
	
	
	this.applyCard = function(daCard) {
		let imgPath;
		let imgPathR;
		
		if(this.shown) {
			return;
		}
		
		switch(daCard) {
			case "b01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-1.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-1.jpg';
			   break;
			case "b02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-2.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-2.jpg';
			   break;
			case "b03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-3.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-3.jpg';
			   break;
			case "b04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-4.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-4.jpg';
			   break;
			case "b05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-5.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-5.jpg';
			   break;
			case "b06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-6.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-6.jpg';
			   break;
			case "b07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-7.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-7.jpg';
			   break;
			case "b08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-8.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-8.jpg';
			   break;
			case "b09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-9.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-9.jpg';
			   break;
			case "b10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-10.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-10.jpg';
			   break;
			case "b11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-11.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-11.jpg';
			   break;
			case "b12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-12.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-12.jpg';
			   break;
			case "b13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-13.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-13.jpg';
			   break;
			case "b14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-14.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-bastos-14.jpg';
			   break;
			case "c01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-1.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-1.jpg';
			   break;
			case "c02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-2.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-2.jpg';
			   break;
			case "c03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-3.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-3.jpg';
			   break;
			case "c04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-4.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-4.jpg';
			   break;
			case "c05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-5.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-5.jpg';
			   break;
			case "c06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-6.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-6.jpg';
			   break;
			case "c07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-7.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-7.jpg';
			   break;
			case "c08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-8.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-8.jpg';
			   break;
			case "c09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-9.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-9.jpg';
			   break;
			case "c10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-10.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-10.jpg';
			   break;
			case "c11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-11.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-11.jpg';
			   break;
			case "c12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-12.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-12.jpg';
			   break;
			case "c13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-13.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-13.jpg';
			   break;
			case "c14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-14.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-copas-14.jpg';
			   break;			   
			case "e01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-1.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-1.jpg';
			   break;
			case "e02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-2.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-2.jpg';
			   break;
			case "e03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-3.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-3.jpg';
			   break;
			case "e04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-4.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-4.jpg';
			   break;
			case "e05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-5.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-5.jpg';
			   break;
			case "e06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-6.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-6.jpg';
			   break;
			case "e07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-7.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-7.jpg';
			   break;
			case "e08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-8.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-8.jpg';
			   break;
			case "e09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-9.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-9.jpg';
			   break;
			case "e10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-10.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-10.jpg';
			   break;
			case "e11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-11.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-11.jpg';
			   break;
			case "e12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-12.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-12.jpg';
			   break;
			case "e13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-13.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-13.jpg';
			   break;
			case "e14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-14.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-espadas-14.jpg';
			   break;
			case "o01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-1.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-1.jpg';
			   break;
			case "o02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-2.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-2.jpg';
			   break;
			case "o03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-3.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-3.jpg';
			   break;
			case "o04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-4.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-4.jpg';
			   break;
			case "o05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-5.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-5.jpg';
			   break;
			case "o06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-6.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-6.jpg';
			   break;
			case "o07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-7.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-7.jpg';
			   break;
			case "o08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-8.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-8.jpg';
			   break;
			case "o09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-9.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-9.jpg';
			   break;
			case "o10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-10.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-10.jpg';
			   break;
			case "o11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-11.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-11.jpg';
			   break;
			case "o12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-12.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-12.jpg';
			   break;
			case "o13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-13.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-13.jpg';
			   break;
			case "o14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-14.jpg';
			   imgPathR = 'https://permalinku.github.io/testing/tarot/cards/r/carta-oro-14.jpg';
			   break;

			   
		}
		card = loadImage(imgPath);
		cardR = loadImage(imgPathR);
		
		this.debPathR = imgPathR;
		this.debPath = imgPath;
	};
}

// snowflake class
function snowflake() {
	
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
