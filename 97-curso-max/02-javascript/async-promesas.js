// const fetchData = (callback) => setTimeout(() => callback("Done!"), 1500);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData(); // Podemos devolver otra promesa hacerlo más legible
    })
    .then((text2) => console.log(text2));
}, 2000);

console.log("Hello!");
console.log("Hi!");
