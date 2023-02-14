//first

const people = {
    height: 165,
    weight: 43,
    games: "minecraft",
    form: 8,
    sport: "badminton",
}

console.log('people :>> ', people);
 
// second

function FromKilometresToMiles() {
    console.log('miles :>> ', kilometres*0.6214);
}

kilometres = 20;
miles = FromKilometresToMiles();

// third

function spliceArray(array) {
    const start = array.indexOf("Orange");
    const arres = array.splice(start, 1, "Grapefruit");
    console.log('array :>> ', array);
}

array = spliceArray(["Apple","Orange","Plum"]);