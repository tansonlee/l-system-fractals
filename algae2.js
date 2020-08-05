const axiom = "aF";
let configuration = axiom;
const lengthFactor = 1.36;

const rules = [];

// a -> FFFFFy[++++n][----t]fb
rules[0] = {
	match: "a",
	replace: "FFFFFy[++++n][----t]fb",
};

// b -> +FFFFFy[++++n][----t]fc
rules[1] = {
	match: "b",
	replace: "+FFFFFy[++++n][----t]fc",
};

// c -> FFFFFy[++++n][----t]fd
rules[2] = {
	match: "c",
	replace: "FFFFFy[++++n][----t]fd",
};

// d -> -FFFFFy[++++n][----t]fe
rules[3] = {
	match: "d",
	replace: "-FFFFFy[++++n][----t]fe",
};

// e -> FFFFFy[++++n][----t]fg
rules[4] = {
	match: "e",
	replace: "FFFFFy[++++n][----t]fg",
};

// g -> FFFFFy[+++fa]fh
rules[5] = {
	match: "g",
	replace: "FFFFFy[+++fa]fh",
};

// h -> FFFFFy[++++n][----t]fi
rules[6] = {
	match: "h",
	replace: "FFFFFy[++++n][----t]fi",
};

// i -> +FFFFFy[++++n][----t]fj
rules[7] = {
	match: "i",
	replace: "+FFFFFy[++++n][----t]fj",
};

// j -> FFFFFy[++++n][----t]fk
rules[8] = {
	match: "j",
	replace: "FFFFFy[++++n][----t]fk",
};

// k -> -FFFFFy[++++n][----t]fl
rules[9] = {
	match: "k",
	replace: "-FFFFFy[++++n][----t]fl",
};

// l -> FFFFFy[++++n][----t]fm
rules[10] = {
	match: "l",
	replace: "FFFFFy[++++n][----t]fm",
};

// m -> FFFFFy[---fa]fa
rules[11] = {
	match: "m",
	replace: "FFFFFy[---fa]fa",
};

// n -> ofFFF
rules[12] = {
	match: "n",
	replace: "ofFFF",
};

// o -> fFFFp
rules[13] = {
	match: "o",
	replace: "fFFFp",
};

// p -> fFFF[-s]q
rules[14] = {
	match: "p",
	replace: "fFFF[-s]q",
};

// q -> fFFF[-s]r
rules[15] = {
	match: "q",
	replace: "fFFF[-s]r",
};

// r -> fFFF[-s]
rules[16] = {
	match: "r",
	replace: "fFFF[-s]",
};

// s -> fFfF
rules[17] = {
	match: "s",
	replace: "fFfF",
};

// t -> ufFFF
rules[18] = {
	match: "t",
	replace: "ufFFF",
};

// u -> fFFFv
rules[19] = {
	match: "u",
	replace: "fFFFv",
};

// v -> fFFF[+s]w
rules[20] = {
	match: "v",
	replace: "fFFF[+s]w",
};

// w -> fFFF[+s]x
rules[21] = {
	match: "w",
	replace: "FFF[+s]x",
};

// x -> fFFF[+s]
rules[22] = {
	match: "x",
	replace: "fFFF[+s]",
};

// y -> Fy
rules[23] = {
	match: "y",
	replace: "Fy",
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
	zoomSlider = createSlider(1, 8, 1, 0.1);
}

function draw() {
	background(255);
	let zoom = zoomSlider.value();
	let len = 760 / Math.pow(3, zoom);

	translate(width / 2 - 100, height);
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
