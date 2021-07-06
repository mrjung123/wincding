//  =======  VAT calculations =======

// VAT exercise 1 

const totalprice = function(calcvat,vat){
    vatprice = calcvatprice(calcvat,vat);
    return calcvat + vatprice;
}
 const calcvatprice = function(exvat,vat){
 vatprice = exvat * (vat/100);

    return vatprice;
}
console.log(totalprice(100,21));


// VAT exercise 2
const splitprice = function(totalprice,vatperc){
    vatprice = calcvatamound(totalprice,vatperc);
    return totalprice-vatprice;
}
const calcvatamound = function(totalprice,vatperc){
    VAT = vatperc/100+1;
    vatprice = totalprice/VAT;
    return vatprice;
}
console.log(calcvatamound(121,21));