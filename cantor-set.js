// can set width bigger but zoom out

const axiom = "A";
let configuration = axiom;

const rules = [];
// A --> ABA
rules[0] = {
	match: "A",
	replace: "ABA",
};

// B --> BBB
rules[1] = {
	match: "B",
	replace: "BBB",
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
			case "A":
				// draw forward
				rect(x, 0, w, height);
				x += w;
				break;
			case "B":
				// move forward
				x += w;
				break;
		}
	}
}
