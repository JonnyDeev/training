//Import http module

import http from "http";
//default host: localhost
const port = 3000;

//localhost:3000

//create listener to start server and wait for requests
const requestListener = (req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });

  res.end("Hello! World!");
};

//create actual server with the listener
const server = http.createServer(requestListener);

//start server
server.listen(port, () => {
  console.log("Server is running on port: ", port);
});
