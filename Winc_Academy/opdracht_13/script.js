// deel 1

const age = 21;
if ((age >= 18) && (age <=25)){
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas, je krijgt GEEN 50% korting!")
}

//deel 2

const firstname = "Martin";
if ((firstname == "Sarah") || (firstname == "Bram")){
    console.log("Je krijgt een gratis biertje");
} else {
    console.log("Pech, je moet je biertje zelf kopen");
}

const totalAmount = 35;
/*Bestel je voor meer dan 25 euro aan drankjes? Dan krijg je gratis (vega)bitterballen.  
Bestel je voor meer dan 50 euro aan drankjes? Dan krijg je gratis portie nachos.
Bestel voor 100 euro of meer? Dan krijg je een gratis flesje champagne. */

if (totalAmount >= 100){
    console.log("Je krijgt een gratis fles champagne!");
} else if (totalAmount >= 50){
    console.log("Je krijgt een gratis portie nachos!");
} else if (totalAmount >= 25){
    console.log("Je krijgt een portie gratis bitterballen!");
}

