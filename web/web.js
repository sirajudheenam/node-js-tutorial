import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let readStream = '';
const server = http.createServer( (req, res) => {
  console.log(`URL: ${req.url}`);
  // res.writeHead(200, {'Content-Type' : 'text/html'});
  // readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
  // readStream.pipe(res);

  switch (req.url) {
    case '/home':
    case '/':
      res.writeHead(200, {'Content-Type' : 'text/html'});
      readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
      readStream.pipe(res);
      break;
    case '/about':
      res.writeHead(200, {'Content-Type' : 'text/html'});
      readStream = fs.createReadStream(__dirname + '/about.html', 'utf-8');
      readStream.pipe(res);
      break;
    case '/person':
    case '/person.json':
      res.writeHead(200, {'Content-Type' : 'application/json'});
        const person = {
          name: 'Alex',
          email: 'alex.email.co',
          job: 'Designer'
        };
        res.end(JSON.stringify(person));
        break;
    case '/lorem.txt':
    case '/lorem':
      res.writeHead(200, {'Content-Type' : 'text/plain'});
      readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf-8');
      readStream.pipe(res);
      break;
    default:
      res.writeHead(404, {'Content-Type' : 'text/html'});
      readStream = fs.createReadStream(__dirname + '/404.html', 'utf-8');
      readStream.pipe(res);
  }
  
});
const PORT = 3020;
console.log(`Node is running on PORT ${PORT}`);
server.listen(PORT, '127.0.0.1');