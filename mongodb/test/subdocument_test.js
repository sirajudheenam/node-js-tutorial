const assert = require('assert');
const Student = require('../src/student')

describe("Subdocument ", () => { 
  it('Creating a subdocument', done => {
    const oliver = new Student({
      name: 'Oliver',
      articles: [{title: 'JavaScript'}]
    })
    oliver.save()
    .then(() => {
      Student.findOne({name: 'Oliver'})
      .then(student => {
        console.log(student.articles[0].title)
        assert(student.articles[0].title === 'JavaScript')
        done()
      })
    })
  })

  it('Adding a new record', done => {
    const mandela = new Student({
      name: 'Mandela',
      articles: []
    })
    mandela.save()
    .then(() => Student.findOne({name: 'Mandela'}))
    .then(student => {
      student.articles.push({title: 'MongoDB'})
      return student.save()
    })
    .then(() => Student.findOne({name: 'Mandela'}))
    .then(student => {
      console.log(student.articles[0].title)
      assert(student.articles[0].title === 'MongoDB')
      done()
    })
  })

  it('Remove a record', done => {
    const tata = new Student({ name: 'Tata', articles: [{title: 'React Native'}] })
    tata.save()
    .then(() => Student.findOne({name: 'Tata'}))
    .then(student => {
      student.articles[0].remove()
      return student.save()
    })
    .then(() => Student.findOne({name: 'Tata'}))
    .then(student => {
      assert(student.articles.length === 0)
      done()
    })
  })


})