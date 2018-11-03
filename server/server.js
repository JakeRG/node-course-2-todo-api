const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST single todo
app.post('/todos', (req, res) => {
    // console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET all todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET single todo by id
app.get('/todos/:id', (req, res) => {
    let {id} = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        
        res.send({todo});           
    }, (e) => {
        res.status(400).send();
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    // Get the id
    let {id} = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        
        res.send({todo});           
    }, (e) => {
        res.status(400).send();
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};