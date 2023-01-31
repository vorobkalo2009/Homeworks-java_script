function makeStringFromArray(array, delimetr) {
    console.log('array :>> ', array.toString());
}

const string = makeStringFromArray("Js", "is", "cool");

function checkFruit(fruit) {
    if (fruit.includes("Apples")) {
        return true;
    } else {
        return false;
    }
}

const fruits = checkFruit(["Apples", "Banana", "Orange"])
console.log('fruits :>> ', fruits);