// can set width bigger but zoom out

const axiom = "F";
let configuration = axiom;

const rules = [];
// A --> ABA
rules[0] = {
	match: "F",
	replace: "FfF",
};

// B --> BBB
rules[1] = {
	match: "f",
	replace: "fff",
};

let iterations = 0;
let iterationsP;
let btn;

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
	createCanvas(800, 200);
	iterationsP = createP(iterations);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
}

function draw() {
	background(255);
	const w = width / configuration.length;
	let x = 0;
	fill(0);
	for (let char of configuration) {
		switch (char) {
			case "F":
				// draw forward
				rect(x, 0, w, height);
				x += w;
				break;
			case "f":
				// move forward
				x += w;
				break;
		}
	}
}
