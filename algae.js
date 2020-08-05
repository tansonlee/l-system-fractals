const axiom = "aF";
let configuration = axiom;
const lengthFactor = 1.36;

const rules = [];

// a -> FFFFFv[+++h][---q]fb
rules[0] = {
	match: "a",
	replace: "FFFFFv[+++h][---q]fb",
};

// b -> FFFFFv[+++h][---q]fc
rules[1] = {
	match: "b",
	replace: "FFFFFv[+++h][---q]fc",
};

// c -> FFFFFv[+++fa]fd
rules[2] = {
	match: "c",
	replace: "FFFFFv[+++fa]fd",
};

// d -> FFFFFv[+++h][---q]fe
rules[3] = {
	match: "d",
	replace: "FFFFFv[+++h][---q]fe",
};

// e -> FFFFFv[+++h][---q]fg
rules[4] = {
	match: "e",
	replace: "FFFFFv[+++h][---q]fg",
};

// g -> FFFFFv[---fa]fa
rules[5] = {
	match: "g",
	replace: "FFFFFv[---fa]fa",
};

// h -> ifFF
rules[6] = {
	match: "h",
	replace: "ifFF",
};

// i -> fFFF[--m]j
rules[7] = {
	match: "i",
	replace: "fFFF[--m]j",
};

// j -> fFFF[--n]k
rules[8] = {
	match: "j",
	replace: "fFFF[--n]k",
};

// k -> fFFF[--o]l
rules[9] = {
	match: "k",
	replace: "fFFF[--o]l",
};

// l -> fFFF[--p]
rules[10] = {
	match: "l",
	replace: "fFFF[--p]",
};

// m -> fFn
rules[11] = {
	match: "m",
	replace: "fFn",
};

// n -> fFo
rules[12] = {
	match: "n",
	replace: "fFo",
};

// o -> fFp
rules[13] = {
	match: "o",
	replace: "fFp",
};

// p -> fF
rules[14] = {
	match: "p",
	replace: "fF",
};

// q -> rfF
rules[15] = {
	match: "q",
	replace: "rfF",
};

// r -> fFFF[++m]s
rules[16] = {
	match: "r",
	replace: "fFFF[++m]s",
};

// s -> fFFF[++n]t
rules[17] = {
	match: "s",
	replace: "fFFF[++n]t",
};

// t -> fFFF[++o]u
rules[18] = {
	match: "t",
	replace: "fFFF[++o]u",
};

// u -> fFFF[++p]
rules[19] = {
	match: "u",
	replace: "fFFF[++p]",
};

// v -> Fv
rules[20] = {
	match: "v",
	replace: "Fv",
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
	createCanvas(500, 400);
	iterationsP = createP(numIterations);
	btn = createButton("iterate");
	btn.mousePressed(iterate);
	zoomSlider = createSlider(1, 8, 1, 1);
}

function draw() {
	background(255);
	let zoom = zoomSlider.value();
	let len = 760 / Math.pow(3, zoom);

	translate(width / 2 - 50, height);
	rotate(PI);

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
			case "+":
				// turn left PI / 4
				rotate(radians(12));
				break;
			case "-":
				// turn right PI / 4
				rotate(-radians(12));
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
