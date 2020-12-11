const http = require("http");
const fs = require("fs");

// const server = http.createServer((request, response) => {
//   //   console.log(request);
//   console.log(request.url, request.method, request.headers);
//   //   process.exit(); // Termina el proceso por lo que para el servidor

//   // Devolver respuesta
//   response.setHeader("Content-Type", "text/html");
//   response.write("<html>");
//   response.write("<head><title>My First Page</title></head>");
//   response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
//   response.write("</head>");

//   response.end(); // Es necesario indicar que hemos terminado de crear la respuesta
// });

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    // El name del input es el nombre con el que se añadirá a la petición
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");

    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);

      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Esto funciona para las cadenas de texto
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        // El código 302 es el estándar para las redirecciones
        res.writeHead(302, {
          Location: "/",
        });

        // Lo anterior es igual
        // res.statusCode = 302;
        // res.setHeader('Location', '/');

        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);
