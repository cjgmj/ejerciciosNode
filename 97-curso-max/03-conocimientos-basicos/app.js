const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log(request);
  console.log(request.url, request.method, request.headers);
  //   process.exit(); // Termina el proceso por lo que para el servidor

  // Devolver respuesta
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>My First Page</title></head>");
  response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  response.write("</head>");

  response.end(); // Es necesario indicar que hemos terminado de crear la respuesta
});

server.listen(3000);
