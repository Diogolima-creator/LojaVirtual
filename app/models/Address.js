const mongoose = require('../../database');

const AddressSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    AllAddress: [{
        typeAddress: {
            type:String,
            require:true,
        },
        cep:{
            type: String,
            require: true,
        },
        city:{
            type: String,
            require: true,
        },
        state:{
            type: String,
            require: true,
        },
        address:{
            type: String,
            require: true,
        },
        adress2:{
            type: String,
            require: true,
        },
        number:{
            type: Number,
            require: true,
        },
        complement:{
            type: String,
            require: true,
        },
        ref:{
            type: String,
            
        }
    }]
});

const Address = mongoose.model('Address',AddressSchema);

module.exports = Address;