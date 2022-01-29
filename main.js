noseX = 0
noseY = 0 

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	webcam = createCapture(VIDEO)
	webcam.size(600,300)
	webcam.parent('game_console')
	load = ml5.poseNet(webcam,modelLoaded)
	load.on('pose', gotResults)
}

function draw() {
	game()
}

function modelLoaded(){
	console.log('model is loaded')
}

function gotResults(results){
	if(results.length > 0){
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}