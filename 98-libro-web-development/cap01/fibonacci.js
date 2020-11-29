const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const urlP = url.parse(req.url, true);
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (urlP.query.n) {
      fibonacciAsync(parseInt(urlP.query.n), (fibo) => {
        res.end(`Fibonacci + ${urlP.query.n} = ${fibo}`);
      });
    } else {
      res.end(
        "USAGE: http://localhost:8080?n=## where ## is the Fibonacci number desired"
      );
    }
  })
  .listen(8080, "localhost");
console.log("Server running at http://localhost:8080");

const fibonacciAsync = (n, done) => {
  if (n === 0) {
    done(0);
  } else if (n === 1 || n === 2) {
    done(1);
  } else if (n === 3) {
    done(2);
  } else {
    process.nextTick(() => {
      fibonacciAsync(n - 1, (val1) => {
        process.nextTick(() => {
          fibonacciAsync(n - 2, (val2) => {
            done(val1 + val2);
          });
        });
      });
    });
  }
};
