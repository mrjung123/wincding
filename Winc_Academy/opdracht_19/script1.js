// Hey kiddo
const checkage = function(age){
    if (age >= 18){
        return true;
    } else {
        return false;
    }
}

const greetz = function(age){
    if (checkage(age)){
        console.log("Hello there")
    } else {
        console.log("Hey kiddo")
    }
}

greetz(7);

