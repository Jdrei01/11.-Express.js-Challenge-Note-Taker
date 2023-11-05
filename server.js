const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/index.html' ))
})

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/notes.html' ))
})

app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/db/db.json' ))
})

app.post('/api/notes', function(req, res) {
    console.log('req -> ', req);

})


app.listen(3001, () => console.log('App now running on http://127.0.0.1:3001'));

