const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
const User = require('../models/User');
const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params,authConfig.secret,{
        expiresIn: 86400,
    });
};

router.post('/register', async(req,res) => {

    const { email,cpf } = req.body;

    try{

        if(await User.findOne({email}))
            return res.status(400).send({ error: 'User already exists'})
        
        if(await User.findOne({cpf}))
            return res.status(400).send({ error: 'User already exists'})
        
        const user = await User.create(req.body);
        
        user.password = undefined;

        return res.send({
            user,
            token:generateToken({id:user.id}),
            status: 'ok'
        });

    }catch(err){
        return res.status(400).send({ error: err.message})
    }
});

router.post('/authenticate', async (req,res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'User not found'});

    if(!await bcrypt.compare(password,user.password))
        return res.status(400).send({ error: 'Invalid password'});
    
    user.password = undefined;

    res.send({
    user,
    token: generateToken({ id: user.id }),
    status: 'ok'
    });
});

router.post('/list', async (req,res) => {
    const { _id } = req.body;

    const user = await User.findOne({ _id });
    
    res.send({
        user,
        status:'ok'
    });
});

router.post('/update', async (req,res) => {
    const { email,name,lastname,rg,gender,tel,cel,datenasc } = req.body;

    const user = await User.findOne({ email });

    console.log(email,name,lastname,rg,gender,tel,cel,datenasc);

    await User.findByIdAndUpdate(user._id, {
        '$set': {
            name: name,
            lastname: lastname,
            rg: rg,
            gender:gender,
            tel:tel,
            cel:cel,
        }
    });

    res.send({
        user,
        status:'ok'
    });
});
module.exports = app => app.use('/', router);