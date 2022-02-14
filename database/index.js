const mongoose = require('mongoose')

mongoose.connect('mongodb://loja-virtual-bice.vercel.app/lojavirtual')

mongoose.Promise = global.Promise;

module.exports = mongoose;
