// Create an array to hold your favorite ant species
var favoriteAnts = [
    "eciton",
    "camponatus"
];

// How many ant species does your array hold?
console.log(favoriteAnts.length);

// Add a third species to the beginning of your array
favoriteAnts.unshift("formicaFusca");

// Print the first item/element in your array
console.log(favoriteAnts[0]);
console.log(favoriteAnts);

// Print the first item of your array by removing it first
console.log(favoriteAnts.shift());
console.log(favoriteAnts);