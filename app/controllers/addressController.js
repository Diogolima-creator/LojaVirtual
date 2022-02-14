const express = require('express');
const Address = require('../models/Address');
const router = express.Router();
const User = require('../models/User');

router.post('/regaddress', async(req,res) => {

    const { _id } = req.body;
    try{

        if(!await User.findOne({_id}))
            return res.status(400).send({ error: 'User not exists'})

        const adress = await Address.create(req.body);

        return res.send({
            adress,
            status: 'ok'
        })

    }catch(err){
        return res.status(400).send({ error: err.message})
    }
});


router.post('/listaddress', async(req,res) => {
    
    const { _id } = req.body;
                                    
    try{

        if(await Address.findOne({_id})){
            const adress = await Address.findOne({_id});
            return res.send({
            adress,
            status: 'ok'
        })}


       

    }catch(err){
        return res.status(400).send({ error: err.message})
    }
})

router.post('/createaddress', async(req,res) => {

    const { _id, AllAddr } = req.body;

    try{
        if(await Address.findOne({ _id })){
            const add = await Address.findOne({ _id })
            if(add.AllAddress.length < 3){
            console.log(AllAddr);
            add.AllAddress.push(AllAddr);

            await add.save();

            return res.send({
                add,
                status: 'ok'
            })
            }else{
                return res.status(400).send({ error: 'Só pode ser Criado até 3 Endereços'})
            }
        }
    }catch(err){
        return res.status(400).send({ error: err.message})
    }
})

router.post('/deladdress', async(req,res) => {

    const { _id , pos} = req.body;
    
    try{
        if(await Address.findOne({ _id })){
            const del = await Address.findOne({ _id })
            
            del.AllAddress.splice(pos,1)
            console.log(del.AllAddress)
            await del.save();
            
            return res.send({
                del,
                status:'ok'
            })
        }else{
            return res.status(400).send({ error: 'Nao achamo id'})
        }
    }catch(err){
        return res.status(400).send({ error: err.message})
    }
})

module.exports = app => app.use('/', router);