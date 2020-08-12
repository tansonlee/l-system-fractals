const axiom = "F";
let configuration = axiom;

const rules = [];
// F -> F[+FF][-FF]F[-F][+F]F
rules[0] = {
	match: "F",
	replace: "F[+FF][-FF]F[-F][+F]F",
};

let numIterations = 0;
let iterationsP;
let btn;
let zoomSlider;

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
	createCanvas(400, 600);
	iterationsP = createP(numIterations);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
	zoomSlider = createSlider(1, 8, 1, 1);
}

function draw() {
	background(255);
	let zoom = zoomSlider.value();
	let len = 760 / Math.pow(3, zoom);

	translate(width / 2, height);
	rotate(PI);

	for (let char of configuration) {
		switch (char) {
			case "F":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "+":
				// turn left PI / 4
				rotate(-radians(35));
				break;
			case "-":
				// turn right PI / 4
				rotate(radians(35));
				break;
			case "[":
				// push
				push();
				break;
			case "]":
				// pop
				pop();
				break;
		}
	}
}
