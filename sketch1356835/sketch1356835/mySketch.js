let song;
option = 0;

function preload(){

	song = loadSound("FireHouseRock12.mp3");

}

function setup() {
	song.loop()
	song.play(); 
	
	createCanvas(1000,500);
	background(255);
	beach = loadImage('beachhousev2.jpeg');
	hut = loadImage('hut.PNG');
	surfer = loadImage('surfer.PNG');
	coconut = loadImage('coconut.PNG');
	fire = loadImage('fire.PNG');
	stake = loadImage('stake.png');
	angrycrab = loadImage('angrycrab.png');
	dinner = loadImage('dinner.png');
	
	
	
	
}

function draw() {
	if(option == 0) {
		
		image(beach, 0, 0, 1000, 500);
		image(hut,-40,random(-5,0),1000,500);
		image(surfer,random(-40,-38), random(-5,-3),1000,500);
		image(coconut,random(-40,-45),0,1000,500);
		fill(255,205,254);
		textFont('Helvetica',50);
		text('The Beach Museum', 300, 50);
		
	}
	if( mouseX > 130 && mouseX <237 && mouseY >300 && mouseY <380) {
		option = option + 1;
		
	}
	if (option == 1) {
		background(100);
		image(fire,0,0,1000,500);
			push();
				translate(mouseX-570,0);
				image(stake,0,0,1000,500);
			pop();
		
		image(angrycrab,0,25,1000,500);
		
		
	}
	
	
}

function mousePressed(){

	print(mouseX); // mousepress for helping me with understanding the coordinates better
	print(mouseY);
	
	return True;
	
		}