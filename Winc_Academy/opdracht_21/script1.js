const myArray = ["yellow", "blue", "red", "orange"];

let teller = 0;
while (teller < myArray.length) {
    console.log(myArray[teller]);
    teller++;
}

console.log("   ");

const einde = myArray.length-1;
for (let i = 0; i <= einde; i++) {
    console.log(myArray[i]);
}

console.log("   ");

myArray.forEach(element => console.log(element));

/*
console.log(myArray);
console.log(myArray.length);

// first element
console.log(myArray[0]);

// last element
console.log(myArray[myArray.length - 1]);

// adding elements
myArray.push("geel");
console.log(myArray);
myArray.push(5);
console.log(myArray);

// adding an object
myArray.push({ greeting: "Hi ik ben een object" });
console.log(myArray);

// only the last greeting
console.log(myArray[myArray.length - 1].greeting);*/