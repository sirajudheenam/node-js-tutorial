import { setTimeout, } from 'timers/promises';

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.error(new Error('Whoops, something bad happened'));

let count = 0;
const timer = setInterval( () => {
  count += 2;
  console.log(`${count} seconds has passed`);
  if (count > 6) {
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);


// // Normal funtion
// function orange() {
//   console.log('Orange')
// }
//
// orange();

// // function expression
// let red = function(){
//   // return 'red';
//   return 'red'
// }
//
// //Function taking another function as an argument
// function whichColor(func) {
//   return func();
// }

// helper();
// console.log(whichColor(red));
