const assert = require('assert');
const Student = require('../src/student')

describe("Delete the records", () => {
  let tishya;
  beforeEach( (done) => {
    tishya = new Student({name: 'Tishya'})
    tishya.save()
    .then( () => done())
  })

  it("delete by id", done => {
    Student.findByIdAndDelete({ _id: tishya._id})
    .then(() => Student.findOne({name: 'Tishya'}))
    .then((student) => {
      assert(student === null )
      done()
    })
  })

  it("find one and delete", done => {
    Student.findOneAndDelete({ name: 'Tishya'})
    .then(() => Student.findOne({_id: tishya._id}))
    .then((student) => {
      assert(student === null )
      done()
    })
  })

  it("delete Tishya", done => {
    Student.deleteOne({_id: tishya._id})
    .then(() => Student.findOne({ name: 'Tishya'}))
    .then((student) => {
      assert(student === null )
      done()
    })
  })

});