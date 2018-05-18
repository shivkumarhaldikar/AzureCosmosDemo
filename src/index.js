const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const root = './';
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(root,'dist')));

app.get('*', (req, res) => {
    res.sendFile('dist/index.html',{root});
} )
