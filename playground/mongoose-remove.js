const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// }, (e) => {
//     console.log(e);
// });

Todo.findByIdAndRemove('5bddc33487e6e518c5a218d5').then((todo) => {
    console.log(todo);
});