
let snowflakes = []; // array to hold snowflake objects
let token;
let cnv;
let tokens = [];
let tokensCol = 7;
let tokensRow = 8;
let startPosX = 45;
let startPosY = 45;
let maso = [];

function setup() {
  cnv = createCanvas(720, 400);
  cnv.mouseClicked(onSelected);
  
  let posX = startPosX;
  let posY = startPosY;
  let tokenSep = 167;
  let tokenRowSep = 160;
  
  createAndMix();
  print(maso);
  
  //token = new tarotToken();
  //token.setCoords(101, 101, 83);
  for(let r = 0; r < tokensRow; r++) {
	  for(let c = 0; c < tokensCol; c++) {
	  
		  //print(r + ";" + c + "    posX:" + posX + "   posY:" + posY);
		  token = new tarotToken();
		  
		  token.setCoords(posX, posY, 83);
		  posX += (tokenSep + 5);
		  
		  tokens.push(token);
	  }
	  posY += tokenRowSep;
	  posX = startPosX;
	  
  }
  
  applyDeck();
  
  //tokens.push(token);
 
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
  
  /*
  let t;
  for(let i = 0; i < tokensCol; i++) {
	  t = tokens[i];
	  t.update();
	  t.display();
  }
  */
  
  //token.update();
  //token.display();

  /*
  push();
  translate(width * 0.2, height * 0.5);
  
  
  //rotate(frameCount / 200.0);
  polygon(0, 0, 82, 6);
  pop();
  */
}

function onSelected() {
	//print("clicked " + mouseX + " ; " + mouseY + " l:" + tokens.length);
	
	for(let e of tokens) {
		//print(e);
		
		if(e.intersects(mouseX, mouseY)) {
			if(!e.shown) {
				e.shown = true;
			}
			//print("intersects");
		} else {
			//print("NOT");
		}
		
	}
	
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
		//print("eeee " + otherCard);
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
	let shown = false;
	
	this.update = function() {
	
	};
	
	this.display = function() {
	
	  //print(this.coordX + "   " + this.coordY + "   " + this.ratio);
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
		  image(card, this.coordX + 3, this.coordY - 27, 83, 143);
	  }
	
	};
	
	this.setCoords = function(newX, newY, ratio) {
		this.coordX = newX;
		this.coordY = newY;
		this.ratio = ratio;
		
		this.r = 255;
		this.g = 0;
		this.b = 0;
		
		//https://permalinku.github.io/testing/tarot/cards/carta-bastos-1.jpg
		//card = loadImage('cards/carta-bastos-1.jpg');
		card = loadImage('https://permalinku.github.io/testing/tarot/cards/carta-bastos-1.jpg');
		//print(card);
	
	};
	
	this.intersects = function(clicX, clicY) {
		//print("clicX:" + clicX + " clicY:" + clicY );
		var d = dist(this.coordX, this.coordY, clicX, clicY);
		if(d < this.ratio ) {
			return true;
		} else {
			return false;
		}
	}
	
	this.applyCard = function(daCard) {
		//print("daCard:" + daCard);
		let imgPath;
		
		if(this.shown) {
			return;
		}
		
		switch(daCard) {
			case "b01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-1.jpg';
			   break;
			case "b02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-2.jpg';
			   break;
			case "b03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-3.jpg';
			   break;
			case "b04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-4.jpg';
			   break;
			case "b05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-5.jpg';
			   break;
			case "b06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-6.jpg';
			   break;
			case "b07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-7.jpg';
			   break;
			case "b08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-8.jpg';
			   break;
			case "b09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-9.jpg';
			   break;
			case "b10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-10.jpg';
			   break;
			case "b11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-11.jpg';
			   break;
			case "b12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-12.jpg';
			   break;
			case "b13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-13.jpg';
			   break;
			case "b14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-bastos-14.jpg';
			   break;
			case "c01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-1.jpg';
			   break;
			case "c02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-2.jpg';
			   break;
			case "c03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-3.jpg';
			   break;
			case "c04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-4.jpg';
			   break;
			case "c05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-5.jpg';
			   break;
			case "c06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-6.jpg';
			   break;
			case "c07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-7.jpg';
			   break;
			case "c08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-8.jpg';
			   break;
			case "c09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-9.jpg';
			   break;
			case "c10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-10.jpg';
			   break;
			case "c11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-11.jpg';
			   break;
			case "c12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-12.jpg';
			   break;
			case "c13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-13.jpg';
			   break;
			case "c14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-copas-14.jpg';
			   break;			   
			case "e01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-1.jpg';
			   break;
			case "e02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-2.jpg';
			   break;
			case "e03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-3.jpg';
			   break;
			case "e04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-4.jpg';
			   break;
			case "e05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-5.jpg';
			   break;
			case "e06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-6.jpg';
			   break;
			case "e07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-7.jpg';
			   break;
			case "e08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-8.jpg';
			   break;
			case "e09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-9.jpg';
			   break;
			case "e10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-10.jpg';
			   break;
			case "e11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-11.jpg';
			   break;
			case "e12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-12.jpg';
			   break;
			case "e13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-13.jpg';
			   break;
			case "e14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-espadas-14.jpg';
			   break;
			case "o01":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-1.jpg';
			   break;
			case "o02":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-2.jpg';
			   break;
			case "o03":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-3.jpg';
			   break;
			case "o04":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-4.jpg';
			   break;
			case "o05":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-5.jpg';
			   break;
			case "o06":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-6.jpg';
			   break;
			case "o07":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-7.jpg';
			   break;
			case "o08":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-8.jpg';
			   break;
			case "o09":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-9.jpg';
			   break;
			case "o10":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-10.jpg';
			   break;
			case "o11":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-11.jpg';
			   break;
			case "o12":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-12.jpg';
			   break;
			case "o13":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-13.jpg';
			   break;
			case "o14":
			   imgPath = 'https://permalinku.github.io/testing/tarot/cards/carta-oro-14.jpg';
			   break;

			   
		}
		print("daCard:" + daCard + " imgPath:" + imgPath); 
	}
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
