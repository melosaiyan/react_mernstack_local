const mongooseStudent = require('mongoose');
const Schema = mongooseStudent.Schema;

let studentSchemaPrime = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  }
}, {
    collection: 'students'
  })

module.exports = mongooseStudent.model('Student', studentSchemaPrime)