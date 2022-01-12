const mongoose = require('mongoose');
const Student = require('../src/student');
const ArticleBlog = require('../src/articleBlog');
const Comment = require('../src/comment');
const assert = require('assert');

describe('Association Test', () => {
  let saba, articleBlog, comment;

  beforeEach( done => {
    saba = new Student({name: 'Saba'});
    articleBlog = new ArticleBlog({title: 'MongoDB', content: 'Mongoose and Mocha'});
    comment = new Comment({content: 'Well done!'});

    saba.articleBlog.push(articleBlog);
    articleBlog.comments.push(comment);
    comment.students = saba;

    // saba.save()
    // console.log(saba)
    // articleBlog.save()
    // comment.save()
    // done()

    Promise.all([saba.save(), articleBlog.save(), comment.save()])
    .then( () => done())

  })

  it('Associate student with articleBlog', done => {
    Student.findOne({name: 'Saba'})
    .populate('articleBlog')
    .then(student => {
      assert(student.articleBlog[0].content === 'Mongoose and Mocha')
      done()
    })
  })

  it('Nested populate', done => {
    Student.findOne({name: 'Saba'})
    .populate({
      path: 'articleBlog',
      populate: {
        path: 'comments',
        model: 'comment',
        populate: {
          path: 'students',
          model: 'student'
        }
      }
    })
    .then(student => {
      assert(student.name === 'Saba')
      assert(student.articleBlog[0].title === 'MongoDB')
      assert(student.articleBlog[0].comments[0].content === 'Well done!')
      assert(student.articleBlog[0].comments[0].students.name === 'Saba')
      done()
    })
  })

})

