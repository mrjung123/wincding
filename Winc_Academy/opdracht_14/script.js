// deel 1

var persoon = new Object();
persoon.name = 'Martin';
persoon.age = 56;
persoon.evaluations = [7,10,9];

console.log(persoon.name);
console.log(persoon['age']);
console.log(persoon.evaluations[1]);

// Deel 2

let selectedcolors = ["groen", "blauw", "rood"];

console.log(selectedcolors);
console.log(selectedcolors.length);
console.log(selectedcolors[0]);
console.log(selectedcolors[selectedcolors.length-1]);
selectedcolors.push("geel");
console.log(selectedcolors[selectedcolors.length-1]);
selectedcolors.push(5);
console.log(selectedcolors[selectedcolors.length-1]);
selectedcolors.push({greeting: "hi ik ben een object"});
console.log(selectedcolors[selectedcolors.length-1]);

// Deel 3

// zie script2.js
