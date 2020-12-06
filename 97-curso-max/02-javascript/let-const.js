const name = "John";
let age = 33;
const hasHobbies = true;

// name="John Doe"; // No se puede cambiar valor al ser constante
age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
