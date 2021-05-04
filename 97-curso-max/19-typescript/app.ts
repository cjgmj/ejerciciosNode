const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
// Con la ! indica que la propiedad no será nula
const buttonElement = document.querySelector('button')!;

function add(num1: number, num2: number) {
  return num1 + num2;
}

// console.log(add(1, 6));

// Con tipos da error aunque compila
// Se puede configurar para que no compile si tiene errores
// console.log(add('1', '6'));

buttonElement.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  // Con el + delante convierte de string a number
  const result = add(+num1, +num2);

  console.log(result);
});
