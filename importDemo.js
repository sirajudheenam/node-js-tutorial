// CJS way of importing
// Change package.json
// {.....{ "type" : "commonjs" }}
// const log = require('./log.cjs');
// console.log(log.info('Information'))
// console.log(log.warning('Warning'))
// console.log(log.error('Error'))

// // ESM way import
// // Change package.json
// // {.....{ "type" : "module" }}
// import { user, id, email } from './user.js';
// console.log(user('Alex'))
// console.log(id('7892359845843578'))
// console.log(email('alex@abc.com'))


import { userData } from './user.js';
console.log(userData.user('Alex'))
console.log(userData.id('7892359845843578'))
console.log(userData.email('alex@abc.com'))
