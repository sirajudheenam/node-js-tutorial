const assert = require('assert');
const Student = require('../src/student')

describe("Update the records", () => {
  let yusra, yusra2, femida, farzana, jason, julia;
  
  beforeEach( (done) => {
    yusra = new Student({name: 'Yusra', studentNumber: 2500, state: 'WB', language: 'Bengali'})
    yusra.save()
    yusra2 = new Student({name: 'Yusra', studentNumber: 3500, state: 'Berlin', language: 'Bengali'})
    yusra2.save()
    femida = new Student({name: 'Femida', studentNumber: 1100, state: 'Berlin', language: 'Bengali'})
    femida.save()
    farzana = new Student({name: 'Farzana', studentNumber: 1200, state: 'TN', language: 'Bengali'})
    farzana.save()
    jason = new Student({name: 'Jason', studentNumber: 9990, articleCount: 5, grade: 10 })
    jason.save()
    julia =  new Student({
      name: 'Julia', 
      grade: 10,
      articles: [
        {title: 'First Article'}, 
        {title: 'Second Article'},
      ]
    })
    julia.save()
    .then( () => done())
  })

  it('set and save', done => {
    yusra.set('name', 'Yusra Aftab')
    yusra.save()
    .then(() => Student.find())
    .then(students => {
      assert(students[0].name === 'Yusra Aftab')
    })
    done()
  })

  it('Update one of the yusra', (done) => {
    const student = Student.updateOne({ name: 'Yusra' }, { studentNumber: 1800 })
    const res = Student.find({})
    done()
    assert(res[0].studentNumber === 1800)
  })

  it('Update language of many records', done => {
    const student = Student.updateMany({ state: 'Berlin' }, { langauge: 'German' });
    const _femida = Student.find({name: 'Femida'});
    const _yusra_germany = Student.find({name: 'Yusra', state: 'Berlin'})
    done()
    assert(_femida[0].language === 'German' && _yusra_germany[0].language === 'German');
  })


  it('update studentNumber on multiple records', done => {
    const student = Student.updateMany({ name: 'Yusra' }, { studentNumber: 3000 })   
    const res = Student.find({})
    done()
    assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000 )
  })

  it('update grades based on article count', done => {

    const student1 = Student.updateOne({name: 'Julia'}, { $mul: { grade: julia.articleCount } })
    .then(Student.findOne({name: 'Julia'}) )
    .then(student => {
      assert(student.grade === 20)
    })
    done()
  })
});