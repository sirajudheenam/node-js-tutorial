const assert = require('assert');
const Student = require('../src/student')

describe("Reading records from DB", () => {
  let wafiqah, sahar;

  beforeEach( (done) => {
    wafiqah = new Student({name: 'Wafiqah', country: 'USA'})
    sahar = new Student({name: 'Sahar', country: 'USA'})
    wafiqah.save()
    sahar.save()
    .then( () => done())
  })

  it("Find All from USA", async () => {
    const students = await Student.find({ country: 'USA' })
    assert( students.length > 1 );
  })

  it("finds one of the Wafiqah", async () => {
    const students = await Student.findOne({_id: wafiqah._id});
    assert(students.name === 'Wafiqah')
  })
});