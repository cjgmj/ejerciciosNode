const person = {
  name: "John",
  age: 33,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

hobbies.push("Programming");

console.log(hobbies);
