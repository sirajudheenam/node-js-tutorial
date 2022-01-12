const mongoose = require('mongoose');
// const { deleteOne } = require("../src/student")
mongoose.connect('mongodb://localhost/students_test', 
  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
  .once('open', () => console.log('Connected with MongoDB - {students_test}.'))
  .on('error', (error) => {
    console.warn('An error occured', error);
  })

beforeEach( (done) => {
  // mongoose.connection.collections.students.drop();
  // done()
  const { students, articleBlogs, comments } = mongoose.connection.collections
  
  // comments.drop()
  // students.drop()
  // articleBlogs.drop()
  // done()
  // students.drop( () => {  
  //   articleBlogs.drop( () => {
  //     comments.drop( () => {
  //       done()
  //     })
  //   })
  // })
  Promise.all([students.drop(), articleBlogs.drop(), comments.drop()])
    .then( () => done())

})



// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));