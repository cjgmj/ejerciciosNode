import fs from 'fs';

// Se puede exportar directamente en la declaración añadiendo 'export' al principio
export const resHandler = (req, res, next) => {
  fs.readFile('my-page.html', 'utf8', (err, data) => {
    res.send(data);
  });
};

// Para exportar varias cosas se hace sin el 'default'
// Default solo se añade cuando se exporta una única cosa
// export default resHandler;
