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

person.greet();
