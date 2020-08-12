const axiom = "A";
let configuration = axiom;

const rules = [];

// A --> B-A-B
rules[0] = {
	match: "A",
	replace: "B-A-B",
};

// B --> A+B+A
rules[1] = {
	match: "B",
	replace: "A+B+A",
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
	zoomSlider = createSlider(0, 10, 0, 1);
}

function draw() {
	background(200);
	translate(20, height - 20);
	rotate((3 * PI) / 2);

	let odd = numIterations % 2 === 0 ? -1 : 1;

	let zoom = zoomSlider.value();
	let len = 360 / Math.pow(2, zoom);

	for (let char of configuration) {
		switch (char) {
			case "A":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "B":
				// draw forward
				line(0, 0, 0, len);
				translate(0, len);
				break;
			case "+":
				// turn left by PI / 3
				rotate((PI / 3) * odd);
				break;
			case "-":
				// turn right by PI / 3
				rotate((-PI / 3) * odd);
				break;
		}
	}
}
