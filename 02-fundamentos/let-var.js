/*jshint esversion: 6 */

var exVar = 'Wolverine';

if (true) {
    var exVar = 'Magneto';
}

console.log(exVar);

let exLet = 'Wolverine';

// Crea la variable en un contexto distinto
if (true) {
    let exLet = 'Magneto';
}

console.log(exLet);

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);

// j no se puede usar fuera del for
for (let j = 0; j <= 5; j++) {
    console.log(`j: ${j}`);
}