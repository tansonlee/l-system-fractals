# L System Fractals

### Lindenmayer Systems visualization

### Table of Contents
- [Introduction](#introduction)
- [Plant-like Systems](#plant-like-systems)
- [Fractals](#fractals)
- [Space Fillers](#space-fillers)
- [Others](#others)
- [How to use](#how-to-use)

### Introduction

**How they work:** An inital string is considered (called the axiom) with rewriting rules. During each iteration, the string is rewritten according to the rules.

For example, given an axiom **"F+F"** and a single rule **"F-->FF"**, after iteration 1, the string is now **"FF+FF"** because every "F" in the string became "FF". After iteration 2, the string becomes **"FFFF+FFFF"**.

This becomes interesting when each character in the string represents an instruction. This also forces all the results to be drawn by a single line. The instruction for each character is found below. 

<img src="assets/legend.png" width="600px">

---

### Plant-like systems

#### Bushes

<img src="assets/plants/bush2.png" width="200px"><img src="assets/plants/bush2-table.png" width="200px">

<img src="assets/plants/bush3.png" width="200px"><img src="assets/plants/bush3-table.png" width="200px">

<img src="assets/plants/bush4.png" width="200px"><img src="assets/plants/bush4-table.png" width="200px">

#### Trees

<img src="assets/plants/leaf.png" width="200px"><img src="assets/plants/leaf-table.png" width="200px">
<img src="assets/plants/stick.png" width="200px"><img src="assets/plants/stick-table.png" width="200px">
<img src="assets/plants/fractal-plant.png" width="200px"><img src="assets/plants/fractal-plant-table.png" width="200px">
<img src="assets/plants/fractal-plant2.png" width="200px"><img src="assets/plants/fractal-plant2-table.png" width="200px">
<img src="assets/js/binary-tree.png" width="200px"><img src="assets/js/binary-tree-table.png" width="200px">
<img src="assets/plants/bush.png" width="200px"><img src="assets/plants/bush-table.png" width="200px">

#### Algae

<img src="assets/plants/algae.png" width="200px"><img src="assets/plants/algae-table.png" width="200px">
<img src="assets/plants/algae2.png" width="200px"><img src="assets/plants/algae2-table.png" width="200px">
<img src="assets/plants/weed.png" width="200px"><img src="assets/plants/weed-table.png" width="200px">

---

### Fractals

#### Rings

<img src="assets/fractals/rings.png" width="200px"><img src="assets/fractals/rings-table.png" width="200px">

#### Dragon Curve

<img src="assets/fractals/dragon-curve.png" width="200px"><img src="assets/fractals/dragon-curve-table.png" width="200px">

#### Sierpinski Triangle

<img src="assets/js/sierpinski-triangle.png" width="200px"><img src="assets/js/sierpinski-triangle-table.png" width="200px">

#### Sierpinski Arrowhead
<img src="assets/js/sierpinski-arrowhead.png" width="200px"><img src="assets/js/sierpinski-arrowhead-table.png" width="200px">

#### Pentaplexity

<img src="assets/fractals/pentaplexity.png" width="200px"><img src="assets/fractals/pentaplexity-table.png" width="200px">

#### Board

<img src="assets/fractals/board.png" width="200px"><img src="assets/fractals/board-table.png" width="200px">

#### Cantor Set

<img src="assets/js/cantor-set.png" width="200px" height="100px"><img src="assets/js/cantor-set-table.png" width="200px" height="100px">

---

### Space Fillers

#### Peano Curve

<img src="assets/space-fillers/peano-curve.png" width="200px"><img src="assets/space-fillers/peano-curve-table.png" width="200px">

#### Quadratic Gosper

<img src="assets/space-fillers/quadratic-gosper.png" width="200px"><img src="assets/space-fillers/quadratic-gosper-table.png" width="200px">

#### Square Sierpinski

<img src="assets/space-fillers/square-sierpinski.png" width="200px"><img src="assets/space-fillers/square-sierpinski-table.png" width="200px">

---

### Others

#### Crystal

<img src="assets/other/crystal.png" width="200px"><img src="assets/other/crystal-table.png" width="200px">

#### Levy Curve

<img src="assets/other/levy-curve.png" width="200px"><img src="assets/other/levy-curve-table.png" width="200px">

#### Koch Curve

<img src="assets/other/koch-curve.png" width="200px"><img src="assets/other/koch-curve-table.png" width="200px">

#### 0L-systems

<img src="assets/other/0L-system.png" width="200px"><img src="assets/other/0L-system-table.png" width="200px">
<img src="assets/other/0L-system2.png" width="200px"><img src="assets/other/0L-system2-table.png" width="200px">

---

### How to use

A JSON file exists for each L-system which defines its axiom, all its rules, etc. A JSON file can be created for any L-system and be visualized with this project. A sample JSON file is below:

<img src="assets/JSON-file.png" width="400px">

**Mandatory**<br>
startX and startY are numbers from 0 to 1 which refer to the starting location of the system.<br>
startAngle refers to which direction the curve starts at.<br>
Angle refers to how much rotation is applied for a **+** or **-** symbol.<br>

**Optional**<br>
lengthFactor is the factor to multiply or divide the length for a **<** or **>** symbol.



Sources:<br>
https://en.wikipedia.org/wiki/L-system<br>
http://paulbourke.net/fractals/lsys/