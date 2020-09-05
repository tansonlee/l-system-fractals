const axiom = "F-G-G";
let configuration = axiom;

const rules = [];

// F --> F-G+F+G-F
rules[0] = {
	match: "F",
	replace: "F-G+F+G-F",
};

// G --> GG
rules[1] = {
	match: "G",
	replace: "GG",
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
	zoomSlider = createSlider(0, 8, 0, 1);
}

function draw() {
	background(255);
	translate(20, height - 20);
	rotate(PI);

	let zoom = zoomSlider.value();
	let len = 360 / Math.pow(2, zoom);

	for (let char of configuration) {
		switch (char) {
			case "F":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "G":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "+":
				// turn left by 2 * PI / 3
				rotate(-(2 * PI) / 3);
				break;
			case "-":
				// turn right by 2 * PI / 3
				rotate((2 * PI) / 3);
				break;
		}
	}
}
