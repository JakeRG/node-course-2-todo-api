//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bdd897787e6e518c5a209b9")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Update name, increase age
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("5bda2c6887e6e518c5a206e5")
    // }, {
    //     $set: {
    //         name: 'Eve'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }, {returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});