const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = require('./article_schema')

const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name is tooo short'
    }
  },
  studentNumber : Number,
  grade : Number,
  state : String, 
  language : String,
  articles : [ArticleSchema],
  articleBlog : [{
    type: Schema.Types.ObjectId, ref: 'articleBlog'
  }]
});

// tell Mongoose about our virtual field
StudentSchema.virtual('articleCount').get(function() {
  return this.articles.length
})

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
