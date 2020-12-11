const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome to my page</h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username' /><button type='submit'>Create</button></form>"
    );
    res.write("</body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>List of users</title></head>");
    res.write("<body><ul>");
    res.write("<li>User 1</li>");
    res.write("<li>User 2</li>");
    res.write("<li>User 3</li>");
    res.write("</ul></body>");
    res.write("</html>");

    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => body.push(chunk));

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];

      console.log(user);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>404: Page Not Found</title></head>");
  res.write("<body><h1>404: Page Not Found</h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);
