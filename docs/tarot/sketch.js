
let snowflakes = []; // array to hold snowflake objects
let token;
let cnv;
let tokens = [];
let tokensCol = 5;
let tokensRow = 3;
let startPosX = 101;
let startPosY = 101;

function setup() {
  cnv = createCanvas(720, 400);
  cnv.mouseClicked(onSelected);
  
  let posX = startPosX;
  let posY = startPosY;
  let tokenSep = 167;
  let tokenRowSep = 160;
  
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
				e.g = 255;
				e.shown = true;
			}
			//print("intersects");
		} else {
			//print("NOT");
		}
		
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
	
	let r, g, b;
	let card;
	let shown = false;
	
	this.update = function() {
	
	};
	
	this.display = function() {
	
	  //print(this.coordX + "   " + this.coordY + "   " + this.ratio);
	  push();
	  translate(this.coordX, this.coordY);
	  fill(this.r, this.g, this.b);
	  polygon(0, 0, this.ratio, 6);
	  pop();
	  
	  if(this.shown) {
		  image(card, this.coordX - 42, this.coordY - 71, 83, 143);
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
