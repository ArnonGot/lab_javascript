function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C is " + cToFahr + "\xB0F";
    console.log(message);
}

cToF(30);

function fToC(farenheit){
    var fTemp = farenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + "\xB0F is " + fToCel + "\xB0C";
    console.log(message);
}

fToC(86);
