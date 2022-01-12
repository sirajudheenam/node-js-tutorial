import fs from 'fs';

// Read a file
// UTF-8 character encoding
// Synchronus method; Other code will be executed only after this line is done;
const jsonContent = fs.readFileSync('package.json', 'utf-8');

// Write package.json content to write.json
fs.writeFileSync('write.json', jsonContent)


// READ-WRITE FILE- Asynchronus code;
fs.readFile('package.json', 'utf-8', function(error, data) {
  fs.writeFile('write.json', data, function(error) {
    console.log(`ERROR:${error}`);
  });
  console.log(data);
});
console.log("This will be displayed first");

//DELETE A FILE
fs.unlink('write.json', function(error) {
  if (error) {
    console.log(error);
  } else { console.log("write.json is deleted") }
});

// REMOVE Directory
fs.rmdirSync('./new-folder');

// CREATE Directory
fs.mkdir('new-folder',  (error) => {
  console.log(`FOLDER CREATION: ${error}`);
  fs.readFile('package.json', 'utf-8', (error, data) => {
    console.log(`FILE READING: ${error}`);
    fs.writeFile('./new-folder/write.json', data, (error) => {
        console.log(`FILE WRITING:${error}`);
      });
  });
});

// Remove the file first then remove directory
fs.unlink('./new-folder/write.json', () => {
  fs.rmdir('./new-folder', (error) => {
    console.log(error);
  });
});
