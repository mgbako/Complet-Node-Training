const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tages: [String],
  isPublised: Boolean,
  date: Date
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses(){
  return await Course
  .find()
}