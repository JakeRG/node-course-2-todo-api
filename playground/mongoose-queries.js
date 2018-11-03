const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//let id = '5bddac54ff2be719a4fb34a711';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


let goodUserId = '5bdd97dd3737f404b88b311b';
let badUserId = '5bdd97dd3737f404b88b311b11';

let findUser = (id) => {
    if (ObjectID.isValid(id)) {
        User.findById(id).then((user) => {
            if (!user) {
                return console.log('Id not found');
            }
            console.log('User By Id', user);
        }, (e) => {
            console.log(e);
        }).catch((e) => console.log(e));
    } else {
        console.log('ID not valid. ID:', id);
    }
};

findUser(goodUserId);
findUser(badUserId);