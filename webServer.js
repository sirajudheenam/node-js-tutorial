import http from 'http';

console.log(http.METHODS);
console.log(http..STATUS_CODES);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain', 'Charset': 'utf-8'});
  res.end('Node Web Server is running...');
});
console.log('PORT 3000');
server.listen(3020, '127.0.0.1')
