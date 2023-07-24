

//let daTilePath = 'https://permalinku.github.io/testing/damap/images/hexagon.png' ;

let daDot;

let isDraging = false;

let things = [];

function preload() {

  //daTileImg = loadImage('https://permalinku.github.io/testing/damap/images/hexagon.png');
}
function setup() {
  
  createCanvas(710, 400, P2D);
  daDot = new dotObject();
  
  daDot.setCoords(101, 101);
  things[0] = daDot;
  
}

function draw() {
  
  background(255);
  
  
  /*
  if(daDot.intersectsMouse(mouseX, mouseY))
  {
	  //print("overlap!!!");
	  cursor(HAND);
  }
  else
  {
	  cursor(ARROW);
  }
	  */

/*
    noFill();
	stroke(255, 102, 0);
	curve(5, 26, 5, 26, 73, 24, 73, 61);
	*/
	
	/*
	stroke(0);
	curve(5, 26, 73, 24, 73, 61, 15, 65);
	stroke(255, 102, 0);
	curve(73, 24, 73, 61, 15, 65, 15, 65);
	*/
	
	//print("isDraging:" + isDraging);
	if(isDraging)
	{
		
		if(daDot.intersectsMouse(mouseX, mouseY))
		{
			daDot.setCoords(mouseX, mouseY);
		}
		
	}
	
	daDot.updateCursor(mouseX, mouseY);
	daDot.draw();
	
}

function mousePressed() {
	isDraging = true;
	if(daDot.intersectsMouse(mouseX, mouseY))
	{		
		daDot.setCoords(mouseX, mouseY);
	}
	
	/*
		print("mouse pressed" + mouseX + ";" + mouseY );
		
		if(daDot.intersectsMouse(mouseX, mouseY)) {
		}
		*/
		
}

function mouseReleased() {
	isDraging = false;
}

function dotObject() {
	
	let debPath;
	let dotX = 0;
	let dotY = 0;
	let dotW ;
	
	this.update = function() {
	
	};
	
	this.updateCursor = function(pX, pY) {
		  if(this.intersectsMouse(pX, pY))
		  {
			  //print("overlap!!!");
			  cursor(HAND);
		  }
		  else
		  {
			  cursor(ARROW);
		  }
	};
	
	this.intersectsMouse = function(mX, mY) {
		//print("intersectsMouse:" + mX + ";" + mY);
		if((mX > (this.dotX - this.dotW)) && (mX < (this.dotX + this.dotW)) && (mY > (this.dotY - this.dotW)) && (mY < (this.dotY + this.dotW)))
		{
			return true;
		}
		
		return false;
	};
	
	this.setCoords = function(pX, pY) {
		this.dotX = pX;
		this.dotY = pY;
		this.dotW = 11;
		
		//print("setCoords:" + this.dotX + ";" + this.dotY);
	
	};
	
	this.draw = function() {
		circle(this.dotX, this.dotY, this.dotW);
	
	};
}
