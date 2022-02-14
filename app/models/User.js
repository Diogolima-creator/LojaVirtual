const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        require: true,
    },
    lastname:{
        type: String,
        require: true,
    },
    cpf:{
        type: Number,
        require: true,
    },
    rg:{
        type: Number,
        require: true,
    },
    datenasc:{
        type: Date,
        require: true,
    },
    gender:{
        type: String,
        require: true,
    },
    meet:{
        type: String,
        require: true,
    },
    tel: {
        type: Number,
        
    },
    cel: {
        type: Number,
        require: true,
    }
});

UserSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;