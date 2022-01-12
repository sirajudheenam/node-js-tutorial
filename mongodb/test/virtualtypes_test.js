const assert = require('assert');
const Student = require('../src/student')

describe("Virtual Types", () => { 
  it('article counts', done => {
    const sahar = new Student({ name: 'Sahar Shahin', articles: [{title: 'First Title'}]})
    sahar.save()
    .then(() => Student.findOne({name: 'Sahar Shahin'}))
    .then(student => {
      assert(student.articleCount === 1)
      done()
    })
  })
})