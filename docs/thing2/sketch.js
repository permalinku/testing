

//let daTilePath = 'https://permalinku.github.io/testing/damap/images/hexagon.png' ;

let daDot;
let daDot2;

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
  
  daDot2 = new dotObject();  
  daDot2.setCoords(203, 203);
  things[1] = daDot2;
  
}

function draw() {
  
	background(255);
  	
	let currentDaDot;
	cursor(ARROW);
	
	for (let i = 0; i < things.length; i++) {
	
		currentDaDot = things[i];
			
		if(currentDaDot.intersectsMouse(mouseX, mouseY)){		  
		    cursor(HAND);
			if(isDraging){
				currentDaDot.setCoords(mouseX, mouseY);				
			} 				
		}			
	}
		
	daDot.draw();
	daDot2.draw();	
}

function mousePressed() {
	isDraging = true;
	if(daDot.intersectsMouse(mouseX, mouseY))
	{		
		daDot.setCoords(mouseX, mouseY);
	}
	if(daDot2.intersectsMouse(mouseX, mouseY))
	{
		daDot2.setCoords(mouseX, mouseY);
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
