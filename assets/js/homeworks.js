// first exercise

const age = 18;
const message = "You are an adult";
const messages = "You are a minor";

if (age >= 18) {
    console.log('message :>> ', message);    
}
else {
    console.log('messages :>> ', messages);
}

// second exercise 

const messageses = age >= 18 ? "You are an adult" : "You are a minor";
console.log('messageses :>> ', messageses);

// third exercise

let counter = 0;

for (counter; counter <= 13; counter += 1) {
   console.log("counter :>> ", counter);
}