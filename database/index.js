const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lojavirtual')

mongoose.Promise = global.Promise;

module.exports = mongoose;