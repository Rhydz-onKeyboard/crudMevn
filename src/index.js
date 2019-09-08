const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

//Setting

app.set('port', process.env.PORT || 3000);


//Middlewares

app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api/tasks', require('./routes/tasks'));

//Static files

app.use(express.static(__dirname + '/public'));

//Server i lisening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});