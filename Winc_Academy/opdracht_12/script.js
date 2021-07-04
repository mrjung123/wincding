const age = 16;
const isFemale = true;
const driverStatus = "BoB";

if (age >= 18){
    console.log("toegang toegestaan!")
} else if (age < 18){
    console.log("U bent te jong en mag niet naar binnen");
}
if (isFemale == true){
    console.log("U bent een vrouw dus is toegang toegestaan!")
}
if (driverStatus == "BoB"){
    console.log("U mag een auto besturen!");
} else if (driverStatus != "Bob"){
    console.log("U mag geen auto besturen!");
}
