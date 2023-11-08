// Import express, node, and file system
const express = require('express');
const app = express();
const path = require('path');
const uuid = require('./helpers/uuid')

const db = require('./db/db.json')
const {readAndAppend} = require('./helpers/fsUtils');
const PORT =process.env.PORT||3001

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static public folder
app.use(express.static(path.join(__dirname, 'public')))

// index.html public folder
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/index.html' ))
})

// notes.html public folder
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/notes.html' ))
})

// db.json folder 
app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/db/db.json' ))
})

// 
app.post('/api/notes', function(req, res) {
    const newNote = {title: req.body.title, text: req.body.text, id: uuid()}
    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
})

// listen for connections on specfied ports
app.listen(PORT, () => console.log('App now running on http://127.0.0.1:3001'));

