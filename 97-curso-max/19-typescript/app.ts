const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
// Con la ! indica que la propiedad no será nula
const buttonElement = document.querySelector('button')!;

const numResults: number[] = [];
const textResults: string[] = [];

function add(num1: number | string, num2: number | string) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
}

// console.log(add(1, 6));

// Con tipos da error aunque compila
// Se puede configurar para que no compile si tiene errores
// console.log(add('1', '6'));

function printResult(resultObj: { val: number; timestamp: Date }) {
  console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;

  // Con el + delante convierte de string a number
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);

  // console.log(result);
  // console.log(stringResult);

  numResults.push(result as number);
  textResults.push(stringResult as string);

  printResult({ val: result as number, timestamp: new Date() });
  console.log(numResults, textResults);
});
