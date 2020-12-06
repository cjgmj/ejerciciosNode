const person = {
  name: "John",
  age: 33,
  //   greet: function () {
  //     console.log("Hi, I am " + this.name);
  //   },
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = { ...person };

console.log(person);

const hobbies = ["Sports", "Cooking"];

// Diferentes formas de copiar un array
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies]; // Spread: obtienes los elementos del array o del objeto

console.log(copiedArray);

const toArray = (...args) => args; // Rest: une los parámetros recibidos en un array

console.log(toArray(1, 2, 3));
