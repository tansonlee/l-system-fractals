let file;
let axiom;
let configuration;
let rules;
let startX;
let startY;
let startAngle;
let angle;
let lengthFactor;

let numIterations = 0;
let iterationsP;
let btn;
let zoomSlider;

function preload() {
	file = loadJSON("space-fillers/square-sierpinski.json");
}

const iterate = () => {
	let nextConfiguration = "";
	for (let char of configuration) {
		let matched = false;
		for (let rule of rules) {
			if (char === rule["match"]) {
				nextConfiguration += rule["replace"];
				matched = true;
			}
		}
		if (!matched) {
			nextConfiguration += char;
		}
	}
	configuration = nextConfiguration;
	numIterations++;
	iterationsP.html(numIterations);
	return configuration;
};

function setup() {
	createCanvas(600, 600);

	axiom = file.axiom;
	configuration = axiom;
	rules = file.rules;
	startX = file.startX;
	startY = file.startY;
	startAngle = file.startAngle;
	angle = file.angle;

	if (file.lengthFactor) {
		lengthFactor = file.lengthFactor;
	}

	iterationsP = createP(numIterations);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
	zoomSlider = createSlider(1, 10, 0, 0.1);
}

function draw() {
	background(255);
	translate(width * startX, height * startY);
	rotate(radians(startAngle));

	let zoom = zoomSlider.value();
	let len = 360 / Math.pow(2, zoom);

	for (let char of configuration) {
		switch (char) {
			case "F":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "f":
				// move forward
				translate(0, len);
				break;
			case "-":
				// turn left by angle
				rotate(radians(angle));
				break;
			case "+":
				// turn right by angle
				rotate(-radians(angle));
				break;
			case "[":
				// push
				push();
				break;
			case "]":
				// pop
				pop();
				break;
			case ">":
				// multiply line length by length factor
				len *= lengthFactor;
				break;
			case "<":
				// divide line length by length factor
				len /= lengthFactor;
				break;
			case "|":
				// reverse direction (180 degrees turn)
				rotate(radians(180));
				break;
		}
	}
}
