//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Importing the comments.json file
const comments = require('./comments.json');

//Use the body
