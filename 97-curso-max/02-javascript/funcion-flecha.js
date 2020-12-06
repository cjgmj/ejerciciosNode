const name = "John";
let age = 33;
const hasHobbies = true;

// name="John Doe"; // No se puede cambiar valor al ser constante
age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => a + b;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
