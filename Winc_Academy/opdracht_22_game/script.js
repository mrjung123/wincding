let naam = "";
let maxgetal = 26;
let getal = 0;
let raadgetal = 0;
let n = 5;
let antwoord = false;
let endofgame = false;
let endofround = false;

function getantwoord(antwoord){
    if (antwoord == true){
        endofgame = false;
        endofround = true;
        i=0;
        n=5;
    } else {
        endofgame = true;
        endofround = true;
    }
    return endofgame,endofround;
}
naam = prompt("Wat is je naam?");
while (endofgame == false) 
{
    i = 0;
    n=5;
    maxgetal = window.prompt("We spellen raad het getal.\r\nTussen de 0 en welk getal wild u raden?\r\nU kunt niet hoger gaan dan 25!", 25);        
    getal = Math.floor(Math.random() * maxgetal);
    alert("OK, " + naam + " Daar gaan we!!");
        endofgame = false;
        endofround = false;
            while (endofround == false)
            {
                if ((i != 5) && (i < 6)) {       // start ronde
                    raadgetal = prompt("Welk getal denk u dat het is?\r\n"+ naam + ", je hebt nog " + n + " kans(en).");
                    if (raadgetal == getal){
                        antwoord = confirm(naam + ' je hebt gewonnen. Wilt u nog een spelletje spelen?');
                        getantwoord(antwoord);
                    } else if (raadgetal != getal) {
                        confirm(naam + ' Je hebt helaas niet geraden.');
                        endofgame = false;
                        endofround = false;
                    }                       
                } else if (i > 5) {
                    endofround = true;
                    antwoord = confirm(naam + ' Je beurten zijn voorbij, je hebt verloren. Wilt u nog een spelletje spelen?') 
                    getantwoord(antwoord);
                    i=0;                    
                }
                i++;
                n=5-i;
            }    
}
alert("OK, " + naam + " we gaan er mee stoppen, tot de volgende keer.");
