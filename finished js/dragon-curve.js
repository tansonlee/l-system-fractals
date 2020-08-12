const axiom = "FX";
let configuration = axiom;

const rules = [];

// X --> X+YF+
rules[0] = {
	match: "X",
	replace: "X+YF+",
};

// Y --> -FX-Y
rules[1] = {
	match: "Y",
	replace: "-FX-Y",
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
	createCanvas(400, 400);
	iterationsP = createP(numIterations);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
	zoomSlider = createSlider(1, 10, 0, 1);
}

function draw() {
	background(200);
	translate(width / 2, height / 2);
	rotate((3 * PI) / 2);

	let zoom = zoomSlider.value();
	let len = 360 / Math.pow(2, zoom);

	for (let char of configuration) {
		switch (char) {
			case "F":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "-":
				// turn left by PI / 4
				rotate(PI / 2);
				break;
			case "+":
				// turn right by PI / 4
				rotate(-PI / 2);
				break;
		}
	}
}
