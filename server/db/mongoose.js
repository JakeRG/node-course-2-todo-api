const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_51jjzz6h:4ifjhduf0c1rjg3ur1ct8457dv@ds151383.mlab.com:51383/heroku_51jjzz6h' || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true});

module.exports = {mongoose};