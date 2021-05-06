// Para ejecutar un archivo el comando es deno run nombreArchivo.extension

const text = ' This is a test - and it should be stored in a file!';

const encoder = new TextEncoder();

const data = encoder.encode(text);

// Para dar permisos de escritura en el comando de ejecución
// debemos añadir --allow-write
// Se puede especificar el archivo que puede escribie
// Ejemplo: deno run --allow-write=message.txt write-file.ts
Deno.writeFile('message.txt', data)
  .then(() => console.log('Wrote to file!'))
  .catch((err) => console.log(err));
