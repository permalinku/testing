
let snowflakes = []; // array to hold snowflake objects
let token;
let cnv;
let tokens = [];

function setup() {
  cnv = createCanvas(720, 400);
  cnv.mouseClicked(onSelected);
  
  token = new tarotToken();
  token.setCoords(101, 101, 83);
  
  tokens.push(token);
 
}

function draw() {
 
  background(102);
  token.update();
  token.display();

  /*
  push();
  translate(width * 0.2, height * 0.5);
  
  
  //rotate(frameCount / 200.0);
  polygon(0, 0, 82, 6);
  pop();
  */
}

function onSelected() {
	print("clicked " + mouseX + " ; " + mouseY + " l:" + tokens.length);
	
	for(let e of tokens) {
		print(e);
		
		if(e.intersects(mouseX, mouseY)) {
			print("intersects");
		} else {
			print("NOT");
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
	
	this.update = function() {
	
	};
	
	this.display = function() {
	
	  //print(this.coordX + "   " + this.coordY + "   " + this.ratio);
	  push();
	  translate(this.coordX, this.coordY);
	  polygon(0, 0, this.ratio, 6);
	  pop();
	
	};
	
	this.setCoords = function(newX, newY, ratio) {
		this.coordX = newX;
		this.coordY = newY;
		this.ratio = ratio;
	
	};
	
	this.intersects = function(clicX, clicY) {
		print("clicX:" + clicX + " clicY:" + clicY );
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
