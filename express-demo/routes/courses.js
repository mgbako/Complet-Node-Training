const express = require('express');
const Joi = require('joi');
const router = express.Router();

const courses = [
  {id: 1, name: 'Angular'},
  {id: 2, name: 'Reactjs'},
  {id: 3, name: 'Vuejs'}
]

router.get('/', (req, res) => {
  res.status(200).json(courses);
});

router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) {
    return res.status(404).send('Course not found');
  }

  res.status(200).json(course);
});

router.post('/', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  }

  const { error } = validateCourse(req.body);

  if(error){
    console.log(error.details);
    return res.status(403).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.json(course);
});

router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) {
    return res.status(404).send('Course not found');
  }

  const { error } = validateCourse(req.body)

  if(error){
    console.log(error.details);
    return res.status(403).send(error.details[0].message);
  }

  course.name = req.body.name;
  res.status(200).json(course);
});

router.delete('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course)
    return res.status(404).send('Course not found');
  console.log(course);

  let index = courses.indexOf(course);
  courses.splice(index, 1);

  return res.status(200).send('Course Deleted');
});

function validateCourse(course){
  const schema = {
    name: Joi.string().min(3).required()
  }

  return Joi.validate(course, schema);
}

module.exports = router;