// ESM way to export
// Export individually
/*
export const user = function(data) {
  return `${data} is logged in`;
}

export const id = function(id){
  return `${id}`;
}

export const email = function(email){
  return email;
}
*/

const user = function(data) {
  return `${data} is logged in`;
}

const id = function(id){
  return `${id}`;
}

const email = function(email){
  return email;
}

export const userData = { user, id, email }

//CJS Way
// module.exports = {
//   user,
//   id,
//   email
// }.user = user;
// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;
