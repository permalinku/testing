

//let daTilePath = 'https://permalinku.github.io/testing/damap/images/hexagon.png' ;

let daDot;
let daDot2;

let daRay = null;

let isDraging = false;

let things = [];

let deb1;

let diffY = 11;
let diffX = 11;


function preload() {

  //daTileImg = loadImage('https://permalinku.github.io/testing/damap/images/hexagon.png');
}
function setup() {
  
  createCanvas(710, 400, P2D);
  
  daDot = new dotObject();  
  daDot.setCoords(101, 101);
  things[0] = daDot;
  
  daDot2 = new dotObject();  
  daDot2.setCoords(177, 101);
  things[1] = daDot2;
  
  deb1 = new debugDot();
  deb1.setCoords(daDot2.dotX, daDot2.dotY);
  
}

function draw() {
  
	background(255);
	stroke(0);
  	
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
	
	if((dist(daDot.dotX, daDot.dotY, daDot2.dotX, daDot2.dotY) < 101) && (dist(daDot.dotX, daDot.dotY, daDot2.dotX, daDot2.dotY) > 31)) {
		//curve(daDot.dotX, daDot.dotY, daDot.dotX, daDot.dotY, daDot2.dotX, daDot2.dotY, daDot2.dotX, daDot2.dotY);
		
		//diffY = -55;
		//diffX = 33;
		
		//curve(daDot.dotX + diffX/**/, daDot.dotY + diffY, daDot.dotX, daDot.dotY , daDot2.dotX, daDot2.dotY, daDot2.dotX /**/, daDot2.dotY);
		//deb1.setCoords(daDot.dotX + diffX, daDot.dotY + diffY);
		//print("cerca!");
		
		if(daRay == null) {
			daRay = new rayObject();
			daRay.create(daDot.dotX, daDot.dotY, daDot2.dotX, daDot2.dotY, 11000); 
		}
		else {
			daRay.update();
		}
	}
		
	daDot.draw();
	daDot2.draw();	
	
	deb1.draw();
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
	
	//diffY = mouseY - daDot.dotY;
	//diffX = mouseX - daDot.dotX;
	/*
		print("mouse pressed" + mouseX + ";" + mouseY );
		
		if(daDot.intersectsMouse(mouseX, mouseY)) {
		}
		*/
		
}

function mouseReleased() {
	isDraging = false;
	
}

function rayObject() {
	let origX = 0;
	let origY = 0;
	
	let destX = 0;
	let destY = 0;
	
	let isTurned = false;
	
	let daTotalMillis = 0;
	let daMillis = 0;
	let daCreationTime = 0;
	
	this.create = function(pOrigX, pOrigY, pDestX, pDestY, pMillis) {
		this.origX = pOrigX;
		this.origY = pOrigY;
		
		this.destX = pDestX;
		this.destY = pDestY;
		
		this.isTurned = true;
		this.daTotalMillis = pMillis;
		this.daMillis = 0;
		this.daCreationTime = millis();
		//print("rayObject create from:" + this.origX + ";" + this.origY + " to " + this.destX + ";" + this.destY + " isTurned:" + this.isTurned + " millis:" + this.daMillis);
	}
	
	this.update = function() {		
		
		//print("update " + this.daMillis + " of " + this.daTotalMillis);
		if((this.daMillis) >= (this.daTotalMillis)) {
			//print("done");
			return;
			
		}
		
		
		this.daMillis = (millis() - this.daCreationTime);
		
	}
	
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

function debugDot() {
	
	let dotX = 0;
	let dotY = 0;
	
	/*
	constructor(pX, pY) {
		setCoords(pX, pY);
	}
	*/
	
	this.setCoords = function(pX, pY) {
		this.dotX = pX;
		this.dotY = pY;
	}
	
	this.draw = function() {
		stroke(255, 0, 0);
		/*
		let c = color(255, 0, 0);
		fill(c);
		*/
		circle(this.dotX, this.dotY, 2);
	
	};
}
