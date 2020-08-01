let zoomLevel;
let sw;
let btn;
let iterationsP;
let iterations = 0;

const axiom = "0";
let configuration = axiom;

const rules = [];
// 1 --> 11
rules[0] = {
	match: "1",
	replace: "11",
};

// 0 --> 1[0]0
rules[1] = {
	match: "0",
	replace: "1[0]0",
};

// 0: draw a line segment ending in a leaf
// 1: draw a line segment
// [: push position and angle, turn left 45 degrees
// ]: pop position and angle, turn right 45 degrees

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
	iterations++;
	iterationsP.html(iterations);
	return configuration;
};

function setup() {
	createCanvas(400, 400);
	zoomLevel = createSlider(0.01, 1, 1, 0.01);
	sw = createSlider(1, 20, 1, 1);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
	iterationsP = createP(iterations);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(sw.value());
	translate(width / 2, height);
	rotate(PI);
	scale(zoomLevel.value());
	let len = 100;
	for (let char of configuration) {
		switch (char) {
			case "0":
				// 0: draw a line segment ending in a leaf
				line(0, 0, 0, len);
				translate(0, len);
				fill(255, 0, 0);
				noStroke();
				ellipse(0, 0, 50, 50);
				break;
			case "1":
				// 1: draw a line segment
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "[":
				// [: push position and angle, turn left 45 degrees
				push();
				rotate(-PI / 4);
				break;
			case "]":
				// ]: pop position and angle, turn right 45 degrees
				pop();
				rotate(PI / 4);
				break;
		}
	}
}
