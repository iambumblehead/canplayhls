const express = require('express'),
      http = require('http'),
      port = 4346,
      app = express();

app.use('/', express.static(__dirname + '/'));

http.createServer(app).listen(port);

console.log(`[...] localhost:${port}/`);
