require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const routes = require('./routes');
require("./database");

app.use(express.json());
app.use(routes);

app.listen("3000", ()=>{console.log(`listening onn 3000 🚀`);});