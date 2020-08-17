const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/OK") {
        console.log(" 'Ok' request being processed...")
        res.writeHead(200);
        res.end();
    } else if (req.url === "/Bad-Request") {
        console.log("This is a bad request")
        res.writeHead(400);
        res.end();
    } else if (req.url === "/Created") {
        console.log("Created")
        res.writeHead(201);
        res.end();
    } else if (req.url === "/Forbidden") {
        console.log("Access is forbidden");
        res.writeHead(403);
        res.end();
    } else if (req.url === "/Found") {
        console.log("Found")
        res.writeHead(302);
        res.end();
    } else if (req.url === "/Gateway-Timeout") {
        console.log('Gateway Timeout');
        res.writeHead(504);
        res.end();
    } else if (req.url === "/Internal-Server-Error") {
        console.log('Internal server error')
        res.writeHead(500);
        res.end();
    } else if (req.url === "/Moved-Permanently") {
        console.log("Moved Permanently"); 
        res.writeHead(301);
        res.end();
    } else if (req.url === "/Unauthorized") {
        console.log('Unauthorized');
        res.writeHead(401);
        res.end();
    }
    else {
        console.log("404 Not Found")
        res.writeHead(404);
        res.end();
    }
  })
  .listen(3000, function () {
    console.log("Listening on port 3000!");
  });
