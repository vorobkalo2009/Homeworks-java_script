const user = {
  firstName: "Illia",
  lastName: "Vorobkalo",
  age: 14,
  location: {
    country: "Ukraine",
    city: "Mykolaiv",
  },
}

const  { firstName, lastName, age, country, city } = user;

const message = ' ${lastName} ${firstName} is ${age} years old. He live in ${city}, ${country}';
console.log('message :>> ', message);

