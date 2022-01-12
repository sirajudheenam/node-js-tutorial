const assert = require('assert');
const Student = require('../src/student')

describe("validation tests", () => {
  it('name is required', () => {
    const student = new Student({name: undefined})
    const result = student.validateSync()
    const { message } = result.errors.name
    assert(message === 'Name is required')
  })

  it('name must be longer than 2 char', () => {
    const newStudent = new Student({name: 'Em'})
    const newResult = newStudent.validateSync()
    const { message } = newResult.errors.name
    assert(message === 'Name is tooo short')
  })

  it('prevent invalid records from saving', done => {
    const student = new Student({name: 'Em'})
    student.save()
    .catch(validationResult => {
      const { message } = validationResult.errors.name
      assert(message === 'Name is tooo short')
      done()
    })
  })
})