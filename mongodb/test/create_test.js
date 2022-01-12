const assert = require('assert');
const Student = require('../src/student')

describe("Create the first data", () => {
  it("Save the student", (done) => {
    const femida = new Student({ name: "Femida" });
    femida.save()
    .then( () => {
      assert(!femida.isNew)
      done()
    })
  })
});