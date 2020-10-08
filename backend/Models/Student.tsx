const mongooseStudent = require('mongoose');
const Schema = mongooseStudent.Schema;

const studentSchemaPrime = new Schema({
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