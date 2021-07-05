
// Checking if a number is big
const checknumber = function(nummer){
    if (nummer > 100){
        return true;
    } else if (nummer <= 100){
        return false;
    }
}

console.log(checknumber(75));
console.log(checknumber(100));
console.log(checknumber(110));


// Bouncer at a club

const checkage = function(age, people){
    const maxenter = 150;
    const minage = 18;
    if (age < minage){ return "this is a club for adults"; }
    if (people < maxenter){ return "come in"; }
    if (people >= maxenter){ return "it's too busy now, come back later"; }
}

let result = checkage(17, 150);
console.log(result);
result = checkage(18, 150);
console.log(result);
result = checkage(18, 123);
console.log(result);

// Calculating the average


const berekengmiddelde = function(getal1,getal2,getal3,getal4,getal5){
    const berekening = (getal1+getal2+getal3+getal4+getal5)/5;
    return berekening;

}
let gemiddelde = berekengmiddelde(2,4,7,6,4);
let afronden = Math.round(gemiddelde);
console.log(gemiddelde);
console.log(afronden);
gemiddelde = berekengmiddelde(1,2,3,4,5);
afronden = Math.round(gemiddelde);
console.log(gemiddelde);
console.log(afronden);