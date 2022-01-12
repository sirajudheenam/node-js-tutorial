import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
// Writeable Stream
// Readable Stream
// Duplex Stream

console.log(__dirname);
console.log(__filename);

// Reable Stream
const readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf-8');
const writeStream = fs.createWriteStream(__dirname + '/write-me.txt');

// // replaced by pipe version below.
// // Listen for data event of readStream, then do something with it.
// readStream.on('data', (chunk) => {
//   console.log(('data chunk received').toUpperCase());
//   console.log(chunk);
//   // Writable Stream
//   writeStream.write(chunk);
// });

// Pipes - pipes will read and write stream simultaneously
readStream.pipe(writeStream);
