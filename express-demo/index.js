require('dotenv').config();
const express = require('express');

const helmet = require('helmet')
const morgan = require('morgan');

const logger = require('./logger');
const courses = require('./routes/courses');

const app = express();

if(app.get('env') === 'development'){
  console.log('Logging Enabled');
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use(logger);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/api/courses', courses);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log(`http://localhost:${port}`));
