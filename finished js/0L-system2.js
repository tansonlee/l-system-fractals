const axiom = "F+F+F+F";
let configuration = axiom;

const rules = [];
// F --> FF+F-F+F+FF
rules[0] = {
	match: "F",
	replace: "FF+F-F+F+FF",
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
	createCanvas(800, 400);
	iterationsP = createP(numIterations);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
	zoomSlider = createSlider(1, 8, 1, 1);
}

function draw() {
	background(255);
	let zoom = zoomSlider.value();
	let len = 760 / Math.pow(3, zoom);

	translate(200, 200);
	rotate((3 * PI) / 2);

	for (let char of configuration) {
		switch (char) {
			case "F":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "+":
				// turn left PI / 2
				rotate(-PI / 2);
				break;
			case "-":
				// turn right PI / 2
				rotate(PI / 2);
				break;
		}
	}
}
