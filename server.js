const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Init o App
const app = express();
app.use(express.json());
app.use(cors());

// Init DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);
requireDir('./src/models');

// First rota
app.use('/', require("./src/routes"));

app.listen(3001);