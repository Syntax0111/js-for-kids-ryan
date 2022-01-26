// turn the string 'hELlo THERE, hOW ARE yOu doINg?' into 'Hello there, how are you doing?'
var sillyString = 'hELlo THERE, hOW ARE yOu doINg?';

// Methods you learned are .slice(), .toUpperCase() and .toLowerCase()
// Remember to use console.log() to check your work using the console

// step 1: get the first letter of the sillyString
var h = sillyString.slice(0, 1);

// step 2: get the rest of the sillyString not inlcuding the first letter
var stringAfterH = sillyString.slice(1);

var lowerCaseSAH = stringAfterH.toLowerCase();
var upperH = h.toUpperCase();
var notSoSillyString = upperH + lowerCaseSAH;

console.log(notSoSillyString);
