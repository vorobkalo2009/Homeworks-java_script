function makeStringFromArray(array, delimiter) {
  const string = array.join(delimiter);
  return string; 
 }
    
const string = makeStringFromArray(["js", "is", "cool"], " ");
console.log("string :>> ", string);

function checkFruit(fruit) {
    if (fruit.includes("Apples")) {
        return true;
    } else {
        return false;
    }
}

const fruits = checkFruit(["Apples", "Banana", "Orange"])
console.log('fruits :>> ', fruits);