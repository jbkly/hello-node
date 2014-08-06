var http = require('http'),
    fs = require('fs');

function start() {

  fs.readFile('./index.html', 'utf8', function(err, html) {
    if (err) { throw err; }
    function onRequest(request, response) {
      console.log('Request received.')
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(html);
      response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
  });
}

// To make this function available as a module
exports.start = start;
