var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(1, 6));
// Con tipos da error aunque compila
// Se puede configurar para que no compile si tiene errores
// console.log(add('1', '6'));
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    // Con el + delante convierte de string a number
    var result = add(+num1, +num2);
    console.log(result);
});
