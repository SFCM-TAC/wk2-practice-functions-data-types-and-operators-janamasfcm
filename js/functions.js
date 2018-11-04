
function sayHello(name) {
  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
  var name;
  var greeting;
  greeting = "Hi, " + name + "!";
  return greeting;
}

function sayHelloEverybody(threeNames) {
  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
  var nameList = ["Jana", " Emily", "Maryclare"]
  nameList[2] = " and " + nameList[2];
  var greeting = "Hello, " + nameList;
  return greeting;
}

function getClasses() {
  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
  return ["PVL", "Music", "Conducting", "compsci", " Game Audio."];
}

function labelOrder(fiveNumbers) {
  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items
  var numberList = [" 1", " 2", " 3", " 4", " 5"];
  numberList[0] = " First:" + numberList[0];
  numberList[1] = " Second:" + numberList[1];
  numberList[2] = " Third:" + numberList[2];
  numberList[3] = " Fourth:" + numberList[3];
  numberList[4] = " Fiftht:" + numberList[4];
  return numberList;
  }

function calculateVolume(w, l, h) {
  // TODO: given a room's width, length, and height
  // write a function that returns the volume
  var w = 3;
  var l = 4;
  var h = 2;
  var volume = w * l * h;
  return volume;
}

function isOdd(n) {
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)
  var number = 3;
  var remainder = number % 2;
  if (remainder > 0){
    return "it is odd";}else{
    return "It is even";
  }
}

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)
  var salePrice = 5.99;
  var discount = salePrice * saleAmount;
  return discount;
}

function getSalePrices(threeOriginalPrices) {
  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
  var priceList = [1.00, 2.00, 3.00];
  priceList[0] = priceList[0] * saleAmount;
  priceList[1] = priceList[1] * saleAmount;
  priceList[2] = priceList[2] * saleAmount;
  return priceList;
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter() {
  counter++;
  showCounter();
  return counter;
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
