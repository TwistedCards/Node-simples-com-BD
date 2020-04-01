var express = require('express');

var main = express();

main.set('view engine', 'ejs');

main.set('views', './main/views');

module.exports = main;